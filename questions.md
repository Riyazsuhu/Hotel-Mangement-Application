Before running this application.

Run this commands.
1. npm install.
2. npm run test (for jest testing the whole backend API's).
3. npm run dev (start dev server).

Questions

1. I take two and half day.
2. I actually spent lot of times in my office work because office is working I need must work for 9 hours. but I spent late nights and Early morning to complete this. If had a time I added some filtering sorting technique.
3. I used mongodb based staff authentication with who created the service using jwt authentication.
// Verifying authentication token to verify who created service
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
// Generate authentication token when staff login and signUp
staffSchema.virtual('services',{
    ref:'services',
    localField:'_id',
    foreignField:'creator'
})
staffSchema.methods.toJSON=function(){
    const staff=this
    const staffObject=staff.toObject()
    delete staffObject.password
    delete staffObject.tokens
    return staffObject
}
staffSchema.methods.generateAuthToken=async function(){
    const staff =this
    const token= jwt.sign({_id: staff._id.toString()}, process.env.JWT_SECRET)
    staff.tokens=staff.tokens.concat({token})
    await staff.save()
    return token
}
4. I checked using testing and supertest to track my code and verify it.