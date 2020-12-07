require('./db/mongoose')
const express = require('express')
const app = express()
const bodyParser = require('body-parser')
const bookingRouter = require('./routers/guest/booking')
const serviceRouter = require('./routers/staff/service')
//express use parsers
app.use(bodyParser.json())
app.use(bodyParser.urlencoded({extended: true}))
//RESTful api Routers
app.use('/api/book', bookingRouter)
app.use('/api/service', serviceRouter)
//Exporting module
module.exports = app