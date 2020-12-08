const mongoose = require('mongoose')
const jwt = require('jsonwebtoken')
const _id = new mongoose.Types.ObjectId()
const demoStaff = {
    _id ,
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
    description: 'luxuries car for rental',
    price: 5000,
    discount: 20,
    capacity: 3,
    count: 5,
    available: true
}
const demoService1 = {
    _id: new mongoose.Types.ObjectId(),
    service_type: 'room',
    description: 'double bed',
    price: 4000,
    discount: 30,
    capacity: 2,
    count: 5,
    available: true
}
const demoService2 = {
    _id: new mongoose.Types.ObjectId(),
    service_type: 'meeting room',
    description: 'First class buisness rooms',
    price: 15000,
    discount: 10,
    capacity: 10,
    count: 3,
    available: true
}
const demoService3 = {
    _id: new mongoose.Types.ObjectId(),
    service_type: 'live event',
    description: 'Big facity halls',
    price: 50000,
    discount: 15,
    capacity: 150,
    count: 2,
    available: true
}
const demoService4 = {
    _id: new mongoose.Types.ObjectId(),
    service_type: 'dinnig',
    description: 'Amazing serving dinning',
    price: 2000,
    discount: 5,
    capacity: 3,
    count: 10,
    available: true
}
module.exports = {
    demoStaff,
    demoService,
    demoService1,
    demoService2,
    demoService3,
    demoService4
}