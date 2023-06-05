const mongoose = require('mongoose');

require('dotenv').config();

exports.connect = () => {
  mongoose
    .connect(process.env.DB_URL, {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    })
    .then(() => {
      console.log('DB Connection successful');
    })
    .catch((err) => {
      console.log(err.message);
      process.exit(1);
    });
};
