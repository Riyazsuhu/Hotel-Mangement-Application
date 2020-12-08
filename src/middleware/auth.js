const jwt=require('jsonwebtoken')
const Staff=require('../models/staff/staff')
const auth=async(req,res,next)=>{
    try{
    const token=req.header('Authorization').replace('Bearer ','')
    const decode=jwt.verify(token,process.env.JWT_SECRET)
    const staff=await Staff.findOne({_id:decode._id,'tokens.token':token})
    if(!staff){
        throw new Error()
    }
    req.token=token
    req.staff=staff
    next()
    }catch(e){
        console.log('Authuntication failed')
       res.status(404).send({error:'Authuntication failed'}) 
    }
}
module.exports=auth