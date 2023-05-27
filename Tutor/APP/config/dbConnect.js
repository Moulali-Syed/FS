import mongoose from 'mongoose';

const dbConnect = () => {
  try {
    mongoose.connect(process.env.MONGODB_URL);
    console.log('db Connection Successful');
  } catch (err) {
    console.log(err.message);
  }
};

export default dbConnect;
