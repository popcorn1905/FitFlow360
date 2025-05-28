import React from 'react';
import './TeamPage.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faLinkedin } from '@fortawesome/free-brands-svg-icons';
import { faInstagram } from '@fortawesome/free-brands-svg-icons';
import { faXTwitter } from '@fortawesome/free-brands-svg-icons';

function TeamPage() {
  return (
    <div className="team-container">
      <h1>Our <span className="highlight">Team</span></h1>
      <p>Meet the passionate individuals behind FitFlow 360.</p>

      <div className="team-members">
        <div className="team-member">
          <img src="evan.jpg" alt="Evan D'Souza" />
          <h3>Evan D'Souza</h3>
          <p>Lead Developer</p>
          <p>Innovating technology solutions to enhance your fitness tracking experience every day.</p>
          <div className="social-icons">
          <FontAwesomeIcon icon={faLinkedin} />
          <FontAwesomeIcon icon={faInstagram} />
          <FontAwesomeIcon icon={faXTwitter} />
          </div>
        </div>

        <div className="team-member">
          <img src="chirayu.jpg" alt="Chirayu M" />
          <h3>Chirayu M</h3>
          <p>Nutrition Expert</p>
          <p>Passionate about empowering individuals to make healthier food choices for a balanced lifestyle.</p>
          <div className="social-icons">
          <FontAwesomeIcon icon={faLinkedin} />
          <FontAwesomeIcon icon={faInstagram} />
          <FontAwesomeIcon icon={faXTwitter} />
          </div>
        </div>

        <div className="team-member">
          <img src="devansh.jpg" alt="Devansh Tiwary" />
          <h3>Devansh Tiwary</h3>
          <p>Fitness Coach</p>
          <p>Dedicated to helping you achieve your fitness goals through personalized coaching and support.</p>
          <div className="social-icons">
          <FontAwesomeIcon icon={faLinkedin} />
          <FontAwesomeIcon icon={faInstagram} />
          <FontAwesomeIcon icon={faXTwitter} />
          </div>
        </div>
      </div>
    </div>
  );
}

export default TeamPage;

