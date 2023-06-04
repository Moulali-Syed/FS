import bcrypt from 'bcrypt';
import { User } from '../models/User.js';
import jwt from 'jsonwebtoken';

export const signup = async (req, res) => {
  try {
    const { name, email, password, role } = req.body;

    //check if email is already registered
    const checkEmail = await User.findOne({ email: email });
    if (checkEmail) {
      return res.status(400).json({
        msg: 'email already registered',
      });
    }

    //hash the password
    let hashedPassword;
    try {
      hashedPassword = await bcrypt.hash(password, 10);
    } catch (err) {
      return res.status(400).json({
        msg: 'error in hashing password',
      });
    }

    //now create entry in db
    const user = await User.create({
      name,
      email,
      password: hashedPassword,
      role,
    });

    return res.status(200).json({
      success: true,
      msg: 'user registartion successful',
    });
  } catch (err) {
    return res.status(400).json({
      msg: err.message,
    });
  }
};

export const login = async (req, res) => {
  try {
    const { email, password } = req.body;
    if (!email || !password) {
      return res.status(400).json({
        msg: 'please enter both email and password',
      });
    }

    //check if email present in DB
    let user = await User.findOne({ email: email });
    if (!user) {
      return res.status(400).json({
        msg: 'Please register',
      });
    }

    const payload = {
      email: user.email,
      id: user._id,
      role: user.role,
    };

    //verify password and generate jwt token
    if (await bcrypt.compare(password, user.password)) {
      //generate jwt token
      const token = jwt.sign(payload, process.env.JWT_SECRET, {
        expiresIn: '2h',
      });

      user = user.toObject();
      user.token = token;
      user.password = undefined;

      const options = {
        expires: new Date(Date.now() + 3 * 24 * 60 * 60 * 1000),
        httpOnly: true,
      };

      //cookie
      res.cookie('token', token, options).status(200).json({
        success: true,
        token,
        user,
        msg: 'user logged in successfully',
      });
    } else {
      return res.status(400).json({
        msg: 'password is incorrect',
      });
    }
  } catch (err) {
    return res.status(400).json({
      msg: 'error in login',
      data: err.message,
    });
  }
};

/*
{
 
  "name":"Grapes",
  "email":"grapes@email.com",
  "password":"grapes@gmail",
  "role":"Student"
}

*/
