// HeroSection.js
import React from 'react';
import '../styles/HeroSection.css';

const HeroSection = () => {
  return (
    <div className="hero-section">
      <div className="content-wrapper">
        <h1>Engineering Excellence, Building Trust.</h1>
        <p>
          We provide high-quality engineering and project management solutions, focusing on safety,
          efficiency, and cost-effectiveness. Built on integrity and innovation, we strive to create lasting
          value for our clients and industry.
        </p>
        <div className="cta-buttons">
          <button className="get-quote">Get A Quote</button>
          <button className="more-about-us">More About Us</button>
        </div>
      </div>
    </div>
  );
};

export default HeroSection;