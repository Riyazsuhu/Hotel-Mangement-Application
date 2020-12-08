require('./db/mongoose')
const express = require('express')
const app = express()
const log = console.log
const bodyParser = require('body-parser')
const bookingRouter = require('./routers/guest/booking')
const serviceRouter = require('./routers/staff/service')
const staffRouter = require('./routers/staff/staff')
//express use parsers
app.use(bodyParser.json())
app.use(bodyParser.urlencoded({extended: true}))
//RESTful api Routers
app.get('/', (req, res) => {
    log('welcome to Hotel-Managemet-Application')
})
app.use('/api/book', bookingRouter)
app.use('/api/service', serviceRouter)
app.use('/api/staff', staffRouter)
app.get('*', (req, res) => {
    log('404 page not found Invalid URL')
})
//Exporting module
module.exports = app