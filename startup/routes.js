

const error = require('../middleware/error');
const express = require('express');
const genres = require('../routes/genres');
const customers = require('../routes/customers');
const movies = require('../routes/movies');
const rentals = require('../routes/rentals');
const users = require('../routes/users');
const auth = require('../routes/auth');

const app = express();
const swaggerJsDoc = require("swagger-jsdoc");
const swaggerUi = require("swagger-ui-express");

const swaggerOptions = {
    definition: {
      openapi: "3.0.0",
      info: {
        title: "Vidly API with Swagger",
        version: "0.1.0",
        description:
          "This is a vidly application made with Express and documented with Swagger",
        license: {
          name: "MIT",
          url: "https://spdx.org/licenses/MIT.html",
        },
        contact: {
          name: "LilyCrown999",
          url: "https://github.com/LilyCrown999",
          email: "lilycrown999@gmail.com",
        },
      },
      servers: [  

        {
          url: "http://localhost:100",
        },
        {
          url: "http://localhost:999",
        },
      ],
    },
    apis: ["./api-docs/*.js"],
    
  };
  
  
  const swaggerDocs = swaggerJsDoc(swaggerOptions);


module.exports = function (app){
    
app.use(express.json());

app.get('/',function (req, res) {
  res.redirect('/api-docs');
});

app.use("/api-docs", swaggerUi.serve, swaggerUi.setup(swaggerDocs));
app.use('/api/genres', genres);
app.use('/api/users', users);
app.use('/api/customers', customers);
app.use('/api/movies', movies);
app.use('/api/rentals', rentals);
app.use('/api/auth', auth);  
app.use(error);

};