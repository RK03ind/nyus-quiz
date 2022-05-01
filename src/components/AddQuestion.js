import { useReducer, useRef, useState } from "react";
import { QuestionItem } from "./QuestionItem";
import { formIntialState, formReducer } from "./formReducer";
import styles from "./styles/AddQuestion.module.css";

export const AddQuestion = () => {
  const [isInvalid, setInvalidity] = useState(false);
  const [state, dispatch] = useReducer(formReducer, formIntialState);

  const formRef = useRef();

  const onSubmit = (e) => {
    e.preventDefault();
    if (!formRef.current.checkValidity()) {
      setInvalidity(true);
    } else {
      setInvalidity(false);
      console.log(state);
    }

    // dispatch({ type: "ADD" });
  };

  return (
    <form className={styles.questions} ref={formRef}>
      <input type="date" required className={styles.date} />
      {state.questions.map((item, index) => {
        return (
          <QuestionItem
            key={item.id}
            id={item.id}
            qNumber={index + 1}
            isInvalid={isInvalid}
            dispatch={dispatch}
            index={index}
          />
        );
      })}
      <button onClick={onSubmit}></button>
    </form>
  );
};
