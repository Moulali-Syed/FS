import express from 'express';

const userRouter = express.Router();

import {
  createUser,
  getUsers,
  getUser,
  deleteUser,
  updateUser,
  updatePassword,
  loginUser,
} from '../controllers/userController.js';

userRouter.post('/create-user', createUser);
userRouter.get('/all-users', getUsers);
userRouter.get('/user/:id', getUser);
userRouter.delete('/user-delete/:id', deleteUser);
userRouter.put('/user-update/:id', updateUser);
userRouter.put('/update-pwd/:id', updatePassword);
userRouter.post('/login', loginUser);

export default userRouter;

/*

    "newUser": {
        "name": "demouser",
        "email": "user21@gmail.com",
        "password": "$2b$10$lPcdsIMnfbbDCrRvykmoT.4gfGvSV8V9SGpNYzG8NuepKFTW90rMy",
        "city": "delhi",
        "_id": "647873d6a64d27afdf1c840c",
        "createdAt": "2023-06-01T10:32:54.923Z",
        "updatedAt": "2023-06-01T10:32:54.923Z",
        "__v": 0
    }
*/
