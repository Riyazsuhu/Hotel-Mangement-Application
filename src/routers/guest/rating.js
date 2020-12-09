require('../../db/mongoose')
const express = require('express')
const router = new express.Router()
const authBook = require('../../middleware/authbook')
const { Dinning, Room, MeetingRoom, LiveEvent, CarRental} = require('../../models/guest')
const log = console.log
router.patch('/dining/:id', authBook, async(req, res) => {
    try{
        await Dinning.updateOne({_id: req.params.id},{
            rating : req.body.rating
        })
        log( 'Rate Dinning Successfully' )
        res.send()
    }catch(e){
        log('Something went wrong try again!')
        res.status(400).send() 
    }
})
router.patch('/carrental/:id', authBook, async(req, res) => {
    try{
        await CarRental.updateOne({_id: req.params.id},{
            rating : req.body.rating
        })
        log( 'Rate Dinning Successfully' )
        res.send()
    }catch(e){
        log('Something went wrong try again!')
        res.status(400).send() 
    }
})
router.patch('/liveevent/:id', authBook, async(req,res) => {
    try{
        await LiveEvent.updateOne({_id: req.params.id},{
            rating : req.body.rating
        })
        log( 'Rate Dinning Successfully' )
        res.send()
    }catch(e){
        log('Something went wrong try again!')
        res.status(400).send() 
    }
})
router.patch('/meetingroom/:id', authBook, async(req, res) => {
    try{
        await MeetingRoom.updateOne({_id: req.params.id},{
            rating : req.body.rating
        })
        log( 'Rate Dinning Successfully' )
        res.send()
    }catch(e){
        log('Something went wrong try again!')
        res.status(400).send() 
    }
})
router.patch('/room/:id', authBook, async(req, res) => {
    try{
        await Room.updateOne({_id: req.params.id},{
            rating : req.body.rating
        })
        log( 'Rate Dinning Successfully' )
        res.send()
    }catch(e){
        log('Something went wrong try again!')
        res.status(400).send() 
    }
})
//Exporting Unbook router
module.exports = router