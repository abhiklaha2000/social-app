const mongoose =  require("mongoose");

const postSchema = new mongoose.Schema({
    title:{
       type:String,
       required:true
    },
    body:{
        type:String,
        required:true
    },
    tags:{
        type:String,
        default:""
    }, 
    user:{
        type:mongoose.Schema.Types.ObjectId,
        ref:'User'
    },
    comments:[{
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Comment'
    }],
    likes: [{
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Like'
    }]
})

const post = new mongoose.model("Post",postSchema);

module.exports = post;