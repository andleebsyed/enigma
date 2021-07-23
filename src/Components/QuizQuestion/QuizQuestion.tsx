import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { SaveToLeaderboard } from "../../ApiCalls/leaderboard";
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
  const { dispatch } = useResults();
  const navigate = useNavigate();

  useEffect(() => {
    setQuizPerformance({
      ...quizPerformance,
      totalQuestions: questions.length,
    });
  }, []);

  async function ToRunAfterOptionHit(scoreUpdate: number) {
    const timer = scoreUpdate === 0 ? 0 : 2000;
    function ChangeOnUserAction() {
      setQuizPerformance({
        ...quizPerformance,
        score: quizPerformance.score + scoreUpdate,
      });
      setBgOptions(initialState);
    }
    setTimeout(async () => {
      if (questionIteratorIndex + 1 === quizPerformance.totalQuestions) {
        ChangeOnUserAction();

        const { authorized } = await SaveToLeaderboard(quizPerformance);
        if (authorized) {
          navigate("/results");
        }
      } else {
        ChangeOnUserAction();
        setQuizPerformance({
          ...quizPerformance,
          currentQuestion: quizPerformance.currentQuestion + 1,
        });

        setQuestionIteratorIndex(questionIteratorIndex + 1);
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
      ToRunAfterOptionHit(5);
      dispatch({ type: "correct" });
    } else {
      const correctOptionIndex = options.indexOf(correctOption);
      newBgOptions[correctOptionIndex] = "bg-green";
      newBgOptions[ourOptionIndex] = "bg-red";
      setBgOptions(newBgOptions);
      ToRunAfterOptionHit(-2);
      dispatch({ type: "incorrect" });
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
        onClick={() => ToRunAfterOptionHit(0)}
        className="text-white bg-blue font-bold p-2 w-40  rounded "
      >
        Skip
      </button>
    </>
  );
}
