import { Link } from "react-router-dom";

export function Unauthorized() {
  return (
    <main className="flex flex-col items-center justify-center min-h-screen bg-grey">
      <p className="text-white text-xl pt-8 text-center">
        You are not authorized to access this page as you are not logged in.
      </p>
      <Link to="/access">
        <button className="bg-red text-white font-bold p-4 pl-14 pr-14 rounded mt-8">
          Sign In here
        </button>
      </Link>
    </main>
  );
}
