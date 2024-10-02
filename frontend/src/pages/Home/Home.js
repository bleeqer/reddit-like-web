import React from 'react';
import './Home.css';
import Card from '../../components/Card/Card';

function Home() {
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

  return (
    <div className="home">
      {cardsData.map((card, index) => (
        <Card key={index} {...card} />
      ))}
    </div>
  );
}

export default Home;
