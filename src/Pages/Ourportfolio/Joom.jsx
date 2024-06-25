import React from 'react';
import '../Ourportfolio/Port.css'
import Joommain from './Joommain';


const Joom = () => {
  const images = [
      'https://www.fahimshakir.com/admin/upload/1605986608bioconnexus.png',
  ]
  const cardsData = [
   
      {
        imageSrc: images[0],
        paragraphText: 'BIOCONNEXUS',
        Moreinfo: "https://bioconnexus.com/",
      },
  ];


  return (
    <div className="hoxx">
      {cardsData.map((card, index) => (
        <Joommain
          key={index}
          imageSrc={card.imageSrc}
          paragraphText={card.paragraphText}
          Moreinfo={card.Moreinfo}
          images={images}
        />
      ))}
    </div>
  );
};




export default Joom;
