import { QuizCard } from "../../Components/QuizCard/QuizCard";

export function Categories() {
  return (
    <div className="flex flex-col justify-center bg-grey items-center min-h-screen ">
      <section className="flex justify-evenly flex-wrap  ">
        <QuizCard />
        <QuizCard />
      </section>
      <section className="flex justify-evenly flex-wrap ">
        <QuizCard />
        <QuizCard />
      </section>
    </div>
  );
}
