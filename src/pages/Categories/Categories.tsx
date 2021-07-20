import { useEffect } from "react";
import { QuizCard } from "../../Components/QuizCard/QuizCard";
import { useData } from "../../context/quizdata-context";
import { useQuizPerformance } from "../../context/quizPerformance.context";
export function Categories() {
  const { data } = useData();
  const { quizPerformance, setQuizPerformance } = useQuizPerformance();
  useEffect(() => {
    if (quizPerformance.currentQuestion > 1) {
      setQuizPerformance({ ...quizPerformance, currentQuestion: 1 });
    }
  }, []);

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
