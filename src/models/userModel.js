const mongoose = require("mongoose")

const UserSchema = new mongoose.Schema({
    FullName:{
        type:String,
        required:true
    },
    Number:{
        type:Number,
        required:true,
        
    },
    email:{
        type:String,
        required:true,
        unique:true,
        lowercase:true
    },
    Password:{
        type:String,
        required:true
    }
})
 
const UserModel =  mongoose.model("users",UserSchema)


module.exports = UserModel