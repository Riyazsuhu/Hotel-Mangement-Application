const mongoose = require('mongoose')
const validator = require('validator')
const jwt = require('jsonwebtoken')
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
    },
    tokens: [{token:{
        type: String,
        required: true
    }}]
    
},{
    timestamps: true
})
staffSchema.virtual('services',{
    ref:'services',
    localField:'_id',
    foreignField:'creator'
})
staffSchema.methods.toJSON=function(){
    const staff=this
    const staffObject=staff.toObject()
    delete staffObject.password
    delete staffObject.tokens
    return staffObject
}
staffSchema.methods.generateAuthToken=async function(){
    const staff =this
    const token= jwt.sign({_id: staff._id.toString()}, process.env.JWT_SECRET)
    staff.tokens=staff.tokens.concat({token})
    await staff.save()
    return token
}
staffSchema.statics.findByCredentials=async(email,password)=>{
    const staff =await Staff.findOne({email})
    if(!staff ){
        throw new Error('Invalid email')
    }
    const isMatch=await bcrypt.compare(password, staff.password)
    if(!isMatch){
        throw new Error('Invalid password')
    }
    return staff 
}
//hash the plain text password before saving
staffSchema.pre('save',async function(next){
    const staff =this
    if(staff.isModified('password')){
        staff.password=await bcrypt.hash(staff.password,8)
    }
    next()
})
// Staff DB model
const Staff = mongoose.model('staffs', staffSchema)
//Exporting DB model
module.exports = Staff