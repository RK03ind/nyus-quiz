import { QuestionItem } from "./QuestionItem";

export const AddQuestion = () => {
  let questionData = [{}];

  return (
    <main>
      {questionData.map(() => {
        return <QuestionItem />;
      })}
    </main>
  );
};
