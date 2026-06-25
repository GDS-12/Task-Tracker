const Task = require("../models/Task");

// GET ALL TASKS
const getTasks = async (req, res) => {
  const tasks = await Task.find();
  res.json(tasks);
};

// ADD TASK
const createTask = async (req, res) => {
  const task = await Task.create({
    title: req.body.title,
  });

  res.json(task);
};

// TOGGLE TASK
const toggleTask = async (req, res) => {
  const task = await Task.findById(req.params.id);

  task.completed = !task.completed;

  await task.save();

  res.json(task);
};

// DELETE TASK
const deleteTask = async (req, res) => {
  await Task.findByIdAndDelete(req.params.id);

  res.json({ message: "Task deleted" });
};

module.exports = {
  getTasks,
  createTask,
  toggleTask,
  deleteTask,
};