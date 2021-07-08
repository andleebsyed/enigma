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
  return (
    <div className="bg-grey h-screen">
      <Header />
      <Routes>
        <Route path="/" element={<Homepage />} />
        <Route path="/access" element={<Access />} />
        <Route path="/categories" element={<Categories />} />
        <Route path="/signup" element={<SignUp />} />
        <Route path="/question" element={<Question />} />
        <Route path="/results" element={<Results />} />
        <Route path="/leaderboard" element={<Leaderboard />} />
      </Routes>
    </div>
  );
}

export default App;
