

// const logger = require('../startup/logging');
module.exports = function(err, req, res, next) {
    //Log the exception

    console.log({
        level: 'error',
        message: err.message
      });

    res.status(500).send('Somethimg failed ...');
    
}