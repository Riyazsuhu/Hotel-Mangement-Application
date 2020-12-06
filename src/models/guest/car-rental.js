const mongoose = require('mongoose')
require('../../db/mongoose')
const carRetalSchema = new mongoose.Schema({
    name: {
        type: String,
        trim: true,
        required: true,
    },
    mobile_no:{
        type: Number,
        trim: true,
        required: true,
    },
    emergency_no: {
        type: Number,
        trim: true
    },
    trip_type: {
        type: String,
        trim: true,
        required: true
    },
    destination: {
        type: String,
        required: true,
        trim: true,
        lowercase: true
    },
    date: {
        type: String,
        required: true,
    },
    time: {
        type: String,
        required: true
    }
})

const CarRental = mongoose.model('car_rental', carRetalSchema)
//Exporting Module
const rental = new CarRental({
    name: 'riyaz',
    mobile_no: '9500665156',
    trip_type: 'round',
    destination: 'parangipettai',
    date: '11-11-2020',
    time: '5:00 PM'
    
})
rental.save().then(rental => {
    console.log(rental)
}).catch(e => {
    console.log(e)
})
module.exports = CarRental