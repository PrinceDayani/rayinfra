import React from 'react';
import ReactDOM from 'react-dom/client'; // Modern ReactDOM for React 18+
import './index.css'; // Global CSS styles
import App from './App'; // Main App component containing routing logic
import reportWebVitals from './reportWebVitals';
import 'bootstrap/dist/css/bootstrap.min.css'; // Import Bootstrap styles
import 'bootstrap/dist/js/bootstrap.bundle.min.js'; // Import Bootstrap JS (optional)

// Initialize React application
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <App /> {/* Render the App component */}
  </React.StrictMode>
);

// Optional: Measure performance in your app
reportWebVitals();
