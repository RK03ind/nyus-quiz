const Quiz = require("../model/quiz");

const getQuiz = async (req, res) => {
  // const { date, questions } = req.body;
  // const quiz = questions.map(({ id, ...rest }) => {
  //   return rest;
  // });
  // const createdQuiz = new Quiz({
  //   date: date,
  //   quiz: quiz,
  // });
  // const result = await createdQuiz.save();
  // res.status(200).json({ id: result._id });
};

const addQuiz = async (req, res) => {
  try {
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
  } catch {
    res.status(500).json({});
  }
};

module.exports = { getQuiz, addQuiz };
