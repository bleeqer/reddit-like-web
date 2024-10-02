import React from 'react';
import './CommunityInformation.css';

function CommunityInformation() {
  return (
    <div className="community-information">
      <div className="community-header">
        <h2>/r/Anime</h2>
        <p>Reddit's premier anime community.</p>
        <div className="community-details">
          <div className="detail-item">
            <span>Created Jan 25, 2008</span>
          </div>
          <div className="detail-item">
            <span>Public</span>
          </div>
        </div>
        <div className="community-stats">
          <div className="stat-item">
            <span>11M</span>
            <span>Members</span>
          </div>
          <div className="stat-item">
            <span>Top 1%</span>
            <span>Rank by size</span>
          </div>
        </div>
      </div>
      <div className="user-flair">
        <h3>User Flair</h3>
        <div className="flair-item">
          <img src="https://via.placeholder.com/50" alt="User Flair" />
          <span>methechampion</span>
        </div>
      </div>
    </div>
  );
}

export default CommunityInformation;