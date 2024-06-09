import React from "react";
import SerCard from "./SerCard";

const ServiceCard = () => {
  const cardsData = [
    {
      imageSrc: "https://www.fahimshakir.com/img/designing.jpg",
      HedingText: "Website Design",
      paragraphText:"Most of us think that Web Design is a normal Designing process but its a different concept, it involves the integration of image, banner, header, footer, content, logos and convert",
    },
    {
      imageSrc:"https://www.fahimshakir.com/img/development.jpg",
      HedingText: "Web Development",
      paragraphText: "With rapid development in Website designing and development techniques and technologies, website development becomes easier now days. But quality website",
    },
    {
      imageSrc:"https://www.fahimshakir.com/img/seo.jpg",
      HedingText: "Search Engine Optimization",
      paragraphText: "Search engine optimization, or SEO, is one of those things that those of us in the web design world kind of take for granted, but if you are new to the game we can explain it",
    },
  ]; 

  return (
    <>
    <div style={styles.container}>
      {cardsData.map((card, index) => (
        <SerCard
          key={index}
          imageSrc={card.imageSrc}
          HedingText={card.HedingText}
          paragraphText={card.paragraphText}
        />
      ))}
    </div>
    </>
  );
};

const styles = {
  container: {
    display: "flex",
    width: "85%",
    margin: "0 auto",
    gap: "30px",
  },
};

export default ServiceCard;
