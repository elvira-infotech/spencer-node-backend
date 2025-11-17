import twilio from 'twilio'
import { AppError } from '../middlewares/errorHandler'
import prisma from '../configs/db'
import startProcessingGoogleSheet from './googleSheets.service'
import { TwilioMessageStatus } from '@prisma/client'

// Initialize the Twilio client
let twilioClient: twilio.Twilio
const twilioAccountSid = process.env.TWILIO_ACCOUNT_SID
const twilioAuthToken = process.env.TWILIO_AUTH_TOKEN
// console.log('Twilio Account SID:', twilioAccountSid) // Debugging line
// console.log('Twilio Auth Token:', twilioAuthToken) // Debugging line

if (!twilioAccountSid || !twilioAuthToken) {
  console.error('CRITICAL ERROR: Twilio credentials (SID or Auth Token) are not set in environment variables.')
} else {
  twilioClient = twilio(twilioAccountSid, twilioAuthToken)
}

/**
 * Sends an MMS (a message with an image) to a specified phone number.
 * @param to - The recipient's phone number in E.164 format (e.g., +14155552671).
 * @param imageUrl - The publicly accessible URL of the image to send.
 * @returns The SID (unique identifier) of the created message.
 */
const sendMsg = async (to: string, imageUrl: string): Promise<string> => {
  if (!twilioClient) {
    throw new AppError('Twilio client is not initialized. Check server credentials.', 500)
  }

  const twilioPhoneNumber = process.env.TWILIO_PHONE_NUMBER
  if (!twilioPhoneNumber) {
    throw new AppError('TWILIO_PHONE_NUMBER is not set in environment variables.', 500)
  }

  try {
    // Validate media URL
    if (!/^https:\/\/.+\..+/.test(imageUrl)) {
      throw new AppError('Media URL must be a valid HTTPS URL.', 400)
    }

    const message = await twilioClient.messages.create({
      body: `Here is your daily quote!`, // Optional: you can customize this message
      from: twilioPhoneNumber,
      to: to,
      mediaUrl: [imageUrl], // The image to be sent
      shortenUrls: true,
      statusCallback: process.env.TWILIO_STATUS_CALLBACK_URL,
    })

    console.log(`Message sent successfully to ${to}. Message SID: ${message.sid}`)
    createMessageLog('Message Sent', message.sid, imageUrl)
    return message.sid
  } catch (error: any) {
    // Catch potential errors from Twilio (e.g., invalid phone number)
    console.error(`Error sending message via Twilio: ${error.message}`)
    throw new AppError(`Failed to send message: ${error.message}`, 500)
  }
}

const createMessageLog = async (action: string, msgId: string, imageUrl?: string) => {
  const image = await prisma.image.findFirst({
    where: {
      url: imageUrl || '',
    },
    select: {
      id: true,
    },
  })
  if (image) {
    // Implementation for adding message log
    const logEntry = await prisma.logs.create({
      data: {
        action: 'Message Sent',
        msgId: msgId,
        imageId: image.id,
        status: TwilioMessageStatus.SENT,
      },
    })

    console.log('Log entry created:', JSON.stringify(logEntry, null, 2)) // Debugging line to print logEntry)
  }
}

const updateMessageLog = async (msgId: string, status: TwilioMessageStatus) => {
  const logEntry = await prisma.logs.updateMany({
    where: {
      msgId: msgId,
    },
    data: {
      status: status,
    },
  })

  console.log('Log entry updated:', JSON.stringify(logEntry, null, 2)) // Debugging line to print logEntry)
}

const addToHistory = async (imageUrl?: string) => {
  const imageWithHistory = await prisma.image.findFirst({
    where: {
      url: imageUrl || '',
    },
    select: {
      id: true,
      histories: {
        where: {
          month: new Date().toLocaleString('default', { month: 'long' }),
          year: new Date().getFullYear(),
        },
      },
    },
  })

  if (imageWithHistory) {
    if (imageWithHistory.histories.length > 0) {
      // Update existing history record
      await prisma.history.update({
        where: {
          id: imageWithHistory.histories[0].id,
        },
        data: {
          count: {
            increment: 1,
          },
        },
      })
    } else {
      // Create new history record
      await prisma.history.create({
        data: {
          imageId: imageWithHistory.id,
          count: 1,
          month: new Date().toLocaleString('default', { month: 'long' }),
          year: new Date().getFullYear(),
        },
      })
    }
  }
}

const deleteOldHistory = async (monthsToKeep: number) => {
  const result = await prisma.history.deleteMany({
    where: {
      createdAt: {
        lt: new Date(new Date().setMonth(new Date().getMonth() - monthsToKeep)), // Delete records older than 6 months
      },
    },
  })

  console.log(`Deleted ${result.count} old history records.`)
}

const getMonthlyMessagingReport = async (month: string, year: number) => {
  const report = await prisma.history.findMany({
    where: {
      month: month, // full month name, e.g., "January"
      year: year,
    },
    select: {
      image: {
        select: {
          url: true,
          dropboxPath: true,
          folder: {
            select: {
              name: true,
            },
          },
        },
      },
      count: true,
    },
    orderBy: {
      count: 'desc',
    },
  })

  const formattedReport = report.map((entry, i) => ({
    RANK: i + 1,
    MONTH: month,
    YEAR: year,
    THEME: entry.image.folder.name,
    URL: entry.image.url,
    FILE_PATH: entry.image.dropboxPath,
    FILE_NAME: entry.image.url.split('/').pop()?.split('?')[0],
    SEND_TOTAL: entry.count,
  }))

  await startProcessingGoogleSheet(formattedReport)

  return formattedReport
}

const validateWebhookSignature = (req: any): boolean => {
  if (!twilioClient) {
    console.error('Twilio client is not initialized. Cannot validate webhook signature.')
    return false
  }

  const twilioSignature = req.headers['x-twilio-signature']
  const url = `${process.env.TWILIO_STATUS_CALLBACK_URL}` // The full URL of the webhook endpoint
  const params = req.body

  return twilio.validateRequest(process.env.TWILIO_AUTH_TOKEN || '', twilioSignature, url, params)
}

export const TwilioService = {
  sendMsg,
  getMonthlyMessagingReport,
  addToHistory,
  updateMessageLog,
  validateWebhookSignature,
}
