import express from 'express';
const app = express();

import cookieParser from 'cookie-parser';
app.use(cookieParser());
app.use(express.json());

import dotenv from 'dotenv';
dotenv.config();

import userRouter from './routes/user.js';
app.use('/api/v1', userRouter);

import dbConnect from './config/dbConnect.js';
dbConnect();

const PORT = process.env.PORT || 4000;

app.listen(PORT, () => {
  console.log(`server is running at ${PORT}`);
});
