
import React from "react";

const OurPortfolio = ({ imageSrc, paragraphText, onImageClick }) => {
  return (
    <>
      <div className="maidcard">
        <div>
          <img
            src={imageSrc}
            alt="Card image"
            onClick={onImageClick}
            style={{ cursor: "pointer" }}
          />
          <div className="trans-color">
            <a
              href="#"
              onClick={(e) => {
                e.preventDefault();
                onImageClick();
              }}
            >
              <span className="fg-item-icon-inner">
                <i className="fas fa-link"></i>
              </span>
            </a>
          </div>
        </div>
        <p className="house">{paragraphText}</p>
      </div>
    </>
  );
};

export default OurPortfolio;


