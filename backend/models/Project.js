const mongoose = require("mongoose");

const projectSchema = new mongoose.Schema({
  title: String,
  description: String,
  budget: Number,
  skills: [String]
});

module.exports = mongoose.model("Project", projectSchema);