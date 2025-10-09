import { Dropbox, files } from 'dropbox'
import { AppError } from '../middlewares/errorHandler'
import path from 'path'

const dbx = new Dropbox({
  accessToken: process.env.DROPBOX_ACCESS_TOKEN,
})

const getShareableLinks = async (images: files.FileMetadata[]): Promise<{ path: string; url: string }[]> => {
  if (images.length === 0) {
    return []
  }

  const urlPromises = images.map(async (image) => {
    try {
      const sharedLink = await dbx.sharingCreateSharedLinkWithSettings({
        path: image.path_lower!,
        settings: { requested_visibility: { '.tag': 'public' } },
      })
      return { path: image.path_lower!, url: sharedLink.result.url }
    } catch (error: any) {
      if (error.error?.error?.['.tag'] === 'shared_link_already_exists') {
        const existingLinks = await dbx.sharingListSharedLinks({
          path: image.path_lower!,
          direct_only: true,
        })
        if (existingLinks.result.links.length > 0) {
          return { path: image.path_lower!, url: existingLinks.result.links[0].url }
        }
      }
      throw error
    }
  })

  let imageUrls = await Promise.all(urlPromises)

  imageUrls = imageUrls.map((item) => ({
    ...item,
    url: item.url.replace('www.dropbox.com', 'dl.dropboxusercontent.com').replace('?dl=0', '?raw=1'),
  }))

  return imageUrls
}

export interface FolderWithImages {
  folderName: string
  folderPath: string
  images: {
    path: string
    url: string
  }[]
}

/**
 * Gets shareable links for a list of image files.
 * @param images - An array of image file metadata from Dropbox.
 * @returns A promise that resolves to an array of objects, each with a path and a public URL.
 */
const getImagesGroupedByFolder = async (rootPath: string): Promise<FolderWithImages[]> => {
  try {
    // 1. Get a flat list of all files and folders recursively
    const response = await dbx.filesListFolder({ path: rootPath, recursive: true })

    // 2. Group images by their parent folder path
    const imagesByFolder = new Map<string, files.FileMetadata[]>()
    for (const entry of response.result.entries) {
      if (entry['.tag'] === 'file' && /\.(jpg|jpeg|png|webp)$/i.test(entry.name)) {
        const folderPath = path.dirname(entry.path_lower!)
        if (!imagesByFolder.has(folderPath)) {
          imagesByFolder.set(folderPath, [])
        }
        imagesByFolder.get(folderPath)!.push(entry as files.FileMetadata)
      }
    }

    // 3. Process each folder to get shareable links for its images
    const processedFolders: FolderWithImages[] = []
    for (const [folderPath, images] of imagesByFolder.entries()) {
      const imageUrls = await getShareableLinks(images)
      processedFolders.push({
        folderName: path.basename(folderPath),
        folderPath: folderPath,
        images: imageUrls,
      })
    }

    return processedFolders
  } catch (error: any) {
    console.error('Error communicating with Dropbox API:', error)
    throw new AppError(`Dropbox API Error: ${error.error?.error_summary || error.message}`, 500)
  }
}

export const DropboxService = {
  getImagesGroupedByFolder,
}
