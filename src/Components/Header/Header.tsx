import { Link } from "react-router-dom";

export function Header() {
  return (
    <header className="flex border-b-4">
      <Link to="/">
        <h1 className="text-red text-2xl font-bold p-2">Enigma!</h1>
      </Link>
    </header>
  );
}
