import React from 'react';
import '../Ourportfolio/Port.css'
import Appmain from './Appmain';


const AppMo = () => {
  const cardsData = [
   
      {
        imageSrc: 'https://www.fahimshakir.com/admin/upload/1605988228indiansconnect.png',
        paragraphText: 'INDIANSCONNECT',
      },
      {
        imageSrc: 'https://www.fahimshakir.com/admin/upload/15421268591.png',
        paragraphText: 'JAMA',
      },

  ];


  return (
    <div className='hoxx'>
      {cardsData.map((card, index) => (
        <Appmain
          key={index}
          imageSrc={card.imageSrc}
          paragraphText={card.paragraphText}
        />
      ))}
    </div>
  );
};




export default AppMo;