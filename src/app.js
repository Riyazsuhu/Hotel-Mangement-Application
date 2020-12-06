require('./db/mongoose')
const express = require('express')
const app = express()
const bodyParser = require('body-parser')
const bookingRoute = require('./routers/guest/booking')
//express use parsers
app.use(bodyParser.json())
app.use(bodyParser.urlencoded({extended: true}))
//RESTful api Routers
app.use('/api/book',bookingRoute)
//Exporting module
module.exports = app