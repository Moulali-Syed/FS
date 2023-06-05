const express = require('express');
const userRouter = express.Router();

const { createUser, deleteUser } = require('../controllers/userController.js');

userRouter.post('/create', createUser);

userRouter.delete('/delete/:id', deleteUser);
module.exports = userRouter;
