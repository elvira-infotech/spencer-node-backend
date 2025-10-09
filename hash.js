// create-hash.js
const bcrypt = require('bcrypt')

const saltRounds = 10 // A good standard for computational work
const plainTextKey = 'VGhpcyBpcyBhIHZlcnkgc2VjdXJlIGtleSwgdGhhdCB3aWxsIHByb3RlY3QgbXkgYXBpcyBmcm9tIHVuYXV0aG9yaXplZCBhY2Nlc3Mh'

bcrypt.hash(plainTextKey, saltRounds, (err, hash) => {
  if (err) {
    throw err
  }
  console.log(`\nPlain-Text Key: ${plainTextKey}`)
  console.log(`Hashed Key (save this to your .env file): ${hash}\n`)
})
