const mongoose = require ("mongoose");

const userProfile = new mongoose.Schema({
    userId: String,
    education: String,
    occupation: String,
    address: String
});

module.exports = mongoose.model('userprofile', userProfile);
