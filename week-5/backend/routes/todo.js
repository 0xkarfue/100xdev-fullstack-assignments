//  start writing your code from here
const express = require("express");

const router = express.Router();

router.post("/", (req, res) => {
  const { username, password } = req.body;
});
