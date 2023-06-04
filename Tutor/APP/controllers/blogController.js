import { blog } from '../models/blogModel.js';

export const postBlog = async (req, res) => {
  try {
    const post = await blog.create(req.body);
    res.json(post);
  } catch (err) {
    res.json({ err: err.message });
  }
};

export const getBlog = async (req, res) => {
  try {
    const posts = await blog.find().populate('postedBy');
    res.json(posts);
  } catch (err) {
    res.json(err);
  }
};
