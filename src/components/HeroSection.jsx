import React from "react";
import "../styles/HeroSection.css?v=1.0.1";

const HeroSection = () => {
  return (
    <div className="hero-section">
      <div className="hero-content">
        <h1 className="hero-title">
          Engineering Excellence, Building Trust.
        </h1>
        <p className="hero-description">
          We provide high-quality engineering and project management solutions, focusing on safety, efficiency, and cost-effectiveness. Built on integrity and innovation, we strive to create lasting value for our clients and industry.
        </p>
        <div className="hero-buttons">
          <button className="btn btn-quote">Get A Quote</button>
          <button className="btn btn-about">More About Us</button>
        </div>
      </div>
    </div>
  );
};

export default HeroSection;