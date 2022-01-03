import React from 'react';
import './path.css';

function Path() {
  return (
    <div className="Path">
      <h1>My Experience</h1>
      <br></br>
      <div className="experience-card">
        <div className="experience">
          <h3 className="experience__enterprise">Guane Enterprises</h3>
          <h4 className="experience__position">Frontend Developer</h4>
          <p><i className="fas fa-calendar"></i> October 2019 - December 2020 <i className="fas fa-map-marker"></i> Medellín</p>
          <ul>
            <li>Build web interfaces with HTML, CSS, SASS, BEM, Bootstrap and JavaScript using Vuejs and Vuex.</li>
            <li>Adapt the design of applications to different devices and browsers.</li>
            <li>Improve the user experience.</li>
            <li>Implement reusable code.</li>
            <li>Develop a correct integration with the backend to ensure the proper functioning of the application.</li>
          </ul>
        </div>
      </div>

      <div className="experience-card">
        <div className="experience">
          <h3 className="experience__enterprise">Guane Enterprises</h3>
          <h4 className="experience__position">Frontend Team Leader</h4>
          <p><i className="fas fa-calendar"></i> December 2020 - August 2021 <i className="fas fa-map-marker"></i> Medellín</p>
          <ul>
            <li>Develop with Vuejs framework.</li>
            <li>Staff Management.</li>
            <li>Task assignment.</li>
            <li>Training and technical advice.</li>
            <li>Code review</li>
            <li>Time management of projects including releases and final deliveries.</li>
          </ul>
        </div>
      </div>

      <div className="experience-card">
        <div className="experience">
          <h3 className="experience__enterprise">Globant</h3>
          <h4 className="experience__position">Web UI Developer</h4>
          <p><i className="fas fa-calendar"></i> October 2021 - Ongoing <i className="fas fa-map-marker"></i> Medellín</p>
          <ul>
            <li>Build web interfaces with VueJS and ReactJS.</li>
            <li>Develop web interfaces using HTML, CSS, SASS, BEM, javascript.</li>
            <li>Manage application state with technologies such as Vuex andRedux.</li>
            <li>Adapt the design of applications to different devices and browsers.</li>
          </ul>
        </div>
      </div>
    </div>
  );
}

export default Path;