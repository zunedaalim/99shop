import React from "react";
import "./animation.css";
import ani1 from "../../Assets/ani1.webp";
import ani2 from "../../Assets/ani2.webp";
import israel from "../../Assets/israel.svg";
const Animation = () => {
  return (
    <div className="shawp__animation">
      <div className="shawp__animation-scroll-element primary">
        <img className="israel" src={israel} alt="star" />
        <img className="israel" src={israel} alt="star" />
        <p>Trending</p>
        <div className="img1">
          <img src={ani1} alt="girl1" />
        </div>
        <img className="israel" src={israel} alt="star" />
        <p>2023 Collections</p>
        <img className="israel" src={israel} alt="star" />
        <p>Fashionable</p>
        <img className="israel" src={israel} alt="star" />

        <div className="img2">
          <img src={ani2} alt="girl2" />
        </div>
        <img className="israel" src={israel} alt="star" />

        <p>Top-Brands</p>
        <img className="israel" src={israel} alt="star" />

        <img className="israel" src={israel} alt="star" />
      </div>

      <div className="shawp__animation-scroll-element secondary">
        <img className="israel" src={israel} alt="star" />
        <img className="israel" src={israel} alt="star" />
        <p>Trending</p>
        <div className="img1">
          <img src={ani1} alt="girl1" />
        </div>
        <img className="israel" src={israel} alt="star" />
        <p>2023 Collections</p>
        <img className="israel" src={israel} alt="star" />
        <p>Fashionable</p>
        <img className="israel" src={israel} alt="star" />

        <div className="img2">
          <img src={ani2} alt="girl2" />
        </div>
        <img className="israel" src={israel} alt="star" />

        <p>Top-Brands</p>
        <img className="israel" src={israel} alt="star" />

        <img className="israel" src={israel} alt="star" />
      </div>
      <div className="shawp__animation-scroll-element primary Hide">
        <img className="israel" src={israel} alt="star" />
        <p>Trending</p>
        <div className="img1">
          <img src={ani1} alt="girl1" />
        </div>
        <img className="israel" src={israel} alt="star" />
        <p>Fashionable</p>
        <img className="israel" src={israel} alt="star" />

        <div className="img2">
          <img src={ani2} alt="girl2" />
        </div>
        <img className="israel" src={israel} alt="star" />
      </div>
      <div className="shawp__animation-scroll-element secondary Hide">
        <img className="israel" src={israel} alt="star" />
        <p>Trending</p>
        <div className="img1">
          <img src={ani1} alt="girl1" />
        </div>
        <img className="israel" src={israel} alt="star" />
        <p>Fashionable</p>
        <img className="israel" src={israel} alt="star" />

        <div className="img2">
          <img src={ani2} alt="girl2" />
        </div>
        <img className="israel" src={israel} alt="star" />
      </div>
    </div>
  );
};

export default Animation;
