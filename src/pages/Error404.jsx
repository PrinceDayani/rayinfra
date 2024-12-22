import React from "react";
import "../styles/Error404.css"; // Import your CSS file

const Error404 = () => {
  return (
    <div className="not-found-container">
      <div className="content">
        <h1>404</h1>
        <h2>Oops, page not found</h2>
        <p>
          The page you are looking for might have been removed, had its name
          changed, or is temporarily unavailable.
        </p>
        <a href="/" className="back-button">
          Back To Homepage
        </a>
      </div>
    </div>
  );
};

export default Error404;
