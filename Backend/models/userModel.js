const mongoose = require('mongoose');
const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken')

const userSchema = new mongoose.Schema({
    fullName:{
        firstName:{            
        type:String,
        required:true,
        trim:true,
        minlength:[3, "FirstName must be atleast 3 character or long"]
        },
        lastName:{            
        type:String,
        trim:true,
        minlength:[3, "lasttName must be atleast 3 character or long"]
        },
    },
        email:{
            type:String,
            required:true,
            unique:true,
            minlength:[5, 'Email must have 5 character or long']
        },
        password:{
            type:String,
            required:true,
            select:false
        },
        socketId:{
            type:String,
        },
    
})

userSchema.methods.generateAuthToken = function() {
    const token = jwt.sign({_id: this._id}, process.env.JWT_SECRET)
    return token;
}

userSchema.methods.comparePassword = async function (password){
    return await bcrypt.compare(password, this.password)
}

userSchema.statics.hashedPassword = async function (password){
    return await bcrypt.hash(password, 10)
}

const userModel = mongoose.model('user', userSchema);
module.exports = userModel;