import React from 'react';
import OurPortfolio from './OurPortfolio';


const PortCard = () => {
  const cardsData = [
    {
      imageSrc: 'https://www.fahimshakir.com/admin/upload/1606045442agecoearth.png',
      paragraphText: 'Bath and Spa center',
      buttonText: 'Read More'
    },
    {
      imageSrc: 'https://www.fahimshakir.com/admin/upload/1606045442agecoearth.png',
      paragraphText: 'Bath and Spa center',
      buttonText: 'Read More'
    },
    {
      imageSrc: 'https://www.fahimshakir.com/admin/upload/1606045442agecoearth.png',
      paragraphText: 'Bath and Spa center',
      buttonText: 'Read More'
    },
    {
      imageSrc: 'https://www.fahimshakir.com/admin/upload/1606045442agecoearth.png',
      paragraphText: 'This is card 4',
      buttonText: 'Read More'
    }
  ];

  return (
    <div style={styles.container}>
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

const styles = {
  container: {
    display: 'flex',
    width : '90%',
    margin : '0 auto',
    gap: "14px",
  },
};

export default PortCard;
