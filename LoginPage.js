import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';
import './LoginPage.css';

const LoginPage = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const navigate = useNavigate();

  const handleLogin = async (e) => {
    e.preventDefault();

    try {
      // Axios POST request to the backend API
      const response = await axios.post('http://localhost:5000/api/login', {
        email,
        password,
      });

      // Save the token in localStorage (if provided by the backend)
      localStorage.setItem('token', response.data.token);

      // Redirect to the dashboard on successful login
      alert('Login Successful!');
      navigate('/dashboard');
    } catch (err) {
      // Handle errors and display appropriate messages
      alert(err.response?.data?.error || 'Username and password do not match, try again.');
    }
  };

  return (
    <div className="login-container">
      {/* Left Section */}
      <div className="left-section">
        <h1 className="welcome-text">
          Welcome <span className="login-highlight">Back!</span>
        </h1>
        <p className="subtext">Login to Continue Your Fitness Journey.</p>
      </div>

      {/* Right Section */}
      <div className="right-section">
        <form onSubmit={handleLogin}>
          <label>
            Name or Email:
            <input
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
            />
          </label>
          <br />
          <label>
            Password:
            <input
              type="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              required
            />
          </label>
          <div className="login-button-container">
            <button type="submit" className="login-button">
              Login
            </button>
            <button
              type="button"
              className="explore-button"
              onClick={() => navigate('/explore')}
            >
              Explore &gt;
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default LoginPage;