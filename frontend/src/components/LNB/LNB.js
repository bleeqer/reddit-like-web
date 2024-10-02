import React, { useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faHome, faFire, faSmile, faGamepad, faQuestionCircle, faMicrochip, faStar, faChevronDown, faChevronUp, faAtom, faGlobe, faPlus } from '@fortawesome/free-solid-svg-icons';
import './LNB.css';
import CreateCommunity from '../Community/CreateCommunity';

function LNB() {
    const [selectedIcon, setSelectedIcon] = useState(null);
    const [isCommunitiesVisible, setIsCommunitiesVisible] = useState(true);
    const [isCreateCommunityOpen, setIsCreateCommunityOpen] = useState(false);

    const handleIconClick = (icon) => {
        setSelectedIcon(icon);
    };

    const toggleCommunitiesVisibility = () => {
        setIsCommunitiesVisible(!isCommunitiesVisible);
    };

    const openCreateCommunityModal = () => {
        setIsCreateCommunityOpen(true);
    };

    const closeCreateCommunityModal = () => {
        setIsCreateCommunityOpen(false);
    };

    return (
        <nav className="lnb">
            <ul className="lnb-list">
                <li className={selectedIcon === faHome ? 'selected' : ''}>
                    <a href="/" onClick={() => handleIconClick(faHome)}>
                        <div className="lnb-icon-container">
                            <FontAwesomeIcon icon={faHome} />
                        </div>
                        Home
                    </a>
                </li>
                <li className={selectedIcon === faFire ? 'selected' : ''}>
                    <a href="/popular" onClick={() => handleIconClick(faFire)}>
                        <div className="lnb-icon-container">
                            <FontAwesomeIcon icon={faFire} />
                        </div>
                        Popular
                    </a>
                </li>
            </ul>
            <div className="lnb-section">
                <div className="lnb-dropdown-button" onClick={toggleCommunitiesVisibility}>
                    <div className="lnb-dropdown-button-text">
                        Communities
                    </div>
                    <div className="lnb-dropdown-button-icon">
                        <FontAwesomeIcon icon={isCommunitiesVisible ? faChevronUp : faChevronDown} />
                    </div>
                </div>
                <button className="create-community-button" onClick={openCreateCommunityModal}>
                <FontAwesomeIcon icon={faPlus} /> Create Community
            </button>
                <ul className={`communities-list ${isCommunitiesVisible ? 'visible' : ''}`}>
                    <li><a href="/internet-culture"><FontAwesomeIcon icon={faSmile} /> Internet Culture (Viral)</a></li>
                    <li><a href="/games"><FontAwesomeIcon icon={faGamepad} /> Games</a></li>
                    <li><a href="/qandas"><FontAwesomeIcon icon={faQuestionCircle} /> Q&As</a></li>
                    <li><a href="/technology"><FontAwesomeIcon icon={faMicrochip} /> Technology</a></li>
                    <li><a href="/pop-culture"><FontAwesomeIcon icon={faStar} /> Pop Culture</a></li>
                    <li><a href="/science"><FontAwesomeIcon icon={faAtom} /> Science</a></li>
                    <li><a href="/worldnews"><FontAwesomeIcon icon={faGlobe} /> World News</a></li>
                </ul>
            </div>
            <div className="lnb-footer">
                <p>Reddit, Inc. © 2024. All rights reserved.</p>
            </div>
            <CreateCommunity isOpen={isCreateCommunityOpen} onClose={closeCreateCommunityModal} />
        </nav>
    );
}

export default LNB;