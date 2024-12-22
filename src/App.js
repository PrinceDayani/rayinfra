import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import Home from "./pages/Home";
import ProjectPage from "./pages/ProjectPage";
import Sector from "./pages/Sector";

import Error404 from "./pages/Error404"; // Import your 404 page

const App = () => {
  return (
    <Router>
      <Navbar />
      <Routes>
        {/* Define all your valid routes */}
        <Route path="/" element={<Home />} />
        <Route path="/Project" element={<ProjectPage />} />
        <Route path="/Sector" element={<Sector />} /> 
        {/* Catch-all route for undefined pages */}
        <Route path="*" element={<Error404 />} />
      </Routes>
      <Footer />
    </Router>
  );
};

export default App;
