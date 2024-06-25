import React from "react";
import "../Ourportfolio/Port.css";
import Codemain from "./Codemain";

const Code = () => {
  const images = [
    "https://www.fahimshakir.com/admin/upload/1683733542Screenshot%20(31).png",
    "https://www.fahimshakir.com/admin/upload/1605987827easywayportal.png",
    "https://www.fahimshakir.com/admin/upload/1542051342kingdomofcakes.png",
    "https://www.fahimshakir.com/admin/upload/1542050467nehmofindia.png",
    "https://www.fahimshakir.com/admin/upload/1683733819Screenshot%20(35).png",
    "https://www.fahimshakir.com/admin/upload/1683733888Screenshot%20(36).png",
    "https://www.fahimshakir.com/admin/upload/1605988228indiansconnect.png",
  ];

  const cardsData = [
    {
      imageSrc: images[0],
      paragraphText: "TASSHS",
      Moreinfo: "http://tasshs.com/",
    },
    {
      imageSrc: images[1],
      paragraphText: "EASYWAYPORTAL",
      Moreinfo: "https://www.easywayportal.com/",
    },
    {
      imageSrc: images[2],
      paragraphText: "KINGDOMOFCAKES",
      Moreinfo: "https://www.kingdomofcakes.in/",
    },
    {
      imageSrc: images[3],
      paragraphText: "NEHMOFINDIA",
      Moreinfo: "https://www.nehmofindia.org/",
    },
    {
      imageSrc: images[4],
      paragraphText: "JAP-EXPRESS",
      Moreinfo: "https://jap-express.com/",
    },
    {
      imageSrc: images[5],
      paragraphText: "SURGICALSYSTEMS",
      Moreinfo: "https://www.surgicalsystems.in/",
    },
  
  ];

  return (
    <div className="hoxx">
      {cardsData.map((card, index) => (
        <Codemain
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

export default Code;
