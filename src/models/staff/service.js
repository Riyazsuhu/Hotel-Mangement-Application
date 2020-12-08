const mongoose = require('mongoose')
require('../../db/mongoose')

const servicesSchema = new mongoose.Schema({
    service_type: {
        type: String,
        required: true,
        trim: true,
        lowercase: true,
        validate(value){
            if(!value === 'car rental' || !value === 'room' || !value === 'meeting room' || !value === 'live event' || !value === 'dining'){
                throw new Error('Invalid service type')
            }
        }
    },
    description: {
        type: String,
        required: true,
        trim: true
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
    },
    available: {
        type: Boolean,
        required: true
    },
    creator: {
        type: mongoose.Schema.Types.ObjectId,
        required: true,
        ref: 'staffs'
    }
},{
    timestamps: true
})

const Service = mongoose.model('services', servicesSchema)
//Exporting db Model
module.exports = Service