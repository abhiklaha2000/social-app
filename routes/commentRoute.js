const express = require("express");
const comment_router =  new express.Router();
const commentController =  require("../controllers/commentController.js");
const authMiddleware = require("../middlewares/auth.js");

comment_router.post('/posts/:postId/comments', authMiddleware, commentController.create_comment);
comment_router.get('/posts/:postId/comments', authMiddleware, commentController.get_comments)

module.exports = comment_router;