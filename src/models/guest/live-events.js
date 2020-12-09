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
        trim: true
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
    service_id:{
        type: mongoose.Schema.Types.ObjectId,
        required: true
    },
    count: {
        type: Number,
        default: 1
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
    },
    rating: {
        type: Number,
        default: 0
    }
})
liveEventSchema.virtual('services',{
    ref:'services',
    localField:'_id',
    foreignField:'booked'
})
//defining Schema
const LiveEvent = mongoose.model('live-event', liveEventSchema )
//Exporting model
module.exports = {LiveEvent}