require('../../db/mongoose')
const express = require('express')
const router = new express.Router()
const Service  = require('../../models/staff/service')
const log = console.log
//Restful service api
router.post('/add', async(req, res) => {
    const service = new Service(req.body)
    try{
        await service.save()
        log( 'Service added Successfully' )
    }catch(e){
        log('Service not added')
    }
})
router.get('/get', async(req, res) => {
    try{
        const services = await Service.find({
            service_type: req.body.service_type
        })
        log( services )
    }catch(e){
        log('No service found')
    }
})
router.patch('/update/:id', async(req, res) => {
    try{
        var service = await Service.findById(req.params.id)
    }catch(e){
        return log('Invalid service ID')
    } 
    const updates=Object.keys(req.body)
    const allowedUpdates=['service_type','description','image','price', 'discount', 'capacity', 'count']
    const isValidOperation= updates.every((update)=> allowedUpdates.includes(update))
    if(!isValidOperation){
        return log('Invalid updation!')
    }
    updates.forEach((update)=>service[update]=req.body[update])
        await service.save()
        return log('Service Updated Successfully')
})
router.delete('/delete/:id', async(req, res) => {
    try{
        await Service.findByIdAndRemove(req.params.id)
        log('Service Deleted Successfully')
    }catch(e){
        return log('Invalid service ID')
    }
})
//export router
module.exports = router 