const express = require('express');
const app = express();

//import dotenv to load env data
require('dotenv').config();
const PORT = process.env.PORT || 6000;

//middleware to parse json
app.use(express.json());

//import the route file
const blog = require('./routes/blog');
//mount the route
app.use('/api/v1', blog);

//connect to database
const database = require('./config/database');
database();

app.listen(PORT, () => {
  console.log(`Server is running at ${PORT}`);
});

app.get('/', (req, res) => {
  res.send(`<h1>This is HomePage</h1>`);
});
