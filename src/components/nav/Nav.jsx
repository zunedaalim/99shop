import React, { useState } from "react";
import "./nav.css";
import { RiCloseLine, RiMenu3Line } from "react-icons/ri";
import cart1 from "../../Assets/cart1.svg";
import heart from "../../Assets/favorites2.svg";
import filter from "../../Assets/filter.svg";
import { FaSearch } from "react-icons/fa";
import logo from "../../Assets/logo.webp";
const Menu = () => {
  return (
    <>
      <p>
        <a href="#aboutus">ABOUT US</a>
      </p>
      <p>
        <a href="#shop">SHOP</a>
      </p>
      <p>
        <a href="#FAQ">FAQ</a>
      </p>
      <p>
        <a href="#contact">CONTACT US</a>
      </p>
    </>
  );
};
const Nav = () => {
  const [toggleMenu, setToggleMenu] = useState(false);
  return (
    <>
      <div className="shawp__navbar">
        <div className="shawp__navbar-Menu">
          {toggleMenu ? (
            <RiCloseLine
              color="var(--color-bg)"
              size={27}
              onClick={() => setToggleMenu(false)}
            />
          ) : (
            <RiMenu3Line
              color="var(--color-bg)"
              size={27}
              onClick={() => setToggleMenu(true)}
            />
          )}
          {toggleMenu && (
            <div className="shawp__navbar-Menu-container scale-up-center">
              <div className="shawp__navbar-Menu-container-links">
                <Menu />
                <div className="shawp__navbar-Menu-container__sign">
                  <button type="button">Sign In</button>
                </div>
              </div>
            </div>
          )}
          <div className="shawp__navbar__Menu-container-sign">
            <button type="button">Sign In</button>
          </div>
        </div>
        <div className="shawp__navbar-links">
          <Menu />
        </div>
        <div className="shawp__navbar-logo">
          <img src={logo} alt="logo" />
        </div>
        <div className="shawp__navbar__menu">
          <div className="shawp__navbar__menu-favorits">
            <img src={heart} alt="heart" />
          </div>
          <div className="shawp__navbar__menu-cart">
            <img src={cart1} alt="cart" />
          </div>
          <div className="shawp__navbar__menu-search">
            <input type="search" placeholder="SEARCH" />
            <FaSearch className="search-icon" />
          </div>
          <div className="shawp__navbar__menu__sign">
            <button type="button">Sign In</button>
          </div>
        </div>
      </div>
      <div className="shawp__navbar-search">
        <div className="shawp__navbar__Menu-search">
          <input type="search" placeholder="SEARCH" />
          <FaSearch className="search-icon" />
        </div>
        <div className="shawp__navbar-search-filter">
          <img src={filter} alt="filter" />
        </div>
      </div>
    </>
  );
};

export default Nav;
