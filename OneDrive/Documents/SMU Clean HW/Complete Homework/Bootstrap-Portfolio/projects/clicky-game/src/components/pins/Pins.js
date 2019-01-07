import React from "react";
import "./pins.css";

const pins = (props) => (
  <div className="card">
    <div className="img-container">
      {/*onClick will call selectCharacter in App.js and pass character parameter*/}
      <a
        onClick={() => props.selectPin(props.pinName)}
        className={
          props.currentScore === 0 ? "imgStyle imgStylePrevious" : "imgStyle"
        }
      >
        <img className="cusImg" alt={props.pinName} src={props.image} />
      </a>
    </div>
  </div>
);

export default pins;
