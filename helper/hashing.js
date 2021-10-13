const bcrypt = require('bcryptjs');
const saltRounds = 10;

exports.hashGenerate = async function (plainPassword) {

    try {
        var salt = await bcrypt.genSalt(saltRounds);
        var hash = await bcrypt.hash(plainPassword, salt);
        return hash;
    } catch (err) {
        return false;
    }
}

exports.hashValidatePassword = async function (password, hashedPassword) {

    try {
        var isMatchedPassword = await bcrypt.compare(password, hashedPassword);
        return isMatchedPassword;
    } catch (err) {
        return false;
    }

}