const express = require("express");
const dotenv = require("dotenv");
dotenv.config();
const user = require("./routes/user.js");
const todo = require("./routes/todo.js");

const app = express();
const port = process.env.PORT;

app.use(express.json());

app.get("/healthy", (req, res) => res.send("I am Healthy"));

// start writing your routes here

app.use("", user);
app.use("", todo);

// app.use("/signup", user);
// app.use("/login", user);
// app.use("/todos", user);
// app.use("/logout", user);

// app.use("/", todo);
// app.use("/", todo);
// app.use("/:id", todo);
// app.use("/", todo);
// app.use("/:id", todo);

app.listen(port, () =>
  console.log(`server is running at http://localhost:${port}`),
);
