import React, { useState } from 'react';
import './PricingPage.css';

function PricingPage() {
  const [plan, setPlan] = useState('monthly');

  const handlePlanChange = (newPlan) => {
    setPlan(newPlan);
  };

  return (
    <div className="pricing-container">
      <header className="pricing-header">
        <h4 style={{fontWeight: 'normal'}}>Affordable</h4>
        <h1>Pricing Plans</h1>
      </header>
      <div className="toggle-button">
        <button onClick={() => handlePlanChange('monthly')}>Monthly</button>
        <button onClick={() => handlePlanChange('yearly')}>Yearly</button>
      </div>
      <div className="pricing-plans">
        <div className="plan">
          <h2>Basic Plan</h2>
          <p>₹99/mo</p>
          <ul>
            <li>Personalized workout plans</li>
            <li>Real-time health insights</li>
            <li>Nutrition tracking tools</li>
            <br/>
            <br/>
            <br/>
            <br/>
          </ul>
          <button>Get Started</button>
        </div>
        <div style={{border: '2px solid #ff4500'}} className="plan">
          <h2>Premium Plan</h2>
          <p>₹299/mo</p>
          <ul>
            <li>Advanced analytics dashboard</li>
            <li>Team performance tracking</li>
            <li>Customisable fitness goals</li>
            <li>Group challenge features</li>
            <li>Dedicated support team</li>
            <li>Personalized dietician</li>
          </ul>
          <button>Get Started</button>
        </div>
      </div>
    </div>
  );
}

export default PricingPage;

