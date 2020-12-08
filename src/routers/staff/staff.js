require('../../db/mongoose')
const express=require('express')
const Staff=require('../../models/staff/staff')
const auth=require('../../middleware/auth')
const { route } = require('../../app')
const log = console.log
const router=new express.Router()
router.post('/add',async(req,res)=>{
    const staff=new Staff(req.body)
    try{
        const token=await staff.generateAuthToken()
        log('Staff registered successfully')
        res.status(201).send({staff, token })
    }catch(e){
        log('Something went wrong try again')
        res.status(400).send()
    }
})
router.get('/me',auth,async(req,res)=>{
    res.send(req.staff)
})
router.get('/:id',async(req,res)=>{
    const _id=req.params.id
    try{
        const staff=await staff.findById(_id)
        if(!staff){
            return res.status(404).send()
        }
        res.status(201).send(staff)
    }catch(e){
        res.status(500).send()
    }
})
router.post('/login',async(req,res)=>{
    try{
    const staff=await Staff.findByCredentials(req.body.email, req.body.password)
    const token=await staff.generateAuthToken()
    log('Staff logIn Successfully')
    res.send({staff,token})
    }catch(e){
        log('Invalid Email or password')
        res.status(400).send()
    }
})
router.post('/logout',auth,async(req,res)=>{
    try{
        req.staff.tokens=req.staff.tokens.filter((token)=>{
            return token.token !== req.token
        })
        await req.staff.save()
        log('Logout Successfully')
        res.send()
    }catch(e){
        log('Something went wrong')
        res.status(500).send()
    }
})
router.patch('/me',auth,async(req,res)=>{
    const updates=Object.keys(req.body)
    const allowedUpdates=['name', 'email', 'password']
    const isValidOperation= updates.every((update)=> allowedUpdates.includes(update))
    if(!isValidOperation){
        log('Invalid update')
        return res.status(400).send({error:'invalid updation'})
    }
    try{
        updates.forEach((update)=>req.staff[update]=req.body[update])
        await req.staff.save()
        log('Staff updated Successfully')
        res.send(req.staff)
    }catch(e){
        log('Something went wrong!')
        res.status(500).send()
    }   
})
router.delete('/me',auth,async(req,res)=>{
    try{
        await req.staff.remove()
        log('Staff deleted Sucessfully')
        res.send(req.staff)
    }catch(e){
        log('Something went wrong')
        res.status(500).send()
    }
})
module.exports=router


