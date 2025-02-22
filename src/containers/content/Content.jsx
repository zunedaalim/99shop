import React from "react";
import "./content.css";
import kid1 from "../../Assets/kid1.webp";
import kid2 from "../../Assets/kid2.webp";
import white from "../../Assets/white.webp";
import Star from "../../Assets/star.svg";
import cart from "../../Assets/bag.svg";
import Kiss from "../../Assets/skyline.svg";
const GoToShop = () => {
  return (
    <div className="gotoshop">
      <img src={cart} alt="cart" />
      <p>go to shop</p>
    </div>
  );
};
const Content = () => {
  return (
    <div className="shawp__content">
      <div className="shawp__content-heading zigzag-item">
        <p>
          We Always <br /> Focus On <br />
          GLobal <br /> Trends
        </p>
        <div className="shawp__content-heading-img">
          <img src={Star} alt="Star" />
        </div>

        <div className="kiss"></div>
      </div>
      <div className="shawp__content-kid1 zigzag-item">
        <div className="shawp__content-kid1-outer-container">
          <GoToShop />
        </div>
        <div className="shawp__content-kid1-content">
          <p>
            Discover the latest trends in children's fashion for style-conscious
            little ones, combining comfort, quality, and vibrant designs.
          </p>
        </div>
      </div>
      <div className="shawp__content-white zigzag-item">
        <div className="shawp__content-white-outer-container">
          <GoToShop />
        </div>
        <div className="shawp__content-white-content">
          <p>
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Commodi
            vero tempore eaque deleniti labore porro?
          </p>
        </div>
      </div>
      <div className="shawp__content-kid2 zigzag-item">
        <div className="shawp__content-kid2-outer-container">
          <GoToShop />
        </div>
        <div className="shawp__content-kid2-content">
          <p>
            Explore fashion-forward trends and styles for girls, reflecting
            individuality and empowering self-expression.
          </p>
        </div>
      </div>
    </div>
  );
};

export default Content;
