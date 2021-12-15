import React, { createContext, useContext, useReducer } from "react";
import { quizResultsReducer } from "../reducers/quizResults.reducer";
import { QuizPerformance } from "../types/contexts.types";

const reducerInitialState = {
  questionsAttempted: 0,
  correct: 0,
  incorrect: 0,
  score: 0,
  currentQuestion: 1,
  totalQuestions: 10,
};

const contextInitialState = {
  quizPerformance: {
    questionsAttempted: 0,

    correct: 0,
    incorrect: 0,
    score: 0,
    currentQuestion: 1,
    totalQuestions: 10,
  },
  dispatch: () => null,
};
const ResultsContext = createContext<QuizPerformance>(contextInitialState);

export function ResultsProvider({ children }: React.PropsWithChildren<{}>) {
  const [quizPerformance, dispatch] = useReducer(
    quizResultsReducer,
    reducerInitialState
  );

  return (
    <ResultsContext.Provider value={{ quizPerformance, dispatch }}>
      {children}
    </ResultsContext.Provider>
  );
}

export function useQuizPerformance() {
  return useContext(ResultsContext);
}
