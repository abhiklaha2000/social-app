const express = require("express");
const login_router =  new express.Router();
const login_controller = require('../controllers/loginController');

login_router.post('/login', login_controller.login);

module.exports = login_router;