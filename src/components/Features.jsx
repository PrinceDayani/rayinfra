import React from "react";
import { FaRocket, FaLaptop, FaChartLine } from "react-icons/fa";
import '../styles/Features.css';

const Features = () => {
  const features = [
    { icon: <FaRocket />, title: "Fast Deployment", description: "Quickly launch your projects with ease." },
    { icon: <FaLaptop />, title: "Modern Tools", description: "Work with the latest technologies." },
    { icon: <FaChartLine />, title: "Business Growth", description: "Scalable solutions for your business." }
  ];

  return (
    <div className="features">
      <h2>Why Choose Us?</h2>
      <div className="container">
        <div className="row">
          {features.map((feature, index) => (
            <div key={index} className="col-md-4">
              <div className="feature-card shadow">
                <div className="icon">{feature.icon}</div>
                <h5>{feature.title}</h5>
                <p>{feature.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Features;
