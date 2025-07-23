const express = require('express');
const router = express.Router();
const Task = require('../models/Task');

// create task
router.post('/', async (req, res) => {
  const task = new Task(req.body);
  await task.save();
  res.status(201).json(task);
});

// get all tasks
router.get('/', async (req, res) => {
  const tasks = await Task.find();
  res.json(tasks);
});

// get single task
router.get('/:id', async (req, res) => {
  const task = await Task.findOne(req.params.id)
  if (task) res.json(task);
  else res.status(404).json({ error: "Task not found" });
})

// update task by ID
router.put('/:id', async (req, res) => {
  const updated = await Task.findByIdAndUpdate(req.params.id, req.body, { new: true });
  res.json(updated);
});

// delete task
router.delete('/:id', async (req, res) => {
  await Task.findByIdAndDelete(req.params.id);
  res.json({ message: 'Task deleted' });
});

module.exports = router;
