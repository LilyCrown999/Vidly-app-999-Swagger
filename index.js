
const winston = require('winston');
const express = require('express');
const app = express();

require('./startup/routes')(app);
require('./startup/db')();
require('./startup/logging');
require('./startup/config')();
require('./startup/validation')();
require('./startup/prod')(app);

const port = process.env.PORT || 1400;
const server = app.listen(port,() => winston.info(`Listening on port ${port}...`));

    // app.use(express.static());

module.exports = server;