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
    <div className="flex flex-col items-center justify-center h-screen">
      <h2 className="text-3xl font-semibold mb-4">Login</h2>
      <button
        onClick={handleGoogleLogin}
        className="px-6 py-3 bg-blue-500 text-white rounded-md shadow-md hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-opacity-50"
      >
        Login with Google
      </button>
    </div>
  );
}

export default LoginPage;
