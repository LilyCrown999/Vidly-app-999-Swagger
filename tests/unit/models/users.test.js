
const { User } = require('../../../models/users');
const jwt = require('jsonwebtoken');
const  mongoose  = require('mongoose');
const dotenv = require('dotenv');

// userSchema.methods.generateAuthToken = function () {

//     const token = jwt.sign({ _id: this._id, isAdmin: this.isAdmin} , config.get('jwtPrivateKey'));
//     return token ;
// }

describe('generateAuthToken', () => {
    it('should generate an authorization token using the jwtPrivateKey if user is admin', () => {

        dotenv.config({ path: './config/config.env'});

        const payload = {
            _id: new mongoose.Types.ObjectId().toHexString(),
             isAdmin: true
            };
            jwtPrivateKey = process.env.jwtPrivateKey
        const user = new User(payload);
        const token = user.generateAuthToken();
        const decoded = jwt.verify(token, jwtPrivateKey);
        expect(decoded).toMatchObject(payload);


    })
})