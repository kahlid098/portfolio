import React from 'react';
import '../Ourportfolio/Port.css'
import Magmain from './Magmain';


const Mag = () => {
  const images = [
    "https://www.fahimshakir.com/admin/upload/1683736388Screenshot%20(53).png",// <--47-->
    "https://www.fahimshakir.com/admin/upload/1683736004Screenshot%20(52).png",// <--48-->
    "https://www.fahimshakir.com/admin/upload/1683735724Screenshot%20(51).png",// <--49-->
    "https://www.fahimshakir.com/admin/upload/1683736004Screenshot%20(52).png",// <--50-->
    "https://www.fahimshakir.com/admin/upload/1683735319Screenshot%20(49).png",// <--51-->
    "https://www.fahimshakir.com/admin/upload/1683735161Screenshot%20(48).png",// <--52-->
    "https://www.fahimshakir.com/admin/upload/1683734984Screenshot%20(47).png",// <--53-->
    "https://www.fahimshakir.com/admin/upload/1683734669Screenshot%20(44).png",// <--54-->
    "https://www.fahimshakir.com/admin/upload/1683734524Screenshot%20(43).png",// <--55-->
    "https://www.fahimshakir.com/admin/upload/1683734459Screenshot%20(42).png",// <--56-->
    "https://www.fahimshakir.com/admin/upload/1683602159Screenshot%20(10).png",// <--57-->
    "https://www.fahimshakir.com/admin/upload/1683733447Screenshot%20(29).png",// <--58-->
    "https://www.fahimshakir.com/admin/upload/1683733447Screenshot%20(29).png",// <--59-->
    "https://www.fahimshakir.com/admin/upload/1683734009Screenshot%20(37).png",// <--60-->
    "https://www.fahimshakir.com/admin/upload/1683734081Screenshot%20(38).png",// <--61-->
    "https://www.fahimshakir.com/admin/upload/1606042972stickon.png",// <--62-->
    "https://www.fahimshakir.com/admin/upload/1542047830newu.png",// <--63-->
    "https://www.fahimshakir.com/admin/upload/1606043523skinrange.png",// <--64-->
    "https://www.fahimshakir.com/admin/upload/1606044062vivekflowers.png",// <--65-->
    "https://www.fahimshakir.com/admin/upload/1606044372xcelldirect.png",// <--66-->
    "https://www.fahimshakir.com/admin/upload/1542046881astrodidi.png",// <--67-->
    "https://www.fahimshakir.com/admin/upload/1542046737newzenx.png",// <--68-->
    "https://www.fahimshakir.com/admin/upload/1606044691orientbell.png",// <--69-->
    "https://www.fahimshakir.com/admin/upload/1683734232Screenshot%20(40).png",// <--70-->
    "https://www.fahimshakir.com/admin/upload/1683734314Screenshot%20(41).png",// <--71-->
  ]
  const cardsData = [
    {
      imageSrc: images[0],
      paragraphText: "DEPENDABLE-TRADING",
      Moreinfo: "https://skinrange.com/",
    },
    {
      imageSrc: images[1],
      paragraphText: "PEBBLEGREY",
      Moreinfo: "https://pebblegrey.co.uk/sale",
    },

    {
      imageSrc: images[2],
      paragraphText: "PEBBLEGREY",
      Moreinfo: "https://pebblegrey.co.uk/sale",
    },
    {
      imageSrc: images[3],
      paragraphText: "PEBBLEGREY",
      Moreinfo: "https://www.pebblegrey.co.uk/",
    },
    {
      imageSrc: images[4],
      paragraphText: "DEPENDABLE-TRADING",
      Moreinfo: "https://www.dependable-trading.com/",
    },
    {
      imageSrc: images[5],
      paragraphText: "VIVEKFLOWERS",
      Moreinfo: "https://www.vivekflowers.com/",
    },

    {
      imageSrc: images[6],
      paragraphText: "MODESTFOREVER",
      Moreinfo: "https://www.modestforever.com/in/",
    },
    {
      imageSrc: images[7],
      paragraphText: "ANDAAZFASHION",
      Moreinfo: "https://www.andaazfashion.com/",
    },
    {
      imageSrc: images[8],
      paragraphText: "EVOK",
      Moreinfo: "https://www.evok.in/",
    },
    {
      imageSrc: images[9],
      paragraphText: "ISHALIFE",
      Moreinfo: "https://www.ishalife.com/in/",
    },

    {
      imageSrc: images[10],
      paragraphText: "WTRAWLEIGH",
      Moreinfo: "https://www.planet-herbs.com/",
    },
    {
      imageSrc: images[11],
      paragraphText: "WTRAWLEIGH",
      Moreinfo: "https://www.wtrawleigh.com/",
    },
    {
      imageSrc: images[12],
      paragraphText: "PUREBORN",
      Moreinfo: "https://pureborn.com/",
    },
    {
      imageSrc: images[13],
      paragraphText: "BLUSHANDBLOOM",
      Moreinfo: "https://blushandbloom.ae/",
    },
    {
      imageSrc: images[14],
      paragraphText: "COGNITIONUAE",
      Moreinfo: "https://cognitionuae.com/",
    },
    {
      imageSrc: images[15],
      paragraphText: "STICKON",
      Moreinfo: "https://www.stickon.co.in/",
    },
    {
      imageSrc: images[16],
      paragraphText: "NEWU",
      Moreinfo: "https://www.newu.in/",
    },
    {
      imageSrc: images[17],
      paragraphText: "SKINRANGE",
      Moreinfo: "https://www.skinrange.com/",
    },
    {
      imageSrc: images[18],
      paragraphText: "VIVEKFLOWERS",
      Moreinfo: "https://vivekflowers.com/english/",
    },
    {
      imageSrc: images[19],
      paragraphText: "XCELLDIRECT",
      Moreinfo: "https://xcelldirect.com/",
    },
    {
      imageSrc: images[20],
      paragraphText: "ASTRODIDI",
      Moreinfo: "https://www.astrodidi.com/",
    },
    {
      imageSrc: images[21],
      paragraphText: "NEWZENX",
      Moreinfo: "https://www.newzenx.com/",
    },
    {
      imageSrc: images[22],
      paragraphText: "ORIENTBELL",
      Moreinfo: "https://www.orientbell.com/",
    },
    {
      imageSrc: images[23],
      paragraphText: "MYIMAGINESTORE",
      Moreinfo: "https://www.myimaginestore.com/",
    },
    {
      imageSrc: images[24],
      paragraphText: "MINIKLUB",
      Moreinfo: "https://miniklub.in/",
    },
  ];


  return (
    <div className="hoxx">
      {cardsData.map((card, index) => (
        <Magmain
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




export default Mag;
