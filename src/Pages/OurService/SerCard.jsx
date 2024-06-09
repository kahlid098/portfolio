import React from 'react';


const SerCard = ({ imageSrc, paragraphText, HedingText }) => {
  return (
    <>
    <div style={styles.card}>
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
  card: {
    borderRadius: '4px',
    padding: '4px',
    border :'1px solid #ddd',
    marginBottom: '100px',
    marginTop : '20px',
    width: '33%',
    textAlign: 'center',
    boxShadow: '0 4px 8px 0 rgba(0,0,0,0.2)',
    transition: 'all .2s ease-in-out',
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
