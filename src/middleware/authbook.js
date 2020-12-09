const Service = require('../models/staff/service')
const authBooking = async(req, res, next) => {
    try{
        const _id = req.header('service_id')
        const service = await Service.findOne({ _id })
        if(!service){
            throw new Error()
        }else if(service.count <= 0){
            service.available = false
            await service.save()
            throw new Error()
        }
        req.service = service
        next()
    }catch(e){
        console.log('Service id is not found')
        res.status(404).send()
    }
}
module.exports = authBooking