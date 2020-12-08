require('../../db/mongoose')
const { request } = require('express')
const express = require('express')
const router = new express.Router()
const auth = require('../../middleware/auth')
const Service  = require('../../models/staff/service')
const multer = require('multer')
const log = console.log
//Restful service api
router.post('/add', auth, async(req, res) => {
    const service = new Service(req.body)
    try{
        await service.save()
        log( 'Service added Successfully' )
        res.status(201).send()
    }catch(e){
        log('Service not added')
        res.status(400).send()
    }
})
router.get('/get', auth, async(req, res) => {
    try{
        const services = await Service.find({
            service_type: req.body.service_type
        })
        log( 'Get services successfully' )
        res.send( services )
    }catch(e){
        log('No service found')
        res.status(404).send()
    }
})
router.patch('/update/:id',auth, async(req, res) => {
    try{
        var service = await Service.findById(req.params.id)
    }catch(e){
        return log('Invalid service ID')
    } 
    const updates=Object.keys(req.body)
    const allowedUpdates=['service_type','description','image','price', 'discount', 'capacity', 'count']
    const isValidOperation= updates.every((update)=> allowedUpdates.includes(update))
    if(!isValidOperation){
        log('Invalid updation!')
        res.status(400).send()
    }
    updates.forEach((update)=>service[update]=req.body[update])
        await service.save()
        log('Service Updated Successfully')
        res.send()
})
router.delete('/delete/:id', auth, async(req, res) => {
    try{
        await Service.findByIdAndRemove(req.params.id)
        log('Service Deleted Successfully')
        res.send()
    }catch(e){
        log('Invalid service ID')
        res.status(400).send()
    }
})
const upload = multer({limits:{
    fileSize:1000000
},fileFilter(req,file,cb){
    if(!file.originalname.match(/\.(jpg|jpeg|png)$/)){
        return cb(new Error('Invalid file format'))
    }
    cb(undefined,true)
}
})
//export router
module.exports = router 