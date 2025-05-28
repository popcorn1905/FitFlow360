import React from 'react';
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import HomePage from './pages/HomePage';
import FeaturesPage from './pages/FeaturesPage';
import PricingPage from './pages/PricingPage';
import TeamPage from './pages/TeamPage';
import SignupPage from './pages/SignupPage';
import LoginPage from './pages/LoginPage';

function App() {
  return (
    <Router>
      <div className="App">
        <nav className="navbar">
          <ul>
            <li><Link to="/">Home</Link></li>
            <li><Link to="/features">Features</Link></li>
            <li><Link to="/pricing">Pricing</Link></li>
            <li><Link to="/team">Team</Link></li>
          </ul>
        </nav>
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/features" element={<FeaturesPage />} />
          <Route path="/pricing" element={<PricingPage />} />
          <Route path="/team" element={<TeamPage />} />
          <Route path="/signup" element={<SignupPage />} />
          <Route path="/login" element={<LoginPage />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;