const { Router } = require("express");
const adminMiddleware = require("../middleware/user.js");
const { Todo } = require("../database/index.js");
const router = Router();

// todo Routes
router.post("/", async (req, res) => {
  // Implement todo creation logic
  const { title, description } = req.body;
  let createdTodo = await Todo.create({
    title,
    description,
  });
  res.send(createdTodo);
});

router.put("/", adminMiddleware, async (req, res) => {
  // Implement update todo  logic
  const { title, updatedDescription } = req.body;
  let updatedTodo = await Todo.findOneAndUpdate(
    { title },
    { description: updatedDescription },
    { new: true },
  );
  res.send(updatedTodo);
});

router.delete("/", adminMiddleware, async (req, res) => {
  // Implement delete todo logic
  const { title } = req.body;
  let deletedTodo = await Todo.findOneAndDelete({ title: title });
  res.send(deletedTodo);
});

router.delete("/:id", adminMiddleware, async (req, res) => {
  // Implement delete todo by id logic
  const { id } = req.params;
  let deletedTodo = await Todo.findOneAndDelete({ title: id });
  res.send(deletedTodo);
});

router.get("/", adminMiddleware, async (req, res) => {
  // Implement fetching all todo logic
  let todos = await Todo.find();
  res.send(todos);
});

router.get("/:id", adminMiddleware, async (req, res) => {
  // Implement fetching todo by id logic
  const { id } = req.params;
  let todo = await Todo.find({ title: id });
  res.send(todo);
});

module.exports = router;
