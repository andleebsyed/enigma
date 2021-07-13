import { useEffect, useState } from "react";
import { useQuizPerformance } from "../../context/quizPerformance.context";
import { QUESTIONS } from "./QuizQuestions.types";

export function QuizQuestion({ questions }: QUESTIONS) {
  const initialState = [
    "bg-grey-extralight",
    "bg-grey-extralight",
    "bg-grey-extralight",
    "bg-grey-extralight",
  ];

  const [bgOptions, setBgOptions] = useState<string[]>(initialState);
  const { quizPerformance, setQuizPerformance } = useQuizPerformance();
  const [questionIteratorIndex, setQuestionIteratorIndex] = useState<number>(0);

  useEffect(() => {
    console.log("useefffect running");
    setQuizPerformance({
      ...quizPerformance,
      totalQuestions: questions.length,
    });
  }, []);

  function ToRunAfterOptionHit(scoreUpdate: number) {
    // setQuizPerformance({
    //   ...quizPerformance,

    //   score: quizPerformance!.score + scoreUpdate,
    // });
    setTimeout(() => {
      setQuestionIteratorIndex(questionIteratorIndex + 1);
      setQuizPerformance({
        ...quizPerformance,
        currentQuestion: quizPerformance.currentQuestion + 1,
        score: quizPerformance.score + scoreUpdate,
      });
      setBgOptions(initialState);
    }, 2000);
  }

  function skipButtonHandler() {
    setQuestionIteratorIndex(() => questionIteratorIndex + 1);
    setQuizPerformance({
      ...quizPerformance,
      currentQuestion: quizPerformance.currentQuestion + 1,
    });
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
      ToRunAfterOptionHit(5);
    } else {
      const correctOptionIndex = options.indexOf(correctOption);
      newBgOptions[correctOptionIndex] = "bg-green";
      newBgOptions[ourOptionIndex] = "bg-red";
      setBgOptions(newBgOptions);
      ToRunAfterOptionHit(-2);
    }
  }
  return (
    <>
      <div className="bg-grey-extralight rounded mb-4 lg:w-3/5 md:w-4/5 sm:h-20">
        <p className="font-extrabold text-white break-all p-4 ">
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
        onClick={() => skipButtonHandler()}
        className="text-white bg-blue font-bold p-2 w-40  rounded "
      >
        Skip
      </button>
    </>
  );
}
