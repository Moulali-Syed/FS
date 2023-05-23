const Like = require('../models/likeModel');
const Post = require('../models/postModel');

exports.likePost = async (req, res) => {
  try {
    const { post, user } = req.body;
    const like = new Like({ post, user });
    const savedLike = await like.save();

    //update the post collection
    const updatedPost = await Post.findByIdAndUpdate(
      post,
      {
        $push: { likes: savedLike._id },
      },
      { new: true }
    )
      .populate('likes')
      .exec();

    res.json({ post: updatedPost });
  } catch (err) {
    res.json({
      message: err.message,
    });
  }
};

//unlike post
exports.unlikePost = async (req, res) => {
  try {
    const { post, like } = req.body;
    //find and delete the like collection
    const deletedLike = await Like.findOneAndDelete({ post: post, _id: like });
    //update the post collection
    const updatedPost = await Post.findByIdAndUpdate(
      post,
      {
        $pull: { likes: deletedLike._id },
      },
      { new: true }
    );

    res.json({
      post: updatedPost,
    });
  } catch (err) {
    res.json({
      data: 'error while unliking post',
      message: err.message,
    });
  }
};
