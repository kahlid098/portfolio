import React from "react";
import "../Ourportfolio/Port.css";
import Appmain from "./Appmain";

const AppMo = () => {
  const images = [
    "https://www.fahimshakir.com/admin/upload/1605988228indiansconnect.png",
    "https://www.fahimshakir.com/admin/upload/15421268591.png",
  ];

  const cardsData = [
    {
      imageSrc: images[0],
      paragraphText: "INDIANSCONNECT",
      Moreinfo:
      "https://play.google.com/store/apps/details?id=com.indiansconnect",
    },
    {
      imageSrc: images[1],
      paragraphText: "JAMA",
      Moreinfo: "https://play.google.com/store/apps/details?id=in.jama.app",
    },
  ];

  return (
    <div className="hoxx">
      {cardsData.map((card, index) => (
        <Appmain
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
export default AppMo;
