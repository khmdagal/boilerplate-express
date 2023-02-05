require("dotenv").config();
const express = require("express");
const app = express();

app.get(
  "/now",
  (req, res, next) => {
    req.time = new Date().toDateString();
    next();
  },
  (req, res) => {
    res.send({
      time: req.time,
    });
  }
);

module.exports = app;
