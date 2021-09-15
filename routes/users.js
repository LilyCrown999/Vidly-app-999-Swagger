
const auth = require('../middleware/auth');
const bcrypt = require('bcrypt');
const {User, validate} = require('../models/users');
const  _  = require('lodash');
const express = require('express');
const router = express.Router();
// const mongoose = require('mongoose');


router.get('/', async (req,res) =>{
 const user = await User.find().sort('name').select('-password');
 res.send(user);
})


router.get('/:id', async (req,res) =>{
  // const user = await User.findById(req.params.id);
  const user = await User.findById(req.params.id).select('-password');

    if(!user) return res.status(404).json({success : true ,error :'Invalid user'});

    // const userInfo = _.pick(user, ['_id','name','email']);
    // res.send(userInfo); 

    res.send(user);

})


router.post('/', async (req,res) =>{
    
const { error } = validate(req.body); 
if (error) return res.status(400).json({
    success: false,
    error: error.details[0].message,
});

let user = await User.findOne({ email: req.body.email});
if(user) return res.status(400).json({ success: false ,error : 'Email has already been registered... '});
  
 user = new User({
     name : req.body.name,
     email : req.body.email,
     password : req.body.password
 });
 try{
    const salt = await bcrypt.genSalt(10);
    user.password = await bcrypt.hash(user.password, salt);
    
 }
 catch(ex){
     if (ex) return res.status(400).send('Something went wrong ./.');
 }
 

await user.save();

// res.send(user);
const token = user.generateAuthToken();
res.header('x-auth-token', token).send(_.pick(user, ['_id','name','email']));
});

router.put('/:id', async (req,res) =>{
   const { error } = validate(req.body); 
   if (error) return res.status(400).json({
       sucess : false ,
       error : error.details[0].message});

  const user = await User.findByIdAndUpdate(req.params.id,{
    
    name: req.body.name,
    email: req.body.email,
    password: req.body.password

  },{ new: true })
  
  if (!user) return res.status(404).json({success: false , error : 'Invalid user ...'});
  
  res.send(_.pick(user, ['_id','name','email']));

})


router.delete('/:id', async (req,res) =>{
  const user = await User.findByIdAndRemove(req.params.id);

    if (!user) return res.status(404).json({success : true ,error :'Invalid user ...'});
  
    res.send(_.pick(user, ['_id','name','email']));
})



module.exports = router; 