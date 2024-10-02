import React, { useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faGamepad, faTv, faDiceD20 } from '@fortawesome/free-solid-svg-icons';
import './PopularCommunities.css';

const popularCommunitiesData = [
  { name: 'r/DestinyTheGame', members: '3,206,952', icon: faGamepad },
  { name: 'r/anime', members: '11,286,076', icon: faTv },
  { name: 'r/destiny2', members: '912,033', icon: faGamepad },
  { name: 'r/dndnext', members: '783,125', icon: faDiceD20 },
  { name: 'r/DestinyTheGame', members: '3,206,952', icon: faGamepad },
  { name: 'r/anime', members: '11,286,076', icon: faTv },
  { name: 'r/destiny2', members: '912,033', icon: faGamepad },
  { name: 'r/dndnext', members: '783,125', icon: faDiceD20 },
  { name: 'r/DestinyTheGame', members: '3,206,952', icon: faGamepad },
  { name: 'r/anime', members: '11,286,076', icon: faTv },
  { name: 'r/destiny2', members: '912,033', icon: faGamepad },
  { name: 'r/dndnext', members: '783,125', icon: faDiceD20 },
];

function PopularCommunities() {
  const [showAll, setShowAll] = useState(false);

  const handleShowMore = () => {
    setShowAll(!showAll);
  };

  const communitiesToShow = showAll ? popularCommunitiesData : popularCommunitiesData.slice(0, 5);

  return (
    <div className="popular-communities-container">
      <div className="popular-communities">
        <h3>Popular Communities</h3>
        <ul>
          {communitiesToShow.map((community, index) => (
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
        <div className="see-more-container">
          <button className="see-more" onClick={handleShowMore}>
            {showAll ? 'See less' : 'See more'}
          </button>
        </div>
      </div>
    </div>
  );
}

export default PopularCommunities;
