import React, { useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faComment, faArrowUp, faArrowDown } from '@fortawesome/free-solid-svg-icons';
import './Card.css';
import BASE_URL from '../../config';

function Card({ id, title, content, imageUrl, author, timeAgo, comments, upvotes: initialUpvotes, downvotes: initialDownvotes }) {
  console.log(id);
  const [upvotes, setUpvotes] = useState(initialUpvotes);
  const [downvotes, setDownvotes] = useState(initialDownvotes);

  const handleVote = async (voteType) => {
    try {
      const response = await fetch(`${BASE_URL}/vote/${id}`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ voteType }),
      });

      if (!response.ok) {
        throw new Error('Failed to submit vote');
      }

      const updatedPost = await response.json();
      setUpvotes(updatedPost.upvotes);
      setDownvotes(updatedPost.downvotes);
    } catch (error) {
      console.error('Error submitting vote:', error);
    }
  };

  const handleUpvote = () => handleVote('U');
  const handleDownvote = () => handleVote('D');


  return (
    <div className="card">
      <div className="card-header">
        <img src={imageUrl} alt={title} className="card-image" />
      </div>
      <div className="card-body">
        <h3 className="card-title">{title}</h3>
        <p className="card-content">{content}</p>
      </div>
      <div className="card-footer">
        <div className="card-author">{author}</div>
        <div className="card-time">{timeAgo}</div>
        <div className="card-stats">
          <span className="card-comments">
            <FontAwesomeIcon icon={faComment} /> {comments} comments
          </span>
          <span className="card-upvotes" onClick={handleUpvote}>
            <FontAwesomeIcon icon={faArrowUp} /> {upvotes} upvotes
          </span>
          <span className="card-downvotes" onClick={handleDownvote}>
            <FontAwesomeIcon icon={faArrowDown} /> {downvotes} downvotes
          </span>
        </div>
      </div>
    </div>
  );
}

export default Card;
