import React, { useEffect, useState } from "react";
import "./Header.css";
import WebFont from "webfontloader";
import { FaBars, FaTimes } from "react-icons/fa";
import CCCLogo from './CCC-Logo.png';
import { useHistory } from "react-router";

const Header = () => {
  const [click, setClick] = useState(false);
  const handleClick = () => setClick(!click);
  let history = useHistory()

  useEffect(() => {
    WebFont.load({
      google: {
        families: ["Montserrat", "Open_Sans"],
      },
    });
  }, []);

  return (
    <div className="headerContainer">
      <div className="headerLeftLogoContainer">
        <img  style={{height: 80, width: 80}} src={CCCLogo}/>
      </div>
      <div className="headerMenuIcon" onClick={() => handleClick()}>
        {click ? <FaTimes /> : <FaBars />}
      </div>
      <div className={click ? 'headerRightTabsContainer active' : 'headerRightTabsContainer'}>
        <p onClick={() => {history.push('/'); window.scrollTo(0, 0)}}>Home</p>
        <p onClick={() => {history.push('/blog'); window.scrollTo(0, 0)}}>Blog</p>
        {/* <p onClick={() => {history.push('/contact'); window.scrollTo(0, 0)}}>Contact</p> */}
        {/* <button type="text" className="headerButton">
          Contact Us
        </button> */}
      </div>
    </div>
  );
};

export default Header;
