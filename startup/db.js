
const mongoose = require('mongoose');
const config = require('config');


module.exports = function(){
    const db = config.get('mongo_url');

    mongoose.connect(db, {

    useNewUrlParser: true ,
    useUnifiedTopology: true ,
    useCreateIndex: true ,
    useFindAndModify: false
    
    })
    .then(() => console.log('Connected to MongoDB...'))
    .catch(err => console.error('Could not connect to MongoDB...'));
    
    

} 