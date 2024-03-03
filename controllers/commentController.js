const Comment = require("../models/commentModel");
const Post = require("../models/postModel");

const create_comment = async (req,res) =>{
    try{
        const comment =  new Comment({
            ...req.body,
            post: req.params.postId
        });
        const new_comment = await comment.save();

        const post = await Post.findById(req.params.postId);
        post.comments.push(new_comment._id);
        await post.save();

        res.send(new_comment);
    }catch(e){
        res.send(e);
    }
}

const get_comments = async (req, res) => {
    try{
        const comments = await Comment.find({post: req.params.postId})
        return res.send(comments);
    }catch(err){
        res.send(err);
    }
}

module.exports = {
    create_comment,
    get_comments
}