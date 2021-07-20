// export type OPTION = {
//   option: string;
// };
export type QUESTION = {
  question: string;
  options: string[];
  correctOption: string;
};
export type CATEGORYDATA = {
  quizName: string;
  description: string;
  questions: QUESTION[];
};
export type QUIZCATEGORIES = {
  quizCategories: CATEGORYDATA[];
};

export type QuizDataContext = {
  data: QUIZCATEGORIES;
  setData: Function;
};
