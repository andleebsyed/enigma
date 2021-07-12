import { useParams } from "react-router-dom";
// import { General } from "../../Components/Options/General";
// import { Right } from "../../Components/Options/Right";
// import { Wrong } from "../../Components/Options/Wrong";
// import { CATEGORY } from "../../Components/QuizCard/QuizCard";
import { QuizPerformance } from "../../Components/QuizPerformance/QuizPerformance";
import { QuizQuestion } from "../../Components/QuizQuestion/QuizQuestion";
import { useData } from "../../context/quizdata-context";
// import { data } from "../../data/data";

export function Question() {
  const { chosenQuizName } = useParams();
  const data = useData();
  console.log("data is ", data);
  console.log("quiz name is ", chosenQuizName);
  const chosenQuiz = data?.quizCategories.find((singleQuiz) => {
    console.log("data values ", singleQuiz.quizName);
    return String(singleQuiz.quizName) === String(chosenQuizName);
  });
  console.log("aahaa here  our quix is ", chosenQuiz);
  return (
    <div className="min-h-screen bg-grey">
      <QuizPerformance />
      <main className="flex flex-col items-center ml-2 mr-2 mt-16 ">
        {/* {chosenQuiz?.questions.map(question =>  */}
        <QuizQuestion questions={chosenQuiz!.questions} />
        {/* )} */}
        {/* <QuizQuestion questions={chosenQuiz!.questions} /> */}
        {/* options */}
        {/* <General /> */}
        {/* <Right /> */}
        {/* <Wrong /> */}
        {/* <General /> */}
        <button className="text-white bg-blue font-bold p-2 w-40  rounded ">
          Skip
        </button>
      </main>
    </div>
  );
}
