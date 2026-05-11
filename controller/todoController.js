const TodoModel = require('../model/todoModel');

//Crud
const getAllTodos = async (req, res) => {
  try {
    const getAll = await TodoModel.find();
    return res.status(200).json({ message: "Data retrieved successfully", data: getAll });
  } catch (error) {
    return res.status(500).json({ message: "Error retrieving data", error: error.message });
  }
};

const getOneTodo = async (req, res) => {
  try {
    const getOne = await TodoModel.findById(req.params.id);
    return res.status(200).json({ message: "To-do list found", data: getOne });
  }
  catch (error) {
    return res.status(500).json({ message: "Error retrieving data", error: error.message });
  }
};

const createOneTodo = async (req, res) => {
  try {
  const {title, details} = req.body;
  const createTodo = await TodoModel.create({title, details});
  return res.status(201).json({message : "Todo created successfully" , data : createTodo})
  } catch (err) {
    return res.status(500).json({message : err.message})
  }
};

const updateTodo = async (req, res) => {
  try {
    const {completed} = req.body;
    const update_Todo = await TodoModel.findByIdAndUpdate(req.params.id, {completed : true}, {new : true});
    return res.status(201).json({message : "Update successfull" , data : update_Todo})
  } catch (err) {
    return res.status(500).json({message : "Update failed" , error: err.message})
  }
};

const deleteTodo = async (req, res) => {
  try {
    const {id} = req.params;
    const delete_Todo = await TodoModel.findByIdAndDelete(id);
    return res.status(200).json({message : "Todo deleted"});
  } catch (err) {
    return res.status(500).json({error: err.message});
  }
}

module.exports = {getAllTodos, getOneTodo, updateTodo, createOneTodo, deleteTodo};


