const express = require("express");
const like_router =  new express.Router();
const likeController =  require("../controllers/likeController.js");
const authMiddleware = require("../middlewares/auth.js");


like_router.post('/posts/:postId/like', authMiddleware, likeController.like_post)
like_router.get('/posts/:postId/like', authMiddleware, likeController.total_likes)


module.exports = like_router;