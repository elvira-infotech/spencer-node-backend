import { Response } from 'express'

/**
 * Sends a standardized success response.
 * @param res - The Express response object.
 * @param message - A descriptive message for the result.
 * @param data - The payload to be sent in the 'data' key.
 * @param statusCode - The HTTP status code, defaults to 200.
 */
export const sendSuccess = (res: Response, message: string, data: object, statusCode: number = 200) => {
  res.status(statusCode).json({
    success: true,
    msg: message,
    data: data,
  })
}
