import React from "react";

const MainPort = ({ imageSrc, paragraphText }) => {
  return (
    <>
      <div className="Main-mard">
        <div>
          <img src={imageSrc} alt="Card image" />
          <div className="trans-color">
                <a href="#">
                  <span className="fg-item-icon-inner">
                    <i class="fas fa-link"></i>
                  </span>
                </a>
          </div>
        </div>
        <p className="house">{paragraphText}</p>
      </div>
    </>
  );
};

export default MainPort;
