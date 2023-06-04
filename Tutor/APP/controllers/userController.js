import { User } from '../models/userModel.js';
import jwt from 'jsonwebtoken';

const createUser = async (req, res) => {
  try {
    const { name, email, password, city } = req.body;

    const userEmail = await User.findOne({ email });
    if (userEmail) {
      return res.json({
        msg: 'email already registered',
      });
    }
    const newUser = await User.create({ name, email, password, city });
    res.status(200).json({
      newUser,
    });
  } catch (err) {
    res.status(500).json({ err: err.message });
  }
};

const getUsers = async (req, res) => {
  try {
    const users = await User.find();
    res.json(users);
  } catch (err) {
    res.json({
      err: err.message,
    });
  }
};

const getUser = async (req, res) => {
  try {
    const { id } = req.params;

    // const user = await User.findById(id);
    const user = await User.findOne({ _id: id });
    res.json(user);
  } catch (err) {
    res.json({ err: err.message });
  }
};

const deleteUser = async (req, res) => {
  try {
    const id = req.params.id;
    const deletedUser = await User.findByIdAndDelete(id);
    res.json({
      res: deletedUser,
      msg: 'user deletion successful',
    });
  } catch (err) {
    res.json({ err: err.message });
  }
};

const updateUser = async (req, res) => {
  try {
    const id = req.params.id;
    const updatedUser = await User.findByIdAndUpdate(id, req.body, {
      new: true,
    });

    res.json(updatedUser);
  } catch (err) {
    res.json(err);
  }
};

const updatePassword = async (req, res) => {
  try {
    const { id } = req.params;
    const { password } = req.body;

    // const user = await User.find({ _id: id });
    // console.log(user[0].password);

    const user = await User.findById(id);
    if (user.password === password) {
      res.json({
        message: 'old and new password are same. Enter a New Password',
      });
    } else {
      const updatePwd = await User.findByIdAndUpdate(
        id,
        { password },
        { new: true }
      );
      res.json({ message: 'password updated successfully', data: updatePwd });
    }
  } catch (err) {
    res.json({
      msg: err.message,
    });
  }
};

const loginUser = async (req, res) => {
  try {
    const { email, password } = req.body;
    const findUser = await User.findOne({ email: email });
    // res.json(findUser);
    console.log(password);
    if (findUser && (await findUser.isPasswordMatched(password))) {
      // res.json({ msg: 'Login Successful' });
      const token = jwt.sign({ id: findUser?._id }, process.env.JWT_SECRET, {
        expiresIn: '1d',
      });
      res.json({ name: findUser?.name, email: findUser?.email, token: token });
    } else {
      res.json({ user: findUser, msg: 'Enter Valid Credentials' });
    }
  } catch (err) {
    console.log(err);
    res.json(err);
  }
};
export {
  createUser,
  getUsers,
  getUser,
  deleteUser,
  updateUser,
  updatePassword,
  loginUser,
};
