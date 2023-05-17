// step1 - import the model
const Todo = require('../models/Todo');

exports.deleteTodo = async (req, res) => {
  try {
    const { id } = req.params;
    console.log(req.params.id);
    await Todo.findByIdAndDelete(id);

    res.json({
      success: true,
      message: 'data deleted successfully',
    });
  } catch (err) {
    console.error(err);
    res.status(500).json({
      success: false,
      data: 'Internal Server Error',
      error: err.message,
    });
  }
};
