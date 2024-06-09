import React from 'react';
import '../OurService/Second.css'


const SeconCard = ({ Icon, paragraphText, HedingText,buttonText }) => {
  return (
    <>
    <div className='card12'>

    <i class={Icon}></i>
      <h1>{HedingText}</h1>
      <p>{paragraphText}</p>
      <a>{buttonText}</a> 
    </div>
    </>
  );
};


export default SeconCard;
