const express = require("express");
const router = express.Router();

const quizController = require("../controller/quiz-controller");

router.post("/", quizController.addQuiz);

router.get("/:id", quizController.getQuiz);

module.exports = router;
