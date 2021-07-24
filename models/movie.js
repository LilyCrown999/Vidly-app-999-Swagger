const Joi = require('joi');
const mongoose = require('mongoose');
const {genreSchema} = require('./genre');


const Movie = mongoose.model('Movies', new mongoose.Schema({
  title: {
    type: String,
    required: true,
    trim: true, 
    minlength: 5,
    maxlength: 255
  },
  genre: { 
    type: genreSchema,  
    required: true
  },
  writer: { 
    type: Array, 
    default : ['Writer'],
    required: true,
    min: 0,
    max: 255
  },
  isReleased: { 
    type: Boolean, 
    required: true
  },
  releaseDate :{
    type :  Date,
    default : Date.now(),
    required: true
  }
}));

function validateMovie(movie) {
  const schema = {
    title: Joi.string().min(5).max(50).required(),
    genreId: Joi.objectId().required(),
    writer: Joi.required(),
    isReleased: Joi.required()

  };

  return Joi.validate(movie, schema);
}

exports.Movie = Movie; 
exports.validate = validateMovie;