// start writing from here
const mongoose = require("mongoose");
const express = require("express");
const dotenv = require("dotenv");
dotenv.config();

const PORT = process.env.PORT;
const app = express();

app.use(express.json());

mongoose
  .connect(process.env.MONGO_URI)
  .then(() => {
    console.log("!!DB CONNECTED!!");
    app.listen(PORT, () => {
      console.log(` !! SERVER RUNNING -- PORT : ${PORT} !! `);
    });
  })
  .catch((err) => {
    console.log(" !!!! Error !!!! ", err);
  });
