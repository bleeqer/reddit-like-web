import React from 'react';
import './Card.css';

function Card({ title, content, imageUrl, author, timeAgo, comments, upvotes, downvotes }) {
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
          <span className="card-comments">{comments} comments</span>
          <span className="card-upvotes">{upvotes} upvotes</span>
          <span className="card-downvotes">{downvotes} downvotes</span>
        </div>
      </div>
    </div>
  );
}

export default Card;
