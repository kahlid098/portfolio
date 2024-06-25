import React, { useState } from "react";
import "react-image-lightbox/style.css";
import Lightbox from "react-image-lightbox";
import "../Ourportfolio/All.css";

const Appmain = ({ imageSrc, paragraphText, Moreinfo, images }) => {
  const [isOpen, setIsOpen] = useState(false);
  const [photoIndex, setPhotoIndex] = useState(0);

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
          style={{ cursor: "default" }}
        />
        <div className="maininfo">
          <a
            href={Moreinfo}
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
        <Lightbox
          mainSrc={images[photoIndex]}
          nextSrc={images[(photoIndex + 1) % images.length]}
          prevSrc={images[(photoIndex + images.length - 1) % images.length]}
          onCloseRequest={() => setIsOpen(false)}
          onMovePrevRequest={() =>
            setPhotoIndex((photoIndex + images.length - 1) % images.length)
          }
          onMoveNextRequest={() =>
            setPhotoIndex((photoIndex + 1) % images.length)
          }
        />
      )}
    </div>
  );
};

export default Appmain;
