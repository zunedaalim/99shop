import React from "react";
import "./cards.css";
import favorites from "../../Assets/favorites.svg";
import bag from "../../Assets/bag.svg";
const Cards = ({ imgurl, price, name }) => {
  return (
    <div
      className="shawp__cards"
      style={{
        backgroundImage: `url(${imgurl})`,
      }}
    >
      <div className="shawp__cards-options">
        <div className="shawp__card-options-cart">
          <img src={bag} alt="" />
        </div>
        <div className="shawp__card-options-favorites">
          <img src={favorites} alt="" />
        </div>
      </div>
      <div className="shawp__cards-details">
        <div className="shawp__cards-details-name">
          <p>{name}</p>
        </div>
        <div className="shawp__cards-details-price">
          <p>{price}</p>
        </div>
      </div>
    </div>
  );
};

export default Cards;
