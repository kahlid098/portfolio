import React from 'react';
import '../Ourportfolio/Port.css'
import Allmain from './Allmain';


const Joom = () => {
  const cardsData = [
   
      {
        imageSrc: 'https://www.fahimshakir.com/admin/upload/1605986608bioconnexus.png',
        paragraphText: 'BIOCONNEXUS',
      },
  ];


  return (
    <div className='hoxx'>
      {cardsData.map((card, index) => (
        <Allmain
          key={index}
          imageSrc={card.imageSrc}
          paragraphText={card.paragraphText}
        />
      ))}
    </div>
  );
};




export default Joom;
