const express = require("express");
const Router =  express.Router();
const authController = require ("../controller/authRoutes");
const User = require ("../controller/user");

//Routes
Router.post('/user/signin', authController.singIn);
Router.post('/user/signup', authController.signUp);
Router.put('/user/updateuser/:_id', User.updateUser);
Router.get('/user/getuser/:id', User.getUser);
Router.delete('/user/deleteuser/:_id', User.deleteUser);
Router.get('/user/getuser', User.getAllUsers);

module.exports = Router;