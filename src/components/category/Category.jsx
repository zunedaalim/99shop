import React, { useState } from "react";
import "./category.css";

const Category = () => {
  const [clickedP, setClickedP] = useState(Array(8).fill(false));
  const handleClick = (index) => {
    const newClickedP = Array(8).fill(false);
    newClickedP[index] = true;
    setClickedP(newClickedP);
  };

  const categories = [
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
    <div className="shawp__category">
      {categories.map((category, index) => (
        <p
          key={index + category}
          className={clickedP[index] ? "clicked" : ""}
          onClick={() => handleClick(index)}
        >
          <a href={`#${category}`}>{category}</a>
        </p>
      ))}
    </div>
  );
};

export default Category;
