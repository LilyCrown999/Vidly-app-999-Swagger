

const error = require('../middleware/error');
const express = require('express');
const genres = require('../routes/genres');
const customers = require('../routes/customers');
const movies = require('../routes/movies');
const rentals = require('../routes/rentals');
const users = require('../routes/users');
const auth = require('../routes/auth');
 
const swaggerJsDoc = require('swagger-jsdoc');
const swaggerUI = require('swagger-ui-express');


const options = {
    definition : {
        openapi : '3.0.0',
        info : {
          title : 'Library API',
          version : '1.0.0',
          description : 'A simple Express Library API for vidly-app'
        },
        servers :[
            {
                url : 'https://vidly-app-999.herokuapp.com'
            },
        ],
    },
        apis : ['*../routes/*.js']
};

const specs = swaggerJsDoc(options); 


module.exports = function (app){
    
app.use(express.json());
app.use('', swaggerUI.serve,swaggerUI.setup(specs));
// app.use('/vidly/genres', genres);
// app.use('/vidly/users', users);
// app.use('/vidly/customers', customers);
// app.use('/vidly/movies', movies);
// app.use('/vidly/rentals', rentals);
// app.use('/vidly/auth', auth);  

app.use(error);

};