const Joi = require('joi');
const mongoose = require('mongoose');
const {customerSchema} = require('./customer');
const {movieSchema} = require('./movie');

// const {Customers} = require('../models/customer');
// const {Movies} = require('../models/movie');
//for a later use

const Rental = mongoose.model('Rental', new mongoose.Schema({
  customer: { 
    type: customerSchema,
    required: true
  },
  movie: {
    type: movieSchema,
    required: true
  },
  dailyRentalRate: { 
    type: Number, 
    min: 0,
    max: 255
  }, 
  dateOut: { 
    type: Date, 
    required: true,
    default: Date.now
  },
  dateReturned: { 
    type: Date
  },
  rentalFee: { 
    type: Number, 
    min: 0,
    default: 80
  }
}));

function validateRental(rental) {
  const schema = {
    customerId: Joi.objectId().required(),
    movieId: Joi.objectId().required()
  };

  return Joi.validate(rental, schema);
}

exports.Rental = Rental; 
exports.validate = validateRental;