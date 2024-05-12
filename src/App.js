import React, { useState, useEffect } from 'react';
import { BrowserRouter as Router, Route, Routes, Navigate } from 'react-router-dom';
import About from './Components/About/About';
import Navbar from './Components/Navbar/navbar';
import Chatbot from './Components/Chatbot/Chatbot';
import Home from './Components/Front/Home';
import Signup from './Components/Signup/Signup';
import Login from './Components/Login/Login';
import Logout from './Components/Logout/Logout';


function App() {
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  useEffect(() => {
    const storedShowLogin = localStorage.getItem('showLogin');
    setIsLoggedIn(storedShowLogin === 'true');
  }, []);

  const handleLoginClick = () => {
    localStorage.setItem('showLogin', 'true');
    setIsLoggedIn(true);
  };

  return (
    <Router>
      <div>
        {isLoggedIn && <Navbar />}
        <Routes>
          <Route path="/home" element={<Home />} />
          <Route path="/login" element={<Login onLogin={handleLoginClick} />} />
          <Route path="/signup" element={<Signup />} />
          <Route path="/chatbot" element={<Chatbot />} />
          <Route path="/about" element={<About />} />
          <Route path="/logout" element={<Logout />} />
          
        </Routes>
        {!isLoggedIn && <Navigate to="/login" replace />}
      </div>
    </Router>
  );
}

export default App;
