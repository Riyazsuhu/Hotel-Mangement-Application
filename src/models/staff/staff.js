const mongoose = require('mongoose')
const validator = require('validator')
const jwt = require('jwt')
const bcrypt = require('bcryptjs')
require('../../db/mongoose')
//Database Schema
const staffSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true,
        trim: true
    },
    email: {
        type: String,
        required: true,
        trim: true,
        unique: true,
        lowercase: true,
        validate(value){
            if(!validator.isEmail(value)){
                throw new Error('Invalid Email Address!')
            }
        }
    },
    role: {
        type: String,
        required: true,
        trim: true,
        lowercase: true
    },
    password: {
        type: String,
        required: true,
        validate(value){
            if(value.length < 6){
                throw new Error('Must Password length atleast 6!!')
            }else if(value === 'password'){
                throw new Error('password is not set to be password!!')
            }
        }
    }
})
// Staff DB model
const Staff = mongoose.model('staffs', staffSchema)
//Exporting DB model
module.exports = Staff