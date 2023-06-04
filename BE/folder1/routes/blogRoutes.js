import express from 'express';
import {
  createComment,
  createPost,
  getAllPosts,
  likePost,
  unLikePost,
} from '../controllers/blogController.js';

const blogRouter = express.Router();

blogRouter.post('/create-post', createPost);
blogRouter.post('/create-comment', createComment);
blogRouter.post('/like', likePost);
blogRouter.get('/all-posts', getAllPosts);
blogRouter.post('/unlike', unLikePost);

export default blogRouter;
