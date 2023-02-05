require("dotenv").config();
const express = require("express");
const app = express();
const message = { message: "Hello json" };

app.get("/json", (req, res) => {
  const message = { message: "Hello json" };
  if (process.env.MESSAGE_STYLE === "uppercase") {
    message.message = message.message.toUpperCase();
  }
  res.send(message);
});

module.exports = app;
