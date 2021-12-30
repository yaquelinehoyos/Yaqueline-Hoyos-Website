import React from 'react';
import './image.css';
import websiteImage from "../../assets/website-image.jpg";

function Image() {
  return (
    <div className="image-content">
        <img className="image" src={websiteImage} alt="Yaqueline Hoyos"></img>
    </div>
  );
}

export default Image;
