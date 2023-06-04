import express from 'express';
import {
  deleteUser,
  createUser,
  getAllUsers,
  getUser,
  updateUser,
  updatePassword,
} from '../controllers/userController.js';

const userRouter = express.Router();

userRouter.post('/create-user', createUser);
userRouter.get('/get-users', getAllUsers);
userRouter.get('/get-user/:id', getUser);
userRouter.put('/update-user/:id', updateUser);
userRouter.delete('/delete-user/:id', deleteUser);
userRouter.put('/update-pwd', updatePassword);

export default userRouter;
