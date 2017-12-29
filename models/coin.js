const mongoose = require('../config/database')
const { Schema } = mongoose

const coinSchema = new Schema({
  coin: String,
  amount: Number
})

module.exports = mongoose.model('coins', coinSchema)