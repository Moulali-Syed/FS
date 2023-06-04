import { User } from '../models/userModel.js';

export const createUser = async (req, res) => {
  try {
    const { name, email, password, city } = req.body;
    const user = await User.create({ name, email, password, city });

    return res.json({
      success: true,
      msg: 'user created successfully',
      user,
    });
  } catch (err) {
    return res.status(500).json({
      msg: 'error in creating user',
      error: err.message,
    });
  }
};

export const getAllUsers = async (req, res) => {
  try {
    const users = await User.find({});

    return res.status(200).json({
      success: true,
      msg: 'user created successfully',
      users,
    });
  } catch (err) {
    return res.status(400).json({
      success: false,
      msg: 'error fetching users',
      error: err.message,
    });
  }
};

export const getUser = async (req, res) => {
  try {
    const { id } = req.params;
    const user = await User.findOne({ _id: id });
    if (!user) {
      return res.json({
        msg: 'User details not found',
      });
    }
    return res.status(200).json({
      success: true,
      user,
    });
  } catch (err) {
    return res.status(400).json({
      success: false,
      msg: err.message,
    });
  }
};

export const updateUser = async (req, res) => {
  try {
    const { id } = req.params;
    const { city } = req.body;
    const updatedUser = await User.findByIdAndUpdate(
      { _id: id },
      { city },
      { new: true }
    );
    return res.status(200).json({
      success: true,
      msg: 'user updated successfully',
      data: updatedUser,
    });
  } catch (err) {
    return res.json({
      success: false,
      msg: 'error in updating data',
      data: err.message,
    });
  }
};

export const deleteUser = async (req, res) => {
  try {
    const { id } = req.params;
    const deletedUser = await User.findByIdAndDelete({ _id: id });
    return res.status(200).json({
      msg: 'user deleted successfully',
    });
  } catch (err) {
    return res.status(400).json({
      msg: err.message,
    });
  }
};

export const updatePassword = async (req, res) => {
  try {
    console.log('hi');
    const { email, password } = req.body;
    const user = await User.findOne({ email });
    console.log('User', user);
    if (!user) {
      return res.json({ msg: 'user not found' });
    }
    const id = user.id;
    console.log('ID', id);
    const updatedPwd = await User.findByIdAndUpdate(
      { _id: id },
      { password },
      { new: true }
    );

    return res.json({
      msg: 'updated details successfully',
      updatedPwd,
    });
  } catch (err) {
    return res.json({
      msg: 'error updating in password',
      data: err.message,
    });
  }
};
