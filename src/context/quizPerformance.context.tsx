import { createContext, useContext, useState } from "react";
export type QUIZPERFORMANCE = {
  quizPerformance: {
    currentQuestion: number;
    totalQuestions: number | null;
    score: number;
  };
  setQuizPerformance: Function;
};
const QuizPerformanceContext = createContext<QUIZPERFORMANCE>({
  quizPerformance: {
    currentQuestion: 0,
    totalQuestions: null,
    score: 0,
  },
  setQuizPerformance: () => null,
});

export function QuizPerformanceProvider({
  children,
}: React.PropsWithChildren<{}>) {
  const [quizPerformance, setQuizPerformance] = useState({
    currentQuestion: 1,
    totalQuestions: null,
    score: 0,
  });
  return (
    <QuizPerformanceContext.Provider
      value={{ quizPerformance, setQuizPerformance }}
    >
      {children}
    </QuizPerformanceContext.Provider>
  );
}

export function useQuizPerformance() {
  return useContext(QuizPerformanceContext);
}
