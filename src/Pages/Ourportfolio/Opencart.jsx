import React from 'react';
import '../Ourportfolio/Port.css'
import Openmain from './Openmain';


const Opencart = () => {
  const cardsData = [
 
      {
        imageSrc: 'https://www.fahimshakir.com/admin/upload/1542048464officeforce.png',
        paragraphText: 'OFFICEFORCE',
      },
      {
        imageSrc: 'https://www.fahimshakir.com/admin/upload/1542048333superbuniforms.png',
        paragraphText: 'SUPERBUNIFORMS',
      },
    

  ];


  return (
    <div className='hoxx'>
      {cardsData.map((card, index) => (
        <Openmain
          key={index}
          imageSrc={card.imageSrc}
          paragraphText={card.paragraphText}
        />
      ))}
    </div>
  );
};




export default  Opencart;
