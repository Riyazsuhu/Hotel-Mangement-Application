const mongoose = require('mongoose')
require('../../db/mongoose')
const validator = require('validator')

const meetingRoomSchema = new mongoose.Schema({
    name: {
        type: String,
        trim: true,
        required: true,
    },
    company_name: {
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
    mobile_no:{
        type: Number,
        trim: true,
        required: true,
    },
    service_id:{
        type: mongoose.Schema.Types.ObjectId,
        required: true
    },
    count: {
        type: Number,
        default: 1
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
meetingRoomSchema.virtual('services',{
    ref:'services',
    localField:'_id',
    foreignField:'booked'
})
//defining Schema
const MeetingRoom = mongoose.model('meeting-rooms', meetingRoomSchema )
//Exporting model
module.exports = {MeetingRoom}