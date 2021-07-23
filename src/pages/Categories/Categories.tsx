import { useEffect } from "react";
import { QuizCard } from "../../Components/QuizCard/QuizCard";
import { useData } from "../../context/quizdata-context";
import { useQuizPerformance } from "../../context/quizPerformance.context";
import { useResults } from "../../context/quizResults.context";
export function Categories() {
  const { data } = useData();
  const { quizPerformance, setQuizPerformance } = useQuizPerformance();
  const { results, dispatch } = useResults();
  useEffect(() => {
    setQuizPerformance({
      ...quizPerformance,
      currentQuestion: 1,
      score: 0,
      questionsAttempted: 0,
      correct: 0,
      incorrect: 0,
    });
    dispatch({ type: "RESET" });
  }, []);
  console.log("quizPerformance", quizPerformance);
  console.log("results ", results);
  return (
    <div className="flex flex-col justify-center bg-grey items-center min-h-screen ">
      <section className="flex justify-evenly flex-wrap  ">
        {data?.quizCategories.map((category) => (
          <QuizCard key={category.quizName} category={category} />
        ))}
      </section>
    </div>
  );
}
