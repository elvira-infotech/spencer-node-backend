// import { Dropbox, files } from 'dropbox'
// import { AppError } from '../middlewares/errorHandler'
// import path from 'path'

// const dbx = new Dropbox({
//   accessToken: process.env.DROPBOX_ACCESS_TOKEN,
// })

// const getShareableLinks = async (images: files.FileMetadata[]): Promise<{ path: string; url: string }[]> => {
//   if (images.length === 0) {
//     return []
//   }

//   const urlPromises = images.map(async (image) => {
//     try {
//       const sharedLink = await dbx.sharingCreateSharedLinkWithSettings({
//         path: image.path_lower!,
//         settings: { requested_visibility: { '.tag': 'public' } },
//       })
//       return { path: image.path_lower!, url: sharedLink.result.url }
//     } catch (error: any) {
//       if (error.error?.error?.['.tag'] === 'shared_link_already_exists') {
//         const existingLinks = await dbx.sharingListSharedLinks({
//           path: image.path_lower!,
//           direct_only: true,
//         })
//         if (existingLinks.result.links.length > 0) {
//           return { path: image.path_lower!, url: existingLinks.result.links[0].url }
//         }
//       }
//       throw error
//     }
//   })

//   let imageUrls = await Promise.all(urlPromises)

//   imageUrls = imageUrls.map((item) => ({
//     ...item,
//     url: item.url.replace('www.dropbox.com', 'dl.dropboxusercontent.com').replace('?dl=0', '?raw=1'),
//   }))

//   return imageUrls
// }

// export interface FolderWithImages {
//   folderName: string
//   folderPath: string
//   images: {
//     path: string
//     url: string
//   }[]
// }

// /**
//  * Gets shareable links for a list of image files.
//  * @param images - An array of image file metadata from Dropbox.
//  * @returns A promise that resolves to an array of objects, each with a path and a public URL.
//  */
// const getImagesGroupedByFolder = async (rootPath: string): Promise<FolderWithImages[]> => {
//   try {
//     // 1. Get a flat list of all files and folders recursively
//     const response = await dbx.filesListFolder({ path: rootPath, recursive: true })

//     // 2. Group images by their parent folder path
//     const imagesByFolder = new Map<string, files.FileMetadata[]>()
//     for (const entry of response.result.entries) {
//       if (entry['.tag'] === 'file' && /\.(jpg|jpeg|png|webp)$/i.test(entry.name)) {
//         const folderPath = path.dirname(entry.path_lower!)
//         if (!imagesByFolder.has(folderPath)) {
//           imagesByFolder.set(folderPath, [])
//         }
//         imagesByFolder.get(folderPath)!.push(entry as files.FileMetadata)
//       }
//     }

//     // 3. Process each folder to get shareable links for its images
//     const processedFolders: FolderWithImages[] = []
//     for (const [folderPath, images] of imagesByFolder.entries()) {
//       const imageUrls = await getShareableLinks(images)
//       processedFolders.push({
//         folderName: path.basename(folderPath),
//         folderPath: folderPath,
//         images: imageUrls,
//       })
//     }

//     return processedFolders
//   } catch (error: any) {
//     console.error('Error communicating with Dropbox API:', error)
//     throw new AppError(`Dropbox API Error: ${error.error?.error_summary || error.message}`, 500)
//   }
// }

// export const DropboxService = {
//   getImagesGroupedByFolder,
// }

import { Dropbox } from 'dropbox'
import path from 'path'

const dbx = new Dropbox({
  accessToken: process.env.DROPBOX_ACCESS_TOKEN,
})

/**
 * Cheaply lists all image file paths recursively from a root path.
 * This does NOT generate shareable links.
 * @param rootPath - The path to start the search.
 * @returns A promise that resolves to a map of folder paths to the images they contain.
 */
