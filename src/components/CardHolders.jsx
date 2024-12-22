import React, { useState } from 'react';
import '../styles/CardHolders.css'; // Ensure file exists
import bridgeHomeImage from "../assets/images/BridgeHome.jpg";
 

// The CardHolders component (sub-component)
const CardHolders = ({ title, description, image }) => (
  <div className="project-card">
    <h3 className="project-title">{title}</h3>
    <p className="project-description">{description}</p>
    <div className="read-more">
      Read More
      <svg className="arrow-icon" width="24" height="24" viewBox="0 0 24 24" fill="none">
        <path d="M14 5L21 12M21 12L14 19M21 12H3" stroke="currentColor" strokeWidth="2"/>
      </svg>
    </div>
    <div className="project-image">
      <img src={bridgeHomeImage} alt={title} />
    </div>
  </div>
);

// The ProjectsSection component (main component)
const ProjectsSection = () => {
  const [currentSlide, setCurrentSlide] = useState(0);

  const projects = [
    {
      title: "Operator Training Simulator",
      description: "In the 1980s, the competence of operating staff in thermal power plants was crucial for addressing i ...",
      image: bridgeHomeImage
    },
    {
      title: "Trombay Unit 5",
      description: "The expansion of the Trombay Thermal Generating Station became imperative to meet the escalating pow ...",
      image: bridgeHomeImage
    },
    {
      title: "Sultan Iskandar Thermal Power Station",
      description: "One of TCE's early overseas triumphs was the Pasir Gudang Thermal Power Station in Malaysia, a pro ...",
      image: bridgeHomeImage
    },
    {
      title: "Obra Thermal",
      description: "UPSEB made a strong case for upgrading to higher unit sizes as opposed to adding more existing ll ...",
      image: bridgeHomeImage
    }
  ];

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % projects.length);
  };

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev - 1 + projects.length) % projects.length);
  };

  return (
    <div className="projects-section">
      <div className="projects-header">
        <h2 className="projects-title">
          <span className="title-our">Our</span>
          <span className="title-projects">Projects</span>
        </h2>
        <div className="navigation-arrows">
          <button onClick={prevSlide} className="nav-arrow prev">
            <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
              <path d="M19 12H5M5 12L12 19M5 12L12 5" stroke="currentColor" strokeWidth="2"/>
            </svg>
          </button>
          <button onClick={nextSlide} className="nav-arrow next">
            <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
              <path d="M5 12H19M19 12L12 5M19 12L12 19" stroke="currentColor" strokeWidth="2"/>
            </svg>
          </button>
        </div>
      </div>
      
      <div className="projects-carousel">
        <div 
          className="carousel-track"
          style={{
            transform: `translateX(-${currentSlide * 100}%)`
          }}
        >
          {projects.map((project, index) => (
            <CardHolders key={index} {...project} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default ProjectsSection;
