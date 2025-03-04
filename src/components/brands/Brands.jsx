import React from "react";
import "./brands.css";
import cutie1 from "../../Assets/cutie3.jpg";
import cutie2 from "../../Assets/cutie8.jpg";
import star2 from "../../Assets/star2.svg";
import lacoste from "../../Assets/lacoste.svg";
import gucci from "../../Assets/gucci.svg";
import christian from "../../Assets/christian.svg";
import chanel from "../../Assets/chanel.svg";
import calvin from "../../Assets/calvin.svg";
import levi from "../../Assets/authorised.svg";
import armani from "../../Assets/armani.svg";
import adidas from "../../Assets/adidas.svg";

const Brands = () => {
  const categories = [
    lacoste,
    gucci,
    christian,
    chanel,
    calvin,
    levi,
    armani,
    adidas,
  ];
  const classNames = [
    "class1",
    "class2",
    "class3",
    "class4",
    "class5",
    "class6",
    "class7",
    "class8",
  ];

  return (
    <div className="shawp__brands-outer-container">
      <div className="shawp__brands">
        <div className="shawp__brands-img1">
          <img src={cutie1} alt="Girl in fashionable clothes" />
        </div>
        <div className="shawp__brands_content">
          <p>
            Our <br />
            Popular <br />
            Brands
          </p>
          <div className="shawp__brands_content-star">
            <img src={star2} alt="star" />
          </div>
        </div>
        <div className="shawp__brands-img2">
          <img src={cutie2} alt="Girl in fashionable clothes" />
        </div>
      </div>
      <div className="shawp__brands-animation-outer-container">
        <div className="shawp__brands-animation primary">
          {categories.map((category2, index) => (
            <div
              key={index} // Added key prop here
              className={`shawp__brands-animation-images ${classNames[index]}`}
            >
              <img alt="Brand Logo" src={category2}></img>{" "}
              {/* Updated alt text */}
            </div>
          ))}
        </div>
        <div className="shawp__brands-animation secondary">
          {categories.map((category2, index) => (
            <div
              key={index + "secondary"} // Added key prop here, using index + "secondary" to ensure unique keys across both animations if needed
              className={`shawp__brands-animation-images ${classNames[index]}`}
            >
              <img alt="Brand Logo" src={category2}></img>{" "}
              {/* Updated alt text */}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Brands;
