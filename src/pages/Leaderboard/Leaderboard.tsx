import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { FetchFromLeaderboard } from "../../ApiCalls/leaderboard";
import { useData } from "../../context/quizdata-context";
export type SingleLeaderboardEntry = {
  _id: string;
  name: string;
  quizName: string;
  score: number;
  __v: number;
};
type LeaderboardData = SingleLeaderboardEntry[];
export function Leaderboard() {
  const [leaderboard, setLeaderboard] = useState<LeaderboardData>(
    {} as LeaderboardData
  );
  const { data } = useData();
  const [didMount, setDidMount] = useState(false);
  useEffect(() => {
    setDidMount(true);
    async function Run() {
      const ourLeaderboard = await FetchFromLeaderboard();
      setLeaderboard(ourLeaderboard);
    }
    if (didMount) {
      Run();
    }
    return () => setDidMount(false);
  }, [didMount]);
  if (leaderboard.length > 0) {
    return (
      <div className="flex justify-center m-4 md:mt-8">
        <main className="flex flex-col justify-center w-5/6 sm:w-2/4">
          <section className="  mb-4 rounded p-4 ">
            <h1 className="text-white  font-bold text-2xl  justify-center  text-center">
              Leaderboard
            </h1>
          </section>
          <section className="">
            <section className="w-full flex justify-between mb-4 text-white  font-extrabold rounded  p-2 bg-grey-extralight">
              <span>Name</span>
              <span>Quiz Name</span>
              <span>Score</span>
            </section>
            {leaderboard.map((user) => (
              <section
                key={user._id}
                className="flex justify-between mb-4 text-white  rounded border border-grey-extralight p-2 "
              >
                <span>{user.name}</span>
                <span>{user.quizName}</span>
                <span>{user.score}</span>
              </section>
            ))}
          </section>

          <footer className="flex justify-center mt-4 ">
            <Link to="/categories">
              <button className="bg-blue text-white font-bold p-2 rounded">
                Play Again
              </button>
            </Link>
          </footer>
        </main>
      </div>
    );
  } else {
    return <div>loading...</div>;
  }
}
