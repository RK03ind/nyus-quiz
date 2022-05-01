import styles from "./styles/QuestionItem.module.css";

export const QuestionItem = (props) => {
  return (
    <div className={styles.question__item}>
      <header>Question {props.qNumber}</header>
      <input
        type="text"
        className={`${styles.question} ${
          props.isInvalid ? styles.validity : ""
        }`}
        required
        placeholder="Question"
      />
      <div className={styles.options}>
        <input
          type="text"
          required
          className={`${props.isInvalid ? styles.validity : ""}`}
          placeholder="Option 1"
        />
        <input
          type="text"
          required
          className={`${props.isInvalid ? styles.validity : ""}`}
          placeholder="Option 2"
        />
        <input
          type="text"
          className={`${props.isInvalid ? styles.validity : ""}`}
          required
          placeholder="Option 3"
        />
        <input
          type="text"
          className={`${props.isInvalid ? styles.validity : ""}`}
          required
          placeholder="Option 4"
        />
      </div>
      <select
        name="answer"
        placeholder="Select Answer"
        required
        className={`${styles.answer} ${props.isInvalid ? styles.validity : ""}`}
      >
        <option value="" hidden>
          Select Answer
        </option>
        <option>Option 1</option>
        <option>Option 2</option>
        <option>Option 3</option>
        <option>Option 4</option>
      </select>
      <textarea name="hint" className={styles.textarea} placeholder="Hint" />
      <button className={styles.delete}>Delete</button>
    </div>
  );
};
