import React from "react";
import "./footer.css";
import Play from "../../Assets/play.png";
import App from "../../Assets/app.png";
import logo1 from "../../Assets/logo1.png";
import Phone from "../../Assets/phone.png";
import facebook from "../../Assets/facebook.svg";
import youtube from "../../Assets/youtube.svg";
import twitter from "../../Assets/twitter.svg";
import instagram from "../../Assets/instagram.svg";
import copyright from "../../Assets/copyright.svg";
const Footer = () => {
  return (
    <div className="shawp__footer-outercontainer">
      <div className="shawp__footer">
        <div className="shawp__footer-99shop">
          <p>
            99
            <img src={logo1} alt="" /> shop
          </p>
        </div>
        <div className="shawp__footer-content1">
          <div className="shawp__footer-content">
            <div className="shawp__footer-content-phone">
              <img src={Phone} alt="Phone" />
            </div>
            <div className="shawp__footer-content-playstore">
              <p>
                Download <br /> Our Apps
              </p>
              <div className="shawp__footer-content-playstore-images">
                <div className="playstore">
                  <img src={Play} alt="playstore" />
                </div>
                <div className="appstore">
                  <img src={App} alt="appstore" />
                </div>
              </div>
            </div>
          </div>
          <div className="shawp__footer-content-customercare">
            <div className="customercare-heading">
              <p>Customer care</p>
            </div>
            <div className="customercare-links">
              <div className="link1">
                <p>Contact use</p>
                <p>+9079838545</p>
                <p>Payment Option</p>
                <p>Track Your Order</p>
              </div>
              <div className="link2">
                <p>Shipping & Delivery</p>
                <p>Returns & Exchanges</p>
                <p>Size Information</p>
                <p>Style Experts</p>
              </div>
              <div className="link3">
                <p>Review and Feedback</p>
                <p>Accessibility</p>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="shawp__footer-info">
        <div className="other-info-outer-container">
          <div className="shawp__footer-info-heading">
            <p>Other Information</p>
          </div>
          <div className="other-info">
            <div className="other-ifo-link1">
              <p>ABout Us</p>
              <p>Social Impact</p>
            </div>
            <div className="other-ifo-link2">
              <p>Careers</p>
              <p>Ambassadors</p>
            </div>
            <div className="other-ifo-link3">
              <p>Our Partners</p>
              <p>Our Brands</p>
            </div>
            <div className="other-info-link4">
              <p>Affiliate</p>
              <p>Investors</p>
            </div>
          </div>
        </div>

        <div className="shawp__footer-info-follow">
          <p>Follow Us</p>
          <div className="shawp__footer-info-follow-images">
            <div className="social-media">
              <img src={instagram} alt="Instagram" />
            </div>
            <div className="social-media">
              <img src={facebook} alt="facebook" />
            </div>
            <div className="social-media">
              <img src={youtube} alt="Youtube" />
            </div>
            <div className="social-media">
              <img src={twitter} alt="twitter" />
            </div>
          </div>
        </div>
      </div>
      <div className="copyright">
        <div className="copyright__content">
          <img src={copyright} alt="copyright" />
          <p>2023 99Shop</p>
        </div>
        <div className="copyright-links">
          <p>Terms</p>
          <p>Privacy</p>
          <p>Cookie Preferences</p>
          <p>Privacy Rights</p>
        </div>
      </div>
    </div>
  );
};

export default Footer;
