const Like = require("../models/likeModel");
const Post = require("../models/postModel");
var mongoose = require('mongoose');

const like_post = async(req, res) => {
    try{
        const already_liked = await Like.findOne({post: req.params.postId, user: req.user._id});
         
        if(already_liked){
            const unlike = await Like.findByIdAndDelete(already_liked._id);
            const post_unlike = await Post.findById(req.params.postId);
            post_unlike.likes.remove(req.user._id);
            await post_unlike.save();
            return res.send(unlike);
        }

        const like = await Like({
            post: req.params.postId,
            user: req.user._id
        })

        const new_like = await like.save();

        const post = await Post.findById(req.params.postId);
        post.likes.push(req.user._id);
        await post.save();

        res.send(new_like);
    }catch(err){
        res.send(err)
    }
}

const total_likes = async (req, res) => {
    try{
        const total_likes = await Like.countDocuments({post: req.params.postId});
        res.send({likes: total_likes});
    }catch(err){
        res.send(err);
    }
    
}

module.exports = {
    like_post,
    total_likes
}