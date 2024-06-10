import React from 'react';
import '../Ourportfolio/Port.css'
import MainPort from './MainPort';


const MainPortfolio = () => {
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
    },
    {
        imageSrc: 'https://techkritigroup.com/wp-content/uploads/2024/05/somne.jpg.webp',
        paragraphText: 'This is My ProjectCaskers',
      },
      {
        imageSrc: 'https://techkritigroup.com/wp-content/uploads/2024/05/standard.jpg.webp',
        paragraphText: 'This is My ProjectCaskers',
      },
      {
        imageSrc: 'https://techkritigroup.com/wp-content/uploads/2024/05/banyanbotanicals.jpg.webp',
        paragraphText: 'This is My ProjectCaskers',
      },
      {
        imageSrc: 'https://techkritigroup.com/wp-content/uploads/2024/01/The-Kurry-Lounge.png.webp',
        paragraphText: 'This is My ProjectCaskers',
      },

      
  ];

  return (
    <div className='haxx123'>
      {cardsData.map((card, index) => (
        <MainPort
          key={index}
          imageSrc={card.imageSrc}
          paragraphText={card.paragraphText}
        />
      ))}
    </div>
  );
};




export default MainPortfolio;
