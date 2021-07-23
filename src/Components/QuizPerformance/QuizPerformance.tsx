import { useQuizPerformance } from "../../context/quizPerformance.context";
import { useResults } from "../../context/quizResults.context";

export function QuizPerformance() {
  const { quizPerformance } = useQuizPerformance();
  const { results } = useResults();
  return (
    <section className="flex justify-between">
      <span className="text-white font-bold m-2">
        Question: {quizPerformance.currentQuestion}/
        {quizPerformance.totalQuestions}
      </span>
      <span className="text-white font-bold m-2">Score: {results.score}</span>
    </section>
  );
}
