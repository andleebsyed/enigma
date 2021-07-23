import React, { createContext, useContext, useReducer } from "react";
import { quizResultsReducer } from "../reducers/quizResults.reducer";
import { Results } from "../types/contexts.types";

const reducerInitialState = {
  questionsAttempted: 0,
  correct: 0,
  incorrect: 0,
  score: 0,
};

const contextInitialState = {
  results: {
    questionsAttempted: 0,
    correct: 0,
    incorrect: 0,
    score: 0,
  },
  dispatch: () => null,
};
const ResultsContext = createContext<Results>(contextInitialState);

export function ResultsProvider({ children }: React.PropsWithChildren<{}>) {
  const [results, dispatch] = useReducer(
    quizResultsReducer,
    reducerInitialState
  );

  return (
    <ResultsContext.Provider value={{ results, dispatch }}>
      {children}
    </ResultsContext.Provider>
  );
}

export function useResults() {
  return useContext(ResultsContext);
}
