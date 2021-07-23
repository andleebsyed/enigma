// import { createContext, useContext, useState } from "react";
// import { QuizPerformance } from "../types/contexts.types";
// const QuizPerformanceContext = createContext<QuizPerformance>({
//   quizPerformance: {
//     currentQuestion: 0,
//     totalQuestions: null,
//   },
//   setQuizPerformance: () => null,
// });

// export function QuizPerformanceProvider({
//   children,
// }: React.PropsWithChildren<{}>) {
//   const [quizPerformance, setQuizPerformance] = useState({
//     currentQuestion: 1,
//     totalQuestions: null,
//   });
//   return (
//     <QuizPerformanceContext.Provider
//       value={{ quizPerformance, setQuizPerformance }}
//     >
//       {children}
//     </QuizPerformanceContext.Provider>
//   );
// }

// export function useQuizPerformance() {
//   return useContext(QuizPerformanceContext);
// }
export {};
