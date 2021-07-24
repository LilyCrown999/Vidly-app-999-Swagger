const winston = require('winston');
// require('winston-mongodb');
require('express-async-errors');

module.exports = function() {
  winston.exceptions.handle()(
    
    new winston.transports.Console({colorize: true, prettyPrint: true , timeStamp : true}),
    new winston.transports.File({ filename: 'path/to/ uncaughtExceptions.log'}));
  
  process.on('unhandledRejection', (ex) => {
    throw ex;
  });
  winston.add(winston.transports.File, { filename: 'path/to/logfile.log' });
  // winston.add(winston.transports.MongoDB, { 
  //   db: 'mongodb://localhost/vidly',
  //   level: 'info'
  // });  
}
