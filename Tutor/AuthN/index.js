import express from 'express';
const app = express();

import dotenv from 'dotenv';
dotenv.config();

import userRouter from './routes/userRoutes.js';

app.use(express.json());

app.use('/api/v1', userRouter);

import dbConnect from './config/dbConnect.js';
dbConnect();

app.listen(process.env.PORT, () => {
  console.log(`Server is running at ${process.env.PORT}`);
});
