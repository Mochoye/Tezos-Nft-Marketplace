import React from "react";
import "../Css/foot.css";
const Footer = () => {
  return (
    <>
      <div className="footer">
        <div className="row">
          <div className="col">
            <a href="#">FAQ</a>
            <a href="#">Media Centre</a>
            <a href="#">Ways to Watch</a>
            <a href="#">Cookie Preferences</a>
            <a href="#">Speed Test</a>
          </div>
          <div className="col">
            <a href="#">Help Centre</a>
            <a href="#">Investor Relations</a>
            <a href="#">Terms of Use</a>
            <a href="#">Corporate Information</a>
            <a href="#">Legal Noticest</a>
          </div>
          <div className="col">
            <a href="#">Account</a>
            <a href="#"> Jobs</a>
            <a href="#">Privacy</a>
            <a href="#">Contact Us</a>
          </div>
        </div>
      </div>
    </>
  );
};

export default Footer;
