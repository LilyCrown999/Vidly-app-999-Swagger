
const bcrypt = require('bcrypt');
const { User } = require('../models/users');
const  _  = require('lodash');
const express = require('express');
const router = express.Router();
const Joi = require('joi');
// const mongoose = require('mongoose');


router.get('/', async (req,res) =>{
 const user = await User.find().sort('name');
 res.send(user);
})


router.post('/', async (req,res) =>{
    
const { error } = validate(req.body); 
if (error) return res.status(400).json({
    success: false,
    error: error.details[0].message,
});

let user = await User.findOne({ email: req.body.email});
if(!user) return res.status(400).json({ success: false ,error : 'Invalid email or password'});
 
const isValid = await bcrypt.compare(req.body.password, user.password);
if(!isValid) return res.status(400).json({ success: false ,error : 'Invalid email or password'});
 
const token = user.generateAuthToken();

// res.send(user);
res.send(token);
}) 

router.put('/:id', async (req,res) =>{
   const { error } = validate(req.body); 
   if (error) return res.status(400).json({
       sucess : false ,
       error : error.details[0].message});

  let user = await User.findByIdAndUpdate(req.params.id,{
    
    // name: req.body.name,
    // email: req.body.email,
    password: req.body.password

  },{ new: true })
  
   user = await User.findOne({ email: req.body.email});
  if (!user) return res.status(404).json({success: false , error : 'Invalid email or password'});
  
  res.send("Your new password is" + _.pick(user, ['password']));

})


router.delete('/', async (req,res) =>{
//   const user = await User.findByIdAndRemove(req.params.id);

//     if (!user) return res.status(404).json({success : true ,error :'The user with the given ID was not found...'});
  
//     res.send(_.pick(user, ['_id','name','email']));
})


router.get('/:id', async (req,res) =>{
//   const user = await User.findById(req.params.id);

//     if(!user) return res.status(404).json({success : true ,error :'The user with the given ID was not found...'});

//     res.send(_.pick(user, ['_id','name','email']));

})


function validate(req) {
    const schema = {

      email: Joi.string().email({minDomainSegments: 2, tlds: { allow: ['com', 'net'] } }).min(5).max(255).required(),
      password: Joi.string().min(5).max(1024).required(),

    };
  
    return Joi.validate(req, schema);
  }
module.exports = router; 