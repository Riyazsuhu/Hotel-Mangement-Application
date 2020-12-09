const mongoose = require('mongoose')
require('../../db/mongoose')
const validator = require('validator')

const dinningSchema = new mongoose.Schema({
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
    count: {
        type: Number,
        default: 1
    },
    service_id:{
        type: mongoose.Schema.Types.ObjectId,
        required: true
    },
    date: {
        type: String,
        required: true,
    },
    time: {
        type: String,
        required: true
    },
    rating: {
        type: Number,
        default: 0
    }
})
dinningSchema.virtual('services',{
    ref:'services',
    localField:'_id',
    foreignField:'booked'
})
//defining Schema
const Dinning = mongoose.model('dinning', dinningSchema )
//Exporting model
module.exports = {
    Dinning
}