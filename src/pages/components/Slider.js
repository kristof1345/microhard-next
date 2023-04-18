import React from "react";
import Jumbo1 from "../../../public/Jumbo1.avif";
import Jumbo2 from "../../../public/Jumbo2.avif";

const Slider = () => {
  return (
    <div>
      <div className="image-slider">
        <div id="slide1" className="active-slide">
          slide1
        </div>
        <div id="slide2">slide2</div>
      </div>
      <div className="dot-container">
        <button className="prev"> &lt; </button>
        <button className="dot"></button>
        <button className="dot"></button>
        <button className="next"> &gt; </button>
      </div>
    </div>
  );
};

export default Slider;
