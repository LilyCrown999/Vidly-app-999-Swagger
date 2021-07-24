
const {Rental, validate} = require('../models/rental');
const express = require('express');
const router = express.Router();
const mongoose = require('mongoose');
const Fawn = require('fawn');
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

    const customer = await Rental.findById(req.body.customerId);
    if(!customer) return res.status(404).send('Invalid Customer.. ');

    const movie = await Rental.findById(req.body.movieId);
    if(!movie) return res.status(404).send('Invalid movie... ');

    if (movie.numberInStock === 0) return res.status(400).send('Movie not in stock....');

    const rentals = new Rental({
        customer: {
            _id: customer._id,
            name: customer.name,
            phone: customer.phone 
          },
        movie: {
            _id: movie._id,
            title: movie.title,
            dailyRentalRate: customer.dailyRentalRate
          } 
    })
      
      // rentals = await rentals.save();
      // movie.numberInStock--;
      // movie.save();
    try{
      new task
      .save('rentals', rentals)
      .update('movies', { _id: movie._id }, {
        $inc: {numberInStock : -1}
      })
      .run();
      
      res.send(rentals);
    }
   
    catch(ex){

      res.status(500).send('Something went wrong....');
          
    }

    
});


router.put('/:id' , async(req, res) => {

    const { error } = validate(req.body); 
    if (error) return res.status(400).send(error.details[0].message);


    const rental = await Rental.findByIdAndUpdate(req.params.id,
      { 
        customer: {
        _id: customer._id,
        name: customer.name,
        phone: customer.phone 
      },
    movie: {
        _id: movie._id,
        title: movie.title,
        dailyRentalRate: customer.dailyRentalRate
      } 
      }, { new: true });
     if(!rental) return res.status(404).send('The rental with the given id was not found');

     res.send(rental);
});


router.delete('/' , async(req, res) => {


});

router.get('/:id' , async(req, res) => {
    const rental = await Rental.findById(req.params.id);

  if (!rental) return res.status(404).send('The rental with the given ID was not found.');

  res.send(rental);

});


module.exports = router; 
