require('../../db/mongoose')
const express = require('express')
const router = new express.Router()
const authBook = require('../../middleware/authbook')
const { Dinning, Room, MeetingRoom, LiveEvent, CarRental} = require('../../models/guest')
const Service = require('../../models/staff/service')
const log = console.log
//RESTful guest routes
router.get('/:type', async(req, res)=>{
    try{
        const service = await Service.find({ service_type: req.params.type })
        log('Successfully get the services')
        res.send(service)
    }catch(e){
        log('Failed service not found!')
        res.status(404).send()
    }
})
router.post('/dining', authBook, async(req, res) => {
    const dinning = new Dinning({...req.body, service_id: req.service._id})
    try{
        if(req.service.available === true){
            req.service.count = req.service.count - req.body.count
            await req.service.save()
        }
        await dinning.save()
        log( 'Dinning Booked Successfully' )
        res.send()
    }catch(e){
        log('Something went wrong try again!')
        res.status(400).send() 
    }
})
router.post('/carrental', authBook, async(req, res) => {
    const carRental = new CarRental({...req.body, service_id: req.service._id})
    try{
        if(req.service.available === true){
            req.service.count = req.service.count - req.body.count
            await req.service.save()
        }
        await carRental.save()
        log( 'Rental Car Booked Successfully')
        res.send()
    }catch(e){
        log('Something went wrong try again!')
        res.status(400).send() 
    }
})
router.post('/liveevent', authBook, async(req,res) => {
    const liveEvent = new LiveEvent({...req.body, service_id: req.service._id})
    try{
        if(req.service.available === true){
            req.service.count = req.service.count - req.body.count
            await req.service.save()
        }
        await liveEvent.save()
        log( "Live Event Booked Successfully")
        res.send()
    }catch(e){
        log('Something went wrong try again!')
        res.status(400).send()
    }
})
router.post('/meetingroom', authBook, async(req, res) => {
    const meetingRoom = new MeetingRoom({...req.body, service_id: req.service._id})
    try{
        if(req.service.available === true){
            req.service.count = req.service.count - req.body.count
            await req.service.save()
        }
        await meetingRoom.save()
        log( 'Meeting Room Booked Successfully')
        res.send()
    }catch(e){
        log('Something went wrong try again!')
        res.status(400).send()
    }
})
router.post('/room', authBook, async(req, res) => {
    const room = new Room({...req.body, service_id: req.service._id})
    try{
        if(req.service.available === true){
            req.service.count = req.service.count - req.body.count
            await req.service.save()
        }
        await room.save()
        log( 'Room Booked Successfully')
        res.send()
    }catch(e){
        log('Something went wrong try again!')
        res.status(400).send()
    }
})
//Exporting modules
module.exports = router