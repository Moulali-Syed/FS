const express = require('express');
const userauthRouter = express.Router();

const { login, signup } = require('../controllers/auth.js');
const { auth, isStudent, isAdmin } = require('../middlewares/auth.js');

userauthRouter.post('/login', login);
userauthRouter.post('/signup', signup);

//Protected Routes - access is based on role

userauthRouter.get('/test', auth, (req, res) => {
  res.json({
    success: true,
    message: 'Welcome to Protected Route for TESTS',
  });
});

userauthRouter.get('/student', auth, isStudent, (req, res) => {
  res.json({
    success: true,
    message: 'Welcome to Protected Route for Students',
  });
});

userauthRouter.get('/admin', auth, isAdmin, (req, res) => {
  res.json({
    success: true,
    message: 'Welcome to Protected Route for Admin',
  });
});
module.exports = userauthRouter;
