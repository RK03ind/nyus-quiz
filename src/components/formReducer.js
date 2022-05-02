/* eslint-disable default-case */
import { nanoid } from "nanoid";

export const formIntialState = {
  date: "",

  questions: [
    {
      question: "",
      id: nanoid(),
      answer: "",
      hint: "",
      options: [{ value: "" }, { value: "" }, { value: "" }, { value: "" }],
    },
  ],
};

export const formReducer = (state, action) => {
  let questionList = [...state.questions];
  switch (action.type) {
    case "ADD": {
      questionList.push({
        question: "",
        id: nanoid(),
        answer: "",
        hint: "",
        options: [{ value: "" }, { value: "" }, { value: "" }, { value: "" }],
      });
      return {
        ...state,
        questions: questionList,
      };
    }

    case "MODIFY_TEXT_FIELD": {
      questionList[action.index][action.field] = action.value;
      return {
        ...state,
        questions: questionList,
      };
    }

    case "MODIFY_OPTIONS": {
      questionList[action.index].options[action.optionIndex].value =
        action.value;
      return {
        ...state,
        questions: questionList,
      };
    }

    case "DELETE_ITEM": {
      if (questionList.length === 1) {
        return state;
      }
      return {
        ...state,
        questions: questionList.filter((item, index) => index !== action.index),
      };
    }
  }
};
