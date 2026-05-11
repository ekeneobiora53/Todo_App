const express = require('express');
const router = express.Router();
const { getAllTodos, createOneTodo, updateTodo, deleteTodo, getOneTodo} = require('../controller/todoController');


router.get("/all-todos", getAllTodos);
router.get("/one-todo/:id", getOneTodo);
router.post("/create-todo", createOneTodo);
router.patch("/update-todo/:id", updateTodo);
router.delete("/delete-todo/:id", deleteTodo);

module.exports = router;