const listImageFiles = async (rootPath: string) => {
  const response = await dbx.filesListFolder({ path: rootPath, recursive: true })

  const imagesByFolder = new Map<string, { path: string; name: string }[]>()
  for (const entry of response.result.entries) {
    if (entry['.tag'] === 'file' && /\.(jpg|jpeg|png|webp)$/i.test(entry.name)) {
      const folderPath = path.dirname(entry.path_lower!)
      if (!imagesByFolder.has(folderPath)) {
        imagesByFolder.set(folderPath, [])
      }
      imagesByFolder.get(folderPath)!.push({ path: entry.path_lower!, name: entry.name })
    }
  }
  return imagesByFolder
}

/**
 * Gets shareable links ONLY for a specific list of file paths.
 * @param paths - An array of file paths to get links for.
 * @returns A promise that resolves to a map of [path, url].
 */
// const getShareableLinksForPaths = async (paths: string[]): Promise<Map<string, string>> => {
//   const linkMap = new Map<string, string>();
//   if (paths.length === 0) return linkMap;

//   // This is the same link-generation logic as before, just more targeted
//   for (const imagePath of paths) {
//       try {
//         const sharedLink = await dbx.sharingCreateSharedLinkWithSettings({
//             path: imagePath,
//             settings: { requested_visibility: { '.tag': 'public' }},
//         });
//         const rawUrl = sharedLink.result.url.replace('www.dropbox.com', 'dl.dropboxusercontent.com').replace('?dl=0', '');
//         linkMap.set(imagePath, rawUrl);
//       } catch (error: any) {
//         if (error.error?.error?.['.tag'] === 'shared_link_already_exists') {
//             const existingLinks = await dbx.sharingListSharedLinks({ path: imagePath, direct_only: true });
//             if (existingLinks.result.links.length > 0) {
//                 const rawUrl = existingLinks.result.links[0].url.replace('www.dropbox.com', 'dl.dropboxusercontent.com').replace('?dl=0', '');
//                 linkMap.set(imagePath, rawUrl);
//             }
//         } else {
//             console.error(`Could not get shareable link for ${imagePath}:`, error);
//         }
//       }
//   }
//   return linkMap;
// };

const getShareableLinksForPaths = async (paths: string[]): Promise<Map<string, string>> => {
  const linkMap = new Map<string, string>()
  if (paths.length === 0) return linkMap

  const BATCH_SIZE = 25 // Process 25 images at a time
  console.log(`Processing ${paths.length} links in batches of ${BATCH_SIZE}...`)

  for (let i = 0; i < paths.length; i += BATCH_SIZE) {
    const batch = paths.slice(i, i + BATCH_SIZE)
    console.log(`- Processing batch ${i / BATCH_SIZE + 1}...`)

    const linkPromises = batch.map(async (imagePath) => {
      try {
        const sharedLink = await dbx.sharingCreateSharedLinkWithSettings({
          path: imagePath,
          settings: { requested_visibility: { '.tag': 'public' } },
        })
        const rawUrl = sharedLink.result.url.replace('www.dropbox.com', 'dl.dropboxusercontent.com').replace('?dl=0', '')
        return { path: imagePath, url: rawUrl }
      } catch (error: any) {
        if (error.error?.error?.['.tag'] === 'shared_link_already_exists') {
          const existingLinks = await dbx.sharingListSharedLinks({ path: imagePath, direct_only: true })
          if (existingLinks.result.links.length > 0) {
            const rawUrl = existingLinks.result.links[0].url.replace('www.dropbox.com', 'dl.dropboxusercontent.com').replace('?dl=0', '')
            return { path: imagePath, url: rawUrl }
          }
        }
        console.error(`Could not get shareable link for ${imagePath}.`)
        return null
      }
    })

    // Execute the current batch in parallel
    const results = await Promise.all(linkPromises)

    // Populate the map from the batch results
    for (const result of results) {
      if (result) {
        linkMap.set(result.path, result.url)
      }
    }
  }

  return linkMap
}

export const DropboxService = {
  listImageFiles,
  getShareableLinksForPaths,
}
