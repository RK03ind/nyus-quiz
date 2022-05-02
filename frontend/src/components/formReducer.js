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

export const actionType = {
  add: "ADD",
  setDate: "SET_DATE",
  modifyTextField: "MODIFY_TEXT_FIELD",
  modifyOptions: "MODIFY_OPTIONS",
  delete: "DELETE",
  reset: "RESET",
};

export const formReducer = (state, action) => {
  let questionList = [...state.questions];
  switch (action.type) {
    case actionType.add: {
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

    case actionType.setDate: {
      return {
        ...state,
        date: action.value,
      };
    }

    case actionType.modifyTextField: {
      questionList[action.index][action.field] = action.value;
      return {
        ...state,
        questions: questionList,
      };
    }

    case actionType.modifyOptions: {
      questionList[action.index].options[action.optionIndex].value =
        action.value;
      return {
        ...state,
        questions: questionList,
      };
    }

    case actionType.delete: {
      if (questionList.length === 1) {
        return state;
      }
      return {
        ...state,
        questions: questionList.filter((item, index) => index !== action.index),
      };
    }

    case actionType.reset: {
      questionList = [
        {
          question: "",
          id: nanoid(),
          answer: "",
          hint: "",
          options: [{ value: "" }, { value: "" }, { value: "" }, { value: "" }],
        },
      ];
      return {
        ...state,
        questions: questionList,
      };
    }
  }
};
