import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faGamepad, faTv, faDiceD20 } from '@fortawesome/free-solid-svg-icons';
import './PopularCommunities.css';

const popularCommunitiesData = [
  { name: 'r/DestinyTheGame', members: '3,206,952', icon: faGamepad },
  { name: 'r/anime', members: '11,286,076', icon: faTv },
  { name: 'r/destiny2', members: '912,033', icon: faGamepad },
  { name: 'r/dndnext', members: '783,125', icon: faDiceD20 },
];

function PopularCommunities() {
  return (
    <div className="popular-communities-container">
      <div className="popular-communities">
        <h3>Popular Communities</h3>
        <ul>
          {popularCommunitiesData.map((community, index) => (
            <li key={index}>
              <a href={`/${community.name}`} className="community-link">
                <div className="community-icon-container">
                  <FontAwesomeIcon icon={community.icon} className="community-icon" />
                </div>
                <div className="community-info">
                  <span className="community-name">{community.name}</span>
                  <span className="community-members">{community.members} members</span>
                </div>
              </a>
            </li>
          ))}
        </ul>
        <div className="popular-communities-footer">
          <a href="#" className="see-more">See more</a>
        </div>
      </div>
    </div>
  );
}

export default PopularCommunities;
