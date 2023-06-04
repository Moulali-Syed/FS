const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');
const User = require('../models/User');
require('dotenv').config();

//signup route handler
exports.signup = async (req, res) => {
  try {
    const { name, email, password, role } = req.body;
    //check if user already exists
    const existingUser = await User.findOne({ email });
    if (existingUser) {
      return res
        .status(400)
        .json({ success: false, msg: 'email already registered' });
    }

    //secure the password
    let hashedPassword;
    try {
      hashedPassword = await bcrypt.hash(password, 10);
    } catch (err) {
      return res
        .status(500)
        .json({ success: false, msg: 'error in hashing password' });
    }

    //create user in DB
    const user = await User.create({
      name,
      email,
      password: hashedPassword,
      role,
    });

    return res.status(200).json({
      success: true,
      msg: 'user registered successfully',
    });
  } catch (err) {
    console.log(err);
    return res.status(500).json({
      success: false,
      msg: 'user cannot be registered , please try again later',
    });
  }
};

exports.login = async (req, res) => {
  try {
    //fetch data from req body
    const { email, password } = req.body;
    //validate email and password
    if (!email || !password) {
      return res
        .status(400)
        .json({ success: false, msg: 'Please fill all the details carefully' });
    }

    //find the user in database
    let user = await User.findOne({ email });
    if (!user) {
      return res.status(401).json({
        success: false,
      });
    }

    const payload = {
      email: user.email,
      id: user._id,
      role: user.role,
    };

    //verify password and generate jwt token
    if (await bcrypt.compare(password, user.password)) {
      //password match
      let token = jwt.sign(payload, process.env.JWT_SECRET, {
        expiresIn: '2h',
      });

      user = user.toObject();
      user.token = token;
      user.password = undefined;

      const options = {
        expires: new Date(Date.now() + 3 * 24 * 60 * 60 * 1000),
        httpOnly: true,
      };
      //cookie name , cookie data , options(3 parameters passed for cookie method)
      res.cookie('token', token, options).status(200).json({
        success: true,
        token,
        user,
        msg: 'user logged in successfully',
      });
    } else {
      //password not matched
      return res
        .status(403)
        .json({ success: false, msg: 'Incorrect password' });
    }
  } catch (err) {
    console.log(err);
    return res.status(500).json({ success: false, msg: 'login failure' });
  }
};
