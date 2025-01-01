//  start writing your code from here

const express = require("express");
const User = require('../db/index.js')
const Todo = require('../db/index.js')
const jwt = require('jsonwebtoken');
const authMiddleware = require("../middleware/user.js");

const router = express.Router();

router.post("/signup", async (req, res) => {
  const { username, password } = req.body;
  if (!username || !password) {
    return res.status(400).send('username and password are required!')
  }
  try {
    const isUserExists = await User.findOne({username})
    if (isUserExists) {
      return res.status(400).send('user already exists')
    }
    await User.create({
      username,
      password
    })
    const token = jwt.sign({username}, process.env.JWT_SECRET)
    res.cookie("token", token)
  } catch (error) {
    console.log('error', error)
  }
});

router.post("/login", async (req, res) => {
  const {username, password} = req.body;
  if (!username || !password) {
    return res.status(400).send('credentials are required')
  }
  try {
    const user = await User.findOne({username})
    if (!user) {
      return res.status(400).send('user not found!')
    }
    if (user.password !== password) {
      return res.status(400).send('wrong password!')
    }
    const token = jwt.sign({username}, process.env.JWT_SECRET)
    res.cookie("token", token)
  } catch (error) {
    console.log("error", error)
    res.send(error)
  }
})

router.get('/todos', authMiddleware, async (req, res) => {
  try {
    // const user = req.user.username;
    // await User.findOne({user})
    const user = await User.findOne({username: req.user.username})
    if (!user) {
      return res.status(400).send('login first!')
    }
    const todos = await Todo.find()
    res.send(todos)
  } catch (error) {
    console.log('error', error)
    res.send(error)
  }
})


router.post('/logout', (req, res) => {
  res.cookie("token", "")
})