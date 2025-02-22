import React from "react";
import Cutie from "../../Assets/cutie5.jpg";
import "./poster.css";
import Skyline from "../../Assets/skyline.svg";
const Poster = ({ onPlayPause }) => {
  return (
    <div onClick={onPlayPause} className="shawp__poster">
      <div className="shawp__poster-image">
        <img src={Cutie} alt="Girl" />
      </div>
      <div className="skyline"></div>
      <div className="shawp__poster-content">
        <p>Fashion is a form of self-expression</p>
      </div>
    </div>
  );
};

export default Poster;
