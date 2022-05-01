import { useRef, useState } from "react";
import { QuestionItem } from "./QuestionItem";
import styles from "./styles/AddQuestion.module.css";

export const AddQuestion = () => {
  const [isInvalid, setInvalidity] = useState(false);
  let questionData = [{}, {}];
  const formRef = useRef();

  const onSubmit = (e) => {
    e.preventDefault();
    console.log(formRef.current.checkValidity());
    if (!formRef.current.checkValidity()) {
      setInvalidity(true);
    }
  };

  return (
    <form className={styles.questions} ref={formRef}>
      <input type="date" required className={styles.date} />
      {questionData.map((item, index) => {
        return <QuestionItem qNumber={index + 1} isInvalid={isInvalid} />;
      })}
      <button type="submit" onClick={onSubmit}></button>
    </form>
  );
};
