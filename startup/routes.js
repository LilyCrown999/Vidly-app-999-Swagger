

const error = require('../middleware/error');
const express = require('express');
const genres = require('../routes/genres');
const customers = require('../routes/customers');
const movies = require('../routes/movies');
const rentals = require('../routes/rentals');
const users = require('../routes/users');
const auth = require('../routes/auth');
// const returns = require('../routes/returns');


module.exports = function (app){
    
app.use(express.json());
app.use('/vidly/genres', genres);
app.use('/vidly/users', users);
app.use('/vidly/customers', customers);
app.use('/vidly/movies', movies);
app.use('/vidly/rentals', rentals);
app.use('/vidly/auth', auth);  
// app.use('/api/returns', returns);
app.use(error);

};