import { useEffect } from "react";
import { QuizCard } from "../../Components/QuizCard/QuizCard";
import { useData } from "../../context/quizdata-context";
import { useQuizPerformance } from "../../context/quizResults.context";
export function Categories() {
  const { data } = useData();
  const { dispatch } = useQuizPerformance();
  useEffect(() => {
    dispatch({ type: "RESET" });
  }, [dispatch]);
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
