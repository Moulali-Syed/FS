const mongoose = require('mongoose');

require('dotenv').config();

exports.dbConnect = () => {
  mongoose
    .connect(process.env.DB_URL, {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    })
    .then(() => {
      console.log('DB Connection successful');
    })
    .catch((err) => {
      console.log('error connecting database');
      console.log(err);
      process.exit(1);
    });
};
