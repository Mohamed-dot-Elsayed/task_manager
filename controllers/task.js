const Task = require("../models/Task");
const asyncWrap = require("../middleware/async");
const { createCustomError } = require("../errors/costum-error");

const getAllTasks = asyncWrap(async (req, res) => {
  const tasks = await Task.find({});
  res.status(200).json({ tasks });
});

const getTaskById = asyncWrap(async (req, res, next) => {
  const { id: taskID } = req.params;
  const task = await Task.findOne({ _id: taskID });
  if (!task) {
    return next(createCustomError(`No task with id: ${taskID}`, 404));
  }
  res.status(200).json({ task });
});

const updateTask = asyncWrap(async (req, res, next) => {
  const { id: taskID } = req.params;
  const task = await Task.findOneAndUpdate({ _id: taskID }, req.body, {
    new: true,
    runValidators: true,
  });
  if (!task) {
    return next(createCustomError(`No task with id: ${taskID}`, 404));
  }
  res.status(200).json({ task });
});

const deleteTask = asyncWrap(async (req, res, next) => {
  const { id: taskID } = req.params;
  const task = await Task.findOneAndDelete({ _id: taskID });
  if (!task) {
    return next(createCustomError(`No task with id: ${taskID}`, 404));
  }
  res.status(200).json({ task });
});

const createTask = asyncWrap(async (req, res) => {
  const task = await Task.create(req.body);
  console.log("nny");
  res.status(200).json({ task });
});

module.exports = {
  getAllTasks,
  getTaskById,
  updateTask,
  createTask,
  deleteTask,
};
