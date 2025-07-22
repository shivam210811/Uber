const mongoose = require('mongoose');
const blackListedTokenSchema = new mongoose.Schema({
    token:{
        type:String,
        required:true,
        unique:true
    },
    createdAt:{
        type:Date,
        default:Date.now,
        expires:86400 // 24 houres in seconds
    }
})

module.exports = mongoose.model('BlacklistToken', blackListedTokenSchema);