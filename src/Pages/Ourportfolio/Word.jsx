import React from "react";
import "../Ourportfolio/Port.css";
import Allmain from "./Allmain";
import Wordmain from "./Woedmain";

const Word = () => {
  const images = [
    "https://www.fahimshakir.com/admin/upload/1683736737Screenshot%20(55).png", // <--16-->
    "https://www.fahimshakir.com/admin/upload/1683652185Screenshot%20(27).png", // <--17-->
    "https://www.fahimshakir.com/admin/upload/1683652112Screenshot%20(26).png", // <--18-->
    "https://www.fahimshakir.com/admin/upload/1683652006Screenshot%20(25).png", // <--19-->
    "https://www.fahimshakir.com/admin/upload/1683614671Screenshot%20(24).png", // <--20-->
    "https://www.fahimshakir.com/admin/upload/1683614611Screenshot%20(23).png", // <--21-->
    "https://www.fahimshakir.com/admin/upload/1683614112Screenshot%20(16).png", // <--22-->
    "https://www.fahimshakir.com/admin/upload/1683614001Screenshot%20(15).png", // <--23-->
    "https://www.fahimshakir.com/admin/upload/1683613706Screenshot%20(13).png", // <--24-->
    "https://www.fahimshakir.com/admin/upload/1683613605Screenshot%20(12).png", // <--25-->
    "https://www.fahimshakir.com/admin/upload/1683733603Screenshot%20(32).png", // <--26-->
    "https://www.fahimshakir.com/admin/upload/1683733678Screenshot%20(33).png", // <--27-->
    "https://www.fahimshakir.com/admin/upload/1542051696evolvegarments.png", // <--28-->
    "https://www.fahimshakir.com/admin/upload/1542051625lyallpuruniforms.png", // <--29-->
    "https://www.fahimshakir.com/admin/upload/1542048011skinrange.png", // <--30-->
    "https://www.fahimshakir.com/admin/upload/1542047607carzex.png", // <--31-->
    "https://www.fahimshakir.com/admin/upload/1605984012sialindia.png", // <--32-->
    "https://www.fahimshakir.com/admin/upload/1541932606ibg-world.png", // <--33-->
    "https://www.fahimshakir.com/admin/upload/1541932421bismillahcharity.png", // <--34-->
    "https://www.fahimshakir.com/admin/upload/1541930518avanta.png", // <--35-->
    "https://www.fahimshakir.com/admin/upload/1541930312alejandrapoupel.png", // <--36-->
    "https://www.fahimshakir.com/admin/upload/1541929811versatilepremedia.png", // <--37-->
    "https://www.fahimshakir.com/admin/upload/1541928495interconnective.png", // <--38-->
    "https://www.fahimshakir.com/admin/upload/1541928280planet-herbs.png", // <--39-->
    "https://www.fahimshakir.com/admin/upload/1541927599astol.png", // <--40-->
    "https://www.fahimshakir.com/admin/upload/1605986065txgltd.png", // <--41-->
    "https://www.fahimshakir.com/admin/upload/1541927265whitewaterevents.png", // <--42-->
    "https://www.fahimshakir.com/admin/upload/1605986298radiuslog.png", // <--43-->
    "https://www.fahimshakir.com/admin/upload/1541791350steadysteps.png", // <--44-->
    "https://www.fahimshakir.com/admin/upload/1541790755neufango.png", // <--45-->
  ];
  const cardsData = [
    {
      imageSrc: images[0],
      paragraphText: "RADIUSLOG",
      Moreinfo: "https://radiuslog.com/",
    },
    {
      imageSrc: images[1],
      paragraphText: "EVOLVEGARMENTS",
      Moreinfo: "https://www.evolvegarments.ae/",
    },
    {
      imageSrc: images[2],
      paragraphText: "NEUFANGO",
      Moreinfo: "http://www.neufango.com/",
    },
    {
      imageSrc: images[3],
      paragraphText: "IBG-INT",
      Moreinfo: "https://www.ibg-int.com/",
    },
    {
      imageSrc: images[4],
      paragraphText: "BISMILLAHCHARITY",
      Moreinfo: "https://bismillahcharity.org/",
    },
    {
      imageSrc: images[5],
      paragraphText: "THAKKARCLASSES",
      Moreinfo: "https://www.thakkarclasses.com/",
    },
    {
      imageSrc: images[6],
      paragraphText: "LABELLEZA",
      Moreinfo: "https://www.labelleza.co.in/",
    },
    {
      imageSrc: images[7],
      paragraphText: "GELAB",
      Moreinfo: "https://www.gelab.co.in/",
    },
    {
      imageSrc: images[8],
      paragraphText: "AMARPROJECTS",
      Moreinfo: "https://www.amarprojects.co.in/",
    },
    {
      imageSrc: images[9],
      paragraphText: "PALLETTRUCKSUK",
      Moreinfo: "https://www.pallettrucksuk.co.uk/",
    },
    {
      imageSrc: images[10],
      paragraphText: "CARZEX",
      Moreinfo: "http://www.carzex.com/",
    },
    {
      imageSrc: images[11],
      paragraphText: "PLANET-HERBS",
      Moreinfo: "https://planet-herbs.com/",
    },
    {
      imageSrc: images[12],
      paragraphText: "EVOLVEGARMENTS",
      Moreinfo: "https://www.evolvegarments.ae/",
    },
    {
      imageSrc: images[13],
      paragraphText: "LYALLPURUNIFORMS",
      Moreinfo: "https://lyallpuruniforms.com/",
    },
    {
      imageSrc: images[14],
      paragraphText: "SKINRANGE",
      Moreinfo: "https://skinrange.com/",
    },
    {
      imageSrc: images[15],
      paragraphText: "CARZEX",
      Moreinfo: "https://www.carzex.com/",
    },
    {
      imageSrc: images[16],
      paragraphText: "SIALINDIA",
      Moreinfo: "https://www.sialindia.com/",
    },

    {
      imageSrc: images[17],
      paragraphText: "IBG-WORLD",
      Moreinfo: "https://www.ibg-world.com/",
    },
    {
      imageSrc: images[18],
      paragraphText: "BISMILLAHCHARITY",
      Moreinfo: "https://bismillahcharity.org/",
    },
    {
      imageSrc: images[19],
      paragraphText: "AVANTA",
      Moreinfo: "http://www.avanta.co.in/",
    },
    {
      imageSrc: images[20],
      paragraphText: "ALEJANDRAPOUPEL",
      Moreinfo: "http://alejandrapoupel.com/",
    },
    {
      imageSrc: images[21],
      paragraphText: "VERSATILEPREMEDIA",
      Moreinfo: "https://www.versatilepremedia.com/",
    },
    {
      imageSrc: images[22],
      paragraphText: "INTERCONNECTIVE",
      Moreinfo: "http://www.interconnective.co.uk/interconnective/",
    },
    {
      imageSrc: images[23],
      paragraphText: "PLANET-HERBS",
      Moreinfo: "https://www.planet-herbs.com/",
    },
    {
      imageSrc: images[24],
      paragraphText: "ASTOL",
      Moreinfo: "http://www.astol.in/",
    },
    {
      imageSrc: images[25],
      paragraphText: "TXGLTD",
      Moreinfo: "https://txgltd.com/",
    },
    {
      imageSrc: images[26],
      paragraphText: "WHITEWATEREVENTS",
      Moreinfo: "http://www.whitewaterevents.com/",
    },
    {
      imageSrc: images[27],
      paragraphText: "RADIUSLOG",
      Moreinfo: "https://radiuslog.com/",
    },
    {
      imageSrc: images[28],
      paragraphText: "STEADYSTEPS",
      Moreinfo: "http://www.steadysteps.co.in/",
    },
    {
      imageSrc: images[29],
      paragraphText: "NEUFANGO",
      Moreinfo: "http://www.neufango.com/",
    },
  ];

  return (
    <div className="hoxx">
      {cardsData.map((card, index) => (
        <Wordmain
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

export default Word;
