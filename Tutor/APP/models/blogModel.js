import mongoose from 'mongoose';

const blogSchema = new mongoose.Schema(
  {
    title: {
      required: true,
      type: String,
    },
    desc: {
      required: true,
      type: String,
    },
    postedBy: {
      type: mongoose.Schema.Types.ObjectId,
      ref: 'User',
      required: true,
    },
  },
  { timestamps: true }
);

export const blog = mongoose.model('Blog', blogSchema);
