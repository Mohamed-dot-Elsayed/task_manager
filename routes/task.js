const express = require("express");
const {
  getAllTasks,
  createTask,
  deleteTask,
  getTaskById,
  updateTask,
} = require("../controllers/task");
const { model } = require("mongoose");
const router = express.Router();

router.route("/").get(getAllTasks).post(createTask);
router.route("/:id").get(getTaskById).patch(updateTask).delete(deleteTask);

module.exports = router;
