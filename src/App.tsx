import React from 'react';
import './App.css';
import Image from "./components/image/Image";
import Bio from "./components/bio/Bio";
import SocialMedia from "./components/socialMedia/SocialMedia";
import Path from "./components/path/Path";
import Technologies from "./components/technologies/Technologies";

function App() {
  return (
    <div className="App">
      <div className="App__bio">
        <Image />
        <Bio />
        <SocialMedia />
        <Technologies />
      </div>
      <div className="App__path">
        <Path />
      </div>
    </div>
  );
}

export default App;
