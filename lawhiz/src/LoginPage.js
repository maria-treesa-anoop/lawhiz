import React, { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { auth, googleAuthProvider, signInWithPopup } from './firebase'; // Adjust the path to your firebase configuration file

function LoginPage() {
  const navigate = useNavigate();

  useEffect(() => {
    const handleGoogleLoginOnLoad = async () => {
      try {
        // Trigger Google authentication pop-up
        await signInWithPopup(auth, googleAuthProvider);
        // Redirect to home page after successful login
        navigate('/');
      } catch (error) {
        console.error('Sign in error:', error);
      }
    };

    // Call the function to trigger Google authentication when component loads
    handleGoogleLoginOnLoad();
  }, [navigate]);

  return (
    <div className="flex items-center justify-center h-screen">
      <div className="bg-white rounded-lg shadow-md p-8">
        <h2 className="text-3xl font-semibold mb-4">Welcome to Lawhiz</h2>
        {/* You can optionally include a loading indicator here */}
      </div>
    </div>
  );
}

export default LoginPage;
