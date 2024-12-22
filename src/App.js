import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import Home from "./pages/Home";
import ProjectPage from "./pages/ProjectPage";
import Error404 from "./pages/Error404"; 
import Power from "./pages/Power";
import Infrastructure from "./pages/Infrastructure";
import ResourcesHC from "./pages/ResourcesHC"
import ResourcesMM from "./pages/ResourcesMM"


const App = () => {
  return (
    <Router>
      <Navbar />
      <Routes>
        {/* Define all your valid routes */}
        <Route path="/" element={<Home />} />
        <Route path="/Project" element={<ProjectPage />} />
        {/* Catch-all route for undefined pages */}
        <Route path="*" element={<Error404 />} />
        <Route path="/Power" element={<Power />}/>
        <Route path="/Infrastructure" element={<Infrastructure />}/>
        <Route path="/ResourcesHC" element={<ResourcesHC />}/>
        <Route path="/ResourcesMM" element={<ResourcesMM />}/>
      </Routes>
      <Footer />
    </Router>
  );
};

export default App;
