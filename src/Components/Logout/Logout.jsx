import React, { useCallback } from 'react';
import { useNavigate } from 'react-router-dom';
import "./Logout.css";

const LogoutPage = () => {
  const navigate = useNavigate();

  const handleLogout = useCallback(async () => {
    // Perform logout logic
    // Assuming it's successful
    navigate('/home'); // Redirect to the home page
  }, [navigate]);

  return (
    <div className="logbox"> 
      <h1>Are you sure you want to Logout?</h1>
      <button onClick={handleLogout}>Logout</button>
    </div>
  );
};

export default LogoutPage;
