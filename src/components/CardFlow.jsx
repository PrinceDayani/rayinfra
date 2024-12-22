import React from 'react';
import '../styles/CardFlow.css';
import { Pencil, ArrowUpCircle, Lightbulb, Grid } from 'lucide-react';

const CardFlow = () => {
  const services = [
    {
      icon: <Pencil className="service-icon" />,
      title: "Design & Engineering",
    },
    {
      icon: <ArrowUpCircle className="service-icon" />,
      title: "Project Management",
    },
    {
      icon: <Lightbulb className="service-icon" />,
      title: "Sustainability Solutions",
    },
    {
      icon: <Grid className="service-icon" />,
      title: "Digital & Advanced Technologies",
    }
  ];

  return (
    <div className='outside-container'>
    <div className="engineering-container">
      <div className="header">
        <p className="subtitle">DESIGN TO DELIVERY</p>
        <h1 className="title">Engineering</h1>
        <h2 className="highlight">Excellence In Every</h2>
        <h2 className="highlight">Experience</h2>
      </div>

      <div className="services-flow">
        {services.map((service, index) => (
          <div key={index} className="service-card">
            {service.icon}
            <h3>{service.title}</h3>
            {index < services.length - 1 && <span className="arrow">→</span>}
          </div>
        ))}
      </div>
    </div>
    </div>
  );
};

export default CardFlow;