import React from "react";
import HeroSection from "../components/HeroSection";
import PopularServiceHome from "../components/PopularServiceHome";
import PreInfoHome from "../components/PreInfoHome";

const Home = () => {
  return (
    <>
      <HeroSection />
      <PopularServiceHome />
      <PreInfoHome />
      <Preinfoo />
    </>
  );
};

const Preinfoo = () => {
  return (
    <section className="preinfo-container">
      {/* Statistics Section */}
      <div className="stats">
        <div className="stat-item">
          <h2>1,500 +</h2>
          <p>Complete Projects</p>
        </div>
        <div className="stat-item">
          <h2>450 +</h2>
          <p>Team Members</p>
        </div>
        <div className="stat-item">
          <h2>2,800 +</h2>
          <p>Satisfied Clients</p>
        </div>
      </div>

      {/* Content Section */}
      <div className="content-container">
        <div className="image-box">
          <img
            src="https://your-image-url.com/bridge" // Replace with your actual image
            alt="Bridge Construction"
          />
          <div className="years-experience">
            <span>30 +</span>
            <p>Years of Experience</p>
          </div>
        </div>
        <div className="text-box">
          <h2>Transforming Vision into Reality Through Experience.</h2>
          <p>
            To establish ourselves as an internationally respected engineering
            consultant, offering comprehensive and innovative solutions. We are
            committed to unmatched performance, unparalleled accountability, and
            exceptional client satisfaction. To establish ourselves as an
            internationally respected engineering consultant, offering
            comprehensive and innovative solutions. We are committed to unmatched
            performance, unparalleled accountability, and exceptional client
            satisfaction.
          </p>
        </div>
      </div>
    </section>
  );
};



export default Home;

