const mongoose = require("mongoose");

const commentSchema = new mongoose.Schema({
    commentText:{
        type:String,
        required:true
    },
    post:{
        type:mongoose.Schema.Types.ObjectId,
        ref:'Post'
    }
})

const comment = new mongoose.model("Comment",commentSchema);

module.exports = comment;