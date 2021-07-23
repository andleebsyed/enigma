export type Action =
  | { type: "CORRECT" }
  | { type: "INCORRECT" }
  | { type: "RESET" }
  | { type: "SET_QUESTIONS_LENGTH"; payload: number }
  | { type: "INCREMENT_QUESTION" }
  | { type: "SET_USERNAME"; payload: string };
