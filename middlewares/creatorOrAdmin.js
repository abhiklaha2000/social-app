const Post = require("../models/postModel");

const creatorOrAdmin = async (req, res, next) => {
    const user = req.user;
    if(user.isAdmin){
        return next();
    }

    const post = await Post.findById(req.params.id);
    const post_creator = post.user.toString()

    if(post_creator === user._id){
        return next();
    }
    
    return res.status(401).json({ message: 'You must be a Admin or Creator of this post' });
}

module.exports = creatorOrAdmin;