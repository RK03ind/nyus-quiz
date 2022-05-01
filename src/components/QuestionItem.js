import styles from "./styles/QuestionItem.module.css";

export const QuestionItem = (props) => {
  const onTextInputChange = (event) => {
    props.dispatch({
      type: "MODIFY_TEXT_FIELD",
      index: props.index,
      field: event.target.name,
      value: event.target.value,
    });
    // props.dispatch({ type: "ADD" });
  };

  const deleteQuestion = (e) => {
    e.preventDefault();
    props.dispatch({ type: "DELETE_ITEM", id: props.id });
  };

  const onOptionChange = (event, optionIndex) => {
    console.log(optionIndex);
    props.dispatch({
      type: "MODIFY_OPTIONS",
      index: props.index,
      optionIndex: optionIndex,
      value: event.target.value,
    });
  };

  return (
    <div className={styles.question__item}>
      <header>Question {props.qNumber}</header>
      <input
        type="text"
        className={`${styles.question} ${
          props.isInvalid ? styles.validity : ""
        }`}
        required
        onChange={onTextInputChange}
        name="question"
        placeholder="Question"
      />
      <div className={styles.options}>
        <input
          type="text"
          required
          onChange={(e) => onOptionChange(e, 0)}
          className={`${props.isInvalid ? styles.validity : ""}`}
          placeholder="Option 1"
        />
        <input
          type="text"
          required
          onChange={(e) => onOptionChange(e, 1)}
          className={`${props.isInvalid ? styles.validity : ""}`}
          placeholder="Option 2"
        />
        <input
          type="text"
          className={`${props.isInvalid ? styles.validity : ""}`}
          required
          onChange={(e) => onOptionChange(e, 2)}
          placeholder="Option 3"
        />
        <input
          type="text"
          className={`${props.isInvalid ? styles.validity : ""}`}
          required
          onChange={(e) => onOptionChange(e, 3)}
          placeholder="Option 4"
        />
      </div>
      <select
        name="answer"
        placeholder="Select Answer"
        onChange={onTextInputChange}
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
      <textarea
        name="hint"
        onChange={onTextInputChange}
        className={styles.textarea}
        placeholder="Hint"
      />
      <button className={styles.delete} onClick={deleteQuestion}>
        Delete
      </button>
    </div>
  );
};
