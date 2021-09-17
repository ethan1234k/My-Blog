import React from "react";
import "./Footer.css";
import CCCLogo from "../Header/CCC-Logo.png";
import { useHistory } from "react-router";

const Footer = () => {
  let history = useHistory();
  return (
    <div className="footerContainer">
      <div className="footerLogoCenterTextContainer">
        <div className="footerLeftContentContainer">
          <img src={CCCLogo} className="footerLogo" />
        </div>
        <div className="footerMiddleContentContainer">
          <p
            onClick={() => {
              history.push("/");
              window.scrollTo(0, 0);
            }}
          >
            Home
          </p>
          <p
            onClick={() => {
              history.push("/blog");
              window.scrollTo(0, 0);
            }}
          >
            Blog
          </p>
          <p
            onClick={() => {
              history.push("/privacy");
              window.scrollTo(0, 0);
            }}
          >
            Privacy Policy
          </p>
        </div>
      </div>
      <div className="footerRightContentContainer">
        <p>
          {" "}
          © 2021 - All materials and content Copyright of College, Computers,
          and Chow.
        </p>
      </div>
    </div>
  );
};

export default Footer;
