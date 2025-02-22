import React from "react";
import "./header.css";
import model from "../../Assets/model.webp";
import cart from "../../Assets/cart.svg";
import star from "../../Assets/star.svg";
import cloth1 from "../../Assets/cloth1.png";
import cloth2 from "../../Assets/cloth2.png";
const header = () => {
  return (
    <div className="shawp__header">
      <div className="shawp__header-image">
        <div className="shawp__header-image-play-background">
          <div className="shawp__header-image-play">Play</div>
        </div>

        <div className="shawp__header-image-container">
          <img className="" src={model} alt="Model" />
        </div>
      </div>
      <div className="shawp__header__content ">
        <div className="shawp__header__content-heading">
          <div className="shawp__header__content-2023">2023</div>
          <div className="shawp__header__content-star">
            <img src={star} alt="star" />
          </div>
          <div className="shawp__header__content-h1">
            <h1>
              Ultimate <br></br>Fashion<br></br> Destination
              <div className="cloths">
                <div className="cloth1">
                  <img src={cloth1} alt="cloth1" />
                </div>
                <div className="cloth2">
                  {" "}
                  <img src={cloth2} alt="cloth2" />
                </div>
              </div>
            </h1>
          </div>

          <p>Discover The Latest trends, shop with style</p>
          <div className="shawp__header__content-gotoshop">
            <button>
              <img src={cart} alt="cart" />
              GO to shop
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default header;
{
  /*
   */
}
