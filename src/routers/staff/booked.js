require('../../db/mongoose')
const express = require('express')
const router = new express.Router()
const authBook = require('../../middleware/authbook')
const { Dinning, Room, MeetingRoom, LiveEvent, CarRental} = require('../../models/guest')
const log = console.log
//RESTful APIs
router.get('/dining', authBook, async(req, res) => {
    try{
        const dining = await Dinning.find({service_id: req.service._id})
        log( 'Get booked Dinning Successfully' )
        res.send(dining)
    }catch(e){
        log('Something went wrong try again!')
        res.status(400).send() 
    }
})
router.get('/carrental', authBook, async(req, res) => {
    try{
        const carRental = await CarRental.find({service_id: req.service._id})
        log( 'Get booked car rental Successfully' )
        res.send(carRental)
    }catch(e){
        log('Something went wrong try again!')
        res.status(400).send() 
    }
})
router.get('/liveevent', authBook, async(req,res) => {
    try{
        const liveEvent = await LiveEvent.find({service_id: req.service._id})
        log( 'Get booked live event Successfully' )
        res.send(liveEvent)
    }catch(e){
        log('Something went wrong try again!')
        res.status(400).send() 
    }
})
router.get('/meetingroom', authBook, async(req, res) => {
    try{
        const meetingRoom = await MeetingRoom.find({service_id: req.service._id})
        log( 'Get booked Meeting Room Successfully' )
        res.send(meetingRoom)
    }catch(e){
        log('Something went wrong try again!')
        res.status(400).send() 
    }
})
router.get('/room', authBook, async(req, res) => {
    try{
        const room = await Room.find({service_id: req.service._id})
        log( 'Get booked Room Successfully' )
        res.send(room)
    }catch(e){
        log('Something went wrong try again!')
        res.status(400).send() 
    }
})
//Exporting Unbook router
module.exports = router