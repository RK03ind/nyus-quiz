export const QuestionItem = (props) => {
  return (
    <div className="question-item">
      <input type="date" />
      <header>Question 1</header>
      <input type="text" className="question" />
      <div className="options">
        <input type="text" />
        <input type="text" />
        <input type="text" />
        <input type="text" />
      </div>
      <select name="answer">
        <option>Option 1</option>
        <option>Option 2</option>
        <option>Option 3</option>
        <option>Option 4</option>
      </select>

      <textarea name="hint" />
    </div>
  );
};
