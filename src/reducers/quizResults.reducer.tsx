import { Action } from "../types/reducers.types";

export const initialState = {
  questionsAttempted: 0,
  correct: 0,
  incorrect: 0,
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
      };
    case "incorrect":
      return {
        ...resultsState,
        incorrect: resultsState.incorrect + 1,
        questionsAttempted: resultsState.questionsAttempted + 1,
      };
    default:
      return resultsState;
  }
}
