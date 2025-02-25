import React, { useRef, useState } from "react";
import "./clothing.css";
import Cards from "../cards/Cards";
import Arrow from "../../Assets/arrow.svg";
import Left from "../../Assets/left.svg";
import model2 from "../../Assets/model2.webp";
import model3 from "../../Assets/model3.webp";
import model4 from "../../Assets/model4.webp";
import model5 from "../../Assets/model5.webp";
import model6 from "../../Assets/model6.webp";
import model7 from "../../Assets/model7.webp";
import model8 from "../../Assets/model8.webp";
const Clothing = () => {
  const outerContainerRef = useRef(null);
  const [isVisible, setIsVisible] = useState(true);
  const handleClick = () => {
    setIsVisible(false);
  };
  const scrollToRight = () => {
    outerContainerRef.current.scrollBy({
      left: 1600, // Adjust the scroll distance as needed
      behavior: "smooth",
    });
  };
  const handleButtonClick = () => {
    handleClick(); // Call the handleClick function
    scrollToRight(); // Call the scrollToRight function
  };

  const scrollToLeft = () => {
    setIsVisible(true);
    outerContainerRef.current.scrollBy({
      left: -1600, // Adjust the scroll distance as needed
      behavior: "smooth",
    });
  };

  return (
    <div className="shawp__clothing-outercontainer" ref={outerContainerRef}>
      <div className="shawp__clothing">
        <Cards imgurl={model6} price="$16.99" name="Black eco shirt" />
        <Cards imgurl={model2} price="$11.50" name="luxury bodycon" />
        <Cards imgurl={model5} price="$21.99" name="orange cf jeans" />
        <Cards imgurl={model3} price="$11.50" name="melto long skirt" />
        <Cards imgurl={model4} price="$21.99" name="orange cf jeans" />
        <Cards imgurl={model7} price="$11.50" name="luxury bodycon" />
        <Cards imgurl={model8} price="$11.50" name="luxury bodycon" />
        <div className="left">
          <button onClick={scrollToLeft} className="button-74">
            <img src={Left} alt="left-Arrow" />
          </button>
        </div>
      </div>
      <div className="outer-container">
        {isVisible && (
          <button onClick={handleButtonClick} className="button-74">
            <img src={Arrow} alt="Right-Arrow" />
          </button>
        )}
      </div>
    </div>
  );
};

export default Clothing;
