const createUser = async (req, res) => {
  try {
    res.json({ status: true });
  } catch (err) {
    throw new Error(err);
  }
};

const deleteUser = async (req, res) => {
  try {
    const { id } = req.params;
    res
      .status(200)
      .json({ status: true, message: 'deleted', id, data: req.body });
  } catch (err) {
    throw new Error(err);
  }
};
module.exports = { createUser, deleteUser };
