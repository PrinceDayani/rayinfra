import React from "react";
import "../styles/PreInfoHome.css";

const PreInfoHome = () => {
  return (
    <div className="preinfo-home">
      {/* Top Statistics */}
      <div className="statistics">
        <div className="stat">
          <h2>1,500<span>+</span></h2>
          <p>Complete Projects</p>
        </div>
        <div className="stat">
          <h2>450<span>+</span></h2>
          <p>Team Members</p>
        </div>
        <div className="stat">
          <h2>2,800<span>+</span></h2>
          <p>Satisfied Clients</p>
        </div>
      </div>

      {/* Content Section */}
      <div className="content">
        <div className="image-container">
          <img
            src="https://via.placeholder.com/500x350" /* Replace with your image */
            alt="Infrastructure"
          />
          <div className="overlay-box">
            <h3>30<span>+</span></h3>
            <p>Years of experience</p>
          </div>
        </div>

        <div className="text-container">
          <h2>Transforming Vision into Reality Through Experience.</h2>
          <p>
            To establish ourselves as an internationally respected engineering consultant,
            offering comprehensive and innovative solutions. We are committed to unmatched
            performance, unparalleled accountability, and exceptional client satisfaction.
            To establish ourselves as an internationally respected engineering consultant,
            offering comprehensive and innovative solutions. We are committed to unmatched
            performance, unparalleled accountability, and exceptional client satisfaction.
          </p>
        </div>
      </div>
    </div>
  );
};

export default PreInfoHome;
