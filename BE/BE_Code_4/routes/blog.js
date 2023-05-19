const express = require('express');

const router = express.Router();

//Import controller
const { createComment } = require('../controllers/CommentController');
const { createPost } = require('../controllers/PostController');
//Create Mapping
router.post('/comments/create', createComment);
router.post('/posts/create', createPost);
//export the router
module.exports = router;
