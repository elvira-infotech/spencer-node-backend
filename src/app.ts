import express, { Request, Response } from 'express'
import cors from 'cors'
import helmet from 'helmet'
import morgan from 'morgan'

import { ApiController } from './controllers/v1/apis.controller'
import { defineRoutes } from './decorators/modules/routes'
import { errorHandler } from './middlewares/errorHandler'
import { authMiddleware } from './middlewares/auth.middleware'

const app = express()

// --- Core Middleware ---
// Enables Cross-Origin Resource Sharing
app.use(cors())
// Sets various security-related HTTP headers
app.use(helmet())
// Parses incoming JSON request bodies
app.use(express.json())
// Logs HTTP requests in the 'dev' format
app.use(morgan('dev'))

// --- Health Check Endpoint ---
// A simple endpoint to verify that the service is running.
app.get('/', (req: Request, res: Response) => {
  res.status(200).json({ msg: 'Welcome to the Spencer API service!' })
})
app.get('/health', (req: Request, res: Response) => {
  res.status(200).json({ msg: 'Server is UP & RUNNING!' })
})

// --- Authentication Middleware ---
app.use(authMiddleware)

// --- Route Registration ---
// This uses your custom decorator system to find and register all routes.
const controllers = [ApiController]
defineRoutes(controllers, app)

// --- Error Handling Middleware ---
app.use(errorHandler)

export default app
