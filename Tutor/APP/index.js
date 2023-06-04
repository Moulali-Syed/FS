import express from 'express';
import * as dotenv from 'dotenv';
import userRouter from './routes/userRoutes.js';
dotenv.config();
import dbConnect from './config/dbConnect.js';
import blogRouter from './routes/blogRoutes.js';
const PORT = process.env.PORT || 4000;
const app = express();
app.use(express.json());

dbConnect();

app.use('/api/v1', userRouter);
app.use('/api/v1', blogRouter);

app.get('/', (req, res) => {
  res.send('Hello from server');
});

app.listen(PORT, () => {
  console.log(`server is running at localhost://${PORT}`);
});
