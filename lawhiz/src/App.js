import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import LoginPage from './LoginPage';
import AboutUsPage from './AboutUsPage';
import NavbarSimple from './navbar';
import LegalChatbot from './LegalChatbot';

function App() {
  return (
    <Router>
      <div>
        <NavbarSimple />
        <Routes>
        <Route path='/login' element={<LoginPage/>}/>
          <Route path='/about' element={<AboutUsPage/>}/>
          <Route path='/chatbot' element={<LegalChatbot/>}/>
          
        </Routes>
      </div>
    </Router>
  );
}

export default App;