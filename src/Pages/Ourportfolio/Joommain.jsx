import React, { useState } from "react";
import "react-image-lightbox/style.css";
import Lightbox from "react-image-lightbox";
import "../Ourportfolio/All.css";

const Joommain = ({ imageSrc, paragraphText, Moreinfo, view }) => {
  const [isOpen, setIsOpen] = useState(false);

  const handleLinkClick = (url, e) => {
    e.preventDefault();
    window.open(url, "_blank", "noopener,noreferrer");
  };

  const handleViewLargerClick = (e) => {
    e.preventDefault();
    setIsOpen(true);
  };

  return (
    <div className="over">
      <div className="All">
        <img
          src={imageSrc}
          alt="Card image"
          onClick={() => setIsOpen(true)}
          style={{ cursor: "pointer" }}
        />
        <div className="maininfo">
          <a
            href="/"
            className="orinfo"
            onClick={(e) => handleLinkClick(Moreinfo, e)}
          >
            More info
          </a>
          <a
            href="/"
            className="orinfo"
            onClick={handleViewLargerClick}
          >
            View Larger
          </a>
        </div>
      </div>
      <p className="newhouse">{paragraphText}</p>

      {isOpen && (
        <Lightbox mainSrc={imageSrc} onCloseRequest={() => setIsOpen(false)} />
      )}
    </div>
  );
};

export default Joommain;



