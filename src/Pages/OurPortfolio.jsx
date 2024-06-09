import React from 'react';
import PortCard from './PortCard';


const OurPortfolio = ({ imageSrc, paragraphText, buttonText }) => {
  return (
    <div className='maidcard'>
      <div style={styles.imageCard}>
      <img src={imageSrc} alt="Card image" style={styles.image} />
      </div>
      <p>{paragraphText}</p>
      <button style={styles.buttonText}>{buttonText}</button>
    </div>
  );
};
const styles = {
  image: {
    width: '100%',
    height: 'auto',
    backgroundSize:'cover',
  },
  imageCard:{
    width: '100%',
    height: '150px',
  },
  buttonText:{
    backgroundColor: '#4CAF50', // Green background
    border: 'none',
    color: 'white', // White text
    padding: '10px 24px',
    textAlign: 'center',
    textDecoration: 'none',
    display: 'inline-block',
    fontSize: '16px',
    margin: '14px 0px 0px 0px',
    cursor: 'pointer',
    borderRadius: '8px',
  }
};

export default OurPortfolio;
