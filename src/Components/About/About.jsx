import React from "react";
import './About.css';
import AboutBackground from "../Assets/law2.webp";


const About = () => {
  return (
    <div className="about-section-container">
      <div className="about-background-image-container">
        <img src={AboutBackground} alt="" />
      </div>
      
      <div className="about-section-text-container">
        <p className="primary-subheading">About</p>
        <h1 className="primary-heading big-bold-heading">
          Law-Whiz is a Legal Advisory Chatbot.
        </h1>
        <p className="primary-text">
          Lorem ipsum dolor sit amet consectetur. Non tincidunt magna non et
          elit. Dolor turpis molestie dui magnis facilisis at fringilla quam.
        </p>
        <p className="primary-text">
          Non tincidunt magna non et elit. Dolor turpis molestie dui magnis
          facilisis at fringilla quam.
        </p>
        
      </div>
    </div>
  );
};

export default About;