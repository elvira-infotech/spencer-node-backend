import { NextFunction, Request, Response } from 'express'
import { AppError } from './errorHandler'
import bcrypt from 'bcrypt'

export const authMiddleware = async (req: Request, res: Response, next: NextFunction) => {
  const plainTextKey = req.headers['x-api-key'] as string
  const hashedKey = process.env.API_KEY_HASH

  if (!plainTextKey || !hashedKey) {
    throw new AppError('Unauthorized: API key is missing', 401)
  }

  // Use bcrypt to securely compare the plain-text key with the stored hash
  const isValid = await bcrypt.compare(plainTextKey, hashedKey)

  if (!isValid) {
    throw new AppError('Unauthorized: Invalid API key', 401)
  }

  // If the key is valid, proceed to the next handler
  next()
}
