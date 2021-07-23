export type QuizPerformance = {
  quizPerformance: {
    currentQuestion: number;
    totalQuestions: number | null;
  };
  setQuizPerformance: Function;
};

export type Results = {
  results: {
    questionsAttempted: number;
    correct: number;
    incorrect: number;
    score: number;
  };
  dispatch: React.Dispatch<any>;
};
