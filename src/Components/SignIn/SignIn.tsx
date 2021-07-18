import { useState } from "react";
import { useNavigate } from "react-router";
import { UserSignIn } from "../../ApiCalls/userAuth";
import { useQuizPerformance } from "../../context/quizPerformance.context";
export function SignIn() {
  const navigate = useNavigate();
  const [userCredentials, setUserCredentials] = useState({
    username: "",
    password: "",
  });
  const [signinButtonText, setSigninButtonText] = useState("Sign In");
  const [loginError, setLoginError] = useState("invisible");
  const { quizPerformance, setQuizPerformance } = useQuizPerformance();
  async function SignInSubmitHandler(event: React.SyntheticEvent) {
    event.preventDefault();
    console.log(userCredentials);
    setSigninButtonText("Signing In...");
    const response = await UserSignIn(userCredentials);
    setSigninButtonText("Sign In");
    if ("allowUser" in response && response.allowUser) {
      localStorage.setItem("token", response.token);
      localStorage.setItem("username", response.username);
      setQuizPerformance({ ...quizPerformance, username: response.username });
      navigate("/categories", { replace: true });
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
      <form className="flex flex-col" onSubmit={SignInSubmitHandler}>
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
      </form>
    </main>
  );
}
