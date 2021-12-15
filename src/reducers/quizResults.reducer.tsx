import { Action } from "../types/reducers.types";

export const initialState = {
  questionsAttempted: 0,
  correct: 0,
  incorrect: 0,
  score: 0,
  currentQuestion: 1,
  totalQuestions: 10,
};
export function quizResultsReducer(
  resultsState: typeof initialState,
  action: Action
) {
  switch (action.type) {
    case "SET_QUESTIONS_LENGTH":
      return {
        ...resultsState,
        totalQuestions: action.payload,
      };
    case "SET_USERNAME":
      return { ...resultsState, username: action.payload };
    case "INCREMENT_QUESTION":
      return {
        ...resultsState,
        currentQuestion: resultsState.currentQuestion + 1,
      };
    case "CORRECT":
      return {
        ...resultsState,
        correct: resultsState.correct + 1,
        questionsAttempted: resultsState.questionsAttempted + 1,
        score: resultsState.score + 5,
      };
    case "INCORRECT":
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
        currentQuestion: 1,
      };
    default:
      return resultsState;
  }
}
