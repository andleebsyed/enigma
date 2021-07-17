import { Access } from "./pages/Access/Access";
import { Categories } from "./pages/Categories/Categories";
import { Header } from "./Components/Header/Header";
import { Routes, Route } from "react-router-dom";
import { SignUp } from "./pages/SignUp/SignUp";
import { Question } from "./pages/Question/Question";
import { Results } from "./pages/Results/Results";
import { Leaderboard } from "./pages/Leaderboard/Leaderboard";
import { Homepage } from "./pages/Homepage/Homepage";
function App() {
  function PrivateRoute(props: any) {
    if (localStorage.getItem("token")) {
      console.log("permission granted");
      return <Route {...props} />;
    } else {
      return <Route {...props} element={<Access />} />;
    }
  }
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
      </Routes>
    </div>
  );
}

export default App;
