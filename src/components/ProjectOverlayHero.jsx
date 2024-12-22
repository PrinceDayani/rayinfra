import React from "react";
import "../styles/ProjectOverlayHero.css"; // Add your styles here

const ProjectOverlayHero = () => {
  return (
    <div className="container">
      {/* Main Section */}
      <div className="background-section"></div>

      {/* Overlay Section */}
      <div className="overlay-section">
        <div className="content">
          <h2>Industry leader-specialist</h2>
          <p>
            We know vision-driven design results in enduring and innovative
            spaces. Our work considers the impact on humanity's wider interests.
          </p>
          <div className="stats">
            <div>
              <h3>38k+</h3>
              <p>m2 of total area</p>
            </div>
            <div>
              <h3>94+</h3>
              <p>projects done</p>
            </div>
          </div>
        </div>
        {/* Right Image Section */}
        <div className="media">
          <img
            src="image-placeholder.jpg"
            alt="Modern Architecture"
            className="image"
          />
          <div className="play-button">
            <span>▶</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProjectOverlayHero;
