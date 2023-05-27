import { User } from '../models/userModel.js';

const createUser = async (req, res) => {
  try {
    const { name, email } = req.body;

    const userEmail = await User.findOne({ email });
    if (userEmail) {
      return res.json({
        msg: 'email already registered',
      });
    }
    console.log(req.body);
    const newUser = await User.create({ name, email });
    res.status(200).json({
      newUser,
    });
  } catch (err) {
    res.status(500).json({ err: err.message });
  }
};

export { createUser };
