import { Dropbox } from 'dropbox'
import path from 'path'

const dbx = new Dropbox({
  clientId: process.env.DROPBOX_APP_KEY,
  clientSecret: process.env.DROPBOX_APP_SECRET,
  refreshToken: process.env.DROPBOX_REFRESH_TOKEN,
})

/**
 * Cheaply lists all image file paths recursively from a root path.
 * This does NOT generate shareable links.
 * @param rootPath - The path to start the search.
 * @returns A promise that resolves to a map of folder paths to the images they contain.
 */
const listImageFiles = async (rootPath: string) => {
  try {
    const rootList = await dbx.filesListFolder({ path: '' }) // empty string = app root or account root depending on app
    console.log(
      'Root entries:',
      rootList.result.entries.map((e) => ({ name: e.name, path_lower: e.path_lower, tag: e['.tag'] }))
    )
  } catch (err) {
    console.error('list root error', err)
  }

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
