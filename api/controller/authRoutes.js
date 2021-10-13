const express = require("express");
const router =  express.Router();
const User = require ("../../models/users");
const UserProfile = require ("../../models/user_profiles");
const hashing = require("../../helper/hashing");
const tokenGen = require("../../helper/token");
const async = require("async");

exports.singIn =  async function (req, res) {

    var user =  await User.findOne({email: req.body.email});

    if (!user) {
        return res.send("user not found");
    } else {
        var checkPassword = await hashing.hashValidatePassword(req.body.password, user.password);
        
        if (!checkPassword) {
            res.send(" Password is invalid");
        } else {
            var token = await tokenGen.tokenGenerator(user.email);
            res.cookie("jwt", token)
            res.send(token);
        }
    }
}

exports.signUp = async function (req, res) {
    
    try {

        const hashedPassword = await hashing.hashGenerate(req.body.password);
        var user = new User({
            firstName: req.body.fname,
            lastName: req.body.lname,
            email: req.body.email,
            password: hashedPassword
        });

        
        var result = await user.save();

        var userProfile = new UserProfile({
            emailss: result.email,
            education: req.body.education,
            occupation: req.body.occupation,
            address: req.body.address
        });

        var userProfile = await userProfile.save();
        res.send(userProfile);

    } catch (err) {
        res.status(500).send(err);
    }
}