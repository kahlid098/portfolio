import React from "react";
import "../Ourportfolio/Port.css";
import Openmain from "./Openmain";

const Opencart = () => {
  const images = [
    "https://www.fahimshakir.com/admin/upload/1542048464officeforce.png",
    "https://www.fahimshakir.com/admin/upload/1542048333superbuniforms.png",
  ];
  const cardsData = [
    {
      imageSrc: images[0],
      paragraphText: "OFFICEFORCE",
      Moreinfo: "https://www.officeforce.in/",
    },
    {
      imageSrc: images[1],
      paragraphText: "SUPERBUNIFORMS",
      Moreinfo: "https://www.superbuniforms.com/",
    },
  ];

  return (
    <div className="hoxx">
      {cardsData.map((card, index) => (
        <Openmain
          key={index}
          imageSrc={card.imageSrc}
          paragraphText={card.paragraphText}
          Moreinfo={card.Moreinfo}
          images={images}
        />
      ))}
    </div>
  );
};

export default Opencart;
