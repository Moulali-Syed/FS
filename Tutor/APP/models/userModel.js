import mongoose from 'mongoose';
const userModel = new mongoose.Schema(
  {
    name: {
      type: String,
      required: (true, 'Name is Required'),
      minlength: 3,
      maxlength: 30,
    },
    email: {
      type: String,
      required: (true, 'Email is Required'),
    },
  },
  { timestamps: true }
);

export const User = mongoose.model('User', userModel);
