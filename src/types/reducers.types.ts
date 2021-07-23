export type Action =
  | { type: "correct" }
  | { type: "incorrect" }
  | { type: "RESET" };
