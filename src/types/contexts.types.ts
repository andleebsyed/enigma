export type QuizPerformance = {
  quizPerformance: {
    currentQuestion: number;
    totalQuestions: number | null;
    score: number;
  };
  setQuizPerformance: Function;
};

export type Results = {
  results: { questionsAttempted: number; correct: number; incorrect: number };
  dispatch: React.Dispatch<any>;
};
