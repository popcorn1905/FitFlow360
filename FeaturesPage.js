import React from 'react';
import './FeaturesPage.css';

function FeaturesPage() {
    return (
        <div className="features-container">
            <header className="features-header">
                <h1>Unlock Your Potential with</h1>
                <h1>Comprehensive<span className="highlight">Fitness Tracking</span></h1>
                <h1>Features</h1>
            </header>
            <div className="features-content">
                <div className="feature-item">
                    <div className="feature-icon"> {/* Icon can be an image or SVG */} </div>
                    <h3>Stay informed with Real-Time Health Insights and Monitoring</h3>
                    <p>FitFlow 360 offers advanced activity monitoring to keep you on track</p>
                    <a href="#" className="learn-more">Learn More &gt;</a>
                </div>
                <div className="feature-item">
                    <div className="feature-icon"> {/* Icon can be an image or SVG */} </div>
                    <h3>Track Your Heart Rate for Optimal Performance and Recovery</h3>
                    <p>Our heart rate tracking feature ensures you train within your ideal zones.</p>
                    <a href="#" className="learn-more">Learn More &gt;</a>
                </div>
                <div className="feature-item">
                    <div className="feature-icon"> {/* Icon can be an image or SVG */} </div>
                    <h3>Analyze Your Sleep Patterns for Better Rest and Recovery</h3>
                    <p>Sleep analysis helps you understand your rest quality and improve it.</p>
                    <a href="#" className="learn-more">Learn More &gt;</a>
                </div>
            </div>
        </div>
    );
}

export default FeaturesPage;

