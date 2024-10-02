import React, { useState } from 'react';
import './Community.css';
import Card from '../../components/Card/Card';
import CommunityInformation from '../../components/CommunityInformation/CommunityInformation';
import CreatePost from '../../components/Post/CreatePost';

function Community() {
  const [showCreatePost, setShowCreatePost] = useState(false);

  const cardsData = [
    {
      title: 'What does this mean??',
      content: 'Tmoney card with Mastercard logo',
      imageUrl: 'https://via.placeholder.com/300',
      author: 'u/living_in_korea_now',
      timeAgo: '4 days ago',
      comments: 12,
      upvotes: 21,
      downvotes: 1,
    },
    {
      title: 'AI Generated TV',
      content: 'JARS News Network',
      imageUrl: 'https://via.placeholder.com/300',
      author: 'u/Own-Hour-5539',
      timeAgo: 'Promoted',
      comments: 0,
      upvotes: 0,
      downvotes: 0,
    },
  ];

  const handleCreatePostClick = () => {
    setShowCreatePost(!showCreatePost);
  };

  return (
    <div className="community">
      <div className="community-main-header">
        <div className="community-main-header-image">
          <img src="https://via.placeholder.com/150" alt="Community" />
        </div>
        <div className="community-main-header-content">
          <h1>r/Anime</h1>
          <p>Reddit's premier anime community.</p>
          <div className="community-main-header-buttons">
            <button className="create-post" onClick={handleCreatePostClick}>
              {showCreatePost ? 'Cancel' : 'Create Post'}
            </button>
            <button className="join-community">Join</button>
          </div>
        </div>
      </div>
      <div className="community-main-content">
        {showCreatePost ? (
          <CreatePost />
        ) : (
          <>
            {cardsData.map((card, index) => (
              <Card key={index} {...card} />
            ))}
          </>
        )}
            <CommunityInformation />

      </div>
    </div>
  );
}

export default Community;