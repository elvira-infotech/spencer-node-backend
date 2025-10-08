import { NextFunction, Request, Response } from 'express'

export const AuthMiddleware = (req: Request, res: Response, next: NextFunction) => {
  const xApiKey = req.headers['x-api-key']
  if (xApiKey !== process.env.API_KEY) {
  }
  next()
}
