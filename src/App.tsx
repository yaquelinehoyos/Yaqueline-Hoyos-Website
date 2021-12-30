import React from 'react';
import './App.css';
import Image from "./components/image/Image";
import Bio from "./components/bio/Bio";
import Path from "./components/path/Path";

function App() {
  return (
    <div className="App">
      <div className="App__bio">
        <Image />
        <Bio />
      </div>
      <div className="App__path">
        <Path />
      </div>
    </div>
  );
}

export default App;
