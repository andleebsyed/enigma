import React from "react";
import { useData } from "../../context/quizdata-context";

type OPTION = {
  option: String;
  correctOption: String;
};
export function General({ option, correctOption }: OPTION) {
  // const data = useData()
  // function optionHitHandler(option: React.MouseEvent) {
  //   // data?.quizCategories.map()
  //   if (option === correctOption) {
  //   }
  // }

  return (
    <button
      // onClick={(option) => optionHitHandler(option)}
      className="bg-grey-extralight rounded ml-4 mr-4 mb-4 sm:w-3/6 w-5/6"
    >
      <p className="font-extrabold text-white break-all p-4">{option}</p>
    </button>
  );
}
