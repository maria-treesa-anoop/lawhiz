import React,{useState} from 'react' 
import './Signup.css'
import { useNavigate } from 'react-router-dom';
import { auth, googleAuthProvider, signInWithPopup } from '../../firebase';
import { Link } from 'react-router-dom';

import user_icon from '../Assets/person.png'
import email_icon from '../Assets/email.png'
import password_icon from '../Assets/password.png'

const Signup = (props) => {
  const [action, setAction] = useState("Sign Up");
  const navigate = useNavigate();

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
          <img src={user_icon} alt=""/>
          <input type="name" placeholder="Name"/>
        </div>
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
      
      
      {/* Link to the Signup page */}
      <div className="login-link">
        Already have an account? <Link to="/login">Login</Link>
      </div>
      <button type="button" onClick={props.add} className="btnSubmit">Submit</button>

    </div>
  );
}

export default Signup;