import { Access } from "./pages/Access/Access";
import { Categories } from "./pages/Categories/Categories";
import { Header } from "./Components/Header/Header";
import { Routes, Route, useNavigate } from "react-router-dom";
import { SignUp } from "./pages/SignUp/SignUp";
import { Question } from "./pages/Question/Question";
import { Results } from "./pages/Results/Results";
import { Leaderboard } from "./pages/Leaderboard/Leaderboard";
import { Homepage } from "./pages/Homepage/Homepage";
import { useEffect } from "react";
import { QuizData, setupUserAuthorizationHandler } from "./ApiCalls/userAuth";
import { useData } from "./context/quizdata-context";
import { AuthHandler } from "./pages/AuthHandler/AuthHandler";
function App() {
  const navigate = useNavigate();
  const { data, setData } = useData();
  function PrivateRoute(props: any) {
    if (localStorage.getItem("token")) {
      return <Route {...props} />;
    } else {
      return (
        <Route {...props} path="/unauthorized" element={<AuthHandler />} />
      );
    }
  }

  useEffect(() => {
    async function Run() {
      const response = await QuizData();
      setData({ ...data, quizCategories: response });
      setupUserAuthorizationHandler(navigate);
    }
    Run();
  }, []);
  return (
    <div className="bg-grey h-screen">
      <Header />
      <Routes>
        <Route path="/" element={<Homepage />} />
        <Route path="/access" element={<Access />} />
        <PrivateRoute path="/categories" element={<Categories />} />
        <Route path="/signup" element={<SignUp />} />
        <PrivateRoute path="/question/:chosenQuizName" element={<Question />} />
        <PrivateRoute path="/results" element={<Results />} />
        <PrivateRoute path="/leaderboard" element={<Leaderboard />} />
        <Route path="/unauthorized" element={<AuthHandler />} />
      </Routes>
    </div>
  );
}

export default App;
