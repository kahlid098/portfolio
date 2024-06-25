import React, { useState } from "react";
import "../Ourportfolio/Port.css";
import Allmain from "./Allmain";
import Lightbox from "react-image-lightbox";

const All = () => {
  const images = [
    "https://www.fahimshakir.com/admin/upload/1683601241Screenshot%20(6).png",
    "https://www.fahimshakir.com/admin/upload/1606045442agecoearth.png",
    "https://www.fahimshakir.com/admin/upload/1606045233itieekritee.png",
    "https://www.fahimshakir.com/admin/upload/1683601360Screenshot%20(7).png",
    "https://www.fahimshakir.com/admin/upload/1605981376vsmenterprises.png",
    "https://www.fahimshakir.com/admin/upload/1541931008huntoffices.png",
    "https://www.fahimshakir.com/admin/upload/1541790566autox.png",
    "https://www.fahimshakir.com/admin/upload/1541790177championtutor.png",
    "https://www.fahimshakir.com/admin/upload/1541789827garvintools.png",
    "https://www.fahimshakir.com/admin/upload/1541789621careerstrategysolutions.png",
    "https://www.fahimshakir.com/admin/upload/1605981640stefab.png",
    "https://www.fahimshakir.com/admin/upload/1541788854uniplast.png",
    "https://www.fahimshakir.com/admin/upload/1605982470laxmiflourmill.png",
    "https://www.fahimshakir.com/admin/upload/1538244974Thestudentwindow.png",
    "https://www.fahimshakir.com/admin/upload/15382447045.jpg",
    "https://www.fahimshakir.com/admin/upload/1683736737Screenshot%20(55).png",
    "https://www.fahimshakir.com/admin/upload/1683652185Screenshot%20(27).png",
    "https://www.fahimshakir.com/admin/upload/1683652112Screenshot%20(26).png",
    "https://www.fahimshakir.com/admin/upload/1683652006Screenshot%20(25).png",
    "https://www.fahimshakir.com/admin/upload/1683614671Screenshot%20(24).png",
    "https://www.fahimshakir.com/admin/upload/1683614611Screenshot%20(23).png",
    "https://www.fahimshakir.com/admin/upload/1683614112Screenshot%20(16).png",
    "https://www.fahimshakir.com/admin/upload/1683614001Screenshot%20(15).png",
    "https://www.fahimshakir.com/admin/upload/1683613706Screenshot%20(13).png",
    "https://www.fahimshakir.com/admin/upload/1683613605Screenshot%20(12).png",
    "https://www.fahimshakir.com/admin/upload/1683733603Screenshot%20(32).png",
    "https://www.fahimshakir.com/admin/upload/1683733678Screenshot%20(33).png",
    "https://www.fahimshakir.com/admin/upload/1542051696evolvegarments.png",
    "https://www.fahimshakir.com/admin/upload/1542051625lyallpuruniforms.png",
    "https://www.fahimshakir.com/admin/upload/1542048011skinrange.png",
    "https://www.fahimshakir.com/admin/upload/1542047607carzex.png",
    "https://www.fahimshakir.com/admin/upload/1605984012sialindia.png",
    "https://www.fahimshakir.com/admin/upload/1541932606ibg-world.png",
    "https://www.fahimshakir.com/admin/upload/1541932421bismillahcharity.png",
    "https://www.fahimshakir.com/admin/upload/1541930518avanta.png",
    "https://www.fahimshakir.com/admin/upload/1541930312alejandrapoupel.png",
    "https://www.fahimshakir.com/admin/upload/1541929811versatilepremedia.png",
    "https://www.fahimshakir.com/admin/upload/1541928495interconnective.png",
    "https://www.fahimshakir.com/admin/upload/1541928280planet-herbs.png",
    "https://www.fahimshakir.com/admin/upload/1541927599astol.png",
    "https://www.fahimshakir.com/admin/upload/1605986065txgltd.png",
    "https://www.fahimshakir.com/admin/upload/1541927265whitewaterevents.png",
    "https://www.fahimshakir.com/admin/upload/1605986298radiuslog.png",
    "https://www.fahimshakir.com/admin/upload/1541791350steadysteps.png",
    "https://www.fahimshakir.com/admin/upload/1541790755neufango.png",
    "https://www.fahimshakir.com/admin/upload/1605986608bioconnexus.png",
    "https://www.fahimshakir.com/admin/upload/1683736388Screenshot%20(53).png",
    "https://www.fahimshakir.com/admin/upload/1683736004Screenshot%20(52).png",
    "https://www.fahimshakir.com/admin/upload/1683735724Screenshot%20(51).png",
    "https://www.fahimshakir.com/admin/upload/1683736004Screenshot%20(52).png",
    "https://www.fahimshakir.com/admin/upload/1683735319Screenshot%20(49).png",
    "https://www.fahimshakir.com/admin/upload/1683735161Screenshot%20(48).png",
    "https://www.fahimshakir.com/admin/upload/1683734984Screenshot%20(47).png",
    "https://www.fahimshakir.com/admin/upload/1683734669Screenshot%20(44).png",
    "https://www.fahimshakir.com/admin/upload/1683734524Screenshot%20(43).png",
    "https://www.fahimshakir.com/admin/upload/1683734459Screenshot%20(42).png",
    "https://www.fahimshakir.com/admin/upload/1683602159Screenshot%20(10).png",
    "https://www.fahimshakir.com/admin/upload/1683733447Screenshot%20(29).png",
    "https://www.fahimshakir.com/admin/upload/1683733447Screenshot%20(29).png",
    "https://www.fahimshakir.com/admin/upload/1683734009Screenshot%20(37).png",
    "https://www.fahimshakir.com/admin/upload/1683734081Screenshot%20(38).png",
    "https://www.fahimshakir.com/admin/upload/1606042972stickon.png",
    "https://www.fahimshakir.com/admin/upload/1542047830newu.png",
    "https://www.fahimshakir.com/admin/upload/1606043523skinrange.png",
    "https://www.fahimshakir.com/admin/upload/1606044062vivekflowers.png",
    "https://www.fahimshakir.com/admin/upload/1606044372xcelldirect.png",
    "https://www.fahimshakir.com/admin/upload/1542046881astrodidi.png",
    "https://www.fahimshakir.com/admin/upload/1542046737newzenx.png",
    "https://www.fahimshakir.com/admin/upload/1606044691orientbell.png",
    "https://www.fahimshakir.com/admin/upload/1683734232Screenshot%20(40).png",
    "https://www.fahimshakir.com/admin/upload/1683734314Screenshot%20(41).png",
    "https://www.fahimshakir.com/admin/upload/1542048464officeforce.png",
    "https://www.fahimshakir.com/admin/upload/1542048333superbuniforms.png",
    "https://www.fahimshakir.com/admin/upload/1683614531Screenshot%20(22).png",
    "https://www.fahimshakir.com/admin/upload/1683614383Screenshot%20(19).png",
    "https://www.fahimshakir.com/admin/upload/1683614263Screenshot%20(17).png",
    "https://www.fahimshakir.com/admin/upload/1605987827easywayportal.png",
    "https://www.fahimshakir.com/admin/upload/1542051342kingdomofcakes.png",
    "https://www.fahimshakir.com/admin/upload/1542050467nehmofindia.png",
    "https://www.fahimshakir.com/admin/upload/1683733819Screenshot%20(35).png",
    "https://www.fahimshakir.com/admin/upload/1683733888Screenshot%20(36).png",
    "https://www.fahimshakir.com/admin/upload/1605988228indiansconnect.png",
    "https://www.fahimshakir.com/admin/upload/15421268591.png",
  ];
  const cardsData = [
    {
      imageSrc: images[0],
      paragraphText: "AUTOX",
      Moreinfo: "https://www.autox.com/",
    },
    {
      imageSrc: images[1],
      paragraphText: "AGECOEARTH",
      Moreinfo: "http://www.agecoearth.com/",
    },

    {
      imageSrc: images[2],
      paragraphText: "Itieekritee",
      Moreinfo: "http://www.itieekritee.com/",
    },
    {
      imageSrc: images[3],
      paragraphText: "delhi99",
      Moreinfo: "https://www.delhi99.tv/",
    },
    {
      imageSrc: images[4],
      paragraphText: "Vsmenterprises",
      Moreinfo: "http://www.vsmenterprises.co.in/",
    },
    {
      imageSrc: images[5],
      paragraphText: "HUNTOFFICES",
      Moreinfo: "https://www.huntoffices.com/",
    },
    {
      imageSrc: images[6],
      paragraphText: "AUTOX",
      Moreinfo: "https://www.autox.com/",
    },
    {
      imageSrc: images[7],
      paragraphText: "CHAMPIONTUTOR",
      Moreinfo: "https://www.championtutor.com/",
    },
    {
      imageSrc: images[8],
      paragraphText: "GARVINTOOLS",
      Moreinfo: "https://www.garvintools.com/",
    },
    {
      imageSrc: images[9],
      paragraphText: "CAREERSTRATEGYSOLUTIONS",
      Moreinfo: "https://www.careerstrategysolutions.com/",
    },
    {
      imageSrc: images[10],
      paragraphText: "STEFAB",
      Moreinfo: "https://www.stefab.com/",
    },
    {
      imageSrc: images[11],
      paragraphText: "UNIPLAST",
      Moreinfo: "http://uniplast.us/",
    },

    {
      imageSrc: images[12],
      paragraphText: "LAXMIFLOURMILL",
      Moreinfo: "https://laxmiflourmill.com/",
    },
    {
      imageSrc: images[13],
      paragraphText: "THESTUDENTWINDOW",
      Moreinfo: "http://thestudentwindow.com/",
    },
    {
      imageSrc: images[14],
      paragraphText: "COOLBLUES",
      Moreinfo: "http://www.coolblues.co.in/",
    },
    {
      imageSrc: images[15],
      paragraphText: "RADIUSLOG",
      Moreinfo: "https://radiuslog.com/",
    },
    {
      imageSrc: images[16],
      paragraphText: "EVOLVEGARMENTS",
      Moreinfo: "https://www.evolvegarments.ae/",
    },
    {
      imageSrc: images[17],
      paragraphText: "NEUFANGO",
      Moreinfo: "http://www.neufango.com/",
    },
    {
      imageSrc: images[18],
      paragraphText: "IBG-INT",
      Moreinfo: "https://www.ibg-int.com/",
    },
    {
      imageSrc: images[19],
      paragraphText: "BISMILLAHCHARITY",
      Moreinfo: "https://bismillahcharity.org/",
    },
    {
      imageSrc: images[20],
      paragraphText: "THAKKARCLASSES",
      Moreinfo: "https://www.thakkarclasses.com/",
    },
    {
      imageSrc: images[21],
      paragraphText: "LABELLEZA",
      Moreinfo: "https://www.labelleza.co.in/",
    },
    {
      imageSrc: images[22],
      paragraphText: "GELAB",
      Moreinfo: "https://www.gelab.co.in/",
    },
    {
      imageSrc: images[23],
      paragraphText: "AMARPROJECTS",
      Moreinfo: "https://www.amarprojects.co.in/",
    },
    {
      imageSrc: images[24],
      paragraphText: "PALLETTRUCKSUK",
      Moreinfo: "https://www.pallettrucksuk.co.uk/",
    },
    {
      imageSrc: images[25],
      paragraphText: "CARZEX",
      Moreinfo: "http://www.carzex.com/",
    },
    {
      imageSrc: images[26],
      paragraphText: "PLANET-HERBS",
      Moreinfo: "https://planet-herbs.com/",
    },
    {
      imageSrc: images[27],
      paragraphText: "EVOLVEGARMENTS",
      Moreinfo: "https://www.evolvegarments.ae/",
    },
    {
      imageSrc: images[28],
      paragraphText: "LYALLPURUNIFORMS",
      Moreinfo: "https://lyallpuruniforms.com/",
    },
    {
      imageSrc: images[29],
      paragraphText: "SKINRANGE",
      Moreinfo: "https://skinrange.com/",
    },
    {
      imageSrc: images[30],
      paragraphText: "CARZEX",
      Moreinfo: "https://www.carzex.com/",
    },
    {
      imageSrc: images[31],
      paragraphText: "SIALINDIA",
      Moreinfo: "https://www.sialindia.com/",
    },

    {
      imageSrc: images[32],
      paragraphText: "IBG-WORLD",
      Moreinfo: "https://www.ibg-world.com/",
    },
    {
      imageSrc: images[33],
      paragraphText: "BISMILLAHCHARITY",
      Moreinfo: "https://bismillahcharity.org/",
    },
    {
      imageSrc: images[34],
      paragraphText: "AVANTA",
      Moreinfo: "http://www.avanta.co.in/",
    },
    {
      imageSrc: images[35],
      paragraphText: "ALEJANDRAPOUPEL",
      Moreinfo: "http://alejandrapoupel.com/",
    },
    {
      imageSrc: images[36],
      paragraphText: "VERSATILEPREMEDIA",
      Moreinfo: "https://www.versatilepremedia.com/",
    },
    {
      imageSrc: images[37],
      paragraphText: "INTERCONNECTIVE",
      Moreinfo: "http://www.interconnective.co.uk/interconnective/",
    },
    {
      imageSrc: images[38],
      paragraphText: "PLANET-HERBS",
      Moreinfo: "https://www.planet-herbs.com/",
    },
    {
      imageSrc: images[39],
      paragraphText: "ASTOL",
      Moreinfo: "http://www.astol.in/",
    },
    {
      imageSrc: images[40],
      paragraphText: "TXGLTD",
      Moreinfo: "https://txgltd.com/",
    },
    {
      imageSrc: images[41],
      paragraphText: "WHITEWATEREVENTS",
      Moreinfo: "http://www.whitewaterevents.com/",
    },
    {
      imageSrc: images[42],
      paragraphText: "RADIUSLOG",
      Moreinfo: "https://radiuslog.com/",
    },
    {
      imageSrc: images[43],
      paragraphText: "STEADYSTEPS",
      Moreinfo: "http://www.steadysteps.co.in/",
    },
    {
      imageSrc: images[44],
      paragraphText: "NEUFANGO",
      Moreinfo: "http://www.neufango.com/",
    },
    {
      imageSrc: images[45],
      paragraphText: "BIOCONNEXUS",
      Moreinfo: "https://bioconnexus.com/",
    },
    {
      imageSrc: images[46],
      paragraphText: "DEPENDABLE-TRADING",
      Moreinfo: "https://skinrange.com/",
    },
    {
      imageSrc: images[47],
      paragraphText: "PEBBLEGREY",
      Moreinfo: "https://pebblegrey.co.uk/sale",
    },

    {
      imageSrc: images[48],
      paragraphText: "PEBBLEGREY",
      Moreinfo: "https://pebblegrey.co.uk/sale",
    },
    {
      imageSrc: images[49],
      paragraphText: "PEBBLEGREY",
      Moreinfo: "https://www.pebblegrey.co.uk/",
    },
    {
      imageSrc: images[50],
      paragraphText: "DEPENDABLE-TRADING",
      Moreinfo: "https://www.dependable-trading.com/",
    },
    {
      imageSrc: images[51],
      paragraphText: "VIVEKFLOWERS",
      Moreinfo: "https://www.vivekflowers.com/",
    },

    {
      imageSrc: images[52],
      paragraphText: "MODESTFOREVER",
      Moreinfo: "https://www.modestforever.com/in/",
    },
    {
      imageSrc: images[53],
      paragraphText: "ANDAAZFASHION",
      Moreinfo: "https://www.andaazfashion.com/",
    },
    {
      imageSrc: images[54],
      paragraphText: "EVOK",
      Moreinfo: "https://www.evok.in/",
    },
    {
      imageSrc: images[55],
      paragraphText: "ISHALIFE",
      Moreinfo: "https://www.ishalife.com/in/",
    },

    {
      imageSrc: images[56],
      paragraphText: "WTRAWLEIGH",
      Moreinfo: "https://www.planet-herbs.com/",
    },
    {
      imageSrc: images[57],
      paragraphText: "WTRAWLEIGH",
      Moreinfo: "https://www.wtrawleigh.com/",
    },
    {
      imageSrc: images[58],
      paragraphText: "PUREBORN",
      Moreinfo: "https://pureborn.com/",
    },
    {
      imageSrc: images[59],
      paragraphText: "BLUSHANDBLOOM",
      Moreinfo: "https://blushandbloom.ae/",
    },
    {
      imageSrc: images[60],
      paragraphText: "COGNITIONUAE",
      Moreinfo: "https://cognitionuae.com/",
    },
    {
      imageSrc: images[61],
      paragraphText: "STICKON",
      Moreinfo: "https://www.stickon.co.in/",
    },
    {
      imageSrc: images[62],
      paragraphText: "NEWU",
      Moreinfo: "https://www.newu.in/",
    },
    {
      imageSrc: images[63],
      paragraphText: "SKINRANGE",
      Moreinfo: "https://www.skinrange.com/",
    },
    {
      imageSrc: images[64],
      paragraphText: "VIVEKFLOWERS",
      Moreinfo: "https://vivekflowers.com/english/",
    },
    {
      imageSrc: images[65],
      paragraphText: "XCELLDIRECT",
      Moreinfo: "https://xcelldirect.com/",
    },
    {
      imageSrc: images[66],
      paragraphText: "ASTRODIDI",
      Moreinfo: "https://www.astrodidi.com/",
    },
    {
      imageSrc: images[67],
      paragraphText: "NEWZENX",
      Moreinfo: "https://www.newzenx.com/",
    },
    {
      imageSrc: images[68],
      paragraphText: "ORIENTBELL",
      Moreinfo: "https://www.orientbell.com/",
    },
    {
      imageSrc: images[69],
      paragraphText: "MYIMAGINESTORE",
      Moreinfo: "https://www.myimaginestore.com/",
    },
    {
      imageSrc: images[70],
      paragraphText: "MINIKLUB",
      Moreinfo: "https://miniklub.in/",
    },
    {
      imageSrc: images[71],
      paragraphText: "OFFICEFORCE",
      Moreinfo: "https://www.officeforce.in/",
    },
    {
      imageSrc: images[72],
      paragraphText: "SUPERBUNIFORMS",
      Moreinfo: "https://www.superbuniforms.com/",
    },
    {
      imageSrc: images[73],
      paragraphText: "SUPERGLAMOUROUS",
      Moreinfo: "https://www.superglamourous.it/",
    },

    {
      imageSrc: images[74],
      paragraphText: "NEWU",
      Moreinfo: "https://www.newu.in/",
    },
    {
      imageSrc: images[75],
      paragraphText: "EQUATOR",
      Moreinfo: "https://equator.ca/",
    },


    {
      imageSrc: images[76],
      paragraphText: "EASYWAYPORTAL",
      Moreinfo: "https://www.easywayportal.com/",
    },
    {
      imageSrc: images[77],
      paragraphText: "KINGDOMOFCAKES",
      Moreinfo: "https://www.kingdomofcakes.in/",
    },
    {
      imageSrc: images[78],
      paragraphText: "NEHMOFINDIA",
      Moreinfo: "https://www.nehmofindia.org/",
    },
    {
      imageSrc: images[79],
      paragraphText: "JAP-EXPRESS",
      Moreinfo: "https://jap-express.com/",
    },
    {
      imageSrc: images[80],
      paragraphText: "SURGICALSYSTEMS",
      Moreinfo: "https://www.surgicalsystems.in/",
    },
    {
      imageSrc: images[81],
      paragraphText: "INDIANSCONNECT",
      Moreinfo:
        "https://play.google.com/store/apps/details?id=com.indiansconnect",
    },
    {
      imageSrc: images[82],
      paragraphText: "JAMA",
      Moreinfo: "https://play.google.com/store/apps/details?id=in.jama.app",
    },

  ];


  return (
    <div className="hoxx">
      {cardsData.map((card, index) => (
        <Allmain
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

export default All;
