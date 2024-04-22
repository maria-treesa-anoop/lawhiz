import React from 'react';
import { useNavigate } from 'react-router-dom';
import { auth, googleAuthProvider, signInWithPopup } from './firebase'; // Adjust the path to your firebase configuration file

function LoginPage() {
  const navigate = useNavigate();

  const handleGoogleLogin = () => {
    signInWithPopup(auth, googleAuthProvider)
      .then((result) => {
        // You can handle the result if needed
        navigate('/'); // Redirect to home page after successful login
      })
      .catch((error) => {
        console.error('Sign in error:', error);
      });
  };

  return (
    <div>
      <h2>Login</h2>
      <button onClick={handleGoogleLogin}>Login with Google</button>
    </div>
  );
}

export default LoginPage;