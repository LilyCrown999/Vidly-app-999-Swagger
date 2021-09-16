
const jwt = require('jsonwebtoken');
const Joi = require('joi');
const mongoose = require('mongoose');
const dotenv = require('dotenv');

const userSchema =  new mongoose.Schema({
    
    name: {

        type: String,
        required: true,
        minlength: 5,
        maxlength: 50

    },
    email: {

        type: String,
        unique:true,
        required: true,
        minlength: 5,
        maxlength: 255

    },
    password: {

        type: String,
        required: true,
        minlength: 5,
        maxlength: 255

    },
    isAdmin: {
        type : Boolean,
        default : true 
    }


});
userSchema.methods.generateAuthToken = function () {

    dotenv.config({ path: './config/config.env'});
    const token = jwt.sign({ _id: this._id, isAdmin: this.isAdmin} , process.env.jwtPrivateKey );
    return token ;
}

const User = mongoose.model('User', userSchema) ;

 function validateUser(user) {
    const schema = {
      name: Joi.string().min(5).max(50).required(),
      email: Joi.string().email({minDomainSegments: 2, tlds: { allow: ['com', 'net'] } }).min(5).max(255).required(),
      password: Joi.string().min(5).max(1024).required(),

    };
  
    return Joi.validate(user, schema);
  }
  
  exports.validate = validateUser;
  exports.User = User;



