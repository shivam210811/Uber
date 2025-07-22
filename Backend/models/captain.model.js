const mongoose = require('mongoose');
const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');


const captainSchema = new mongoose.Schema({
    fullName:{
        firstName:{
            type:String,
            required:true,
            minlength:[3, "FirstName must be 3 characters or long"]
        },
        lastName:{
            type:String,
            minlength:[3, "FirstName must be 3 characters or long"]
        }
    },
    email:{
        type:String,
        required:true,
        unqique:true,
        lowerCase: true,
        match:[/^|S+@|S+|.|S+$/, 'Please enter a valid Email']
    },
    password:{
        type:String,
        required:true,
        select:false
    },
    socketId:{
        type:String
    },
    status:{
        type:String,
        enum:['active', 'inactive'],
        default:'inactive'
    },
    vehicle:{
        color:{
             type:String,
            required:true,
            minlength:[3, "color must be 3 characters or long"] 
        },
        plate:{
              type:String,
            required:true,
            minlength:[3, "plate must be 3 characters or long"]
        },
        capacity:{
            type:Number,
            required:true,
            minlength:[1, "Capacity must be atleast 1"]
        },
        vehicleType:{
              type:String,
            required:true,
            enum:['car', 'bike', 'auto']
        },
        location:{
            lat:{
                type:Number,
                
            },
            lng:{
                type:Number,
            }
        }
    }
})

captainSchema.methods.generateAuthToken = function(){
    const toekn = jwt.sign({_id: this._id}, process.env.JWT_SECRET, {expiresIn: '24h'})
    return toekn;
}

captainSchema.methods.comparePassword = async function (password){
    return await bcrypt.compare(password, this,password);
}

captainSchema.statics.hashedPassword  = async function (password){
    return await bcrypt.hash(password, 10);
}


const captainModel  = mongoose.model('captain', captainSchema);
module.exports = captainModel;