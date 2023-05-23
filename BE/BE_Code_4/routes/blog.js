const express = require('express');

const router = express.Router();

//Import controller
const {
  createComment,
  dummyContent,
} = require('../controllers/CommentController');
const { createPost, getAllPost } = require('../controllers/PostController');
const { likePost, unlikePost } = require('../controllers/likeController');
//Create Mapping
router.post('/comments/create', createComment);
router.post('/posts/create', createPost);
router.get('/posts', getAllPost);
router.post('/likes/like', likePost);
router.post('/likes/unlike', unlikePost);

router.get('/posts/dummy', dummyContent);
//export the router
module.exports = router;
