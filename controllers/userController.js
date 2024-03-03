const mongoose = require("mongoose");
const user_model = require("../models/userModel")

// registering the user in database
const register_user = async(req, res) =>{
    try{
        const new_user = new user_model(req.body);
        const userCreated = await new_user.save();
        res.send(userCreated);
    }catch(err){
        res.send(err);
    }
}

//getting all the register user
const get_user = async(req,res) =>{
    try{
        const all_user = await user_model.find();
        res.send(all_user);
    }
    catch(err){
        res.send(err)
    }
}

const delete_user = async(req,res) =>{
    try{
        const _id = req.params.id;
        const user = await user_model.findByIdAndDelete(_id);
        res.send(user);
    }catch(err){
        res.send(err);
    }
}


module.exports ={
    get_user,
    register_user,
    delete_user
}