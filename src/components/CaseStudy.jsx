import React from 'react';
import '../styles/CaseStudy.css';
import bridgeHomeImage from "../assets/images/BridgeHome.jpg";


const CaseStudySection = () => {
  return (
    <div className="case-study-container">
      <div className="case-study-image-wrapper">
        <img 
          src={bridgeHomeImage}
          alt="Thermal Power Plant" 
          className="case-study-image"
        />
      </div>
      
      <div className="case-study-content">
        <span className="case-study-label">CASE STUDIES</span>
        <h2 className="case-study-title">
          <span className="highlight">1000 MW ultra supercritical thermal power plant in</span>
          <span className="location">Malaysia</span>
          <span className="subtitle">delivered as an engineering partner to a Korean EPC</span>
        </h2>
        <p className="case-study-description">
          The 1000 MW ultra supercritical thermal power plant undertake, it is a testimony 
          to world class engineering and a fine example of collaboration for shared value 
          creation.
        </p>
      </div>
    </div>
  );
};

export default CaseStudySection;