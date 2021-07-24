
const config = require('config');
const { User } = require('../../../models/users');
const jwt = require('jsonwebtoken');
const  mongoose  = require('mongoose');


// userSchema.methods.generateAuthToken = function () {

//     const token = jwt.sign({ _id: this._id, isAdmin: this.isAdmin} , config.get('jwtPrivateKey'));
//     return token ;
// }

describe('generateAuthToken', () => {
    it('should generate an authorization token using the jwtPrivateKey if user is admin', () => {

        const payload = {
            _id: new mongoose.Types.ObjectId().toHexString(),
             isAdmin: true
            };
        const user = new User(payload);
        const token = user.generateAuthToken();
        const decoded = jwt.verify(token, config.get('jwtPrivateKey'));
        expect(decoded).toMatchObject(payload);


    })
})