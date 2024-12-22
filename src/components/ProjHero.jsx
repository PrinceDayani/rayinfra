import React from "react";
import "../styles/ProjHero.css";

function ProjHero() {
  return (
    <div className="hero-container">
      {/* Hero Section */}
      <div className="hero-section">
        <div className="hero-text">
          <h1>
            Engineering Excellence, <br /> Building Trust.
          </h1>
          <p className="hero-description">
            We provide high-quality engineering and project management
            solutions, focusing on safety, efficiency, and cost-effectiveness.
            Built on integrity and innovation, we strive to create lasting value
            for our clients and industry.
          </p>
        </div>
      </div>

      {/* Bottom Section */}
      <div className="bottom-support">
      <div className="bottom-section">
        <div className="bottom-left">
          <h3>
            Industry leader- <br /> specialist
          </h3>
          <p>
            We know vision-driven design results in enduring and innovative
            spaces. Our work considers the impact on humanity’s wider interests.
          </p>
        </div>

        <div className="bottom-stats">
          <div className="stat">
            <h2>38k+</h2>
            <p>m2 of total area</p>
          </div>
          <div className="stat">
            <h2>94+</h2>
            <p>projects done</p>
          </div>
        </div>
        
        <div className="bottom-image">
          <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRw5tntdcgh74PNSm3reSGBNq8xsgloP5a-Nw&s" alt="Inset Building" />
          <div className="play-button">&#9658;</div>
        </div></div>
      </div>
    </div>
  );
}

export default ProjHero;

