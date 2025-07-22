const userModel = require('../models/userModel');
const userService = require('../services/user.service');
const {validationResult} = require('express-validator');
const blackListToken = require('../models/blackListToken')


module.exports.registerUser = async (req, res) => {
    const errors = validationResult(req);
    if(!errors.isEmpty){
        return res.status(400).json({errors: errors.array()})
    }
    console.log(req.body);

    const {fullName, email, password} = req.body;
    const isUserExist = await userModel.findOne({email});
        if(isUserExist){
            return res.status(400).json({message:"user Already exist"})
        }
    
    const hashedPassword = await userModel.hashedPassword(password);

    const user = await userService.createUser({
        firstName:fullName.firstName,
        lastName:fullName.lastName,
        email,
        password:hashedPassword
    });

    const token = user.generateAuthToken();
    res.status(201).json({token, user});
}


module.exports.loginUser = async (req,res,next) => {
    const errors = validationResult(req);
    if(!errors.isEmpty){
        return res.status(400).json({error:errors.array() })
    }
    const {email, password}= req.body;

    const user = await userModel.findOne({email}).select('+password');

    if(!user){
        return res.status(401).json({message: "Invalid Email or Password"});

    }
    const isMatched  = await user.comparePassword(password);

    if(!isMatched){
        res.status(401).json({message:"Invalid Email or Password"})
    }

    const token = user.generateAuthToken();
    res.cookie('token', token);

    res.status(200).json({token, user})
}


module.exports.getUserProfile = async (req,res,next)=>{
    res.status(200).json(req.user);
}

module.exports.logoutUser = async (req, res, next)=>{
    res.clearCookie('token');
    const token = req.cookie.token || req.headers.authorization.split(' ')[ 1 ];
    await blackListToken.create({ token });
    res.status(200).json({message:"Logged Out"})
}