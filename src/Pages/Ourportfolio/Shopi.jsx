import React from "react";
import "../Ourportfolio/Port.css";
import Allmain from "./Allmain";
import Shopimain from "./Shopimain";

const Shopi = () => {
  const images = [
    "https://www.fahimshakir.com/admin/upload/1683614531Screenshot%20(22).png",
    "https://www.fahimshakir.com/admin/upload/1683614383Screenshot%20(19).png",
    "https://www.fahimshakir.com/admin/upload/1683614263Screenshot%20(17).png",
    "https://www.fahimshakir.com/admin/upload/1605987827easywayportal.png",
    "https://www.fahimshakir.com/admin/upload/1542051342kingdomofcakes.png",
    "https://www.fahimshakir.com/admin/upload/1542050467nehmofindia.png",
  ];
  const cardsData = [
    {
      imageSrc: images[0],
      paragraphText: "SUPERGLAMOUROUS",
      Moreinfo: "https://www.superglamourous.it/",
    },
    {
      imageSrc: images[1],
      paragraphText: "NEWU",
      Moreinfo: "https://www.newu.in/",
    },
    {
      imageSrc: images[2],
      paragraphText: "EQUATOR",
      Moreinfo: "https://equator.ca/",
    },

    {
      imageSrc: images[3],
      paragraphText: "EASYWAYPORTAL",
      Moreinfo: "https://www.easywayportal.com/",
    },
    {
      imageSrc: images[4],
      paragraphText: "KINGDOMOFCAKES",
      Moreinfo: "https://www.kingdomofcakes.in/",
    },
    {
      imageSrc: images[5],
      paragraphText: "NEHMOFINDIA",
      Moreinfo: "https://www.nehmofindia.org/",
    },
  ];

  return (
    <div className="hoxx">
    {cardsData.map((card, index) => (
      <Shopimain
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

export default Shopi;
