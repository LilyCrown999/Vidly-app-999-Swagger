
const mongoose = require('mongoose');
const dotenv = require('dotenv');





module.exports = function(){
    
    dotenv.config({ path: './config/config.env'});
    const db =  process.env.MONGOURL || process.env.devMONGOURL ;
    
    mongoose.connect(db, {

    useNewUrlParser: true ,
    useUnifiedTopology: true ,
    useCreateIndex: true ,
    useFindAndModify: false
    
    })
    .then(() => console.log(`Connected to MongoDB at : ${db}...`))
    .catch(err => console.error(`Could not connect to MongoDB at : ${db}...`));
    
    

} 