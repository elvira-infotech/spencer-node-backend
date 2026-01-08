import { PrismaClient } from '../prisma/generated/client'

// This creates a single, reusable instance of the PrismaClient.
const prisma = new PrismaClient({
  log: ['query', 'info', 'warn', 'error'],
  accelerateUrl: process.env.DATABASE_URL,
})

export default prisma
