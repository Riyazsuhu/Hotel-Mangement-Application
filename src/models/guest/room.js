const mongoose = require('mongoose')
require('../../db/mongoose')
const validator = require('validator')

const roomSchema = new mongoose.Schema({
    name: {
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
    },
    room_count: {
        type: Number,
        default: 1,
        trim: true
    }
})
//defining Schema
const Room = mongoose.model('rooms', roomSchema )
//Exporting model
module.exports = {Room}