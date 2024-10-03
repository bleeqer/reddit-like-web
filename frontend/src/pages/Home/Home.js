import React, { useState, useEffect } from 'react';
import './Home.css';
import Card from '../../components/Card/Card';
import PopularCommunities from '../../components/PopularCommunities/PopularCommunities';

function Home() {

  const [cardsData, setCardsData] = useState([]);

  useEffect(() => {
    fetch('http://localhost:8080/api/posts')
      .then(response => response.json())
      .then(data => setCardsData(data));
  }, []);

  console.log(cardsData);

  return (
    <div className="home">
      {cardsData.map((card, index) => (
        <Card key={index} {...card} />
      ))}
        <PopularCommunities />
    </div>

  );
}

export default Home;
