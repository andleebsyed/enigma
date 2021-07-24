export type CATEGORY = {
  category: {
    quizName: string;
    description: string;
    questions: {
      question: string;
      options: string[];
      correctOption: string;
    }[];
  };
};
