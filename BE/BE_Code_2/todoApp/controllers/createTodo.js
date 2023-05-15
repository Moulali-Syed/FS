// step1 - import the model
const Todo = require('../models/Todo');
// const todo = require('../models/Todo');

//define the route handler
exports.createTodo = async (req, res) => {
  try {
    //extract title and description from request body
    const { title, description } = req.body;

    //   create a new Todo and insert in DB
    const response = await Todo.create({ title, description });

    //send a json response with success flag
    res.status(200).json({
      success: true,
      data: response,
      message: 'Entry Created Successfully',
    });
  } catch (err) {
    console.error(err);
    console.log(err);
    res.status(500).json({
      success: false,
      data: 'Internal Server Error',
      message: err.message,
    });
  }
};
