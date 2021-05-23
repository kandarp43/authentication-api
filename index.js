//Import required packages
const express = require('express')
const dotenv = require('dotenv')
const mongoose = require('mongoose')

dotenv.config()
const app = express()

//Import Routes
const authRoute = require('./Routes/auth')

//Route middlewares
app.use('/api/user', authRoute)

//Connection to Database
mongoose.connect(
  process.env.DB_CONNECT,
  {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  },
  () => console.log('connection established')
)

app.listen(3000, () => console.log('server is running'))
