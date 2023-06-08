import express from 'express';
import { postCategory } from '../controllers/blog/blogCategoryController.js';

const blogCatRouter = express.Router();

blogCatRouter.post('/post', postCategory);
export default blogCatRouter;
