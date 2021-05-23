const { string } = require('joi')
const mongoose = require('mongoose')
const userSchema = new mongoose.Schema({
  name: {
    type: string,
    required: true,
    min: 6,
    max: 255,
  },
  email: {
    type: string,
    required: true,
    min: 6,
    max: 255,
  },
  password: {
    type: string,
    required: true,
    min: 8,
    max: 2042,
  },
  date: {
    type: Date,
    default: Date.now,
  },
})

module.exports = mongoose.model('User', userSchema)
