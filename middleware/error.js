
// const winston = require('winston');
require('winston-mongodb');
// const logger = require('../startup/logging');
module.exports = function(err, req, res, next) {
    //Log the exception

    winston.log({
        level: 'error',
        message: err.message
      });

    res.status(500).send('Somethimg failed ...');
    
}