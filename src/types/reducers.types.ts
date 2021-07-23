export type Action =
  | { type: "CORRECT" }
  | { type: "INCORRECT" }
  | { type: "RESET" };
