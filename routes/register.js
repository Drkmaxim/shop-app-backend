const express = require('express');
const {register} = require("../controller/authController");

const registerRoute = express.Router();

registerRoute.post("/register", register);


module.exports = registerRoute; 