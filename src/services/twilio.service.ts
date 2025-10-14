import twilio from 'twilio'
import { AppError } from '../middlewares/errorHandler'

// Initialize the Twilio client
let twilioClient: twilio.Twilio
try {
  const twilioAccountSid = process.env.TWILIO_ACCOUNT_SID
  const twilioAuthToken = process.env.TWILIO_AUTH_TOKEN
  console.log('Twilio Account SID:', twilioAccountSid) // Debugging line
  console.log('Twilio Auth Token:', twilioAuthToken) // Debugging line
  twilioClient = twilio(twilioAccountSid, twilioAuthToken)
} catch (error) {
  console.error('Twilio credentials not found in environment variables.')
  // In a real app, you might handle this more gracefully
}

/**
 * Sends an MMS (a message with an image) to a specified phone number.
 * @param to - The recipient's phone number in E.164 format (e.g., +14155552671).
 * @param imageUrl - The publicly accessible URL of the image to send.
 * @returns The SID (unique identifier) of the created message.
 */
const sendMms = async (to: string, imageUrl: string): Promise<string> => {
  if (!twilioClient) {
    throw new AppError('Twilio client is not initialized. Check server credentials.', 500)
  }

  const twilioPhoneNumber = process.env.TWILIO_PHONE_NUMBER
  if (!twilioPhoneNumber) {
    throw new AppError('TWILIO_PHONE_NUMBER is not set in environment variables.', 500)
  }

  try {
    const message = await twilioClient.messages.create({
      body: 'Here is your daily image!', // Optional: you can customize this message
      from: twilioPhoneNumber,
      to: to,
      mediaUrl: [imageUrl], // The image to be sent
    })

    console.log(`MMS sent successfully to ${to}. Message SID: ${message.sid}`)
    return message.sid
  } catch (error: any) {
    // Catch potential errors from Twilio (e.g., invalid phone number)
    console.error(`Error sending MMS via Twilio: ${error.message}`)
    throw new AppError(`Failed to send MMS: ${error.message}`, 500)
  }
}

export const TwilioService = {
  sendMms,
}
