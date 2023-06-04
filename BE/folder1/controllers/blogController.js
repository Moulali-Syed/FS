import { Post } from '../models/Post.js';
import { Comment } from '../models/Comment.js';
import { Like } from '../models/Like.js';

export const createPost = async (req, res) => {
  try {
    const { title, desc } = req.body;
    const post = await Post.create({ title, desc });

    res.status(200).json({
      success: true,
      post,
    });
  } catch (err) {
    res.status(400).json({
      msg: err.message,
    });
  }
};

export const createComment = async (req, res) => {
  try {
    const { comment, user, post } = req.body;
    const commentCreated = await Comment.create({ comment, user, post });

    const updatedPost = await Post.findByIdAndUpdate(
      post,
      {
        $push: { comments: commentCreated._id },
      },
      { new: true }
    );

    return res.status(200).json({
      success: true,
      updatedPost,
    });
  } catch (err) {
    res.status(400).json({
      msg: err.message,
    });
  }
};

export const createCommentDetailed = async (req, res) => {
  try {
    const { comment, user, post } = req.body;
    const commentCreated = await Comment.create({ comment, user, post });

    const updatedPost = await Post.findByIdAndUpdate(
      post,
      {
        $push: { comments: commentCreated._id },
      },
      { new: true }
    )
      .populate('comments')
      .exec();

    return res.status(200).json({
      success: true,
      updatedPost,
    });
  } catch (err) {
    res.status(400).json({
      msg: err.message,
    });
  }
};

export const likePost = async (req, res) => {
  try {
    const { user, post } = req.body;
    const likedPost = await Like.create({ user, post });

    const updatedPost = await Post.findByIdAndUpdate(
      post,
      { $push: { likes: likedPost._id } },
      { new: true }
    );

    return res.status(200).json({
      success: true,
      updatedPost,
    });
  } catch (err) {
    res.status(400).json({
      msg: err.message,
    });
  }
};

export const unLikePost = async (req, res) => {
  try {
    const { like, post } = req.body;
    const deleteLike = await Like.findOneAndDelete({ post, _id: like });

    const updatePost = await Post.findByIdAndUpdate(
      post,
      {
        $pull: { likes: deleteLike._id },
      },
      { new: true }
    );

    res.json({
      updatePost,
    });
  } catch (err) {
    res.status(400).json({
      msg: err.message,
    });
  }
};

export const getAllPosts = async (req, res) => {
  try {
    const allPosts = await Post.find({})
      .populate('likes')
      .populate('comments')
      .exec();
    return res.status(200).json({
      allPosts,
    });
  } catch (err) {
    return res.status(400).json({
      msg: err.message,
    });
  }
};
