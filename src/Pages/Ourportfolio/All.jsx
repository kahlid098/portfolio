import React from 'react';
import '../Ourportfolio/Port.css'
import Allmain from './Allmain';


const All = () => {
  const cardsData = [
    {
      imageSrc: 'https://www.fahimshakir.com/admin/upload/1683601241Screenshot%20(6).png',
      paragraphText: 'AUTOX',
      Moreinfo:'https://www.autox.com/',
      view:'admin/upload/1683601241Screenshot (6).png',
    },
    {
        imageSrc: 'https://www.fahimshakir.com/admin/upload/1606045442agecoearth.png',
        paragraphText: 'AGECOEARTH',
      },
      {
        imageSrc: 'https://www.fahimshakir.com/admin/upload/1606045233itieekritee.png',
        paragraphText: 'Itieekritee',
      },
      {
        imageSrc: 'https://www.fahimshakir.com/admin/upload/1683601360Screenshot%20(7).png',
        paragraphText: 'delhi99',
      },
      {
        imageSrc: 'https://www.fahimshakir.com/admin/upload/1605981376vsmenterprises.png',
        paragraphText: 'Vsmenterprises',
      },
      {
        imageSrc: 'https://www.fahimshakir.com/admin/upload/1541931008huntoffices.png',
        paragraphText: 'HUNTOFFICES',
      },
      {
        imageSrc: 'https://www.fahimshakir.com/admin/upload/1541790566autox.png',
        paragraphText: 'AUTOX',
      },
      {
        imageSrc: 'https://www.fahimshakir.com/admin/upload/1541790177championtutor.png',
        paragraphText: 'CHAMPIONTUTOR',
      },
      {
        imageSrc: 'https://www.fahimshakir.com/admin/upload/1541789827garvintools.png',
        paragraphText: 'GARVINTOOLS',
      },
      {
        imageSrc: 'https://www.fahimshakir.com/admin/upload/1541789621careerstrategysolutions.png',
        paragraphText: 'CAREERSTRATEGYSOLUTIONS',
      },
      {
        imageSrc: 'https://www.fahimshakir.com/admin/upload/1605981640stefab.png',
        paragraphText: 'STEFAB',
      },
      {
        imageSrc: 'https://www.fahimshakir.com/admin/upload/1541788854uniplast.png',
        paragraphText: 'UNIPLAST',
      },

      {
        imageSrc: 'https://www.fahimshakir.com/admin/upload/1605982470laxmiflourmill.png',
        paragraphText: 'LAXMIFLOURMILL',
      },
      {
        imageSrc: 'https://www.fahimshakir.com/admin/upload/1538244974Thestudentwindow.png',
        paragraphText: 'THESTUDENTWINDOW',
      },
      {
        imageSrc: 'https://www.fahimshakir.com/admin/upload/15382447045.jpg',
        paragraphText: 'COOLBLUES',
      },
      {
        imageSrc: 'https://www.fahimshakir.com/admin/upload/1683736737Screenshot%20(55).png',
        paragraphText: 'RADIUSLOG',
      },
      {
        imageSrc: 'https://www.fahimshakir.com/admin/upload/1683652185Screenshot%20(27).png',
        paragraphText: 'EVOLVEGARMENTS',
      },
      {
        imageSrc: 'https://www.fahimshakir.com/admin/upload/1683652112Screenshot%20(26).png',
        paragraphText: 'NEUFANGO',
      },
      {
        imageSrc: 'https://www.fahimshakir.com/admin/upload/1683652006Screenshot%20(25).png',
        paragraphText: 'IBG-INT',
      },
      {
        imageSrc: 'https://www.fahimshakir.com/admin/upload/1683614671Screenshot%20(24).png',
        paragraphText: 'BISMILLAHCHARITY',
      },
      {
        imageSrc: 'https://www.fahimshakir.com/admin/upload/1683614611Screenshot%20(23).png',
        paragraphText: 'THAKKARCLASSES',
      },
      {
        imageSrc: 'https://www.fahimshakir.com/admin/upload/1683614112Screenshot%20(16).png',
        paragraphText: 'LABELLEZA',
      },
      {
        imageSrc: 'https://www.fahimshakir.com/admin/upload/1683614001Screenshot%20(15).png',
        paragraphText: 'GELAB',
      },
      {
        imageSrc: 'https://www.fahimshakir.com/admin/upload/1683613706Screenshot%20(13).png',
        paragraphText: 'AMARPROJECTS',
      },
      {
        imageSrc: 'https://www.fahimshakir.com/admin/upload/1683613605Screenshot%20(12).png',
        paragraphText: 'PALLETTRUCKSUK',
      },
      {
        imageSrc: 'https://www.fahimshakir.com/admin/upload/1683733603Screenshot%20(32).png',
        paragraphText: 'CARZEX',
      },
      {
        imageSrc: 'https://www.fahimshakir.com/admin/upload/1683733678Screenshot%20(33).png',
        paragraphText: 'PLANET-HERBS',
      },
      {
        imageSrc: 'https://www.fahimshakir.com/admin/upload/1542051696evolvegarments.png',
        paragraphText: 'EVOLVEGARMENTS',
      },
      {
        imageSrc: 'https://www.fahimshakir.com/admin/upload/1542051625lyallpuruniforms.png',
        paragraphText: 'LYALLPURUNIFORMS',
      },
      {
        imageSrc: 'https://www.fahimshakir.com/admin/upload/1542048011skinrange.png',
        paragraphText: 'SKINRANGE',
      },
      {
        imageSrc: 'https://www.fahimshakir.com/admin/upload/1542047607carzex.png',
        paragraphText: 'CARZEX',
      },
      {
        imageSrc: 'https://www.fahimshakir.com/admin/upload/1605984012sialindia.png',
        paragraphText: 'SIALINDIA',
      },
// 10pz
      {
        imageSrc: 'https://www.fahimshakir.com/admin/upload/1541932606ibg-world.png',
        paragraphText: 'IBG-WORLD',
      },
      {
        imageSrc: 'https://www.fahimshakir.com/admin/upload/1541932421bismillahcharity.png',
        paragraphText: 'BISMILLAHCHARITY',
      },
      {
        imageSrc: 'https://www.fahimshakir.com/admin/upload/1541930518avanta.png',
        paragraphText: 'AVANTA',
      },
      {
        imageSrc: 'https://www.fahimshakir.com/admin/upload/1541930312alejandrapoupel.png',
        paragraphText: 'ALEJANDRAPOUPEL',
      },
      {
        imageSrc: 'https://www.fahimshakir.com/admin/upload/1541929811versatilepremedia.png',
        paragraphText: 'VERSATILEPREMEDIA',
      },
      {
        imageSrc: 'https://www.fahimshakir.com/admin/upload/1541928495interconnective.png',
        paragraphText: 'INTERCONNECTIVE',
      },
      {
        imageSrc: 'https://www.fahimshakir.com/admin/upload/1541928280planet-herbs.png',
        paragraphText: 'PLANET-HERBS',
      },
      {
        imageSrc: 'https://www.fahimshakir.com/admin/upload/1541927599astol.png',
        paragraphText: 'ASTOL',
      },
      {
        imageSrc: 'https://www.fahimshakir.com/admin/upload/1605986065txgltd.png',
        paragraphText: 'TXGLTD',
      },
      {
        imageSrc: 'https://www.fahimshakir.com/admin/upload/1541927265whitewaterevents.png',
        paragraphText: 'WHITEWATEREVENTS',
      },
      {
        imageSrc: 'https://www.fahimshakir.com/admin/upload/1605986298radiuslog.png',
        paragraphText: 'RADIUSLOG',
      },
      {
        imageSrc: 'https://www.fahimshakir.com/admin/upload/1541791350steadysteps.png',
        paragraphText: 'STEADYSTEPS',
      },
      {
        imageSrc: 'https://www.fahimshakir.com/admin/upload/1541790755neufango.png',
        paragraphText: 'NEUFANGO',
      },
      {
        imageSrc: 'https://www.fahimshakir.com/admin/upload/1605986608bioconnexus.png',
        paragraphText: 'BIOCONNEXUS',
      },
      {
        imageSrc: 'https://www.fahimshakir.com/admin/upload/1683736388Screenshot%20(53).png',
        paragraphText: 'DEPENDABLE-TRADING',
      },
      {
        imageSrc: 'https://www.fahimshakir.com/admin/upload/1683736004Screenshot%20(52).png',
        paragraphText: 'PEBBLEGREY',
      },
// 42
      {
        imageSrc: 'https://www.fahimshakir.com/admin/upload/1683735724Screenshot%20(51).png',
        paragraphText: 'PEBBLEGREY',
      },
      {
        imageSrc: 'https://www.fahimshakir.com/admin/upload/1683736004Screenshot%20(52).png',
        paragraphText: 'PEBBLEGREY',
      },
      {
        imageSrc: 'https://www.fahimshakir.com/admin/upload/1683735319Screenshot%20(49).png',
        paragraphText: 'DEPENDABLE-TRADING',
      },
      {
        imageSrc: 'https://www.fahimshakir.com/admin/upload/1683735161Screenshot%20(48).png',
        paragraphText: 'VIVEKFLOWERS',
      },

      {
        imageSrc: 'https://www.fahimshakir.com/admin/upload/1683734984Screenshot%20(47).png',
        paragraphText: 'MODESTFOREVER',
      },
      {
        imageSrc: 'https://www.fahimshakir.com/admin/upload/1683734669Screenshot%20(44).png',
        paragraphText: 'ANDAAZFASHION',
      },
      {
        imageSrc: 'https://www.fahimshakir.com/admin/upload/1683734524Screenshot%20(43).png',
        paragraphText: 'EVOK',
      },
      {
        imageSrc: 'https://www.fahimshakir.com/admin/upload/1683734459Screenshot%20(42).png',
        paragraphText: 'ISHALIFE',
      },

      {
        imageSrc: 'https://www.fahimshakir.com/admin/upload/1683602159Screenshot%20(10).png',
        paragraphText: 'WTRAWLEIGH',
      },
      {
        imageSrc: 'https://www.fahimshakir.com/admin/upload/1683733447Screenshot%20(29).png',
        paragraphText: 'WTRAWLEIGH',
      },
      {
        imageSrc: 'https://www.fahimshakir.com/admin/upload/1683733447Screenshot%20(29).png',
        paragraphText: 'PUREBORN',
      },
      {
        imageSrc: 'https://www.fahimshakir.com/admin/upload/1683734009Screenshot%20(37).png',
        paragraphText: 'BLUSHANDBLOOM',
      },


      {
        imageSrc: 'https://www.fahimshakir.com/admin/upload/1683734081Screenshot%20(38).png',
        paragraphText: 'COGNITIONUAE',
      },
      {
        imageSrc: 'https://www.fahimshakir.com/admin/upload/1606042972stickon.png',
        paragraphText: 'STICKON',
      },
      {
        imageSrc: 'https://www.fahimshakir.com/admin/upload/1542047830newu.png',
        paragraphText: 'NEWU',
      },
      {
        imageSrc: 'https://www.fahimshakir.com/admin/upload/1606043523skinrange.png',
        paragraphText: 'SKINRANGE',
      },
      {
        imageSrc: 'https://www.fahimshakir.com/admin/upload/1606044062vivekflowers.png',
        paragraphText: 'VIVEKFLOWERS',
      },
      {
        imageSrc: 'https://www.fahimshakir.com/admin/upload/1606044372xcelldirect.png',
        paragraphText: 'XCELLDIRECT',
      },
      {
        imageSrc: 'https://www.fahimshakir.com/admin/upload/1542046881astrodidi.png',
        paragraphText: 'ASTRODIDI',
      },
      {
        imageSrc: 'https://www.fahimshakir.com/admin/upload/1542046737newzenx.png',
        paragraphText: 'NEWZENX',
      },


      {
        imageSrc: 'https://www.fahimshakir.com/admin/upload/1606044691orientbell.png',
        paragraphText: 'ORIENTBELL',
      },
      {
        imageSrc: 'https://www.fahimshakir.com/admin/upload/1683734232Screenshot%20(40).png',
        paragraphText: 'MYIMAGINESTORE',
      },
      {
        imageSrc: 'https://www.fahimshakir.com/admin/upload/1683734314Screenshot%20(41).png',
        paragraphText: 'MINIKLUB',
      },
      {
        imageSrc: 'https://www.fahimshakir.com/admin/upload/1542048464officeforce.png',
        paragraphText: 'OFFICEFORCE',
      },
      {
        imageSrc: 'https://www.fahimshakir.com/admin/upload/1542048333superbuniforms.png',
        paragraphText: 'SUPERBUNIFORMS',
      },
      {
        imageSrc: 'https://www.fahimshakir.com/admin/upload/1683614531Screenshot%20(22).png',
        paragraphText: 'SUPERGLAMOUROUS',
      },
      {
        imageSrc: 'https://www.fahimshakir.com/admin/upload/1683614383Screenshot%20(19).png',
        paragraphText: 'NEWU',
      },
      {
        imageSrc: 'https://www.fahimshakir.com/admin/upload/1683614263Screenshot%20(17).png',
        paragraphText: 'EQUATOR',
      },



      {
        imageSrc: 'https://www.fahimshakir.com/admin/upload/1605987827easywayportal.png',
        paragraphText: 'EASYWAYPORTAL',
      },
      {
        imageSrc: 'https://www.fahimshakir.com/admin/upload/1542051342kingdomofcakes.png',
        paragraphText: 'KINGDOMOFCAKES',
      },
      {
        imageSrc: 'https://www.fahimshakir.com/admin/upload/1542050467nehmofindia.png',
        paragraphText: 'NEHMOFINDIA',
      },
      {
        imageSrc: 'https://www.fahimshakir.com/admin/upload/1683733819Screenshot%20(35).png',
        paragraphText: 'JAP-EXPRESS',
      },
      {
        imageSrc: 'https://www.fahimshakir.com/admin/upload/1683733888Screenshot%20(36).png',
        paragraphText: 'SURGICALSYSTEMS',
      },
      {
        imageSrc: 'https://www.fahimshakir.com/admin/upload/1605988228indiansconnect.png',
        paragraphText: 'INDIANSCONNECT',
      },
      {
        imageSrc: 'https://www.fahimshakir.com/admin/upload/15421268591.png',
        paragraphText: 'JAMA',
      },

  ];


  return (
    <div className='hoxx'>
      {cardsData.map((card, index) => (
        <Allmain
          key={index}
          imageSrc={card.imageSrc}
          paragraphText={card.paragraphText}
          Moreinfo={card.Moreinfo}
          view={card.view}
        />
      ))}
    </div>
  );
};




export default All;
