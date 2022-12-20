const path = require("path");
const express = require("express");
const app = express();
const morgan = require("morgan");

app.use(morgan("dev"));

app.use(express.static(path.join(__dirname, "../public")));

app.get("*", function (req, res, next) {
  res.sendFile(path.join(__dirname, "../public/index.html"));
});

app.get("*", function (req, res, next) {
  res.sendFile(path.join(__dirname, "../public/index.html"));
});

module.exports = app;
