const express = require('express');
const router = express.Router();
const {body}= require("express-validator");
const userController = require('../controllers/userController')


router.post('/register', [
    body('email').isEmail().withMessage('invalid Email'),
    body('fullName.firstName').isLength({min:3}).withMessage('FirstName must be atleast 3 character long'),
    body('password').isLength({min:6}).withMessage("Password must be 8 character long")
],
userController.registerUser)

router.post('/login', [
     body('email').isEmail().withMessage('invalid Email'),
     body('password').isLength({min:6}).withMessage("Password must be 8 character long")
],
    userController.loginUser
)


module.exports = router;