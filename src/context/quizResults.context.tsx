import { createContext, useContext, useState } from "react";
type RESULTSCONTEXT = {
  results: { questionsAttempted: number; correct: number; incorrect: number };
  setResults: Function;
};
const initialState = {
  results: { questionsAttempted: 0, correct: 0, incorrect: 0 },
  setResults: () => null,
};
const ResultsContext = createContext<RESULTSCONTEXT>(initialState);

export function ResultsProvider({ children }: React.PropsWithChildren<{}>) {
  const [results, setResults] = useState({
    questionsAttempted: 0,
    correct: 0,
    incorrect: 0,
  });
  return (
    <ResultsContext.Provider value={{ results, setResults }}>
      {children}
    </ResultsContext.Provider>
  );
}

export function useResults() {
  return useContext(ResultsContext);
}
