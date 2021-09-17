import { useState } from "react";
import { useNavigate } from "react-router";
import {
  GuestAccess,
  setupAuthHeaderForServiceCalls,
  UserSignIn,
} from "../../services/userAuth";
import { ServerError, SignInResponse } from "../../types/services.types";
export function SignIn() {
  const navigate = useNavigate();
  const [userCredentials, setUserCredentials] = useState({
    username: "",
    password: "",
  });
  const [signinButtonText, setSigninButtonText] = useState("Sign In");
  const [loginError, setLoginError] = useState("invisible");

  function SignInSuccess(response: SignInResponse | ServerError) {
    if ("token" in response) {
      setupAuthHeaderForServiceCalls(response.token);
      localStorage.setItem("token", response.token);
      localStorage.setItem("username", response.username);
      navigate("/categories", { replace: true });
    }
  }
  async function SignInSubmitHandler({
    event,
    guest,
  }: {
    event: React.SyntheticEvent;
    guest: boolean;
  }) {
    event.preventDefault();
    setSigninButtonText("Signing In...");
    let response;
    if (guest) {
      response = await GuestAccess();
    } else {
      response = await UserSignIn(userCredentials);
    }
    setSigninButtonText("Sign In");
    if ("allowUser" in response && response.allowUser) {
      SignInSuccess(response);
    } else {
      setLoginError("visible");
    }
  }
  return (
    <main className="w-96 p-8 mt-10 bg-grey-light m-3">
      <p className="text-center text-white font-bold text-xl">
        Already have an Account?
      </p>
      <p className={` text-center text-red font-bold mt-2 ${loginError}`}>
        Username or Password incorrect
      </p>
      <form
        className="flex flex-col"
        onSubmit={(event: React.SyntheticEvent) =>
          SignInSubmitHandler({ event, guest: false })
        }
      >
        <label className="text-white mt-8">Username:</label>
        <input
          onChange={(event) =>
            setUserCredentials({
              ...userCredentials,
              username: event.target.value,
            })
          }
          className="rounded-sm p-1.5 mb-8 bg-grey-lighter font-bold"
          type="text"
          name="username"
          required
        />
        <label className="text-white">Password:</label>
        <input
          onChange={(event) =>
            setUserCredentials({
              ...userCredentials,
              password: event.target.value,
            })
          }
          className="rounded-sm p-1.5 mb-20 bg-grey-lighter font-bold"
          type="password"
          name="password"
          required
        />

        <input
          className="bg-red p-4 text-white rounded"
          type="submit"
          name="Sign In"
          value={`${signinButtonText}`}
        />
        <button
          onClick={(event: React.SyntheticEvent) =>
            SignInSubmitHandler({ event, guest: true })
          }
          className="bg-red p-4 text-white w-10/12 self-center rounded mt-2"
        >
          Sign in as Guest
        </button>
      </form>
    </main>
  );
}
