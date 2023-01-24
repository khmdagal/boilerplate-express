require("dotenv").config();
let express = require("express");
let app = express();
const message = { message: "Hello json" };

app.use("/public", express.static(__dirname + "/public"));

app.get("/json", function (req, res) {
  console.log(process.env.DATA_KEY);
  res.json(message);
});

module.exports = app;
