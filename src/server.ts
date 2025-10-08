// dotenv needs to be the first import to load env variables
import dotenv from 'dotenv'
dotenv.config()
// Import other necessary modules
import app from './app'

// Get the port from environment variables, with a default of 8080
const PORT = process.env.PORT || 58642

// Start the server
app.listen(PORT, () => {
  console.log(`🚀 Server is running on http://localhost:${PORT}`)
  console.log('Press CTRL+C to stop the server.')
})
