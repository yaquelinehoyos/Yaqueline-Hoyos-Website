import React from 'react';
import './path.css';

function Path() {
  return (
    <div className="Path">
      <h1 className="app-titles">My Experience</h1>
      <br></br>
      <div className="experience-card">
        <div className="experience">
          <h3 className="experience__enterprise">Deepset</h3>
          <h4 className="experience__position">Frontend Engineer</h4>
          <p><i className="fas fa-calendar"></i> August 2022 - Ongoing <i className="fas fa-map-marker"></i> Berlin, Germany</p>
          <ul>
            <li>Develop dashboards to manage NLP and Machine Learning projects (Artificial Intelligence).</li>
            <li>Implement UI, UX designs in code with best practices.</li>
            <li>Program with TypeScript, React, Redux, HTML, CSS, SASS and Ant design.</li>
            <li>Integrate frontend UIs with backend services and APIs.</li>
          </ul>
        </div>
      </div>

      <div className="experience-card">
        <div className="experience">
          <h3 className="experience__enterprise">Globant</h3>
          <h4 className="experience__position">Web UI Developer</h4>
          <p><i className="fas fa-calendar"></i> October 2021 - July 2022 <i className="fas fa-map-marker"></i> Medellin, Colombia</p>
          <ul>
            <li>Build web interfaces with Vuejs, React and Vanilla JS.</li>
            <li>Develop web interfaces using HTML, CSS, SASS, BEM, JavaScript.</li>
            <li>Manage application state with technologies such as Vuex and Redux.</li>
            <li>Adapt the design of applications to different devices and browsers.</li>
          </ul>
        </div>
      </div>

      <div className="experience-card">
        <div className="experience">
          <h3 className="experience__enterprise">Guane Enterprises</h3>
          <h4 className="experience__position">Frontend Team Leader</h4>
          <p><i className="fas fa-calendar"></i> December 2020 - August 2021 <i className="fas fa-map-marker"></i> Medellin, Colombia</p>
          <ul>
            <li>Develop web interfaces for Data Science systems with the Vue.js framework.</li>
            <li>
              Staff Management
              </li>
              <ul>
                <li>Structure and lead a team of frontend developers.</li>
                <li>Task Assignment.</li>
                <li>Training and technical advice.</li>
                <li>Code reviews.</li>
              </ul>
            <li>Time management of projects including releases and final deliveries.</li>
            <li>Communication and management with clients and stakeholders.</li>
          </ul>
        </div>
      </div>

      <div className="experience-card">
        <div className="experience">
          <h3 className="experience__enterprise">Guane Enterprises</h3>
          <h4 className="experience__position">Frontend Developer</h4>
          <p><i className="fas fa-calendar"></i> October 2019 - December 2020 <i className="fas fa-map-marker"></i> Medellin, Colombia</p>
          <ul>
            <li>Build web interfaces with HTML, CSS, SASS, BEM, Bootstrap and JavaScript using Vuejs and Vuex.</li>
            <li>Adapt the design of applications to different devices and browsers.</li>
            <li>Improve the user experience.</li>
            <li>Implement reusable code.</li>
            <li>Develop a correct integration with the backend to ensure the proper functioning of the application.</li>
          </ul>
        </div>
      </div>
    </div>
  );
}

export default Path;