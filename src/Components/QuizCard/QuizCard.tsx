import { Link } from "react-router-dom";
import { useQuizPerformance } from "../../context/quizPerformance.context";
import { quizResultsReducer } from "../../reducers/quizResults.reducer";
// import { Question } from "../../pages/Question/Question";

export type CATEGORY = {
  category: {
    quizName: string;
    description: string;
    questions: {
      question: string;
      options: string[];
      correctOption: string;
    }[];
  };
};
export function QuizCard({ category }: CATEGORY) {
  const { quizPerformance, setQuizPerformance } = useQuizPerformance();
  return (
    <section className=" bg-grey-dark h-72 w-56 flex flex-col mt-4 m-4 items-center justify-evenly rounded">
      <h1 className="text-blue text-2xl font-bold mb-2">{category.quizName}</h1>
      {/* <img alt="placeholder" src="https://via.placeholder.com/150" /> */}
      <span className="text-white mx-4 text-center ">
        {category.description}
      </span>
      <Link to={`/question/${category.quizName}`}>
        <button
          onClick={() =>
            setQuizPerformance({
              ...quizPerformance,
              quizName: category.quizName,
            })
          }
          className="p-1 m-1  w-40 bg-red text-white font-semibold  relative top-40-0 rounded"
        >
          Play Now
        </button>
      </Link>
    </section>
  );
}
