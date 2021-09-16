
const dotenv = require('dotenv');

module.exports = function (){ 

    dotenv.config({ path: '../config/config.env'});
    jwtPrivateKey = process.env.jwtPrivateKey
if (!jwtPrivateKey){
    
    throw new Error ('FATAL ERROR : jwtPrivateKey is not defined..');
 }
 
}