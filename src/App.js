import React, { useState, useEffect } from 'react';
import { BrowserRouter as Router, Route, Routes, Navigate } from 'react-router-dom';
import About from './Components/About/About';
import Navbar from './Components/Navbar/navbar';
import Chatbot from './Components/Chatbot/Chatbot';
import Home from './Components/Front/Home';
import Signup from './Components/Signup/Signup';
import Login from './Components/Login/Login';

function App() {
  const [isReg, setIsReg] = useState(false);
  const [inputs, setInputs] = useState({});
  const [arr, setArr] = useState([]);
  const [flag, setFlag] = useState(true);
  const [loginputs, setLoginputs] = useState({});
  const [arr2, setArr2] = useState([]);
  const [showLogin, setShowLogin] = useState(false);

  useEffect(() => {
    const storedShowLogin = localStorage.getItem('showLogin');
    setShowLogin(storedShowLogin === 'true');
  }, []);

  const handleLoginClick = () => {
    localStorage.setItem('showLogin', 'true');
    setShowLogin(true);
  };

  const takeInputs = (event) => {
    setInputs({ ...inputs, [event.target.id]: event.target.value });
  };

  const add = () => {
    setArr([...arr, inputs]);
    setIsReg(!isReg);
  };

  const log = (event) => {
    setLoginputs({ ...loginputs, [event.target.id]: event.target.value });
    setArr2([...arr2, loginputs]);
  };

  const current = () => {
    setFlag(!flag);
    for (let key of arr) {
      for (let value of arr2) {
        if (key.name === value.logname && key.pass === value.logpass) {
          setFlag(flag);
        }
      }
    }
  };

  return (
    
    <Router>
      <div>
        <Navbar />
        <Routes>
          <Route
            path="/"
            element={<Home onLoginClick={handleLoginClick} />}
          />
          
          <Route
            path="/login"
            element={<Login log={log} current={current} />}
          />
          <Route
            path="/signup"
            element={
              <Signup inp={takeInputs} add={add} />
            }
          />
          <Route path="/chatbot" element={<Chatbot />} />
          <Route path="/about" element={<About />} />
        </Routes>
        {showLogin && <Navigate to="/login" replace />}
      </div>
    </Router>
  );
}

export default App;
