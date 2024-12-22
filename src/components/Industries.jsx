import React from 'react';
import '../styles/Industries.css';
import bridgeHomeImage from "../assets/images/BridgeHome.jpg";


const IndustriesSection = () => {
  const industries = [
    { title: 'Nuclear', id: 'nuclear' },
    { title: 'Renewable', id: 'renewable' },
    { title: 'Hydroelectric', id: 'hydro' },
    { title: 'Thermal', id: 'thermal' },
    { title: 'T&D', id: 'td' },
    { title: 'Digital', id: 'digital' }
  ];

  return (
    <div className="industries-container">
      <div className="industries-content">
        <h2 className="industries-title">
          <span className="title-part1">Industries</span>
          <span className="title-part2">We Serve</span>
        </h2>
        <div className="industries-buttons">
          {industries.map((industry) => (
            <button 
              key={industry.id}
              className="industry-button"
              onClick={() => console.log(`${industry.title} clicked`)}
            >
              {industry.title}
            </button>
          ))}
        </div>
        <div className="industries-description">
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla fermentum augue 
            a leo scelerisque, nec lacinia elit malesuada. Quisque euismod, nunc non 
            efficitur fermentum, enim elit tempor nisl, id accumsan elit lacus ac metus. 
            Curabitur non dui ac justo pharetra porttitor vel at libero. Integer viverra 
            enim sit amet mauris volutpat blandit. Donec nec justo neque. Suspendisse 
            potenti. Sed quis lectus vehicula, pulvinar nulla ac, vehicula magna. Nullam 
            portitor dolor id justo eleifend, eget congue sem posuere. Curabitur id massa 
            eget quam egestas aliquet. Praesent vel massa sed erat facilisis tincidunt.
          </p>
        </div>
      </div>
      <div className="industries-image">
        <img 
          src={bridgeHomeImage} 
          alt="Nuclear Power Plant"
          className="industry-image" 
        />
      </div>
    </div>
  );
};

export default IndustriesSection;