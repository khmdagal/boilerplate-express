require("dotenv").config();
const express = require("express");
const app = express();


app.use(function middleware(req, res, next) {
  const string = req.method + " " + req.path + " - " + req.ip;
  console.log(string);
  next();
});


module.exports = app;
