import express from 'express';

const blogRouter = express.Router();

import { getBlog, postBlog } from '../controllers/blogController.js';

blogRouter.post('/post', postBlog);
blogRouter.get('/getposts', getBlog);
export default blogRouter;
