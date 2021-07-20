import { useParams } from "react-router-dom";
import { QuizPerformance } from "../../Components/QuizPerformance/QuizPerformance";
import { QuizQuestion } from "../../Components/QuizQuestion/QuizQuestion";
import { useData } from "../../context/quizdata-context";

export function Question() {
  const { chosenQuizName } = useParams();
  const { data } = useData();
  console.log("data in Question component ", data);
  console.log("choosen quiz name", chosenQuizName);
  const chosenQuiz = data.quizCategories.find((singleQuiz) => {
    console.log("quiz name is ", singleQuiz.quizName);
    return singleQuiz.quizName === chosenQuizName;
  });
  console.log("choiosen quiz is ", chosenQuiz);
  return data.quizCategories.length > 0 ? (
    // return (
    <div className="min-h-screen bg-grey">
      <QuizPerformance />
      <main className="flex flex-col items-center ml-2 mr-2 mt-16 ">
        <QuizQuestion questions={chosenQuiz!.questions} />
      </main>
    </div>
  ) : (
    // );
    <div>loading</div>
  );
}
