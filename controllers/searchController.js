const Post = require("../models/postModel");

const search = async (req, res) => {
    try{
        const q = req.query.q;
        const posts = await Post.find({
            $or: [
                {body: { $regex : ".*" + q + ".*", $options: "i"}},
                {title: { $regex : ".*" + q + ".*", $options: "i"}},
                {tags: { $regex : ".*" + q + ".*", $options: "i"}},
            ]
        });

        res.send(posts);
    }catch(err){
        res.send(err);
    }
}

module.exports = {
    search
}