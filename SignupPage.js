import React, { useState } from 'react';
import axios from 'axios';
import './SignupPage.css';

const SignupPage = () => {
  const [formData, setFormData] = useState({
    username: '',
    password: '',
    confirmPassword: '',
  });
  const [error, setError] = useState('');
  const [success, setSuccess] = useState(false);

  // Handle input changes
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  // Handle form submission
  const handleSubmit = async (e) => {
    e.preventDefault();

    if (formData.password !== formData.confirmPassword) {
      setError('Passwords do not match!');
      return;
    }

    try {
      // Axios POST request to the backend API
      const response = await axios.post('http://localhost:5000/api/register', {
        username: formData.username,
        password: formData.password,
      });

      // If the request is successful
      setSuccess(true);
      setError('');
      setFormData({ username: '', password: '', confirmPassword: '' });
    } catch (err) {
      // Handle errors and display appropriate messages
      setError(err.response?.data?.error || 'Server error. Try again later.');
    }
  };

  return (
    <div className="signup-container">
      <h1 className="signup-title">Hey There!</h1>
      <p className="signup-subtitle">Sign Up to Get Started with FitFlow 360.</p>
      <form onSubmit={handleSubmit} className="signup-form">
        <label>
          What's your Name?
          <input
            type="text"
            name="username"
            value={formData.username}
            onChange={handleChange}
            required
          />
        </label>
        <label>
          Set a Unique Password:
          <input
            type="password"
            name="password"
            value={formData.password}
            onChange={handleChange}
            required
          />
        </label>
        <label>
          Reconfirm Password:
          <input
            type="password"
            name="confirmPassword"
            value={formData.confirmPassword}
            onChange={handleChange}
            required
          />
        </label>
        <div className="terms">
          <input type="checkbox" required />
          <span>I agree to the Terms & Conditions</span>
        </div>
        {error && <p className="error">{error}</p>}
        {success && <p className="success">Signup successful!</p>}
        <button type="submit" className="signup-button">Sign Up</button>
      </form>
    </div>
  );
};

export default SignupPage;