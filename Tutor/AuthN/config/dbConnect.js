import mongoose from 'mongoose';

const dbConnect = () => {
  mongoose
    .connect(process.env.MONGO_URL, {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    })
    .then(() => {
      console.log('DB Connection Successful');
    })
    .catch((err) => {
      console.error(err);
      console.log(err.message);
      process.exit(1);
    });
};

export default dbConnect;
