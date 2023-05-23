const express = require('express');
const { createUser, deleteUser } = require('../../controllers/User/User');

const userRouter = express.Router();

userRouter.post('/register', createUser);
userRouter.delete('/delete-user/:id', deleteUser);

module.exports = userRouter;
