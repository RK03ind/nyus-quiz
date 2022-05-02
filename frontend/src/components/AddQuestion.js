/* eslint-disable react-hooks/exhaustive-deps */
import { useEffect, useReducer, useRef, useState } from "react";
import { QuestionItem } from "./QuestionItem";
import { formIntialState, formReducer } from "./formReducer";
import styles from "./styles/AddQuestion.module.css";
import usePostData from "../hooks/usePostData";

export const AddQuestion = () => {
  const [isInvalid, setInvalidity] = useState(false);
  const [state, dispatch] = useReducer(formReducer, formIntialState);
  const postQuizData = usePostData("/api/quiz");

  const scrollRef = useRef();
  const formRef = useRef();

  const onSubmit = (e) => {
    e.preventDefault();
    if (!formRef.current.checkValidity()) {
      window.alert("Fill up all the required fields before submitting");
      setInvalidity(true);
    } else {
      setInvalidity(false);
      postQuizData.mutate(state);
    }
  };

  const setDate = (e) => {
    dispatch({ type: "SET_DATE", value: e.target.value });
  };

  const addItem = (e) => {
    e.preventDefault();
    setInvalidity(false);
    dispatch({ type: "ADD" });
    setTimeout(() => {
      scrollRef.current.scrollIntoView({ behavior: "smooth" });
    }, 50);
  };

  const deleteLastItem = (e) => {
    e.preventDefault();
    dispatch({
      type: "DELETE_ITEM",
      index: state.questions.length - 1,
    });
  };

  useEffect(() => {
    if (postQuizData.isSuccess) {
      window.alert(
        `The quiz is successfully stored with id:  ${postQuizData.data.data.id}`
      );
    }
  }, [postQuizData.isSuccess]);

  useEffect(() => {
    if (postQuizData.isError) {
      window.alert("Something went wrong :(");
    }
  }, [postQuizData.isError]);

  return (
    <form className={styles.questions} ref={formRef}>
      <input
        type="date"
        onChange={setDate}
        required
        className={`${styles.date} ${isInvalid ? styles.validity : ""}`}
      />
      {state.questions.map((item, index) => {
        return (
          <QuestionItem
            key={item.id}
            qNumber={index + 1}
            isInvalid={isInvalid}
            dispatch={dispatch}
            index={index}
          />
        );
      })}
      <div className={styles.add__remove} ref={scrollRef}>
        <button onClick={addItem}>Add Question</button>
        <button onClick={deleteLastItem}>Remove Last Question</button>
      </div>
      <button className={styles.submit} onClick={onSubmit}>
        Submit
      </button>
    </form>
  );
};
