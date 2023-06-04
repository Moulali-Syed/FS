import express from 'express';

const app = express();

import dotenv from 'dotenv';
dotenv.config();

app.use(express.json());

const PORT = process.env.PORT || 4000;

import dbConnect from './config/dbConnect.js';
import blogRouter from './routes/blogRoutes.js';
dbConnect();
app.use('/api/v1', blogRouter);

app.listen(PORT, () => {
  console.log('server is up and running');
});
