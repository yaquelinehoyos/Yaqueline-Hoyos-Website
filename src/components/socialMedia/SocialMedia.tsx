import React from 'react';
import './socialMedia.css';
import '@fortawesome/fontawesome-free/css/all.min.css';

function SocialMedia() {
  return (
    <div className="social-media">
        <div className="social-media__icon">
            <a href="https://github.com/yaquelinehoyos" target="_blank" rel="noopener noreferrer">
                <i className="fab fa-github-alt fa-2x"></i>
            </a>
        </div>
        <div className="social-media__icon">
            <a href="https://www.linkedin.com/in/yaquelinehoyos/" target="_blank" rel="noopener noreferrer">
                <i className="fab fa-linkedin-in fa-2x"></i>
            </a>
        </div>
    </div>
  );
}

export default SocialMedia;