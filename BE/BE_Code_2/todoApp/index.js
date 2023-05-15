const express = require('express');
const app = express();

//load config from env file
require('dotenv').config();
const PORT = process.env.PORT || 4000;

//middleware to parse json request body
app.use(express.json());

//import routes for TODO API
const todoRoutes = require('./routes/todos');

//mount the TODO API routes
app.use('/api/v1', todoRoutes);

//start server
app.listen(PORT, () => {
  console.log(`Server started successfully at port ${PORT}`);
});

//connect to the Database
const dbConnect = require('./config/database');
dbConnect();

//we must also specify default route
app.get('/', (req, res) => {
  res.send(`<h1>This is homePage</h1>`);
});
