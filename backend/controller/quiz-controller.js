const Quiz = require("../model/quiz");

const getQuiz = async (req, res) => {
  try {
    const quiz = await Quiz.findOne({ _id: req.params.id });
    if (quiz) return res.json(quiz);
    res.status(404).json("Quiz not found");
  } catch {
    res.status(500).json("Internal Server Error or Invalid id");
  }
};

const addQuiz = async (req, res) => {
  console.log("lmao");
  const { date, questions } = req.body;

  const quiz = questions.map(({ id, ...rest }) => {
    return rest;
  });

  const createdQuiz = new Quiz({
    date: date,
    quiz: quiz,
  });

  const result = await createdQuiz.save();

  res.status(200).json({ id: result._id });
};

module.exports = { getQuiz, addQuiz };
