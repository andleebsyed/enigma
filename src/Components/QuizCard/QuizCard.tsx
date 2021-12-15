import { Link } from "react-router-dom";
import { CATEGORY } from "./QuizCard.types";

export function QuizCard({ category }: CATEGORY) {
  return (
    <section className=" bg-grey-dark h-72 w-56 flex flex-col mt-4 m-4 items-center justify-evenly rounded">
      <h1 className="text-blue text-2xl font-bold mb-2">{category.quizName}</h1>
      <span className="text-white mx-4 text-center ">
        {category.description}
      </span>
      <Link to={`/question/${category.quizName}`}>
        <button
          onClick={() => localStorage.setItem("quizName", category.quizName)}
          className="p-1 m-1  w-40 bg-red text-white font-semibold  relative top-40-0 rounded"
        >
          Play Now
        </button>
      </Link>
    </section>
  );
}
