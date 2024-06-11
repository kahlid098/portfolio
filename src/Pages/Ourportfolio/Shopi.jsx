import React from 'react';
import '../Ourportfolio/Port.css'
import Allmain from './Allmain';
import Shopimain from './Shopimain';


const Shopi = () => {
  const cardsData = [
  
      {
        imageSrc: 'https://www.fahimshakir.com/admin/upload/1683614531Screenshot%20(22).png',
        paragraphText: 'SUPERGLAMOUROUS',
      },
      {
        imageSrc: 'https://www.fahimshakir.com/admin/upload/1683614383Screenshot%20(19).png',
        paragraphText: 'NEWU',
      },
      {
        imageSrc: 'https://www.fahimshakir.com/admin/upload/1683614263Screenshot%20(17).png',
        paragraphText: 'EQUATOR',
      },



      {
        imageSrc: 'https://www.fahimshakir.com/admin/upload/1605987827easywayportal.png',
        paragraphText: 'EASYWAYPORTAL',
      },
      {
        imageSrc: 'https://www.fahimshakir.com/admin/upload/1542051342kingdomofcakes.png',
        paragraphText: 'KINGDOMOFCAKES',
      },
      {
        imageSrc: 'https://www.fahimshakir.com/admin/upload/1542050467nehmofindia.png',
        paragraphText: 'NEHMOFINDIA',
      },

  ];


  return (
    <div className='hoxx'>
      {cardsData.map((card, index) => (
        <Shopimain
          key={index}
          imageSrc={card.imageSrc}
          paragraphText={card.paragraphText}
        />
      ))}
    </div>
  );
};




export default Shopi;
