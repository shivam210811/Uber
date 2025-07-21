const mongoose = require('mongoose');

const userShema = new mongoose.Schema({
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
        email:{
            type:String,
            required:true,
            unique:true,
            minlength:[5, 'Email must have 5 character or long']
        },
        password:{
            type:String,
            required:true
        },
        socketId:{
            type:String,
        },
    }
})