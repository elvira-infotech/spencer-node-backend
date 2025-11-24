// controllers/v1/apis.controller.ts
import { NextFunction, Request, Response } from 'express'
import { Controller } from '../../decorators/controller'
import { Route } from '../../decorators/route'
import { AsyncHandler } from '../../decorators/asyncHandler'
import { AppError } from '../../middlewares/errorHandler'
import { TwilioService } from '../../services/twilio.service'
import { sendSuccess } from '../../utils/response.handler'
import { DropboxService } from '../../services/dropbox.service'
import { ImagePickerService } from '../../services/image.picker.service'
import MessagingResponse from 'twilio/lib/twiml/MessagingResponse'
import { TwilioMessageStatus } from '@prisma/client'
import prisma from '../../configs/db'

type ITwilioStatusCallbackBody = {
  ApiVersion: string
  MessageStatus: 'sent' | 'delivered' | 'undelivered' | 'failed' | any
  SmsSid: string
  SmsStatus: 'sent' | 'delivered' | 'undelivered' | 'failed' | any
  To: string
  From: string
  MessageSid: string
  AccountSid: string
  SentAs: string
}

@Controller('/apis/v1')
export class ApiController {
  // No need to write the try-catch block here
  // The AsyncHandler decorator will take care of it
  @AsyncHandler()
  @Route('get', '/daily-images')
  async getDailyImages(req: Request, res: Response, next: NextFunction) {
    // Logic to call the ImagePickerService will go here

    // const folderName = req.params.folderName || 'A'
    // DropboxService

    // sendSuccess(res, 'Fetched daily images successfully.', { images: [] }, 200)

    // Get the folder name from the query string (e.g., ?folder=MyFolder)
    const { folder } = req.query

    // Validate that the folder name was provided
    if (!folder) {
      throw new AppError('A "folder" query parameter is required.', 400)
    }

    // Call the service to fetch the images for the specified folder
    const images = await ImagePickerService.getTodaysPicksByFolder(folder as string)

    if (images.length === 0) {
      throw new AppError(`No daily images found for folder "${folder}".`, 400)
    }

    // Send the successful response
    sendSuccess(res, `Fetched daily images for folder "${folder}" successfully.`, { images })
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
    const messageSid = await TwilioService.sendMsg(to, imageUrl)

    // Send a standardized success response
    sendSuccess(res, 'Message has been successfully sent.', { messageSid }, 200)
  }

  @AsyncHandler()
  @Route('get', '/getMonthlyReport')
  async getMonthlyReport(req: Request, res: Response, next: NextFunction) {
    const validMonths = ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December']
    const month = req.query.month as string
    const year = parseInt(req.query.year as string, 10)

    if (!month || isNaN(year)) {
      throw new AppError('Both "month" (e.g. January) and "year" (e.g. 2025) query parameters are required.', 400)
    }

    if (!validMonths.includes(month)) {
      throw new AppError(`Invalid month provided: "${month}". Please provide a valid month (e.g., January).`, 400)
    }

    const report = await TwilioService.getMonthlyMessagingReport(month, year)
    sendSuccess(res, `Monthly report for ${month} ${year} successfully fetched.`, report)
  }

  @AsyncHandler()
  @Route('get', '/cron/update-images')
  async runUpdateJob(req: Request, res: Response, next: NextFunction) {
    console.log('Cron job triggered! Fetching images from Dropbox...')

    // Call the service to get all image URLs
    const images = await DropboxService.listImageFiles('/LimberLife/PCS-Daily-Quotes-Source')

    await ImagePickerService.syncDatabaseWithDropbox(images)

    await ImagePickerService.pickDailyImages()

    console.log(`Found ${images.size} images in Dropbox.`)

    await TwilioService.getMonthlyMessagingReport(
      new Date().toLocaleString('default', { month: 'long' }),
      Number.parseInt(new Date().toLocaleString('default', { year: 'numeric' }), 10)
    )

    sendSuccess(res, 'Image list successfully fetched from Dropbox.', { folderCount: images.size, images: Array.from(images.values()) })
  }

  @AsyncHandler()
  @Route('post', '/twilio/status-callback')
  async updateMessageStatus(req: Request, res: Response, next: NextFunction) {
    // Validate the incoming request
    if (!TwilioService.validateWebhookSignature(req)) {
      res.status(400).send(new MessagingResponse().toString())
    }

    const data = req.body as ITwilioStatusCallbackBody

    if (data.MessageSid && data.MessageStatus && data.SmsStatus) {
      const msgId = data.MessageSid
      const statusStr = data.MessageStatus.toLowerCase() || data.SmsStatus.toLowerCase()

      if (statusStr === 'sent') {
        const imageId = await prisma.logs.findFirst({
          where: {
            msgId: msgId,
          },
          select: {
            imageId: true,
          },
        })

        const image = await prisma.image.findUnique({
          where: {
            id: imageId?.imageId,
          },
          select: {
            url: true,
          },
        })

        await TwilioService.addToHistory(image?.url)

        await TwilioService.updateMessageLog(msgId, TwilioMessageStatus.SENT)
      } else if (statusStr === 'undelivered') {
        await TwilioService.updateMessageLog(msgId, TwilioMessageStatus.UNDELIVERED)
      } else if (statusStr === 'delivered') {
        await TwilioService.updateMessageLog(msgId, TwilioMessageStatus.DELIVERED)
      } else if (statusStr === 'failed') {
        await TwilioService.updateMessageLog(msgId, TwilioMessageStatus.FAILED)
      }
    }

    res.status(200).send(new MessagingResponse().toString())
  }
}
