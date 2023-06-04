import mongoose from 'mongoose';
import bcrypt from 'bcrypt';
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
    password: {
      type: String,
      required: (true, 'password is required'),
    },
    city: {
      type: String,
      required: true,
    },
  },
  { timestamps: true }
);

//next is middleware
userModel.pre('save', async function (next) {
  const salt = await bcrypt.genSalt(10);
  this.password = await bcrypt.hash(this.password, salt);
  next();
});

userModel.methods.isPasswordMatched = async function (enteredPassword) {
  return await bcrypt.compare(enteredPassword, this.password);
};
export const User = mongoose.model('User', userModel);
