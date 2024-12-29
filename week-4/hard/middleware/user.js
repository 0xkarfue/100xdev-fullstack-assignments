const jwt = require("jsonwebtoken");
const User = require("../database/index.js");
function userMiddleware(req, res, next) {
  // Implement user auth logic
  let token = res.cookie?.token;
  if (!token) return res.send("login first");

  const decoded = jwt.verify(token, process.env.JWT_SCRET);
  req.user = decoded;
  next();
}

module.exports = userMiddleware;
