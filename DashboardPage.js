import React from 'react';
import './Dashboard.css';

const Dashboard = () => {
  return (
    <div className="dashboard-container">
      <div className="sidebar">
        <div className="profile">
          <div className="profile-picture"></div>
          <h2>Evan D'Souza</h2>
          <div className="stats">
            <p>Height<br /><strong>187 cm</strong></p>
            <p>Weight<br /><strong>70 kg</strong></p>
            <p>Age<br /><strong>20 yrs</strong></p>
          </div>
        </div>
        <div className="progress">
          <h3>Progress:</h3>
        </div>
        <div className="tasks">
          <h3>Tasks:</h3>
        </div>
      </div>

      <div className="main-content">
        <div className="training-logs">
          <h3>Training Logs</h3>
          <div className="logs">
            <div className="log-card"></div>
            <div className="log-card"></div>
            <div className="log-card"></div>
            <div className="log-card"></div>
          </div>
        </div>
        <div className="statistics">
          <h3>Statistics</h3>
          <div className="statistics-card"></div>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;

