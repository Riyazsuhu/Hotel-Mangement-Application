require('../../db/mongoose')
const express = require('express')
const router = new express.Router()
const { Dinning, Room, MeetingRoom, LiveEvent, CarRental} = require('../../models/guest')
const log = console.log
//RESTful guest routes
router.post('/dining', async(req, res) => {
    const dinning = new Dinning(req.body)
    try{
        await dinning.save()
        log( 'Dinning Booked Successfully' )
    }catch(e){
        log(e)
    }
})
router.post('/carrental', async(req, res) => {
    const carRental = new CarRental(req.body)
    try{
        await carRental.save()
        log( 'Rental Car Booked Successfully')
    }catch(e){
        log(e)
    }
})
router.post('/liveevent', async(req,res) => {
    const liveEvent = new LiveEvent(req.body)
    try{
        await liveEvent.save()
        log( "Live Event Booked Successfully")
    }catch(e){
        log(e)
    }
})
router.post('/meetingroom', async(req, res) => {
    const meetingRoom = new MeetingRoom(req.body)
    try{
        await meetingRoom.save()
        log( 'Meeting Room Booked Successfully')
    }catch(e){
        log(e)
    }
})
router.post('/room', async(req, res) => {
    const room = new Room(req.body)
    try{
        await room.save()
        log( 'Room Booked Successfully')
    }catch(e){
        log(e)
    }
})
//Exporting modules
module.exports = router