import mongoose from 'mongoose';

const dbConnect = () => {
  mongoose
    .connect(process.env.DB_URL, {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    })
    .then(() => {
      console.log('DB Connection successful');
    })
    .catch((err) => {
      console.log('error connecting database ');
    });
};

export default dbConnect;
