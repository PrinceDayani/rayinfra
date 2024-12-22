import React from "react";
import { Link } from "react-router-dom";
import "../styles/Navbar.css"; // Add styles here
import logo from "../assets/images/RL.jpg"; // Adjust the path to match your project structure


const Header = () => {
  return (
    <header className="header">
      <div className="top-bar">
        <p>We Are Professional & Established Engineering, Building Trust Company. Need Any Help?</p>
        <div className="social-icons">
          <a href="https://facebook.com" target="_blank" rel="noopener noreferrer">FB</a>
          <a href="https://twitter.com" target="_blank" rel="noopener noreferrer">TW</a>
          <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer">LN</a>
          <a href="https://youtube.com" target="_blank" rel="noopener noreferrer">YT</a>
        </div>
      </div>
      <div className="nav-bar">
        <div className="logo">
        <img src={logo} alt="Ray" />
        <span>Ray Infrastructures Pvt. Ltd.</span>
        </div>
        <nav className="nav-links">
          <Link to="/">Home</Link>
          <div className="dropdown">
            <button className="dropbtn">Pages</button>
            <div className="dropdown-content">
              <Link to="/about">About Us</Link>
              <Link to="/team">Our Team</Link>
            </div>
          </div>
          <div className="dropdown">
            <button className="dropbtn">Projects</button>
            <div className="dropdown-content">
              <Link to="/ongoing">Ongoing Projects</Link>
              <Link to="/completed">Completed Projects</Link>
            </div>
          </div>
          <div className="dropdown">
            <button className="dropbtn">Services</button>
            <div className="dropdown-content">
              <Link to="/consulting">Consulting</Link>
              <Link to="/design">Design & Build</Link>
            </div>
          </div>
        </nav>
        <button className="contact-btnX">Contact Us</button>
      </div>
    </header>
  );
};

export default Header;
