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
      <Image />
      <Bio />
      <SocialMedia />
      <Path />
      <Technologies />
      <div className="life-philosophy">
        <h1 className="app-titles">My Life Philosophy</h1>
        <h3><i>“In a world where you can be as you want to be, choose to be kind.”</i></h3>
      </div>
    </div>
  );
}

export default App;
