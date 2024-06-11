import React from "react";
import '../Ourportfolio/All.css'

const Shopimain = ({ imageSrc, paragraphText }) => {
  return (
    <>
     <div className="over">
      <div className="All">
       
          <img src={imageSrc} alt="Card image" />
          <div className="maininfo">
            <a href="#" className="orinfo">More info</a>
            <a href="#" className="orinfo">View Larger</a>
        </div>
        </div>
        <p className="newhouse">{paragraphText}</p>
      </div>
    </>
  );
};

export default Shopimain;