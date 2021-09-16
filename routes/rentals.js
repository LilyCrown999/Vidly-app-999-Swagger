
const {Rental, validate} = require('../models/rental');
const express = require('express');
const router = express.Router();
const mongoose = require('mongoose');
const Fawn = require('fawn');
const { Movie } = require('../models/movie');
const { Customer } = require('../models/customer');
// const _ = require('lodash');

Fawn.init(mongoose);
const task = Fawn.Task();

router.get('/' , async(req, res) => {
    const rentals = await Rental.find().sort('-dateOut');
    res.send(rentals);
});

router.post('/' , async(req, res) => {

  const { error } = validate(req.body); 
  if (error) return res.status(400).send(error.details[0].message);
  
  const movie = await Movie.findById(req.body.movieId);
  if (!movie) return res.status(400).send('Invalid movie....');

  
  const customer = await Customer.findById(req.body.customerId);
  if (!customer) return res.status(400).send('Invalid customer....');

    let rental = new Rental({ 
      customer: {
      _id: customer._id,
      name: customer.name,
      phone: customer.phone 
    },
  movie: {
    genre: {
      _id: movie.genre._id,
      name: movie.genre.name
    },
      _id: movie._id,
      title: movie.title,
      isReleased: movie.isReleased,
      writer: movie.writer
    } 
    })

     await rental.save()

     res.send(rental);

});
    


// router.put('/:id' , async(req, res) => {

//     const { error } = validate(req.body); 
//     if (error) return res.status(400).send(error.details[0].message);


//     const rental = await Rental.findByIdAndUpdate(req.params.id,
//       { 
//         customer: {
//         _id: customer._id,
//         name: customer.name,
//         phone: customer.phone 
//       },
//     movie: {
//         _id: movie._id,
//         title: movie.title
//       } 
//       }, { new: true });
//      if(!rental) return res.status(404).send('The rental with the given id was not found');
//
//      res.send(rental);
// });


// // router.delete('/' , async(req, res) => {

// // });

router.get('/:id' , async(req, res) => {
    const rental = await Rental.findById(req.params.id);

  if (!rental) return res.status(404).send('The rental with this given ID was not found.');

  res.send(rental);

});


module.exports = router; 
