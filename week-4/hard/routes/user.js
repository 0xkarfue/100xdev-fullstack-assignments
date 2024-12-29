const { Router } = require("express");
const router = Router();
const userMiddleware = require("../middleware/user.js");
const { User } = require("../database/index.js");
const { Todo } = require("../database/index.js");
const jwt = require("jsonwebtoken");

// User Routes
router.post("/signup", async (req, res) => {
  // Implement user signup logic
  const { username, password } = req.body;
  const user = await User.findOne({ username });
  if (user) return res.send("user already exists");
  let createUser = await User.create({ username, password });
  let token = jwt.sign({ username }, process.env.JWT_SECRET);
  res.cookie("token", token);
  res.send(createUser);
});

router.post("/login", async (req, res) => {
  // Implement user login logic
  const { username, password } = req.body;
  const user = await User.findOne({ username });
  if (!user) return res.send("wrong credentials");
  if (user.password !== password) return res.send("wrong credentials");
  const token = jwt.sign({ username }, process.env.JWT_SECRET);
  res.cookie("token", token);
  res.send("looggedin");
});

router.get("/todos", userMiddleware, async (req, res) => {
  // Implement logic for getting todos for a user
  const user = await User.findOne({ user: req.user.username });
  if (!user) return res.send("user not found");
  let todos = await Todo.findOne();
  res.send(todos);
});

router.post("/logout", userMiddleware, (req, res) => {
  // Implement logout logic
  // res.clearCookie("token");
  res.cookie("token", "");
  res.redirect("/");
  res.send("loggedOut");
});

module.exports = router;
