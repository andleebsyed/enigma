import { useState } from "react";
import { useNavigate } from "react-router-dom";
import {
  ServerError,
  setupAuthHeaderForServiceCalls,
  SignInResponse,
  SignUpResponse,
  UserSignUp,
} from "../../ApiCalls/userAuth";
import { useQuizPerformance } from "../../context/quizPerformance.context";

export function SignUp() {
  const initialState = {
    username: "",
    email: "",
    password: "",
    confirmPassword: "",
  };
  const [userData, setUserData] = useState(initialState);
  const [userSignUpError, setUserSignUpError] = useState({
    userSignUpErrorMessage: "",
    userSignUpErrorStatus: "invisible",
  });
  const [signUpButtonText, setSignUpButtonText] = useState("Sign Up");
  const navigate = useNavigate();
  const { quizPerformance, setQuizPerformance } = useQuizPerformance();
  function SignInSuccess(response: SignUpResponse | ServerError) {
    if ("token" in response) {
      setupAuthHeaderForServiceCalls(response.token);
      localStorage.setItem("token", response.token);
      localStorage.setItem("username", response.username);
      navigate("/categories", { replace: true });

      setQuizPerformance({
        ...quizPerformance,
        username: response.username,
      });
    }
  }
  async function SignUpSubmitHandler(event: React.SyntheticEvent) {
    event.preventDefault();
    setSignUpButtonText("Signing Up...");
    if (userData.password !== userData.confirmPassword) {
      setUserSignUpError({
        ...userSignUpError,
        userSignUpErrorMessage: "Passwords didn't match",
        userSignUpErrorStatus: "visible",
      });
      setSignUpButtonText("Sign Up");
    } else {
      const response = await UserSignUp(userData);
      setSignUpButtonText("Sign Up");
      if (response.status && "token" in response) {
        SignInSuccess(response);
        navigate("/categories");
      } else if ("existingField" in response) {
        setUserSignUpError({
          ...userSignUpError,
          userSignUpErrorStatus: "visible",
          userSignUpErrorMessage: `${response.existingField} already exists`,
        });
      }
    }
  }
  return (
    <div className="flex min-h-screen items-center justify-center bg-grey-dark">
      <main className="flex flex-col w-96 p-8  m-3 bg-grey-light rounded-sm">
        <span className="text-center text-blue font-bold text-xl">
          Sign Up?
        </span>
        <form className="flex flex-col" onSubmit={SignUpSubmitHandler}>
          <p
            className={`text-center text-red font-bold ${userSignUpError.userSignUpErrorStatus}`}
          >
            {userSignUpError.userSignUpErrorMessage}
          </p>
          <label className="text-white mt-8">Username:</label>
          <input
            onChange={(event) =>
              setUserData({ ...userData, username: event.target.value })
            }
            className="rounded-sm p-1.5 mb-8 bg-grey-lighter font-bold"
            type="text"
            name="username"
            required
          />
          <label className="text-white">Email:</label>
          <input
            onChange={(event) =>
              setUserData({ ...userData, email: event.target.value })
            }
            className="rounded-sm p-1.5 mb-8 bg-grey-lighter font-bold"
            type="email"
            name="email"
            required
          />
          <label className="text-white">Password:</label>
          <input
            onChange={(event) =>
              setUserData({ ...userData, password: event.target.value })
            }
            className="rounded-sm p-1.5 mb-8 bg-grey-lighter font-bold"
            type="password"
            name="password"
            required
          />
          <label className="text-white">Confirm Password:</label>
          <input
            onChange={(event) =>
              setUserData({ ...userData, confirmPassword: event.target.value })
            }
            className="rounded-sm p-1.5 mb-14 bg-grey-lighter font-bold"
            type="password"
            name="confirmPassword"
            required
          />
          <input
            className="bg-red p-4 text-white rounded"
            type="submit"
            name="signUp"
            value={`${signUpButtonText}`}
          />
        </form>
      </main>
    </div>
  );
}
