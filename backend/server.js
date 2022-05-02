const express = require("express");
const bodyParser = require("body-parser");
const cors = require("cors");
const path = require("path");
const app = express();
require("dotenv").config();
const mongo = require("./database/mongo.js");

app.use(bodyParser.json());
app.use(cors());
mongo.connect();

app.use(express.static(path.join(__dirname, "../frontend/build")));
app.get("*", (req, res) => {
  res.sendFile(path.join(__dirname, "../frontend/build"));
});

app.listen(process.env.PORT || 5000);
