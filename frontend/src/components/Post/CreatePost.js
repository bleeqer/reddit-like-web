import React, { useState } from 'react';
import './Post.css';

function CreatePost() {
  const [title, setTitle] = useState('');
  const [media, setMedia] = useState(null);
  const [postType, setPostType] = useState('text'); // State to manage post type

  const handleTitleChange = (e) => {
    setTitle(e.target.value);
  };

  const handleMediaChange = (e) => {
    setMedia(e.target.files[0]);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle form submission based on post type
    if (postType === 'text') {
      console.log('Submitting text post:', title);
    } else {
      console.log('Submitting media post:', media);
    }
  };

  return (
    <div className="create-post">
      <h2>Create post</h2>
      <form onSubmit={handleSubmit}>
        <div className="create-post-body">
          <div className="post-type-selector">
            <button type="button" onClick={() => setPostType('text')}>Text</button>
            <button type="button" onClick={() => setPostType('media')}>Images & Video</button>
          </div>
          <input
            type="text"
            placeholder="Title"
            value={title}
            onChange={handleTitleChange}
            required
          />
          {postType === 'text' ? (
            <textarea
              placeholder="Write your post here..."
              rows="5"
              required
            />
          ) : (
            <div className="media-upload">
              <label htmlFor="media-upload">Drag and Drop or upload media</label>
              <input
                type="file"
                id="media-upload"
                onChange={handleMediaChange}
              />
            </div>
          )}
        </div>
        <div className="create-post-footer">
          <button type="button">Save Draft</button>
          <button type="submit">Post</button>
        </div>
      </form>
    </div>
  );
}

export default CreatePost;
