const express = require("express");
const post_router =  new express.Router();
const postController =  require("../controllers/postController.js");
const authMiddleware = require("../middlewares/auth");
const creatorOrAdmin = require("../middlewares/creatorOrAdmin");

post_router.post('/posts', authMiddleware, postController.create_post);
post_router.get('/posts', authMiddleware, postController.get_post);
post_router.get('/posts/:id', authMiddleware, postController.get_postbyId);
post_router.patch('/posts/:id', authMiddleware, creatorOrAdmin, postController.update_post);
post_router.delete('/posts/:id', authMiddleware, creatorOrAdmin, postController.delete_post);
  
module.exports = post_router;