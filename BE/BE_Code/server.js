// 1.Create a folder
//2.Move into that folder
// 3. npm init -y
// 4.open folder using vscode
// 5.npm i express
// 6.create a server.js

// Server Instantiated
const express = require('express');
const app = express();

//used to parse req.body in express - used in case of PUT and POST
const bodyParser = require('body-parser');

//specifically parse json data and add it to the request.body object
app.use(bodyParser.json());

//activate the server on 3000 port
app.listen(3000, () => {
  console.log('server started at port 3000');
});

// Creating a Routes
app.get('/', (req, res) => {
  res.send('hello from server');
});

app.post('/api/cars', (req, res) => {
  const { name, brand } = req.body;
  console.log(name);
  console.log(brand);
  res.send('Car submitted successfully');
});

const mongoose = require('mongoose');
mongoose
  .connect('mongodb://localhost:27017/myDatabase', {
    useNewurlParser: true,
    useUnifiedTopology: true,
  })
  .then(() => {
    console.log('Connection Successful');
  })
  .catch((err) => {
    console.log('Received an error');
  });
