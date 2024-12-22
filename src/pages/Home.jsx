import React from "react";
import ContactUsSecHome from "../components/ContactUsSecHome";
import { SpeedInsights } from "@vercel/speed-insights/react"
// Reusable Styles
const buttonStyle = {
  fontSize: "1rem",
  padding: "0.8rem 1.5rem",
  borderRadius: "30px",
  cursor: "pointer",
  border: "none",
};

const redButtonStyle = {
  ...buttonStyle,
  backgroundColor: "#c00",
  color: "white",
};

const outlineButtonStyle = {
  ...buttonStyle,
  backgroundColor: "transparent",
  border: "2px solid white",
  color: "white",
};

// Reusable Components
const ProjectCard = ({ title, description, image }) => {
  const projectItemStyle = {
    backgroundColor: "#fff",
    borderRadius: "0.5rem",
    boxShadow: "0 4px 6px rgba(0, 0, 0, 0.1)",
    overflow: "hidden",
  };

  const projectItemImgStyle = {
    width: "100%",
    height: "200px",
    objectFit: "cover",
  };

  const projectInfoStyle = {
    padding: "1.5rem",
  };

  const projectInfoH3Style = {
    fontSize: "1.5rem",
    marginBottom: "0.5rem",
  };

  const projectInfoPStyle = {
    fontSize: "1rem",
  };

  return (
    <div style={projectItemStyle}>
      <img src={image} alt={title} style={projectItemImgStyle} />
      <div style={projectInfoStyle}>
        <h3 style={projectInfoH3Style}>{title}</h3>
        <p style={projectInfoPStyle}>{description}</p>
      </div>
    </div>
  );
};

const HeroSection = () => {
  const heroSectionStyle = {
    width: "100%",
    height: "100vh",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    backgroundImage: "url('https://wallpapercave.com/wp/wp9292042.jpg')",
    backgroundSize: "cover",
    backgroundPosition: "center",
    backgroundRepeat: "no-repeat",
    color: "white",
    textAlign: "center",
  };

  return (
    <div style={heroSectionStyle}>
      <div style={{ maxWidth: "800px", padding: "2rem" }}>
        <h1 style={{ fontSize: "3rem", marginBottom: "1rem" }}>
          Engineering Excellence, Building Trust.
        </h1>
        <p style={{ fontSize: "1.2rem", marginBottom: "2rem" }}>
          We provide high-quality engineering and project management solutions,
          focusing on safety, efficiency, and cost-effectiveness. Built on
          integrity and innovation, we strive to create lasting value for our
          clients and industry.
        </p>
        <div>
          <button style={redButtonStyle}>Get A Quote</button>
          <button style={outlineButtonStyle}>More About Us</button>
        </div>
      </div>
    </div>
  );
};

