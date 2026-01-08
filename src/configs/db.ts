import { PrismaClient } from '../prisma/generated/client'
import { PrismaNeon } from '@prisma/adapter-neon'

const adapter = new PrismaNeon({
  connectionString: process.env.DATABASE_URL!,
  max: 20,
  idleTimeoutMillis: 30000,
  connectionTimeoutMillis: 2000,
})

// This creates a single, reusable instance of the PrismaClient.
const prisma = new PrismaClient({
  adapter,
})

export default prisma
