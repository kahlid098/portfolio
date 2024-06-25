import React from "react";
import "../OurService/Second.css";

const SeconCard = ({ Icon, paragraphText, HedingText, buttonText }) => {
  return (
    <>
      <div className="card12">
        <span className="icon-box">
          <i class={Icon}></i>
        </span>
        <div>
        <h3>{HedingText}</h3>
        <p>{paragraphText}</p>
        <a className="redss">{buttonText}</a>
        </div>
      </div>
    </>
  );
};

export default SeconCard;
