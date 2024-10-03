import React, { useState } from 'react';
import './Post.css';
import BASE_URL from '../../config'; // Import the base URL

function CreatePost() {
  const [title, setTitle] = useState('');
  const [content, setContent] = useState('');
  const [community, setCommunity] = useState('');

  const handleSubmit = async (e) => {
    e.preventDefault();
    const postData = {
      title,
      content,
      community,
    };

    // const response = await fetch(`${BASE_URL}/communities/${community}`);
    // const communityData = await response.json();
    // if (!communityData) {
    //     // highlight the input field
    //     setCommunity(community);
    //   return;
    // }

    try {
      const response = await fetch(`${BASE_URL}/posts`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(postData),
      });

      if (response.ok) {
        console.log('Post created successfully');
        // Reset form fields
        setTitle('');
        setContent('');
        setCommunity('');
      } else {
        console.error('Failed to create post');
      }
    } catch (error) {
      console.error('Error:', error);
    }
  };

  return (
    <div className="create-post">
      <h2>Create a Post</h2>
      <form onSubmit={handleSubmit}>
        <div className="create-post-body">
          <label>
            Title
            <input
              type="text"
              value={title}
              onChange={(e) => setTitle(e.target.value)}
              required
            />
          </label>
          <label>
            Content
            <textarea
              value={content}
              onChange={(e) => setContent(e.target.value)}
              required
            />
          </label>
          <label>
            Community
            <input
              type="text"
              value={community}
              onChange={(e) => setCommunity(e.target.value)}
              placeholder="Search for a community"
              required
            />
          </label>
        </div>
        <div className="modal-footer">
          <button type="submit">Create Post</button>
        </div>
      </form>
    </div>
  );
}

export default CreatePost;
