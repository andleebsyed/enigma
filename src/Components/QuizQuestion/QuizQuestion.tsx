// import { createNoSubstitutionTemplateLiteral } from "typescript";
// import { Question } from "../../pages/Question/Question";
// import { General } from "../Options/General";
import { useState } from "react";
import { QUESTIONS } from "./QuizQuestions.types";

export function QuizQuestion({ questions }: QUESTIONS) {
  type BGOPTIONS = {
    optionColor: String;
  }[];
  const [bgOptions, setBgOptions] = useState<string[]>([
    "bg-grey-extralight",
    "bg-grey-extralight",
    "bg-grey-extralight",
    "bg-grey-extralight",
  ]);
  function optionHitHandler(
    choosenOption: string,
    correctOption: string,
    options: string[]
  ) {
    // data?.quizCategories.map()
    //  if (option === correctOption) {
    //    console.log("green")
    //  }
    //  else {
    //    console.log("red")
    //  }
    options.forEach((option, index) => {
      if (option === choosenOption) {
        if (option === correctOption) {
          console.log("green:answered correctly ", option);
          console.log("indexc is ", index);
          const newBgOptions = bgOptions.map((bgOption, bgIndex, bgOptions) =>
            index === bgIndex ? (bgOptions[bgIndex] = "bg-green") : bgOption
          );
          setBgOptions(newBgOptions);
          console.log({ bgOptions });
        } else {
          console.log("red:answered incorrectly ", option);
          const indexOfCorrectOption = bgOptions.indexOf(correctOption);
          const newBgOptions = bgOptions.map((bgOption, bgIndex, bgOptions) =>
            index === bgIndex ? (bgOptions[bgIndex] = "bg-red") : bgOption
          );
          setBgOptions(newBgOptions);
          console.log({ bgOptions });
        }
      }
      if (option === correctOption) {
        console.log("green: correct option:not choosen have to show");
        const newBgOptions = bgOptions.map((bgOption, bgIndex, bgOptions) =>
          index === bgIndex ? (bgOptions[bgIndex] = "bg-green") : bgOption
        );
        setBgOptions(newBgOptions);
        console.log({ bgOptions });
      }
      // else {
      //   console.log("grey: we did not fddle with these ", option);
      //   const newBgOptions = bgOptions.map((bgOption, bgIndex, bgOptions) =>
      //     index === bgIndex
      //       ? (bgOptions[bgIndex] = "bg-grey-extralight")
      //       : bgOption
      //   );
      //   setBgOptions(newBgOptions);
      //   console.log({ bgOptions });
      // }
    });
  }
  return (
    <>
      <div className="bg-grey-extralight rounded mb-4 lg:w-3/5 md:w-4/5 sm:h-20">
        <p className="font-extrabold text-white break-all p-4 ">
          {questions[0].question}
        </p>
      </div>
      {questions[0].options.map((option, index) => (
        <button
          onClick={() =>
            optionHitHandler(
              option,
              questions[0].correctOption,
              questions[0].options
            )
          }
          className={`${bgOptions[index]}  rounded ml-4 mr-4 mb-4 sm:w-3/6 w-5/6`}
        >
          <p className="font-extrabold text-white break-all p-4">{option}</p>
        </button>
      ))}
      <ul>
        {bgOptions.map((singleOption) => (
          <li>{singleOption}</li>
        ))}
      </ul>
    </>
  );
}
