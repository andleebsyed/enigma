import { Action } from "../types/reducers.types";

export const initialState = {
  questionsAttempted: 0,
  correct: 0,
  incorrect: 0,
  score: 0,
};
export function quizResultsReducer(
  resultsState: typeof initialState,
  action: Action
) {
  switch (action.type) {
    case "correct":
      return {
        ...resultsState,
        correct: resultsState.correct + 1,
        questionsAttempted: resultsState.questionsAttempted + 1,
        score: resultsState.score + 5,
      };
    case "incorrect":
      return {
        ...resultsState,
        incorrect: resultsState.incorrect + 1,
        questionsAttempted: resultsState.questionsAttempted + 1,
        score: resultsState.score - 2,
      };
    case "RESET":
      return {
        ...resultsState,
        incorrect: 0,
        questionsAttempted: 0,
        correct: 0,
        score: 0,
      };
    default:
      return resultsState;
  }
}
