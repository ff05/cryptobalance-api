const mongoose = require('mongoose')

// Use native promises
mongoose.Promise = global.Promise

// Connect to MongoDB
const MONGODB_URI = process.env.MONGODB_URI || 'mongodb://localhost/cryptobalance'
mongoose.set('debug', true)
mongoose.connect(MONGODB_URI, { useMongoClient: true })

// Monitor DB connection
const db = mongoose.connection
db.on('error', console.error.bind(console, 'connection error:'))
db.once('open', () => {
  console.log('Succesfully connected to MongoDB')
})

module.exports = mongoose
