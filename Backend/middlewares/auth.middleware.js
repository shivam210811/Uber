const userModel = require('../models/userModel');
const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');
const blackListToken = require('../models/blackListToken');
const captainModel = require('../models/captain.model');

module.exports.authUser = async (req, res, next) =>{
    const token = req.cookies.token || req.headers.authorization ?.split(' ')[ 1 ];
    if(!token){
        return res.status(401).json({message:"Unauthorization User"})
    }

    const isblackListed = await blackListToken.findOne({token: token})

    if(isblackListed){
        return res.status(401).json({message:"Unauthorized User"})
    }

    try {
        const decode = jwt.verify(token,process.env.JWT_SECRET)
        const user = await userModel.findById(decode._id)
        req.user = { ...user.toObject(), token };
        return next();
    } catch (error) {
        return res.status(401).json({message:"Unauthorizd User"})
    }
}

module.exports.authCaptain = async (req,res, next)=>{
    const token = req.cookies.token || req.headers.authorization ?.split(' ')[ 1 ];
    console.log(token)
    if(!token){
        return res.status(401).json({message:"Unauthorization User"})
    }

    const isblackListed = await blackListToken.findOne({token: token})

    if(isblackListed){
        return res.status(401).json({message:"Unauthorized User"})
    }

    try {
        const decode = jwt.verify(token,process.env.JWT_SECRET)
        const captain = await captainModel.findById(decode._id)
        req.captain = captain;
        return next();
    } catch (error) {
        return res.status(401).json({message:"Unauthorizd User"})
    }
}