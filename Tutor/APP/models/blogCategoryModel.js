import mongoose from 'mongoose';

const blogCategorySchema = new mongoose.Schema(
  {
    title: {
      type: String,
      required: true,
      unique: true,
    },
    slug: {
      type: String,
      required: true,
      minLength: 4,
      unique: true,
    },
  },
  { timestamps: true }
);

export const BlogCatModel = mongoose.model('BlogCategory', blogCategorySchema);
