const createUser = async (req, res) => {
  try {
    res.json({
      success: true,
    });
  } catch (err) {
    throw new Error(err.message);
  }
};
const deleteUser = async (req, res) => {
  try {
    const { id } = req.params;
    res.json({
      success: true,
      id: id,
    });
  } catch (err) {
    throw new Error(err.message);
  }
};
module.exports = { createUser, deleteUser };
