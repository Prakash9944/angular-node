const User = require ("../../models/users");
const UserProfile = require ("../../models/user_profiles");
const hashing = require("../../helper/hashing");
const async = require("async");


// Get one user from user model and userprofile model
exports.getUser = async function (req, res) {

    try {
        var user = await User.aggregate([
            {$match: {_id: req.params.id}}, 
            {$lookup:
              {
                from: "userprofiles",
                localField: "_id",
                foreignField: "userId",
                as: "users"
              }
         }]);

        res.send(user);

    } catch (err) {
        console.error(err)
        res.status(500).send(err);
    }
}

exports.getAllUsers = async function (req, res) {
    
    try {
        var user = await User.aggregate([{
            $lookup:
              {
                from: "userprofiles",
                localField: "_id",
                foreignField: "userId",
                as: "users"
              }
         }]);
         res.send(user);
 
     } catch (err) {
         res.status(500).send(err);
     }

}

exports.updateUser = function (req, res) {

    async.waterfall([
        
        function (callback) {
            var updateUser  = {
                firstName: req.body.firstName,
                lastName: req.body.lastName,
                password: req.body.password,
            };

            User.findOneAndUpdate({_id: req.params._id}, updateUser, function (err, userResult) {
                if (err) {
                    console.error(err)
                }
                callback(null, userResult);
            });
        },

        function (userResult, callback) {
            var updateProfile  = {
                userId: userResult._id,
                occupation: req.body.occupation,
                address: req.body.address,
                education: req.body.education
            };

            UserProfile.findOneAndUpdate({_id: userResult._id}, updateProfile, function (err, result) {
                if (err) {
                    console.error(err);
                }
                callback(null, result);
            });
        }
    ], function (err, result) {
        if (err) {
            console.error(err);
        }

        return res.send(result)
    });
}

exports.deleteUser = async function (req, res) {
    
    try {
        var user = await User.findOneAndRemove({_id: req.params._id})
        res.status(200).send(user);

    } catch (err) {
        res.status(500).send("Internal server");
    }
}