const mongoose = require('mongoose')
require('../../db/mongoose')

const servicesSchema = new mongoose.Schema({
    name: {
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
    image: {
        type: Buffer,
        required: true
    },
    price: {
        type: Number,
        required: true,
        trim: true
    },
    discount: {
        type: Number,
        required: true,
        trim: true
    }
})

const Service = mongoose.model('services', servicesSchema)
//Exporting db Model
module.exports = Service