export function Results() {
  return (
    <div className="flex justify-center m-4 mt-8">
      <main className="flex flex-col justify-center sm:w-3/6">
        <section className=" bg-grey-extralight mb-4 rounded p-4 ">
          <h1 className="text-white  font-bold text-2xl  justify-center  text-center">
            Your Performance
          </h1>
        </section>
        <section className="">
          <section className="w-full flex justify-between mb-4 text-white font-bold rounded text-xl p-2 bg-grey-extralight">
            <span>Total Questions</span>
            <span>0</span>
          </section>
          <section className="flex justify-between mb-4 text-white font-bold rounded text-xl p-2 bg-grey-extralight">
            <span>Questions Attempted</span>
            <span>0</span>
          </section>
          <section className=" flex justify-between mb-4 text-white font-bold rounded text-xl p-2 bg-green">
            <span>Correct</span>
            <span>0</span>
          </section>
          <section className=" flex justify-between mb-4 text-white font-bold rounded text-xl p-2 bg-red">
            <span>Incorrect</span>
            <span>0</span>
          </section>
          <section className=" flex justify-between mb-4 text-white font-bold rounded text-xl p-2 bg-grey-extralight">
            <span>Total Score</span>
            <span>0</span>
          </section>
        </section>

        <footer className="flex justify-between mt-4 ">
          <button className="bg-blue text-white font-bold p-2 rounded">
            Leaderboard
          </button>
          <button className="bg-blue text-white font-bold p-2 rounded">
            Play Again
          </button>
        </footer>
      </main>
    </div>
  );
}
