import React from "react";
import "../styles/PopularServiceHome.css";
const PopularServiceHome = () => {
  const services = [
    {
      title: "Railways",
      description: "Designing and enhancing railway networks for safe, efficient, and fast travel.",
      icon: "📄",
    },
    {
      title: "Roads & Highways",
      description: "Constructing durable and reliable road infrastructure for seamless transportation.",
      icon: "🛤️",
    },
    {
      title: "Power Plants",
      description: "Designing and optimizing energy generation systems for sustainable power production.",
      icon: "🏭",
    },
    {
      title: "Metro",
      description: "Developing efficient and modern metro systems for smooth urban Connect.",
      icon: "🚇",
    },
    {
      title: "Coastal Engineering",
      description: "Crafting resilient solutions for coastal protection and development.",
      icon: "🌊",
    },
    {
      title: "Airports & Aviation",
      description: "Designing state-of-the-art aviation infrastructure for modern connectivity.",
      icon: "✈️",
    },
  ];

  return (
    <div className="popular-service-container">
      <div className="left-section">
        <h2>Our popular service</h2>
        <p>
          We prioritize safe, reliable, and operationally efficient designs tailored to your
          needs. Providing value-driven engineering and construction management services.
        </p>
        <button className="explore-button">Explore More</button>
      </div>
      <div className="right-section">
        <div className="service-grid">
          {services.map((service, index) => (
            <div key={index} className="service-card">
              <div className="icon">{service.icon}</div>
              <h3>{service.title}</h3>
              <p>{service.description}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default PopularServiceHome;
