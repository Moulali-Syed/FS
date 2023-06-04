import jwt from 'jsonwebtoken';
import dotenv from 'dotenv';
dotenv.config();

export const auth = async (req, res, next) => {
  try {
    const token =
      req.body.token || req.cookies.token || req.header('Authorization');
    if (!token) {
      return res.status(400).json({
        msg: 'token not found',
      });
    }

    try {
      const decode = jwt.verify(token, process.env.JWT_SECRET);

      req.user = decode;
    } catch (err) {
      return res.status(401).json({
        mag: 'token is invalid',
      });
    }
    next();
  } catch (err) {
    res.status(400).json({
      msg: err.message,
    });
  }
};

export const isStudent = (req, res, next) => {
  try {
    if (req.user.role !== 'Student') {
      return res.status(401).json({
        success: false,
        msg: 'This is a protected route for student',
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

export const isAdmin = (req, res, next) => {
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
