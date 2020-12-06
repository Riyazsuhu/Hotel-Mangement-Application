const mongoose = require('mongoose')
require('../../db/mongoose')
const validator = require('validator')

const liveEventSchema = new mongoose.Schema({
    name: {
        type: String,
        trim: true,
        required: true,
    },
    event_type: {
        type: String,
        trim: true,
        required: true,
    },
    email:{
        type: String,
        trim: true,
        required: true,
        lowercase: true,
        validate(value){
            if(!validator.isEmail(value)){
                throw new Error('Invalid Email address!')
            }
        }
    },
    mobile_no:{
        type: Number,
        trim: true,
        required: true,
    },
    start_date: {
        type: String,
        required: true,
    },
    end_date: {
        type: String,
        required: true
    }
})
//defining Schema
const LiveEvent = mongoose.model('live-event', liveEventSchema )
//Exporting model
module.exports = LiveEvent