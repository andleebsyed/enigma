import { Homepage } from './pages/Homepage/Homepage'
import { Categories } from './pages/Categories/Categories';
import { Header } from './Components/Header/Header';
import {Routes, Route} from 'react-router-dom'
function App() {
  return (
    
      <div className="bg-grey h-screen">
        <Header />
        <Routes>
        <Route path="/" element={<Homepage />} />
      <Route path="/categories" element={<Categories />} />
      </Routes>
    </div>

    
  );
}

export default App;
