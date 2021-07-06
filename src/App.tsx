// import React from 'react';
import { Homepage } from './pages/Homepage/homepage'
import {Routes, Route} from 'react-router-dom'
function App() {
  return (
    <Routes>
      <div className="bg-grey h-screen">
        <Route path="/" element={<Homepage />} />
      
    </div>
    </Routes>
    
  );
}

export default App;
