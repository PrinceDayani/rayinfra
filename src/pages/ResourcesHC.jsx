import React, { useState, useCallback, useEffect } from 'react';
import { useInView } from 'react-intersection-observer';
import '../styles/SectorS.css';
import bridgeHomeImage from "../assets/images/BridgeHome.jpg";
import { Pencil, ArrowUpCircle, Lightbulb, Grid } from 'lucide-react';


// Power Lines Animation Component
const PowerLinesAnimation = () => {
  const handleScroll = useCallback(() => {
    const lines = document.querySelectorAll('.power-line');
    const scrolled = window.scrollY;

    lines.forEach((line, index) => {
      const speed = 0.2 + index * 0.1;
      const yPos = -(scrolled * speed);
      line.style.transform = `rotate(-15deg) translateY(${yPos}px)`;
    });
  }, []);

  useEffect(() => {
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, [handleScroll]);

  return (
    <div className="power-lines">
      {[...Array(5)].map((_, index) => (
        <div 
          key={index} 
          className="power-line" 
          style={{
            top: `${40 + (index * 3)}%`,
            animationDelay: `${index * 0.2}s`
          }}
        />
      ))}
    </div>
  );
};

// CardHolders Component
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

// ProjectsSection Component
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

// Hero Section Component
const HeroSection = () => {
  const { ref, inView } = useInView({
    threshold: 0.1,
    triggerOnce: true
  });

  return (
    <section className="hero-container">
      <div className="hero-background">
        <div className="hero-overlay" />
      </div>

      <PowerLinesAnimation />

      <div ref={ref} className={`hero-content ${inView ? 'fade-in' : ''}`}>
        <h1 className="hero-title">
          <span className="text-gradient">Powering</span>
          <br />
          Tomorrow
        </h1>
      </div>
    </section>
  );
};

// Content Section Component
const ContentSection = () => {
  const { ref, inView } = useInView({
    threshold: 0.1,
    triggerOnce: true
  });

  return (
    <section ref={ref} className={`content-section ${inView ? 'slide-up' : ''}`}>
      <div className="content-wrapper">
        <div className="content-category">POWER</div>
        <h2 className="content-title">
          Delivering Excellence: From Generation to Transmission
        </h2>
        <p className="content-text">
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla fermentum augue a leo scelerisque, nec lacinia elit malesuada. Quisque euismod, nunc non efficitur fermentum, enim elit tempor nisl, id accumsan elit lacus ac metus. Curabitur non dui ac justo pharetra porttitor vel at libero. Integer viverra enim sit amet mauris volutpat blandit. Donec nec justo neque. Suspendisse potenti. Sed quis lectus vehicula, pulvinar nulla ac, vehicula magna. Nullam porttitor dolor id justo eleifend, eget congue sem posuere. Curabitur id massa eget quam egestas aliquet. Praesent vel massa sed erat facilisis tincidunt.Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla fermentum augue a leo scelerisque, nec lacinia elit malesuada. Quisque euismod, nunc non efficitur fermentum, enim elit tempor nisl, id accumsan elit lacus ac metus. Curabitur non dui ac justo pharetra porttitor vel at libero. Integer viverra enim sit amet mauris volutpat blandit. Donec nec justo neque. Suspendisse potenti. Sed quis lectus vehicula, pulvinar nulla ac, vehicula magna. Nullam porttitor dolor id justo eleifend, eget congue sem posuere. Curabitur id massa eget quam egestas aliquet. Praesent vel massa sed erat facilisis tincidunt.
        </p>
        <p className="content-text">
          Donec nec justo neque. Suspendisse potenti. Sed quis lectus vehicula, 
          pulvinar nulla ac, vehicula magna. Nullam porttitor dolor id justo eleifend,
          eget congue sem posuere.
        </p>
      </div>
    </section>
  );
};

// Expertise Section Component
const ExpertiseSection = () => {
  const { ref, inView } = useInView({
    threshold: 0.1,
    triggerOnce: true
  });

  const expertise = [
    'Power Plant Design & Engineering',
    'Automation & Control Systems',
    'Re-engineering & Modernization',
    'Digital Solutions & Smart Grid',
    'Renewable Energy Integration',
    'Power Distribution Networks'
  ];

  return (
    <section ref={ref} className={`expertise-container ${inView ? 'fade-in' : ''}`}>
      <div className="expertise-content">
        <h2 className="expertise-title">Our Expertise</h2>
        <ul className="expertise-list">
          {expertise.map((item, index) => (
            <li 
              key={index}
              className="expertise-item"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              {item}
            </li>
          ))}
        </ul>
      </div>
      <div className="expertise-image">
        <img 
          src={bridgeHomeImage} 
          alt="Engineers working on power infrastructure" 
          loading="lazy"
        />
      </div>
    </section>
  );
};

// Industries Section Component
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
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla fermentum augue a leo scelerisque, nec lacinia elit malesuada. Quisque euismod, nunc non efficitur fermentum, enim elit tempor nisl, id accumsan elit lacus ac metus. Curabitur non dui ac justo pharetra porttitor vel at libero. Integer viverra enim sit amet mauris volutpat blandit. Donec nec justo neque. Suspendisse potenti. Sed quis lectus vehicula, pulvinar nulla ac, vehicula magna. Nullam porttitor dolor id justo eleifend, eget congue sem posuere. Curabitur id massa eget quam egestas aliquet. Praesent vel massa sed erat facilisis tincidunt.Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla fermentum augue a leo scelerisque, nec lacinia elit malesuada. Quisque euismod, nunc non efficitur fermentum, enim elit tempor nisl, id accumsan elit lacus ac metus. Curabitur non dui ac justo pharetra porttitor vel at libero. Integer viverra enim sit amet mauris volutpat blandit. Donec nec justo neque. Suspendisse potenti. Sed quis lectus vehicula, pulvinar nulla ac, vehicula magna. Nullam porttitor dolor id justo eleifend, eget congue sem posuere. Curabitur id massa eget quam egestas aliquet. Praesent vel massa sed erat facilisis tincidunt.
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

// CaseStudySection Component
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


// Final Combined Page Component
const ResourcesHC = () => {
  return (
    <div className="page-container">
      <HeroSection />
      <section className="down-hero">
        <ContentSection />
        <ExpertiseSection />
      </section>
      <IndustriesSection />
      <ProjectsSection />
      <CaseStudySection /> {/* Inserted Case Study Section */}
      <CardFlow />
    </div>
  );
};

export default ResourcesHC;
