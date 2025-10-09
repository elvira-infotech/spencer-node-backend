// controllers/v1/apis.controller.ts
import { NextFunction, Request, Response } from 'express'
import { Controller } from '../../decorators/controller'
import { Route } from '../../decorators/route'
import { AsyncHandler } from '../../decorators/asyncHandler'
import { AppError } from '../../middlewares/errorHandler'
import { TwilioService } from '../../services/twilio.service'
import { sendSuccess } from '../../utils/response.handler'
import { DropboxService } from '../../services/dropbox.service'

@Controller('/apis/v1')
export class ApiController {
  // No need to write the try-catch block here
  // The AsyncHandler decorator will take care of it
  @AsyncHandler()
  @Route('get', '/daily-images')
  async getDailyImages(req: Request, res: Response, next: NextFunction) {
    // Logic to call the ImagePickerService will go here
    sendSuccess(res, 'Fetched daily images successfully.', { images: [] }, 200)
  }

  @AsyncHandler()
  @Route('post', '/send-sms')
  async sendSms(req: Request, res: Response, next: NextFunction) {
    const { to, imageUrl } = req.body

    // Validate the incoming request payload
    if (!to || !imageUrl) {
      throw new AppError('"to" and "imageUrl" are required fields', 400)
    }

    // Call the service to do the actual work
    const messageSid = await TwilioService.sendMms(to, imageUrl)

    // Send a standardized success response
    sendSuccess(res, 'MMS has been successfully sent.', { messageSid }, 200)
  }

  @AsyncHandler()
  @Route('post', '/cron/update-images')
  async runUpdateJob(req: Request, res: Response, next: NextFunction) {
    console.log('Cron job triggered! Fetching images from Dropbox...')

    const folderName = req.body.folderName

    if (!folderName) {
      throw new AppError('"folderName" is required in the request body', 400)
    }

    // The path to the folder within your Dropbox app.
    // Make sure this folder exists in your Dropbox account.
    const dropboxFolderPath = `/${folderName}`

    // Call the service to get all image URLs
    const images = await DropboxService.getImagesGroupedByFolder(dropboxFolderPath)

    // Next, you would pass these images to your ImagePickerService
    // await ImagePickerService.updateDatabaseWithImages(images);

    console.log(`Found ${images.length} images in Dropbox.`)

    sendSuccess(res, 'Image list successfully fetched from Dropbox.', { imageCount: images.length, images })
  }
}
