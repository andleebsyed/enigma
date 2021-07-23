import { useQuizPerformance } from "../../context/quizResults.context";
export function QuizPerformance() {
  const { quizPerformance } = useQuizPerformance();
  return (
    <section className="flex justify-between">
      <span className="text-white font-bold m-2">
        Question: {quizPerformance.currentQuestion}/
        {quizPerformance.totalQuestions}
      </span>
      <span className="text-white font-bold m-2">
        Score: {quizPerformance.score}
      </span>
    </section>
  );
}
