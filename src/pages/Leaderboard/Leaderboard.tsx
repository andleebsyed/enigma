import { Link } from "react-router-dom";

export function Leaderboard() {
  return (
    <div className="flex justify-center m-4 md:mt-8">
      <main className="flex flex-col justify-center w-5/6 sm:w-2/4">
        <section className="  mb-4 rounded p-4 ">
          <h1 className="text-white  font-bold text-2xl  justify-center  text-center">
            Leaderboard
          </h1>
        </section>
        <section className="">
          <section className="w-full flex justify-between mb-4 text-white font-bold rounded text-xl p-2 bg-grey-extralight">
            <span>Name</span>
            <span>Score</span>
          </section>
          <section className="flex justify-between mb-4 text-white font-bold rounded text-xl p-2 bg-grey-extralight">
            <span>Abc</span>
            <span>100</span>
          </section>
          <section className=" flex justify-between mb-4 text-white font-bold rounded text-xl p-2 bg-grey-extralight">
            <span>defg</span>
            <span>90</span>
          </section>
          <section className=" flex justify-between mb-4 text-white font-bold rounded text-xl p-2 bg-grey-extralight">
            <span>hijkl</span>
            <span>80</span>
          </section>
          <section className=" flex justify-between mb-4 text-white font-bold rounded text-xl p-2 bg-grey-extralight">
            <span>mnopqrst</span>
            <span>50</span>
          </section>
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
}
