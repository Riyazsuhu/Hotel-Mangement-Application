require('../../db/mongoose')
const express = require('express')
const router = new express.Router()
const { Dinning, Room, MeetingRoom, LiveEvent, CarRental} = require('../../models/guest')
const { Router } = require('express')
//RESTful guest routes
router.post('/dining', async(req, res) => {
    const dinning = new Dinning(req.body)
    try{
        await dinning.save()
        res.send({message: 'Dinning Booked Successfully'})
    }catch(e){
        res.status(400).send(e)
    }
})
router.post('/carrental', async(req, res) => {
    const carRental = new CarRental(req.body)
    try{
        await carRental.save()
        res.send({message: 'Rental Car Booked Successfully'})
    }catch(e){
        res.status(400).send(e)
    }
})
router.post('/liveevent', async(req,res) => {
    const liveEvent = new LiveEvent(req.body)
    try{
        await liveEvent.save()
        res.send({message: "Live Event Booked Successfully"})
    }catch(e){
        res.status(400).send(e)
    }
})
router.post('/meetingroom', async(req, res) => {
    const meetingRoom = new MeetingRoom(req.body)
    try{
        await meetingRoom.save()
        res.send({message: 'Meeting Room Booked Successfully'})
    }catch(e){
        res.status(400).send(e)
    }
})
router.post('/room', async(req, res) => {
    const room = new Room(req.body)
    try{
        await room.save()
        res.send({message: 'Room Booked Successfully'})
    }catch(e){
        res.status(400).send(e)
    }
})
//Exporting modules
module.exports = router