import React from "react";
import "../OurService/Second.css";

const SeconCard = ({ Icon, paragraphText, HedingText, buttonText }) => {
  return (
    <>
      <div className="card12">
        <span>
          <i class={Icon}></i>
        </span>
        <div>
        <h1>{HedingText}</h1>
        <p>{paragraphText}</p>
        <a>{buttonText}</a>
        </div>
      </div>
    </>
  );
};

export default SeconCard;
