import { google } from 'googleapis'

console.log('Project CWD:', process.cwd())

const folderID = process.env.GOOGLE_DRIVE_FOLDER_ID || ''

// Need Sheets + Drive scopes for finding/creating spreadsheets and writing values
const SCOPES = ['https://www.googleapis.com/auth/spreadsheets', 'https://www.googleapis.com/auth/drive']

type DataRow = Record<string, string | number | null | undefined>

// ---------------------------
// Google Auth helper
// ---------------------------
async function getAuthClient() {
  const credentials = JSON.parse(process.env.GOOGLE_SERVICE_ACCOUNT_JSON || '{}')
  const auth = new google.auth.GoogleAuth({
    credentials,
    scopes: SCOPES,
  })
  return auth
}

// ---------------------------
// Drive: find spreadsheet by name
// ---------------------------
async function findSpreadsheetByName(auth: any, title: string): Promise<{ id: string; name: string } | null> {
  const drive = google.drive({ version: 'v3', auth })
  const q = `mimeType='application/vnd.google-apps.spreadsheet' and name='${title.replace(
    "'",
    "\\'"
  )}' and trashed=false and '${folderID}' in parents`
  const res = await drive.files.list({
    q,
    fields: 'files(id, name)',
    pageSize: 1,
  })
  const files = res.data.files ?? []
  if (files.length > 0) {
    return { id: files[0].id!, name: files[0].name! }
  }
  return null
}

// ---------------------------
// Sheets: create spreadsheet
// ---------------------------
async function createSpreadsheet(auth: any, title: string): Promise<string> {
  // 1. Create the spreadsheet using the Sheets API
  const sheets = google.sheets({ version: 'v4', auth })
  const res = await sheets.spreadsheets.create({
    requestBody: {
      properties: { title },
      sheets: [{ properties: { title: 'Sheet1' } }],
    },
  })
  const id = res.data.spreadsheetId
  if (!id) throw new Error('Failed to create spreadsheet')
  console.log(`Created spreadsheet "${title}" (${id})`)

  // 2. Move the new spreadsheet to the shared folder using the Drive API
  const drive = google.drive({ version: 'v3', auth })

  // Get the file's current parents to remove them
  const file = await drive.files.get({ fileId: id, fields: 'parents' })
  const previousParents = file.data.parents?.join(',') ?? 'root'

  await drive.files.update({
    fileId: id,
    addParents: folderID,
    removeParents: previousParents, // Remove from service account's root
    fields: 'id, parents', // Fields to return (optional)
  })
  console.log(`Moved spreadsheet ${id} to shared folder ${folderID}`)

  return id
}

// ---------------------------
// Ensure spreadsheet exists (find or create)
// ---------------------------
async function ensureSpreadsheet(title: string): Promise<string> {
  const auth = await getAuthClient()
  // Try env override first
  // const envId = process.env.SPREADSHEET_ID
  // if (envId && envId.trim() !== '' && !envId.includes('<PUT')) {
  //   console.log(`Using SPREADSHEET_ID from env: ${envId}`)
  //   return envId
  // }

  const found = await findSpreadsheetByName(auth, title)
  if (found) {
    console.log(`Found spreadsheet "${title}" (${found.id})`)
    return found.id
  }
  return await createSpreadsheet(auth, title)
}

// ---------------------------
// Ensure a tab (sheet) exists for given month name
// ---------------------------
async function ensureMonthlySheet(spreadsheetId: string, monthName: string): Promise<number> {
  const auth = await getAuthClient()
  const sheets = google.sheets({ version: 'v4', auth })

  const getRes = await sheets.spreadsheets.get({
    spreadsheetId,
    includeGridData: false,
  })

  const sheetsMeta = getRes.data.sheets ?? []
  const existing = sheetsMeta.find((s) => s.properties?.title === monthName)
  if (existing && typeof existing.properties?.sheetId === 'number') {
    console.log(`Tab "${monthName}" exists (sheetId=${existing.properties.sheetId}).`)
    return existing.properties.sheetId
  }

  console.log(`Creating tab "${monthName}"...`)
  const batchRes = await sheets.spreadsheets.batchUpdate({
    spreadsheetId,
    requestBody: {
      requests: [
        {
          addSheet: {
            properties: {
              title: monthName,
              // you can set more properties here (gridProperties, hidden, etc.)
            },
          },
        },
      ],
    },
  })

  const replies = batchRes.data.replies ?? []
  const addSheetReply = replies[0]?.addSheet
  const newSheetId = addSheetReply?.properties?.sheetId
  if (typeof newSheetId !== 'number') throw new Error('Failed to create new month sheet')
  console.log(`Created tab "${monthName}" (sheetId=${newSheetId}).`)
  return newSheetId
}

// ---------------------------
// Replace sheet/tab data (clear then write headers+rows)
// ---------------------------
async function replaceSheetData(spreadsheetId: string, sheetName: string, dataArray: DataRow[]) {
  if (!Array.isArray(dataArray) || dataArray.length === 0) {
    console.log('No data provided to write — skipping.')
    return
  }

  const auth = await getAuthClient()
  const sheets = google.sheets({ version: 'v4', auth })

  // Clear previous contents in columns A:Z (adjust if more columns needed)
  await sheets.spreadsheets.values.clear({
    spreadsheetId,
    range: `${sheetName}!A:Z`,
  })
  console.log(`Cleared existing data on "${sheetName}"`)

  // Headers derived from first object's keys (stable order)
  const headers = Object.keys(dataArray[0])
  const rows = [headers, ...dataArray.map((r) => headers.map((h) => r[h] ?? ''))]

  await sheets.spreadsheets.values.update({
    spreadsheetId,
    range: `${sheetName}!A1`,
    valueInputOption: 'USER_ENTERED',
    requestBody: {
      values: rows,
    },
  })

  console.log(`Wrote ${dataArray.length} rows (with headers) to "${sheetName}"`)
}

// ---------------------------
// Main runner
// ---------------------------
export async function startProcessingGoogleSheet(data: DataRow[]): Promise<void> {
  const title = `PCS-Daily-Quotes-Report-${new Date().toLocaleString('en-US', { year: 'numeric' })}`
  console.log('Google Sheet Title:', title)
  // current month name, e.g. "November"
  const monthName = new Date().toLocaleString('en-US', { month: 'long' })
  console.log('Processing month:', monthName)

  try {
    const spreadsheetId = await ensureSpreadsheet(title)
    await ensureMonthlySheet(spreadsheetId, monthName)
    await replaceSheetData(spreadsheetId, monthName, data)
    console.log(`✅ Updated "${title}" -> "${monthName}" successfully.`)
  } catch (err) {
    console.error('Error in main runner:', err)
    throw err
  }
}

export default startProcessingGoogleSheet
