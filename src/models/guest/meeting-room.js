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
    start_date: {
        type: String,
        required: true,
    },
    end_date: {
        type: String,
        required: true
    },
    room_count: {
        type: Number,
        default: 1,
        trim: true
    }
})
//defining Schema
const MeetingRoom = mongoose.model('meeting-rooms', meetingRoomSchema )
//Exporting model
module.exports = MeetingRoom