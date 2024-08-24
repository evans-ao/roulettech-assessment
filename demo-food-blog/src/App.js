import React from 'react';
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import Home from './pages/Home'; // all pages of the websites
import './App.css';

// start of application
function App() {
  return (        
    <div className='root'> 
    
    <Router>


      <Routes>
        {/* Default route (when no path matches) */}
        <Route path="*" element={<Home />} 

        />{/* Set up the Home route */}
        <Route path="/" element={<Home />}

      /></Routes>
    </Router>
    </div>   
  );
}
export default App;
