let express = require("express");
let app = express();

app.get("/", function (req, res) {
  res.sendFile(
    __dirname + "/views/index.html",
    res.setHeader("Content-Type", "text/html")
  );
});

module.exports = app;
