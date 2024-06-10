import React from 'react';
import OurPortfolio from './OurPortfolio';
import '../Pages/Port.css'


const PortCard = () => {
  const cardsData = [
    {
      imageSrc: 'https://techkritigroup.com/wp-content/uploads/2024/01/House-of-Computers.png.webp',
      paragraphText: 'House of Computers',
    },
    {
      imageSrc: 'https://techkritigroup.com/wp-content/uploads/2024/01/IFL-ME.jpg',
      paragraphText: 'IFL ME',
    },
    {
      imageSrc: 'https://techkritigroup.com/wp-content/uploads/2024/01/Water-To-Go.png.webp',
      paragraphText: 'Water To Go',
    },
    {
      imageSrc: 'https://techkritigroup.com/wp-content/uploads/2024/01/Caskers.png.webp',
      paragraphText: 'This is My ProjectCaskers',
    }
  ];

  return (
    <div className='haxx'>
      {cardsData.map((card, index) => (
        <OurPortfolio
          key={index}
          imageSrc={card.imageSrc}
          paragraphText={card.paragraphText}
        />
      ))}
    </div>
  );
};




export default PortCard;
