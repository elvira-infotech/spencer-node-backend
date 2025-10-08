import { Request, Response, NextFunction } from 'express'

// AppError class remains the same
export class AppError extends Error {
  statusCode: number

  constructor(message: string, statusCode: number) {
    super(message)
    this.statusCode = statusCode
  }
}

export const errorHandler = (err: Error, req: Request, res: Response, next: NextFunction) => {
  // Log the error for debugging
  console.error(err)

  const statusCode = err instanceof AppError ? err.statusCode : 500
  const message = err.message || 'An unexpected internal server error occurred.'

  // The new standardized error response format
  res.status(statusCode).json({
    success: false,
    msg: message,
  })
}
