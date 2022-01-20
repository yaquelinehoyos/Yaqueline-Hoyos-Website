import React from 'react';
import './bio.css';

function Bio() {
  return (
    <div className="Info">
      <h1 className="app-titles">Hi there! I'm Yaqueline Hoyos</h1>
      <p>I'm a software engineer from the&nbsp;  
        <strong>University of Antioquia</strong>, Medellín, Colombia.
      </p>
      <p>I'm a bit obsessed with code and product <strong>perfection</strong>.</p>
      <div style={{display: "inline-block"}}>I'm passionate about:
        <ul>
          <li><strong>UI / UX / Frontend</strong></li>
          <li><strong>Data Science</strong></li>
          <li><strong>Machine Learning</strong></li>
          <li><strong>Backend / Web APIs</strong></li>
        </ul>
      </div>
      <p>I'm currently working at&nbsp;  
        <a 
          href="https://www.globant.com" 
          target="_blank" 
          rel="noopener noreferrer" 
          className="app-titles">
          Globant
        </a> 
        &nbsp;as a <strong>Web UI Developer</strong>.
      </p>
      <p>
        I'm almost always taking an <strong>online course</strong>. I love to keep learning.
      </p>
    </div>
  );
}

export default Bio;
