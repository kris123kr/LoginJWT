const express = require('express');
const router = express.Router();
const authMiddleware = require('../middleware/authMiddleware');
const {loginAuth,getLogin}= require("../controller/loginAuth")

router.post('/login',authMiddleware.generateToken, loginAuth);
router.get('/getlogin',getLogin);
module.exports = router;
