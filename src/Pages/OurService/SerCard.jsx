import React from 'react';
import '../OurService/service.css'


const SerCard = ({ imageSrc, paragraphText, HedingText }) => {
  return (
    <>
    <div className='ResCard'>
      <img src={imageSrc} alt="Card image" style={styles.image} />
      <div style={styles.Main}> 
      <h1 style={styles.HedingText}>{HedingText}</h1>
      <p style={styles.paragraphText}>{paragraphText}</p>
      </div>
    </div>
    </>
  );
};
const styles = {
    Main: {
        padding: '12px 10px 10px 10px',
        color: '#333',
        lineHeight: '0', 
    },
  image: {
    width: '100%',
    height: 'auto',
  },
  HedingText: {
    fontWeight: '400',
    margin: '10px',
    fontSize: '20px',
    marginBottom: '20px',
  },
   paragraphText : {
    textAlign: 'center',
  }
};

export default SerCard;
