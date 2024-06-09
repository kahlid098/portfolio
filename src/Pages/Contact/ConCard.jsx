import React from 'react';
import '../Contact/Contact.css'

const ConCard = ({ image, title, description }) => {
  return (
        <div className="card123">
        <i class={image}></i>
      <h1 className="card-title">{title}</h1>
      <p className="card-description">{description}</p>
    </div>
  );
};

export default ConCard;
    ;
