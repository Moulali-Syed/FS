import mongoose from 'mongoose';

const likeSchema = new mongoose.Schema({
  user: {
    type: String,
    required: true,
  },
  post: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'Post',
  },
});

export const Like = mongoose.model('Like', likeSchema);
