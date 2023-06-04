//auth , isStudent , isAdmin

const jwt = require('jsonwebtoken');
require('dotenv').config();

exports.auth = (req, res, next) => {
  try {
    //extract jwt token
    //we can fetch token from header / body/cookies
    console.log(req.body.token);
    console.log(req.cookies.token);
    // console.log(req.header('Authorization').replace('Bearer ', ''));

    const token =
      // req.body.token ||
      // req.cookies.token ||
      // req.header('Authorization').replace('Bearer ', '');
      req.body.token || req.cookies.token || req.header('Authorization');
    if (!token) {
      return res.status(401).json({ success: false, message: 'Token missing' });
    }

    //verfiy the token
    try {
      const decode = jwt.verify(token, process.env.JWT_SECRET);
      console.log(decode);
      req.user = decode;
    } catch (err) {
      return res
        .status(401)
        .json({ success: false, messsage: 'token in invalid' });
    }
    next();
  } catch (err) {
    return res.status(401).json({
      success: false,
      message: 'Something went wrong , while verifying token',
    });
  }
};

exports.isStudent = async (req, res, next) => {
  try {
    if (req.user.role !== 'Student') {
      return res
        .status(401)
        .json({ success: false, msg: 'This is a protected route for student' });
    }
    next();
  } catch (err) {
    return res.status(500).json({
      success: false,
      msg: 'user role not matching',
    });
  }
};

exports.isAdmin = async (req, res, next) => {
  try {
    if (req.user.role !== 'Admin') {
      return res.status(401).json({
        success: false,
        msg: 'This is a protected route for Admin',
      });
    }
    next();
  } catch (err) {
    return res.status(500).json({
      success: false,
      msg: 'user role not matching',
    });
  }
};
