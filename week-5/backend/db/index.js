//  start writing from here
const mongoose = require("mongoose");

const userSchema = mongoose.Schema({
  username: {
    type: String,
    unique: true,
    required: true,
  },
  password: {
    type: String,
    required: true,
  },
});

const todoSchema = mongoose.Schema({
  userId: ObjectId,
  title: {
    type: String,
    required: true,
  },
  completed: {
    type: Boolean,
  },
});
