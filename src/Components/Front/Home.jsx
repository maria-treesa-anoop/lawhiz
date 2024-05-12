import React from 'react';
import "./Home.css";
import AboutBackground from "../Assets/law1.jpg";

const Home = () => {
  const handleLoginClick = () => {
    // Redirect to login page
    window.location.href = '/Login';
  };

  return (
    <div className="home-background-image-container">
      <img src={AboutBackground} alt="" />
      <div className="text-overlay">
        <h1>Your Trusted Companion in Legal Matters</h1>
        <h2>Expert Guidance, Anytime, Anywhere</h2>
        <p>Navigating the complexities of the law just got simpler with Law-Whiz, your trusted legal advisor chatbot. Whether you're grappling with legal jargon or seeking guidance on intricate legal matters, Law-Whiz is here to streamline your journey through the legal landscape.</p>
        <button onClick={handleLoginClick}>Get Started</button>
      </div>
    </div>
  );
};

export default Home;
