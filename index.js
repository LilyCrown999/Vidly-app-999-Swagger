
const winston = require('winston');
const express = require('express');
const app = express();
// const logger = require('./startup/logging');

require('./startup/routes')(app);
require('./startup/db')();
require('./startup/logging');
require('./startup/config')();
require('./startup/validation')();
const port = process.env.PORT || 1400;
app.listen(port,

    () => winston.info(`Listening on port ${port}...`)
    
    );

    // app.use(express.static());

