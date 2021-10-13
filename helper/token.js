const jwt = require('jsonwebtoken');
const dotenv = require('dotenv').config();

exports.tokenGenerator = async function (email) {
    try {
        const token = await jwt.sign({email}, "mytoken", {expiresIn: "3hours"});
        return token;
    } catch (err) {

    }
}
