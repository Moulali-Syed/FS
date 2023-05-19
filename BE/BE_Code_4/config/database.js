const mongoose = require('mongoose');

require('dotenv').config();

const database = () => {
  mongoose
    .connect(process.env.DATABASE_URL, {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    })
    .then(() => {
      console.log('Database connected successfully');
    })
    .catch((err) => {
      console.log(err);
      console.log('error connecting to database');
      process.exit(1);
    });
};

module.exports = database;
