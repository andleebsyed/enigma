import axios from "axios";
import { useEffect } from "react";
import { Link } from "react-router-dom";
import { SaveToLeaderboard } from "../../ApiCalls/leaderboard";
import { BASE_URL } from "../../ApiUrls/ApiUrls";
import { useQuizPerformance } from "../../context/quizPerformance.context";
import { useResults } from "../../context/quizResults.context";

export function Results() {
  const { quizPerformance } = useQuizPerformance();
  const { results } = useResults();
  console.log("quizPerformance ", quizPerformance);
  useEffect(() => {
    async function Run() {
      // const userPerformanceData = {
      //   userData: {
      //     name: localStorage.getItem("username"),
      //     quizName: quizPerformance.quizName,
      //     score: quizPerformance.score,
      //   },
      // };
      // const response = await axios.post(
      //   BASE_URL + "/leaderboard",
      //   userPerformanceData
      // );
      // if (response.data.status) {
      //   console.log("user saved to leaderboard");
      // }
      await SaveToLeaderboard(quizPerformance);
    }
    Run();
  }, []);
  return (
    <div className="flex justify-center m-3 mt-4">
      <main className="flex flex-col justify-center w-5/6 sm:w-2/4">
        <section className="  mb-4 rounded p-4 ">
          <h1 className="text-white  font-bold text-2xl  justify-center  text-center">
            Your Performance
          </h1>
        </section>
        <section className="">
          <section className="w-full flex justify-between mb-4 text-white font-bold rounded text-xl p-2 bg-grey-extralight">
            <span>Total Questions</span>
            <span>{quizPerformance.totalQuestions}</span>
          </section>
          <section className="flex justify-between mb-4 text-white font-bold rounded text-xl p-2 bg-grey-extralight">
            <span>Questions Attempted</span>
            <span>{results.questionsAttempted}</span>
          </section>
          <section className=" flex justify-between mb-4 text-white font-bold rounded text-xl p-2 bg-green">
            <span>Correct</span>
            <span>{results.correct}</span>
          </section>
          <section className=" flex justify-between mb-4 text-white font-bold rounded text-xl p-2 bg-red">
            <span>Incorrect</span>
            <span>{results.incorrect}</span>
          </section>
          <section className=" flex justify-between mb-4 text-white font-bold rounded text-xl p-2 bg-grey-extralight">
            <span>Total Score</span>
            <span>{quizPerformance.score}</span>
          </section>
        </section>

        <footer className="flex justify-between mt-4 ">
          <Link to="/leaderboard">
            <button className="bg-blue text-white font-bold p-2 rounded">
              Leaderboard
            </button>
          </Link>
          <Link to="/categories">
            <button className="bg-blue text-white font-bold p-2 rounded">
              Play Again
            </button>
          </Link>
        </footer>
      </main>
    </div>
  );
}
