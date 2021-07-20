import { Link, useNavigate } from "react-router-dom";

export function Header() {
  const navigate = useNavigate();
  const isToken = localStorage.getItem("token");

  function LogoutHandler() {
    localStorage.clear();
    navigate("/access", { replace: true });
  }

  return (
    <header className="flex justify-between border-b-4">
      <Link to="/">
        <h1 className="text-red text-2xl font-bold p-2">Enigma!</h1>
      </Link>
      {isToken && (
        <button
          onClick={LogoutHandler}
          className={`text-red text-2xl font-bold p-2`}
        >
          Logout
        </button>
      )}
    </header>
  );
}
