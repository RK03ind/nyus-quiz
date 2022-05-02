const express = require("express");
const bodyParser = require("body-parser");
const cors = require("cors");
const path = require("path");
const app = express();
require("dotenv").config();
const mongo = require("./database/mongo");
const quizRoutes = require("./routes/quiz-routes");

app.use(bodyParser.json());
app.use(cors());

mongo.connect();

app.use(express.static(path.join(__dirname, "../frontend/build")));

app.get("*", (req, res) => {
  res.sendFile(path.join(__dirname, "../frontend/build"));
});

app.use("/api/quiz", quizRoutes);

app.use((req, res) => {
  res.status(404).json({ message: "Route not found :(" });
});

app.listen(process.env.PORT || 5000);
