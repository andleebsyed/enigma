import { Homepage } from './pages/Homepage/Homepage'
import { Categories } from './pages/Categories/Categories';
import { Header } from './Components/Header/Header';
import {Routes, Route} from 'react-router-dom'
import { SignUp } from './pages/SignUp/SignUp';
import { Question } from './pages/Question/Question';
function App() {
  return (
    
      <div className="bg-grey h-screen">
        <Header />
        <Routes>
        <Route path="/" element={<Homepage />} />
        <Route path="/categories" element={<Categories />} />
        <Route path="/signup" element={<SignUp />} />
        <Route path="/question" element ={<Question />} />
      </Routes>
    </div>

    
  );
}

export default App;
