import React, { useState } from "react";
import "./category2.css";

const Category2 = () => {
  const [clickedP, setClickedP] = useState(Array(9).fill(false));
  const handleClick = (index) => {
    const newClickedP = Array(8).fill(false);
    newClickedP[index] = true;
    setClickedP(newClickedP);
  };

  const categories = [
    "All",
    "kids",
    "child",
    "women",
    "men",
    "body",
    "sport",
    "sustainability",
    "divided",
  ];

  return (
    <div className="shawp__category2">
      {categories.map((category2, index) => (
        <p
          key={index + category2}
          className={clickedP[index] ? "clicked" : ""}
          onClick={() => handleClick(index)}
        >
          <a href={`#${category2}`}>{category2}</a>
        </p>
      ))}
    </div>
  );
};

export default Category2;
