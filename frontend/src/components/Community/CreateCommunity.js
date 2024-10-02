import React, { useState } from 'react';
import ReactDOM from 'react-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCheckCircle } from '@fortawesome/free-solid-svg-icons';
import './CreateCommunity.css';

function CreateCommunity({ isOpen, onClose }) {
  const [communityName, setCommunityName] = useState('');
  const [description, setDescription] = useState('');
  const [banner, setBanner] = useState(null);
  const [icon, setIcon] = useState(null);
  const [step, setStep] = useState(1);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (step === 1) {
      setStep(2);
    } else if (step === 2) {
      setStep(3);
    } else {
      // Handle community creation logic here
      console.log('Community Name:', communityName);
      console.log('Description:', description);
      console.log('Banner:', banner);
      console.log('Icon:', icon);
      onClose();
    }
  };

  const handleImageChange = (e, setImage) => {
    setImage(e.target.files[0]);
  };

  const handleBack = () => {
    setStep(step - 1);
  };

  if (!isOpen) return null;

  return ReactDOM.createPortal(
    <div className="modal-overlay" onClick={onClose}>
      <div className="modal" onClick={(e) => e.stopPropagation()}>
        <button className="close-button" onClick={onClose}>X</button>
        {step === 1 && (
          <>
            <h2>Tell us about your community</h2>
            <p>A name and description help people understand what your community is all about.</p>
            <form onSubmit={handleSubmit}>
              <label>
                Community name *
                <input
                  type="text"
                  value={communityName}
                  onChange={(e) => setCommunityName(e.target.value)}
                  required
                />
              </label>
              <label>
                Description *
                <textarea
                  value={description}
                  onChange={(e) => setDescription(e.target.value)}
                  required
                />
              </label>
              <div className="modal-footer">
                <button type="button" onClick={onClose}>Cancel</button>
                <button type="submit">Next</button>
              </div>
            </form>
          </>
        )}
        {step === 2 && (
          <>
            <h2>Style your community</h2>
            <p>Adding visual flair will catch new members' attention and help establish your community's culture! You can update this at any time.</p>
            <form onSubmit={handleSubmit}>
              <label>
                Banner
                <input
                  type="file"
                  accept="image/*"
                  onChange={(e) => handleImageChange(e, setBanner)}
                />
              </label>
              <label>
                Icon
                <input
                  type="file"
                  accept="image/*"
                  onChange={(e) => handleImageChange(e, setIcon)}
                />
              </label>
              <div className="modal-footer">
                <button type="button" onClick={handleBack}>Back</button>
                <button type="submit">Next</button>
              </div>
            </form>
          </>
        )}
        {step === 3 && (
          <>
          {/* success message with green check icon */}
          <div className="success-message">
            <FontAwesomeIcon icon={faCheckCircle} className="success-icon" />
            <p>Your community has been created!</p>
          </div>
          </>
        )}
      </div>
    </div>,
    document.getElementById('modal-root')
  );
}

export default CreateCommunity;
