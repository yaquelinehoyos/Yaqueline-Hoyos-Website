import React from 'react';
import './hobbies.css';
import cholula from "../../assets/cholula.jpg";
import morty from "../../assets/morty.jpg"
import reading from "../../assets/reading.jpg";
import coffee from "../../assets/coffee.jpg"

function Hobbies() {
  return (
    <div className="Hobbies">
        <h1 className="app-titles">My Hobbies</h1>
        <div className="hobbie">
            <h3>I love hanging out with my pets.</h3>
            <div className="pets">
                <img src={cholula} alt="cholula" className="hobbie__img"></img>
                <img src={morty} alt="morty" className="hobbie__img"></img>
            </div>
        </div>

        <div className="hobbie">
            <h3>I love reading novels and coffee.</h3>
            <div className="reading">
                <img src={reading} alt="reading" className="hobbie__img"></img>
                <img src={coffee} alt="coffee" className="hobbie__img"></img>
            </div>
        </div>
    </div>
  );
}

export default Hobbies;