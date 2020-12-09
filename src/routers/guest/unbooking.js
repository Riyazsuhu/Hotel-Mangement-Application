require('../../db/mongoose')
const express = require('express')
const router = new express.Router()
const authBook = require('../../middleware/authbook')
const { Dinning, Room, MeetingRoom, LiveEvent, CarRental} = require('../../models/guest')
const log = console.log
router.delete('/dining/:id', authBook, async(req, res) => {
    try{
        if(req.service.available === true){
            req.service.count = req.service.count + 1
            await req.service.save()
        }
        await Dinning.deleteOne({_id: req.params.id})
        log( 'Dinning Unbooked Successfully' )
        res.send()
    }catch(e){
        log('Something went wrong try again!')
        res.status(400).send() 
    }
})
router.delete('/carrental/:id', authBook, async(req, res) => {
    try{
        if(req.service.available === true){
            req.service.count = req.service.count + 1
            await req.service.save()
        }
        await CarRental.deleteOne({_id: req.params.id})
        log( 'Car rental Unbooked Successfully' )
        res.send()
    }catch(e){
        log('Something went wrong try again!')
        res.status(400).send() 
    }
})
router.delete('/liveevent/:id', authBook, async(req,res) => {
    try{
        if(req.service.available === true){
            req.service.count = req.service.count + 1
            await req.service.save()
        }
        await LiveEvent.deleteOne({_id: req.params.id})
        log( 'Live Event Unbooked Successfully' )
        res.send()
    }catch(e){
        log('Something went wrong try again!')
        res.status(400).send() 
    }
})
router.delete('/meetingroom/:id', authBook, async(req, res) => {
    try{
        if(req.service.available === true){
            req.service.count = req.service.count + 1
            await req.service.save()
        }
        await MeetingRoom.deleteOne({_id: req.params.id})
        log( 'Meeting room Unbooked Successfully' )
        res.send()
    }catch(e){
        log('Something went wrong try again!')
        res.status(400).send() 
    }
})
router.delete('/room/:id', authBook, async(req, res) => {
    try{
        if(req.service.available === true){
            req.service.count = req.service.count + 1
            await req.service.save()
        }
        await Room.deleteOne({_id: req.params.id})
        log( 'Room Unbooked Successfully' )
        res.send()
    }catch(e){
        log('Something went wrong try again!')
        res.status(400).send() 
    }
})
//Exporting Unbook router
module.exports = router