const mongoose = require("mongoose");

const TaskSchema = new mongoose.Schema({
  name: {
    type: String,
    required: [true, "name is requires"],
    trim: true,
    maxlength: [20, "Too long"],
  },
  completed: {
    type: Boolean,
    default: false,
  },
  type: {
    type: String,
    default: "nny",
  },
});

module.exports = mongoose.model("Task", TaskSchema);
