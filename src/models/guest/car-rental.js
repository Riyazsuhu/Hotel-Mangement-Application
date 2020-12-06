const mongoose = require('mongoose')
require('../../db/mongoose')
const carRetalSchema = new mongoose.Schema({
    name: {
        type: String,
        trim: true,
        required: true,
    },
    mobile_no:{
        type: Number,
        trim: true,
        required: true,
    },
    emergency_no: {
        type: Number,
        trim: true
    },
    trip_type: {
        type: String,
        trim: true,
        required: true
    },
    destination: {
        type: String,
        required: true,
        trim: true,
        lowercase: true
    },
    date: {
        type: String,
        required: true,
    },
    time: {
        type: String,
        required: true
    }
})

const CarRental = mongoose.model('car-rentals', carRetalSchema)
//Exporting Module
module.exports = {
    CarRental
}