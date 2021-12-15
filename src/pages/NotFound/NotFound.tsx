import { Link } from "react-router-dom";

export function NotFound() {
  return (
    <main className="flex flex-col justify-center items-center min-h-screen">
      <h1 className="text-white  p-4 text-xl text-center ">
        Oops, The Page You are looking for is not found!
      </h1>
      <Link to="/">
        <button className="bg-red m-2 p-4 rounded text-white  font-bold">
          Go To Homepage
        </button>
      </Link>
    </main>
  );
}
