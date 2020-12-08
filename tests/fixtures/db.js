const mongoose = require('mongoose')
const jwt = require('jsonwebtoken')
const demoStaff = {
    _id : new mongoose.Types.ObjectId(),
    name: 'Irfan',
    email: 'irfan1999@gmail.com',
    password: '123456',
    tokens:[{
        token:jwt.sign({_id},process.env.JWT_SECRET)
    }]
}
const demoService = {
    _id: new mongoose.Types.ObjectId(),
    service_type: 'car rental',
    

}
const 