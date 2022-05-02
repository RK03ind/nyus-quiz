import { useEffect, useReducer, useRef, useState } from "react";
import { QuestionItem } from "./QuestionItem";
import { formIntialState, formReducer } from "./formReducer";
import styles from "./styles/AddQuestion.module.css";

export const AddQuestion = () => {
  const [isInvalid, setInvalidity] = useState(false);
  const [state, dispatch] = useReducer(formReducer, formIntialState);
  const scrollRef = useRef();
  const formRef = useRef();

  const onSubmit = (e) => {
    e.preventDefault();
    if (!formRef.current.checkValidity()) {
      setInvalidity(true);
    } else {
      setInvalidity(false);
      console.log(state);
    }
  };

  const addItem = (e) => {
    e.preventDefault();
    setInvalidity(false);
    dispatch({ type: "ADD" });
    setTimeout(() => {
      scrollRef.current.scrollIntoView({ behavior: "smooth" });
    }, 180);
  };

  const deleteLastItem = (e) => {
    e.preventDefault();
    dispatch({
      type: "DELETE_ITEM",
      index: state.questions.length - 1,
    });
  };

  useEffect(() => {
    if (isInvalid)
      window.alert("Fill up all the required fields before submitting");
  }, [isInvalid]);

  return (
    <form className={styles.questions} ref={formRef}>
      <input
        type="date"
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
