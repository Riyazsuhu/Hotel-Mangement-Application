const mongoose = require('mongoose')
require('../../db/mongoose')

const servicesSchema = new mongoose.Schema({
    service_type: {
        type: String,
        required: true,
        trim: true,
        lowercase: true
    },
    description: {
        type: String,
        required: true,
        trim: true
    },
    images: [ {image: {
        type: Buffer
    }} ],
    price: {
        type: Number,
        required: true,
        trim: true
    },
    discount: {
        type: Number,
        required: true,
        trim: true
    },
    capacity: {
        type: Number,
        required: true,
        trim: true
    },
    count: {
        type: Number,
        required: true,
        trim: true
    }
})

const Service = mongoose.model('services', servicesSchema)
//Exporting db Model
module.exports = Service