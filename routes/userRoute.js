const express = require("express");
const user_router =  new express.Router();
const userController =  require("../controllers/userController");

user_router.post('/register',userController.register_user);
user_router.get('/users',userController.get_user);
user_router.delete('/user/:id',userController.delete_user);

module.exports = user_router;