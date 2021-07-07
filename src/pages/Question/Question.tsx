import { General } from "../../Components/Options/General";
import { Right } from "../../Components/Options/Right";
import { Wrong } from "../../Components/Options/Wrong";
import { QuizPerformance } from "../../Components/QuizPerformance/QuizPerformance";
import { QuizQuestion } from "../../Components/QuizQuestion/QuizQuestion";

export function Question() {
  return (
    <div className="min-h-screen bg-grey">
      <QuizPerformance />
      <main className="flex flex-col items-center ml-2 mr-2 mt-16 ">
        <QuizQuestion />
        {/* options */}
        <General />
        <Right />
        <Wrong />
        <General />
        <button className="text-white bg-blue font-bold p-2 w-40  rounded ">
          Skip
        </button>
      </main>
    </div>
  );
}
