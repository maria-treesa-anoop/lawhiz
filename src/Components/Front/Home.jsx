import React from 'react';
import "./Home.css";

const Home = () => {
  const handleLoginClick = () => {
    // Redirect to login page
    window.location.href = '/login';
  };

  return (
    <div className="container"> {/* Add className */}
      <h1>Welcome to Law-Whiz</h1>
      <p>This is the homepage of our website.</p>
      <button onClick={handleLoginClick}>Login</button>
    </div>
  );
};

export default Home;
