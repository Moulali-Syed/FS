//create app
const express = require('express');
const app = express();

//find the PORT
require('dotenv').config();
const PORT = process.env.PORT || 4000;

//add middleware
app.use(express.json());
//add the middleware for uploading files
//we have to install npm i express-fileupload   or we can use multer
const fileupload = require('express-fileupload');
app.use(fileupload());

//connect to DB
const dbConnect = require('./config/database');
dbConnect.connect();

//connect to cloud
const cloudinary = require('./config/cloudinary');
cloudinary.cloudinaryConnect();

//mount the route
const Upload = require('./routes/FileUpload');
app.use('/api/v1/upload', Upload);

//activate server
app.listen(PORT, () => {
  console.log('server is up n running');
});
