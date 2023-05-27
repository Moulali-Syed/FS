import express from 'express';

const userRouter = express.Router();

import { createUser } from '../controllers/userController.js';

userRouter.post('/create-user', createUser);

export default userRouter;
