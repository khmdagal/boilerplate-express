let express = require("express");
let app = express();

app.get("/", (req, res) => {
res.status(200).send("Response String");
});

module.exports = app;
