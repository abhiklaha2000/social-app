const Post =  require("../models/postModel");
const User = require("../models/userModel")

// create post
const create_post  = async(req,res) => {
    try{
        const post = new Post({
            ...req.body,
            user: req.user._id
        });
        const new_post = await post.save();
        res.send(new_post);
    }catch(err){
        console.log(err);  
    }
}

// get all post
const get_post = async(req,res) =>{
    try{
        const posts = await Post.find();
        res.send(posts);
    }catch(err){
        res.send(err);
    }
}

// getting a post by ID
const get_postbyId = async(req,res) => {
    try{
        const _id = req.params.id;
        const post = await Post.findById(_id);
        res.send(post);
    }catch(err){
        res.send(err);
    }
}

// Updating a post by ID
const update_post = async(req,res) =>{
    try{
        const _id = req.params.id;
        const updated_post = await Post.findByIdAndUpdate(_id, req.body , {
            new:true
        });
        res.send(updated_post);
    }catch(err){
        res.send(err);
    }
}

//delete a post by ID
const delete_post = async(req,res)=>{
    try{
        const _id = req.params.id;
        const deleted_post = await Post.findByIdAndDelete(_id);
        res.send(deleted_post);
    }
    catch(err){
        res.send(err);
    }
}

module.exports = {
    create_post,
    get_post,
    get_postbyId,
    update_post,
    delete_post
}