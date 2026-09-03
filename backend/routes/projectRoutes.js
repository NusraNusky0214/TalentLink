const express = require("express");
const router = express.Router();
const Project = require("../models/Project");

// GET projects
router.get("/", async (req, res) => {
  const projects = await Project.find();
  res.json(projects);
});

// POST project
router.post("/", async (req, res) => {
  const project = new Project(req.body);
  await project.save();
  res.json(project);
});

module.exports = router;