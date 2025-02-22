import React from "react";
import "./collection.css";
import star from "../../Assets/star.svg";
const Collection = () => {
  return (
    <div className="shawp__collection">
      <div className="shawp__collection-heading">
        <p>
          Our Shop <br /> Collections
        </p>
        <div className="shawp__collection-heading-star">
          <img src={star} alt="star" />
        </div>
      </div>
      <div className="shawp__collection-discount">
        <div className="shawp__collection-discount-20">
          <p>20%</p>
          <div className="shawp__collection-discount-20-off">
            <p>OFF</p>
          </div>
        </div>
        <div className="shawp__collection-disount-info">
          On Every Single <br /> Purchase, just for <br /> new users
        </div>
      </div>
    </div>
  );
};

export default Collection;
