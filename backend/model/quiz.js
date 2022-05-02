const mongoose = require("mongoose");

const quizSchema = new mongoose.Schema({
  date: { type: Date, required: true },
  quiz: [
    {
      options: [
        {
          value: { type: String, required: true },
          opted_by: { type: Number, required: false, default: 0 },
          _id: false,
        },
      ],
      answer: { type: Number, required: true },
      answered_by: { type: Number, required: false, default: 0 },
      question: { type: String, required: true },
      hint: { type: String, required: false, default: "" },
    },
  ],
});

module.exports = mongoose.model("quiz", quizSchema, "quiz");
