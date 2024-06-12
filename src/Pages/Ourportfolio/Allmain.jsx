import React from "react";
import '../Ourportfolio/All.css'

const Allmain = ({ imageSrc, paragraphText,Moreinfo, view }) => {
  const handleLinkClick = (url, e) => {
    e.preventDefault();
    window.open(url, '_blank', 'noopener,noreferrer');
  };
  return (
    <>
     <div className="over">
      <div className="All">
       
          <img src={imageSrc} alt="Card image" />
          <div className="maininfo">
            <a href="/" className="orinfo" onClick={(e) => handleLinkClick(Moreinfo, e)}>More info</a>
            <a href="/" className="orinfo" onClick={(e) => handleLinkClick(view, e)}>View Larger</a>
        </div>
        </div>
        <p className="newhouse">{paragraphText}</p>
      </div>
    </>
  );
};

export default Allmain;
