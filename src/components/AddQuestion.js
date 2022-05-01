import { useRef } from "react";
import { QuestionItem } from "./QuestionItem";
import styles from "./styles/AddQuestion.module.css";

export const AddQuestion = () => {
  let questionData = [{}, {}];
  const formRef = useRef();

  const onSubmit = (e) => {
    e.preventDefault();
    console.log(formRef.current.checkValidity());
  };

  return (
    <form className={styles.questions} ref={formRef}>
      <input type="date" required />
      {questionData.map((item, index) => {
        return <QuestionItem qNumber={index + 1} />;
      })}
      <button type="submit" onClick={onSubmit}></button>
    </form>
  );
};
