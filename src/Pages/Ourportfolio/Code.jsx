import React from "react";
import "../Ourportfolio/Port.css";
import Allmain from "./Allmain";
import Codemain from "./Codemain";

const Code = () => {
  const cardsData = [

    {
      imageSrc:
        "https://www.fahimshakir.com/admin/upload/1605987827easywayportal.png",
      paragraphText: "EASYWAYPORTAL",
    },
    {
      imageSrc:
        "https://www.fahimshakir.com/admin/upload/1542051342kingdomofcakes.png",
      paragraphText: "KINGDOMOFCAKES",
    },
    {
      imageSrc:
        "https://www.fahimshakir.com/admin/upload/1542050467nehmofindia.png",
      paragraphText: "NEHMOFINDIA",
    },
    {
      imageSrc:
        "https://www.fahimshakir.com/admin/upload/1683733819Screenshot%20(35).png",
      paragraphText: "JAP-EXPRESS",
    },
    {
      imageSrc:
        "https://www.fahimshakir.com/admin/upload/1683733888Screenshot%20(36).png",
      paragraphText: "SURGICALSYSTEMS",
    },
    {
      imageSrc:
        "https://www.fahimshakir.com/admin/upload/1605988228indiansconnect.png",
      paragraphText: "INDIANSCONNECT",
    },
  ];

  return (
    <div className="hoxx">
      {cardsData.map((card, index) => (
        <Codemain
          key={index}
          imageSrc={card.imageSrc}
          paragraphText={card.paragraphText}
        />
      ))}
    </div>
  );
};

export default Code;
