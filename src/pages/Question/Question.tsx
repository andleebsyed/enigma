import { useParams } from "react-router-dom";
import { QuizPerformance } from "../../Components/QuizPerformance/QuizPerformance";
import { QuizQuestion } from "../../Components/QuizQuestion/QuizQuestion";
import { useData } from "../../context/quizdata-context";

export function Question() {
  const { chosenQuizName } = useParams();
  const data = useData();
  const chosenQuiz = data?.quizCategories.find((singleQuiz) => {
    return singleQuiz.quizName === chosenQuizName;
  });
  return (
    <div className="min-h-screen bg-grey">
      <QuizPerformance />
      <main className="flex flex-col items-center ml-2 mr-2 mt-16 ">
        <QuizQuestion questions={chosenQuiz!.questions} />
      </main>
    </div>
  );
}
