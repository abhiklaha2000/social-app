const mongoose = require("mongoose");
const uri =  require("../db/conn");

const userSchema = new mongoose.Schema({
    username:{
        type:String,
        required:true
    },
    email:{
        type:String,
        required:true
    },
    password:{
        type:String,
        required:true
    },
    isAdmin:{
        type:Boolean,
        default:false
    },
    token:{
        type:String,
        default:""
    },
    posts:[{type:mongoose.Schema.ObjectId, ref:'Post', default:""}]

},{timestamps:true})


// creating a collection 
const user = new mongoose.model("User", userSchema);

module.exports = user;
