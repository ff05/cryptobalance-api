const mongoose = require('../config/database')
const { Schema } = mongoose

const coinSchema = new Schema({
  symbol: String,
  amount: Number,
  createdAt: { type: Date, default: Date.now },
  updatedAt: { type: Date, default: Date.now }
})

module.exports = mongoose.model('coins', coinSchema)