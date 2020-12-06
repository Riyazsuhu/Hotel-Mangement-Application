const express = require('express')
const app = express()
const bodyParser = require('body-parser')

//express use parsers
app.use(bodyParser.json())
app.use(bodyParser.urlencoded({extended: true}))
//Exporting module
module.exports = app