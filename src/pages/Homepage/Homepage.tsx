import { Link } from "react-router-dom";

export function Homepage() {
  const homePageRedirector: string = localStorage.getItem("token")
    ? "/categories"
    : "/access";
  return (
    <main className="flex flex-col items-center justify-center min-h-screen bg-grey">
      <h1 className="text-red font-bold text-4xl">Enigma!</h1>
      <p className="text-white text-xl pt-8 text-center">
        An interactive Quiz where you can test your knowledge about different
        fields
      </p>
      <Link to={`${homePageRedirector}`}>
        <button className="bg-red text-white font-bold p-4 pl-14 pr-14 rounded mt-8">
          Let's Play
        </button>
      </Link>
    </main>
  );
}
