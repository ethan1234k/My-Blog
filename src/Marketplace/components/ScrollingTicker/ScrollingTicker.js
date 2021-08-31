import React from "react";
import "./ScrollingTicker.css";

const ScrollingTicker = () => {
  return (
    <div style={{ flexDirection: "row" }}>
      <p>Hello?</p>

      <div className="scrollingTickerContainer">
        <img
          src="https://upload.wikimedia.org/wikipedia/en/thumb/6/6d/Seattle_Mariners_logo_%28low_res%29.svg/1200px-Seattle_Mariners_logo_%28low_res%29.svg.png"
          alt="Mariners Logo"
        />
        <img
          src="https://upload.wikimedia.org/wikipedia/en/thumb/6/6d/Seattle_Mariners_logo_%28low_res%29.svg/1200px-Seattle_Mariners_logo_%28low_res%29.svg.png"
          alt="Mariners Logo"
        />
        <img
          src="https://upload.wikimedia.org/wikipedia/en/thumb/6/6d/Seattle_Mariners_logo_%28low_res%29.svg/1200px-Seattle_Mariners_logo_%28low_res%29.svg.png"
          alt="Mariners Logo"
        />
      </div>

      {/* <h1>Miami Dolphins</h1>
            <h1>Seattle Mariners</h1>
            <h1>Seattle Seahawks</h1>
            <h1>UW Huskies</h1>
            <h1>Woodinville Falcons</h1> */}
    </div>
  );
};

export default ScrollingTicker;
