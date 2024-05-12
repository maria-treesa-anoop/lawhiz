import React, { useState } from 'react';
import "./Login.css";
import { useNavigate, Link, useLocation } from 'react-router-dom';
import { auth, googleAuthProvider, signInWithPopup } from '../../firebase';

import email_icon from '../Assets/email.png';
import password_icon from '../Assets/password.png';

const Login = () => {
  const [action, setAction] = useState("Login");
  const navigate = useNavigate();
  const location = useLocation();

  const handleGoogleSignIn = async () => {
    try {
      // Trigger Google authentication pop-up
      await signInWithPopup(auth, googleAuthProvider);
      // Redirect to home page after successful login
      navigate('/chatbot');
    } catch (error) {
      console.error('Sign in error:', error);
    }
  };

  return (
    <div className='container'>
      <div className="header">
        <div className="text">{action}</div>
        <div className="underline"></div>
      </div>
      <div className="inputs">
        <div className="input">
          <img src={email_icon} alt=""/>
          <input type="email" placeholder="Email Id"/>
        </div>
        <div className="input">
          <img src={password_icon} alt=""/>
          <input type="password" placeholder="Password"/>
        </div>
        <div className="google-signin-container">
          <button className="google-signin" onClick={handleGoogleSignIn}>
            
            Sign in with Google
          </button>
        </div>
      </div>
      <div className="forgot-password">
        Forgot Password? <span>Click Here!</span>
      </div>
      <div className="submit-container">
        <div className="submit" onClick={() => setAction("Login")}>Login</div>
      </div>
      <div className="signup-link">
        Don't have an account? <Link to="/signup">Sign Up</Link>
      </div>
      
    </div>
  );
};

export default Login;
