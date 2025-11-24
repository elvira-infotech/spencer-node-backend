import prisma from '../configs/db'
import { AppError } from '../middlewares/errorHandler'
import { nowUtcMinus5 } from '../utils/utils'
import { DropboxService } from './dropbox.service'
import path from 'path'

const _timeout = 30 * 60 * 60 // 30 minutes timeout for long running operations

/**
 * Synchronizes the folder and image structure from Dropbox with the local database.
 * This operation is idempotent: running it multiple times with the same input
 * will not create duplicate entries.
 * @param foldersFromDropbox - An array of folder and image data fetched from Dropbox.
 */
const syncDatabaseWithDropbox = async (imagesByFolder: Map<string, { path: string; name: string }[]>): Promise<void> => {
  try {
    // 1. Get all current paths from Dropbox and DB
    const allDropboxPaths = new Set([...imagesByFolder.values()].flat().map((img) => img.path))
    const existingDbImages = await prisma.image.findMany({ select: { dropboxPath: true } })
    const allDbPaths = new Set(existingDbImages.map((img) => img.dropboxPath))

    // 2. Identify what's new and what's deleted
    const newImagePaths = [...allDropboxPaths].filter((path) => !allDbPaths.has(path))
    const deletedImagePaths = [...allDbPaths].filter((path) => !allDropboxPaths.has(path))

    // 3. Get shareable links ONLY for the new images
    console.log(`Found ${newImagePaths.length} new images to process.`)
    const newImageUrls = await DropboxService.getShareableLinksForPaths(newImagePaths)

    await prisma.$transaction(
      async (tx) => {
        // 4. Delete removed images from the database
        if (deletedImagePaths.length > 0) {
          console.log(`Deleting ${deletedImagePaths.length} removed images.`)
          await tx.image.deleteMany({ where: { dropboxPath: { in: deletedImagePaths } } })
        }

        // 5. Add new folders and new images
        for (const [folderPath, images] of imagesByFolder.entries()) {
          const folderName = path.basename(folderPath)
          const dbFolder = await tx.folder.upsert({
            where: { dropboxPath: folderPath },
            create: { name: folderName, dropboxPath: folderPath },
            update: { name: folderName },
          })

          for (const image of images) {
            if (newImageUrls.has(image.path)) {
              // Only create if it's new
              await tx.image.create({
                data: {
                  dropboxPath: image.path,
                  url: newImageUrls.get(image.path)!,
                  folderId: dbFolder.id,
                  updatedAt: nowUtcMinus5(),
                  createdAt: nowUtcMinus5(),
                },
              })
            }
          }
        }
      },
      { timeout: _timeout } // 1200 seconds timeout for the entire transaction
    )

    console.log('✅ Database successfully synchronized with Dropbox.')
  } catch (error) {
    console.error('Failed to sync database with Dropbox:', error)
    throw new AppError('Database synchronization failed.', 500)
  }
}
/**
 * A utility function to shuffle an array in place.
 * @param array The array to be shuffled.
 */
const shuffleArray = (array: any[]) => {
  for (let i = array.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1))
    ;[array[i], array[j]] = [array[j], array[i]]
  }
}

const pickDailyImages = async (): Promise<void> => {
  try {
    await prisma.$transaction(
      async (tx) => {
        // 1. Clear previous day's picks (unchanged)
        await tx.image.updateMany({
          where: { isTodaysPick: true },
          data: { isTodaysPick: false, updatedAt: nowUtcMinus5() },
        })

        const folders = await tx.folder.findMany({ include: { _count: { select: { images: true } } } })

        for (const folder of folders) {
          const totalImageCount = folder._count.images

          // If a folder has no images, there's nothing to do.
          if (totalImageCount === 0) {
            console.log(`Folder "${folder.name}" is empty. Skipping.`)
            continue
          }

          // Get the pool of images that have not been shown yet.
          let pickPool = await tx.image.findMany({
            where: {
              folderId: folder.id,
              wasShown: false,
            },
          })

          // **RULE 3: If we run out of unique images in a folder that has enough, reset it.**
          // This triggers when, for example, 1 unshown image is left out of 49 total.
          if (pickPool.length < 3 && totalImageCount >= 3) {
            console.log(`Resetting image cycle for folder: ${folder.name}`)

            // Reset wasShown for all images in this folder.
            await tx.image.updateMany({
              where: { folderId: folder.id },
              data: { wasShown: false , updatedAt: nowUtcMinus5()},
            })

            // Re-fetch the full pool of images for this folder.
            pickPool = await tx.image.findMany({
              where: { folderId: folder.id },
            })
          }

          // Now, `pickPool` contains all available images for today.
          shuffleArray(pickPool)

          // Pick up to 3 images. If a folder has only 1 or 2 images, this will select all of them.
          const todaysPicks = pickPool.slice(0, 3)
          const todaysPicksIds = todaysPicks.map((image) => image.id)

          if (todaysPicksIds.length > 0) {
            // Update the chosen images in the database.
            await tx.image.updateMany({
              where: { id: { in: todaysPicksIds } },
              data: {
                isTodaysPick: true,
                wasShown: true,
                updatedAt: nowUtcMinus5(),
              },
            })
          }
        }
      },
      { timeout: _timeout }
    )
    console.log('✅ Daily images have been selected for all folders.')
  } catch (error) {
    console.error('Failed to pick daily images:', error)
    throw new AppError('Failed to select daily images.', 500)
  }
}

const getTodaysPicksByFolder = async (folderName: string) => {
  try {
    const images = await prisma.image.findMany({
      where: {
        isTodaysPick: true,
        folder: {
          name: folderName,
        },
      },
      select: {
        url: true,
        dropboxPath: true,
      },
    })

    // **RULE 2: If the folder contains fewer than 3 images, pad the response.**
    const paddedImages = [...images]
    while (paddedImages.length < 3) {
      paddedImages.push({
        url: '', // Fill with blank URL
        dropboxPath: '', // Fill with blank path
      })
    }

    return paddedImages
  } catch (error) {
    console.error(`Failed to fetch daily picks for folder "${folderName}":`, error)
    throw new AppError('Database query for daily images failed.', 500)
  }
}

export const ImagePickerService = {
  syncDatabaseWithDropbox,
  pickDailyImages,
  getTodaysPicksByFolder,
}
