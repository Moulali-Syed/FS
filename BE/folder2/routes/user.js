import express from 'express';
const userRouter = express.Router();

import { login, signup } from '../controllers/auth.js';
import { auth, isAdmin, isStudent } from '../middleware/auth.js';

userRouter.post('/login', login);
userRouter.post('/signup', signup);
userRouter.get('/test', auth, (req, res) => {
  res.status(200).json({
    msg: 'this is a protected test route',
  });
});

userRouter.get('/admin', auth, isAdmin, (req, res) => {
  return res.status(200).json({
    msg: 'this is an admin route',
  });
});

userRouter.get('/student', auth, isStudent, (req, res) => {
  return res.status(200).json({
    msg: 'this is a student route',
  });
});
export default userRouter;

/*

{
 
  "name":"Tomato",
  "email":"tomato@email.com",
  "password":"tomato@gmail",
  "role":"Student"
}

  "token": "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJlbWFpbCI6InRvbWF0b0BlbWFpbC5jb20iLCJpZCI6IjY0N2MyYTNlOWEyNjY4NTBiZGM2NjI0OCIsInJvbGUiOiJTdHVkZW50IiwiaWF0IjoxNjg1ODU4OTA0LCJleHAiOjE2ODU4NjYxMDR9.zJasrN7pWV8s6LKmY6sh9dD3yKXV9a4J81wwxtMkvVg",
--------
{
 
  "name":"Guava",
  "email":"guava@email.com",
  "password":"guava@gmail",
  "role":"Admin"
}

  "token": "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJlbWFpbCI6Imd1YXZhQGVtYWlsLmNvbSIsImlkIjoiNjQ3YzJhODcxOTU3MjQ1YzZlZGExMjBjIiwicm9sZSI6IkFkbWluIiwiaWF0IjoxNjg1ODU4OTc1LCJleHAiOjE2ODU4NjYxNzV9.Arya7YmpcXIkdcxeaO5e8XNSXEJE6Bjib5Noi47KLeU"
*/
