import React from 'react';
import OurPortfolio from './OurPortfolio';
import '../Pages/Port.css'


const PortCard = () => {
  const cardsData = [
    {
      imageSrc: 'https://www.fahimshakir.com/admin/upload/1606045442agecoearth.png',
      paragraphText: 'Bath and Spa center',
      buttonText: 'Read More'
    },
    {
      imageSrc: 'https://www.fahimshakir.com/admin/upload/1606045233itieekritee.png',
      paragraphText: 'Bath and Spa center',
      buttonText: 'Read More'
    },
    {
      imageSrc: 'https://www.fahimshakir.com/admin/upload/1541789621careerstrategysolutions.png',
      paragraphText: 'Bath and Spa center',
      buttonText: 'Read More'
    },
    {
      imageSrc: 'https://www.fahimshakir.com/admin/upload/15382447045.jpg',
      paragraphText: 'This is My Project',
      buttonText: 'Read More'
    }
  ];

  return (
    <div className='haxx'>
      {cardsData.map((card, index) => (
        <OurPortfolio
          key={index}
          imageSrc={card.imageSrc}
          paragraphText={card.paragraphText}
          buttonText={card.buttonText}
        />
      ))}
    </div>
  );
};




export default PortCard;
