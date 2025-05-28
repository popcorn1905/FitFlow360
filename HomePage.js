import React from 'react';
import './HomePage.css';
import { useNavigate } from 'react-router-dom';

function HomePage() {
  const navigate = useNavigate(); // Hook to navigate programmatically

  // Handle Sign Up navigation
  const handleSignUp = () => {
    navigate('/signup');
  };

  const handleLogin = () => {
    navigate('/login');
  };

  return (
    <div className="home-container">
      <header className="header">
        <h1>
          Transform Your Fitness Journey with <span className="highlight">FitFlow 360</span>'s Comprehensive Tracking Solutions
        </h1>
        <p>Experience personalized insights and community support to achieve your health and wellness goals.</p>
        <div className="buttons">
          <button className="login-button" onClick={handleLogin}>Login</button>
          <button className="signup-button" onClick={handleSignUp}>Sign Up</button>
        </div>
      </header>
      <div className="placeholder">
        {/* Placeholder for additional content */}
      </div>
    </div>
  );
}

export default HomePage;

