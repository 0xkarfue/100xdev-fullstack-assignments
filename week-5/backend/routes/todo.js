//  start writing your code from here
const express = require("express");
const Todo = require("../db/index.js");
const authMiddleware = require("../middleware/user.js");

const router = express.Router();

router.post("/", async (req, res) => {
  const { title } = req.body;
  const userId = Date.now();
  const status = true;
  try {
    const todos = await Todo.create({ userId, title, status });
    res.send(todos);
  } catch (error) {
    res.send("error", error);
  }
});

router.put("/", authMiddleware, async (req, res) => {
  const { title } = req.body;
  if (!title) {
    return res.status(400).send("hello");
  }
  try {
    let updatedTodo = await Todo.findOneAndUpdate({ title }, { new: true });
    res.send(updatedTodo);
  } catch (error) {
    res.send("error", error);
  }
});

router.delete("/", authMiddleware, async (req, res) => {
  const { userId } = req.body;
  try {
    const deletedTodo = await Todo.findOneAndDelete({ userId: userId });
  } catch (error) {
    res.send("error", error);
  }
});