const PopularServiceHome = () => {
  const services = [
    { title: "Railways", description: "Enhancing railway networks.", icon: "🚆" },
    { title: "Roads & Highways", description: "Reliable road infrastructure.", icon: "🛤️" },
    { title: "Power Plants", description: "Optimizing energy systems.", icon: "🏭" },
    { title: "Metro", description: "Modern urban metro systems.", icon: "🚇" },
    { title: "Coastal Engineering", description: "Coastal protection solutions.", icon: "🌊" },
    { title: "Airports & Aviation", description: "State-of-the-art airports.", icon: "✈️" },
  ];

  const containerStyle = {
    display: "flex",
    flexDirection: "row",
    alignItems: "center",
    backgroundColor: "#131122",
    color: "#fff",
    padding: "2rem",
  };

  return (
    <div style={containerStyle}>
      <div style={{ flex: 1, marginRight: "2rem" }}>
        <h2 style={{ fontSize: "2.5rem", marginBottom: "1rem" }}>
          Our Popular Services
        </h2>
        <p style={{ fontSize: "1rem", marginBottom: "1.5rem" }}>
          Safe, reliable, and operationally efficient solutions tailored to your
          needs.
        </p>
        <button style={{ ...buttonStyle, backgroundColor: "#c44d55", color: "#fff" }}>
          Explore More
        </button>
      </div>
      <div style={{ flex: 2, display: "grid", gridTemplateColumns: "repeat(3, 1fr)", gap: "1rem" }}>
        {services.map((service, index) => (
          <div
            key={index}
            style={{
              backgroundColor: "#1c1b2f",
              padding: "1.5rem",
              borderRadius: "10px",
              textAlign: "center",
            }}
          >
            <div style={{ fontSize: "2.5rem", marginBottom: "1rem" }}>{service.icon}</div>
            <h3>{service.title}</h3>
            <p>{service.description}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

const ProjectsSection = () => {
  const projects = [
    { id: 1, title: "Project 1", description: "Description 1", image: "https://via.placeholder.com/300" },
    { id: 2, title: "Project 2", description: "Description 2", image: "https://via.placeholder.com/300" },
    { id: 3, title: "Project 3", description: "Description 3", image: "https://via.placeholder.com/300" },
  ];

  const projectsSectionStyle = {
    padding: "4rem 2rem",
    textAlign: "center",
  };

  return (
    <div style={projectsSectionStyle}>
      <h2>Explore Our Showcased Projects</h2>
      <p>Guided by honesty, hard work, and a commitment to excellence.</p>
      <div
        style={{
          display: "grid",
          gridTemplateColumns: "repeat(auto-fit, minmax(300px, 1fr))",
          gap: "1.5rem",
          marginTop: "2rem",
        }}
      >
        {projects.map((project) => (
          <ProjectCard
            key={project.id}
            title={project.title}
            description={project.description}
            image={project.image}
          />
        ))}
      </div>
    </div>
  );
};

const PreInfoHome = () => {
  const styles = {
    preinfoHome: {
      width: "100%",
      minHeight: "100vh",
      backgroundColor: "#fdfdfd",
      display: "flex",
      flexDirection: "column",
      alignItems: "center",
      padding: "2rem 1rem",
    },
    statistics: {
      display: "flex",
      justifyContent: "center",
      width: "100%",
      gap: "3rem",
      marginBottom: "2rem",
      textAlign: "center",
    },
    stat: {
      textAlign: "center",
    },
    statH2: {
      fontSize: "2.5rem",
      color: "#6e1f29",
      fontWeight: 700,
    },
    statP: {
      fontSize: "1rem",
      color: "#555",
    },
    content: {
      display: "flex",
      flexDirection: "column",
      alignItems: "center",
      gap: "2rem",
      width: "100%",
    },
    imageContainer: {
      position: "relative",
      width: "100%",
      maxWidth: "600px",
    },
    image: {
      width: "100%",
      height: "auto",
      borderRadius: "10px",
      boxShadow: "0 4px 8px rgba(0, 0, 0, 0.2)",
    },
    overlayBox: {
      position: "absolute",
      bottom: "10%",
      left: "-10%",
      backgroundColor: "#6e1f29",
      color: "#fff",
      padding: "1.5rem",
      borderRadius: "10px",
      textAlign: "center",
      width: "150px",
    },
    overlayBoxH3: {
      fontSize: "2rem",
      fontWeight: 700,
    },
    overlayBoxP: {
      fontSize: "1rem",
      marginTop: "0.5rem",
    },
    textContainer: {
      textAlign: "left",
      maxWidth: "600px",
    },
    textH2: {
      fontSize: "2rem",
      marginBottom: "1rem",
      color: "#333",
      fontWeight: 700,
    },
    textP: {
      fontSize: "1rem",
      lineHeight: 1.5,
      color: "#555",
    },
    "@media (minWidth: 768px)": {
      content: {
        flexDirection: "row",
        justifyContent: "space-around",
      },
      textContainer: {
        paddingLeft: "2rem",
      },
    },
  };

  return (
    <div style={styles.preinfoHome}>
      {/* Top Statistics */}
      <div style={styles.statistics}>
        <div style={styles.stat}>
          <h2 style={styles.statH2}>
            1,500<span>+</span>
          </h2>
          <p style={styles.statP}>Complete Projects</p>
        </div>
        <div style={styles.stat}>
          <h2 style={styles.statH2}>
            450<span>+</span>
          </h2>
          <p style={styles.statP}>Team Members</p>
        </div>
        <div style={styles.stat}>
          <h2 style={styles.statH2}>
            2,800<span>+</span>
          </h2>
          <p style={styles.statP}>Satisfied Clients</p>
        </div>
      </div>

      {/* Content Section */}
      <div style={styles.content}>
        <div style={styles.imageContainer}>
          <img
            src="https://via.placeholder.com/500x350"
            alt="Infrastructure"
            style={styles.image}
          />
          <div style={styles.overlayBox}>
            <h3 style={styles.overlayBoxH3}>
              30<span>+</span>
            </h3>
            <p style={styles.overlayBoxP}>Years of experience</p>
          </div>
        </div>

        <div style={styles.textContainer}>
          <h2 style={styles.textH2}>
            Transforming Vision into Reality Through Experience.
          </h2>
          <p style={styles.textP}>
            To establish ourselves as an internationally respected engineering
            consultant, offering comprehensive and innovative solutions. We are
            committed to unmatched performance, unparalleled accountability,
            and exceptional client satisfaction.
          </p>
        </div>
      </div>
    </div>
  );
};


const Home = () => {
  return (
    <>
      <HeroSection />
      <PopularServiceHome />
      <PreInfoHome />
      <ProjectsSection />
      <ContactUsSecHome />
      <SpeedInsights/>
    </>
  );
};

export default Home;
