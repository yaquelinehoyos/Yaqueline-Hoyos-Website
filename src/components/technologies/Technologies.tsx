import React from 'react';
import './technologies.css';

function Technologies() {
  return (
    <div className="Technologies">
      <h2 className="app-titles">UI / UX / Frontend</h2>
      <p>
          I have built complex <strong>frontend</strong> user interfaces and <strong>dashboards</strong> 
          &nbsp;focused on <strong>user experience</strong>.
      </p>
      <p>
          I have built, structured, and lead <strong>frontend teams</strong> 
          &nbsp;with several engineers, while managing communications with the clients and stakeholders.
      </p>

      <h3>UI / UX / Frontend - Technologies</h3>
      <p>
          I think <strong>JavaScript</strong> 
          &nbsp;is weird, but I love it (also <strong>TypeScript</strong>).
      </p>
      <p>
          I love <strong>Vue.js</strong>, but I have also worked with&nbsp;
          <strong>React</strong> and <strong>Angular</strong>.
      </p>
      <p>
          I have experience with the ecosystem of packages for these frameworks, e.g.&nbsp; 
          <strong>Vuex</strong>, <strong>Redux</strong>, <strong>Axios</strong>, etc.
      </p>
      <p>
          And of course, I love <strong>CSS</strong>, and&nbsp;
          <strong>HTML</strong>, in particular when used with correct semantics and accessibility in mind.
      </p>
      
      <h2 className="app-titles">Data Science / Machine Learning / Backend</h2>
      <p>I love numbers with a passion! While at the university I used to seek out the physics and calculus courses.</p>
      <p>
          I like math so much that for my university final project (also one of my first employment projects) I built a novel system with&nbsp; 
          <strong>Deep Learning</strong> and Computer Vision to solve an <strong>industry problem</strong>,
          detecting textile manufacturing <strong>anomalies</strong>.
      </p>
      <p>I implemented everything, from the feature extraction pipeline to the backend API and frontend.</p>
      <p>
          You can read more details about it and the resulting paper in the&nbsp; 
          <a 
            href="http://bibliotecadigital.udea.edu.co/handle/10495/15470" 
            target="_blank" 
            rel="noopener noreferrer" 
            className="app-titles">
              university site
          </a>.
      </p>
      <p>Then a big part of my UI / UX career focused on building user interfaces to manage data and Data Science projects.</p>
      
      <h3 className="app-titles">Data Science / Machine Learning - Technologies</h3>
      <p>I love <strong>Python</strong> and I have worked extensively with it.</p>
      <p>
          I have worked with <strong>Cloud Machine Learning APIs</strong>, and&nbsp; 
          <strong>Data Science packages</strong> for cleaning, processing, training, and visualization. Including&nbsp;
          <strong>Numpy</strong>, <strong>OpenCV</strong>, <strong>Scikit-Learn</strong>, and others.
      </p>
      <p>I have built APIs with <strong>FastAPI</strong> and many other tools.</p>
      
      <h2 className="app-titles">Other Technologies</h2>
      <p>
          Apart from these technologies above, I have also worked with technologies and languages like&nbsp;
          <strong>Java</strong>, <strong>C</strong>, <strong>C++</strong>, and others.
      </p>
      <p>
          I love <strong>Linux</strong>, and when I can, I stay in a Linux OS, even for my daily life. I once even built a custom Linux&nbsp; 
          <a 
            href="https://github.com/yaquelinehoyos/udea-shell" 
            target="_blank" 
            rel="noopener noreferrer" 
            className="app-titles">
              Command-line interface (CLI)
          </a> 
          &nbsp;in C.
      </p>
      <p>I have built small (hybrid) mobile apps with <strong>Ionic</strong>.</p>
      <p>
          Once I built a marketplace/social network to sell, donate, and exchange books in the university. 
          I love communities and community work.
      </p>
    </div>
  );
}

export default Technologies;