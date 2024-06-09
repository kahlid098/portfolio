import React from 'react';
import PortCard from './PortCard';


const OurPortfolio = ({ imageSrc, paragraphText, buttonText }) => {
  return (
    <div style={styles.card}>
      <img src={imageSrc} alt="Card image" style={styles.image} />
      <p>{paragraphText}</p>
      <button style={styles.buttonText}>{buttonText}</button>
    </div>
  );
};
const styles = {
  card: {
    border: '1px solid #ccc',
    borderRadius: '8px',
    padding: '16px',
    marginBottom: '100px',
    marginTop : '20px',
    width: '25%',
    textAlign: 'center',
    boxShadow: '0 4px 8px 0 rgba(0,0,0,0.2)',
  },
  image: {
    width: '100%',
    height: 'auto',
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
