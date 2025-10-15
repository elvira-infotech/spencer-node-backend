import prisma from '../configs/db'
import { AppError } from '../middlewares/errorHandler'
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

/**
 * Selects 3 unique images for each folder for the day.
 * Resets the cycle for a folder once all its images have been shown.
 */
const pickDailyImages = async (): Promise<void> => {
  try {
    await prisma.$transaction(
      async (tx) => {
        // 1. First, clear any previous day's picks across all images.
        await tx.image.updateMany({
          where: { isTodaysPick: true },
          data: { isTodaysPick: false },
        })

        // 2. Get all folders from the database.
        const folders = await tx.folder.findMany()

        // 3. Process each folder individually.
        for (const folder of folders) {
          // Find images in this folder that haven't been shown yet.
          let unshownImages = await tx.image.findMany({
            where: {
              folderId: folder.id,
              wasShown: false,
            },
          })

          // If there are fewer than 3 unshown images, reset the cycle for this folder.
          if (unshownImages.length < 3) {
            console.log(`Resetting image cycle for folder: ${folder.name}`)
            // Reset 'wasShown' for all images in this folder.
            await tx.image.updateMany({
              where: { folderId: folder.id },
              data: { wasShown: false },
            })
            // Fetch the refreshed list of all images for this folder.
            unshownImages = await tx.image.findMany({
              where: { folderId: folder.id },
            })
          }

          // If we still don't have enough images, skip this folder.
          if (unshownImages.length < 3) {
            console.warn(`Not enough images in folder "${folder.name}" to pick 3. Skipping.`)
            continue // Move to the next folder
          }

          // 4. Randomly pick 3 images from the available list.
          shuffleArray(unshownImages)
          const todaysPicks = unshownImages.slice(0, 3)
          const todaysPicksIds = todaysPicks.map((image) => image.id)

          // 5. Update the chosen images in the database.
          await tx.image.updateMany({
            where: {
              id: { in: todaysPicksIds },
            },
            data: {
              isTodaysPick: true,
              wasShown: true,
            },
          })
        }
      },
      {
        timeout: _timeout, // 600 seconds timeout for the entire transaction
      }
    )
    console.log('✅ Daily images have been selected for all folders.')
  } catch (error) {
    console.error('Failed to pick daily images:', error)
    throw new AppError('Failed to select daily images.', 500)
  }
}

/**
 * Fetches the 3 daily pick images for a specific folder.
 * @param folderName The name of the folder to retrieve images for.
 * @returns A promise that resolves to an array of the selected images.
 */
const getTodaysPicksByFolder = async (folderName: string) => {
  try {
    const images = await prisma.image.findMany({
      where: {
        // Condition 1: The image must be one of today's picks
        isTodaysPick: true,
        // Condition 2: The image must belong to the folder with the specified name
        folder: {
          name: folderName,
        },
      },
      // Only select the fields the frontend needs to be efficient
      select: {
        url: true,
        dropboxPath: true,
      },
    })
    return images
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
