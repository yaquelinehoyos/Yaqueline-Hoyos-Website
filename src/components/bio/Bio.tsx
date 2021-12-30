import React from 'react';
import './bio.css';

function Bio() {
  return (
    <div className="Info">
      <h1>Hi there! I'm Yaqueline Hoyos</h1>
      <p>I'm a software engineer from&nbsp;  
        <strong>University of Antioquia</strong>
      </p>
      <p>Here you can check my&nbsp;  
        <a href="http://bibliotecadigital.udea.edu.co/handle/10495/15470" target="_blank">
          degree work
        </a>
      </p>
      <br></br>
      <p>I'm currently working at&nbsp;  
        <a href="https://www.globant.com" target="_blank">Globant</a> 
        &nbsp;as a Web UI Developer
      </p>
      <p>I love Vue.js</p>
      <p>I'm currently learning React</p>
    </div>
  );
}

export default Bio;
