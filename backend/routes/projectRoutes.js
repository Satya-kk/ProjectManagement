const express = require("express");
const router = express.Router();
const Project = require("../models/Project");

router.post("/", async (req, res) => {
  const project = new Project(req.body);
  const saved = await project.save();
  res.json(saved);
});

router.get("/", async (req, res) => {
  const projects = await Project.find();
  res.json(projects);
});

router.delete("/:id", async (req, res) => {
  await Project.findByIdAndDelete(req.params.id);
  res.json({ message: "Project deleted" });
});

module.exports = router;
