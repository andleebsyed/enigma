export type QuizPerformance = {
  quizPerformance: {
    questionsAttempted: number;
    correct: number;
    incorrect: number;
    score: number;
    currentQuestion: number;
    totalQuestions: number;
  };
  dispatch: React.Dispatch<any>;
};
