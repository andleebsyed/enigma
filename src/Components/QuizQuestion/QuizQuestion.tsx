import { General } from "../Options/General";

type QUESTIONS = {
  questions: {
    question: string;
    options: string[];
    correctOption: string;
  }[];
};
export function QuizQuestion({ questions }: QUESTIONS) {
  return (
    <>
      <div className="bg-grey-extralight rounded mb-4 lg:w-3/5 md:w-4/5 sm:h-20">
        <p className="font-extrabold text-white break-all p-4 ">
          {questions[0].question}
        </p>
      </div>
      {questions[0].options.map((option) => (
        <General option={option} />
      ))}
    </>
  );
}
