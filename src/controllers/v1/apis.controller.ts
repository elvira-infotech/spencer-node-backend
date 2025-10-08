// controllers/v1/apis.controller.ts
import { NextFunction, Request, Response } from 'express'
import { Controller } from '../../decorators/controller'
import { Route, HttpMethods } from '../../decorators/route'
import { AsyncHandler } from '../../decorators/asyncHandler'
import { AppError } from '../../middlewares/errorHandler'
import { TwilioService } from '../../services/twilio.service'
import { sendSuccess } from '../../utils/response.handler'

@Controller('/apis/v1')
export class ApiController {
  // No need to write the try-catch block here
  // The AsyncHandler decorator will take care of it
  @AsyncHandler()
  @Route('get', '/daily-images')
  async getDailyImages(req: Request, res: Response, next: NextFunction) {
    // Logic to call the ImagePickerService will go here
    res.status(200).json({ message: 'This will return three images.' })
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
    try {
      // Add your auth.middleware here to protect this route
      // Logic to call DropboxService and ImagePickerService
      res.status(200).json({ message: 'Image update process triggered successfully.' })
    } catch (error) {
      next(error)
    }
  }
}
