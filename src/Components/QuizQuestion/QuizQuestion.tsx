import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { useQuizPerformance } from "../../context/quizPerformance.context";
import { useResults } from "../../context/quizResults.context";
import { QUESTIONS } from "./QuizQuestions.types";

export function QuizQuestion({ questions }: QUESTIONS) {
  const initialState = [
    "bg-grey-extralight",
    "bg-grey-extralight",
    "bg-grey-extralight",
    "bg-grey-extralight",
  ];

  const [bgOptions, setBgOptions] = useState<string[]>(initialState);
  const [questionIteratorIndex, setQuestionIteratorIndex] = useState<number>(0);
  const { quizPerformance, setQuizPerformance } = useQuizPerformance();
  const { results, setResults } = useResults();
  const navigate = useNavigate();

  useEffect(() => {
    setQuizPerformance({
      ...quizPerformance,
      totalQuestions: questions.length,
    });
  }, []);

  function ToRunAfterOptionHit(scoreUpdate: number, userResponse: string) {
    const timer = userResponse === "skip" ? 0 : 2000;
    setTimeout(() => {
      questionIteratorIndex + 1 === quizPerformance.totalQuestions
        ? navigate("/results")
        : setQuestionIteratorIndex(questionIteratorIndex + 1);
      setQuizPerformance({
        ...quizPerformance,
        currentQuestion: quizPerformance.currentQuestion + 1,
        score: quizPerformance.score + scoreUpdate,
      });
      setBgOptions(initialState);
      if (userResponse === "correct") {
        setResults({
          ...results,
          correct: results.correct + 1,
          questionsAttempted: results.questionsAttempted + 1,
        });
      } else if (userResponse === "incorrect") {
        setResults({
          ...results,
          incorrect: results.incorrect + 1,
          questionsAttempted: results.questionsAttempted + 1,
        });
      }
    }, timer);
  }

  function optionHitHandler(
    choosenOption: string,
    correctOption: string,
    options: string[]
  ) {
    const ourOptionIndex = options.indexOf(choosenOption);
    const newBgOptions = [...bgOptions];
    if (choosenOption === correctOption) {
      newBgOptions[ourOptionIndex] = "bg-green";
      setBgOptions(newBgOptions);

      ToRunAfterOptionHit(5, "correct");
    } else {
      const correctOptionIndex = options.indexOf(correctOption);
      newBgOptions[correctOptionIndex] = "bg-green";
      newBgOptions[ourOptionIndex] = "bg-red";
      setBgOptions(newBgOptions);
      setResults({ ...results, incorrect: results.incorrect - 1 });
      ToRunAfterOptionHit(-2, "incorrect");
    }
  }
  return (
    <>
      <div className="bg-grey-extralight rounded mb-4 lg:w-3/5 md:w-4/5 sm:h-20">
        <p className="font-extrabold text-white break-words p-4 ">
          {questions[questionIteratorIndex].question}
        </p>
      </div>
      {questions[questionIteratorIndex].options.map((option, index) => (
        <button
          key={index}
          onClick={() =>
            optionHitHandler(
              option,
              questions[questionIteratorIndex].correctOption,
              questions[questionIteratorIndex].options
            )
          }
          className={`${bgOptions[index]}  rounded ml-4 mr-4 mb-4 sm:w-3/6 w-5/6`}
        >
          <p className="font-extrabold text-white break-all p-4">{option}</p>
        </button>
      ))}
      <button
        onClick={() => ToRunAfterOptionHit(0, "skip")}
        className="text-white bg-blue font-bold p-2 w-40  rounded "
      >
        Skip
      </button>
    </>
  );
}
