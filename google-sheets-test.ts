// File: ./debug-google-api.ts
import fs from 'fs'
import path from 'path'
import { google } from 'googleapis'
import dotenv from 'dotenv'

dotenv.config()

// --- CONFIG ---
// Make SURE this path is correct
const KEY_FILE = path.join(process.cwd(), './src/configs/google/spencer-service-account-credentials.json')
const SCOPES = ['https://www.googleapis.com/auth/spreadsheets'] // Only need sheets for this test
const PROJECT_ID_FROM_KEY = 'spencer-477813' // From your key file
const TEST_TITLE = `API PERMISSION TEST - ${new Date().toISOString()}`
// ---

async function getAuthClient() {
  const raw = fs.readFileSync(KEY_FILE, 'utf8')
  const credentials = JSON.parse(raw)

  // Sanity check
  if (credentials.project_id !== PROJECT_ID_FROM_KEY) {
    console.error('FATAL: The key file project_id does not match the expected project!')
    console.error(`Key file says: ${credentials.project_id}`)
    console.error(`We expected: ${PROJECT_ID_FROM_KEY}`)
    process.exit(1)
  }

  console.log(`Authenticating with ${credentials.client_email} for project ${credentials.project_id}...`)
  const auth = new google.auth.GoogleAuth({
    credentials,
    scopes: SCOPES,
  })
  return auth
}

async function runTest() {
  try {
    const auth = await getAuthClient()
    const sheets = google.sheets({ version: 'v4', auth })

    console.log(`Attempting to create a new spreadsheet named: "${TEST_TITLE}"...`)
    const res = await sheets.spreadsheets.create({
      requestBody: {
        properties: { title: TEST_TITLE },
      },
    })

    const id = res.data.spreadsheetId
    console.log('---')
    console.log('✅✅✅ SUCCESS! ✅✅✅')
    console.log(`Successfully created spreadsheet. File ID: ${id}`)
    console.log(`Link: https://docs.google.com/spreadsheets/d/${id}/edit`)
    console.log('---')
    console.log('This proves your service account and API key are working.')
  } catch (err) {
    console.error('---')
    console.error('❌❌❌ TEST FAILED ❌❌❌')
    console.error('The `sheets.spreadsheets.create` call failed with the exact same error.')
    console.error(err)
    console.error('---')
    console.error('This confirms the "Google Sheets API" is not correctly enabled for this project.')
  }
}

runTest()
