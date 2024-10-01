import React, { useState } from 'react';
import './Header.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSearch } from '@fortawesome/free-solid-svg-icons';

function Header() {
  const [darkMode, setDarkMode] = useState(false);
  const [isModalOpen, setIsModalOpen] = useState(false);

  const openModal = () => {
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setIsModalOpen(false);
  };

  return (
    <header className="header">
      <div className="logo">Reddit</div>
      <div className="search-bar">
        <div className="search-icon-container">
          <input type="text" placeholder="Search Reddit" />
          <FontAwesomeIcon icon={faSearch} className="search-icon" />
        </div>
      </div>
      <div className="header-buttons">
        <button className="login-button" onClick={openModal}>Log In</button>
      </div>
      {isModalOpen && (
        <div className="modal-overlay" onClick={closeModal}>
          <div className="modal" onClick={(e) => e.stopPropagation()}>
            <button className="close-button" onClick={closeModal}>X</button>
            <h2>Log In</h2>
            <p>By continuing, you agree to our <a href="#">User Agreement</a> and acknowledge that you understand the <a href="#">Privacy Policy</a>.</p>
            <button className="social-login-button">Continue with Apple</button>
            <div className="divider">OR</div>
            <form>
              <label>
                Email or username
                <input type="text" name="username" required />
              </label>
              <label>
                Password
                <input type="password" name="password" required />
              </label>
              <button type="submit" className="submit-button">Log In</button>
            </form>
            <a href="#" className="forgot-password">Forgot password?</a>
            <p>New to Reddit? <a href="#">Sign Up</a></p>
          </div>
        </div>
      )}
    </header>
  );
}

export default Header;
