// const express = require("express");
// const bodyParser = require("body-parser");
// // import { test } from "./run.js";
// const test = require(`${__dirname}/run.js`)

import express from "express";
import bodyParser from "body-parser";
import { test } from "./run.js";

const app = express();

app.use(express.static(`./build`));

app.use(bodyParser.urlencoded({ extended: true }));

app.get("/*", function (req, res) {
  // console.log(req);
  res.sendFile("./build/index.html", (e) => {
    console.log(e);
  });
});

console.log(test());

const PORT = process.env.PORT || 5000;
app.listen(PORT, function () {
  console.log("Server started running on port 5000");
});
