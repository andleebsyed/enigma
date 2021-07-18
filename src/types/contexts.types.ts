export type QuizPerformance = {
  quizPerformance: {
    currentQuestion: number;
    totalQuestions: number | null;
    score: number;
    quizName: string;
  };
  setQuizPerformance: Function;
};

export type Results = {
  results: { questionsAttempted: number; correct: number; incorrect: number };
  dispatch: React.Dispatch<any>;
};
