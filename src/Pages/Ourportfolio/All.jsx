import React from 'react';
import '../Ourportfolio/Port.css'
import Allmain from './Allmain';
import "lightbox.js-react/dist/index.css";
import {SlideshowLightbox} from 'lightbox.js-react'
import "lightbox.js-react/dist/index.css";


const All = () => {
  const cardsData = [
    {
      imageSrc: 'https://www.fahimshakir.com/admin/upload/1683601241Screenshot%20(6).png',
      paragraphText: 'AUTOX',
      Moreinfo:'https://www.autox.com/',
    },
    {
        imageSrc: 'https://www.fahimshakir.com/admin/upload/1606045442agecoearth.png',
        paragraphText: 'AGECOEARTH',
        Moreinfo:'http://www.agecoearth.com/',
      },

      {
        imageSrc: 'https://www.fahimshakir.com/admin/upload/1606045233itieekritee.png',
        paragraphText: 'Itieekritee',
        Moreinfo:'http://www.itieekritee.com/',
      },
      {
        imageSrc: 'https://www.fahimshakir.com/admin/upload/1683601360Screenshot%20(7).png',
        paragraphText: 'delhi99',
        Moreinfo:'https://www.delhi99.tv/',
      },
      {
        imageSrc: 'https://www.fahimshakir.com/admin/upload/1605981376vsmenterprises.png',
        paragraphText: 'Vsmenterprises',
        Moreinfo:'http://www.vsmenterprises.co.in/',
      },
      {
        imageSrc: 'https://www.fahimshakir.com/admin/upload/1541931008huntoffices.png',
        paragraphText: 'HUNTOFFICES',
        Moreinfo:'https://www.huntoffices.com/',
        view:'admin/upload/1541931008huntoffices.png',
      },
      {
        imageSrc: 'https://www.fahimshakir.com/admin/upload/1541790566autox.png',
        paragraphText: 'AUTOX',
        Moreinfo:'https://www.autox.com/',
      },
      {
        imageSrc: 'https://www.fahimshakir.com/admin/upload/1541790177championtutor.png',
        paragraphText: 'CHAMPIONTUTOR',
        Moreinfo:'https://www.championtutor.com/',
      },
      {
        imageSrc: 'https://www.fahimshakir.com/admin/upload/1541789827garvintools.png',
        paragraphText: 'GARVINTOOLS',
        Moreinfo:'https://www.careerstrategysolutions.com/',
      },
      {
        imageSrc: 'https://www.fahimshakir.com/admin/upload/1541789621careerstrategysolutions.png',
        paragraphText: 'CAREERSTRATEGYSOLUTIONS',
        Moreinfo:'https://www.stefab.com/',
      },
      {
        imageSrc: 'https://www.fahimshakir.com/admin/upload/1605981640stefab.png',
        paragraphText: 'STEFAB',
        Moreinfo:'http://uniplast.us/',
      },
      {
        imageSrc: 'https://www.fahimshakir.com/admin/upload/1541788854uniplast.png',
        paragraphText: 'UNIPLAST',
        Moreinfo:'https://www.laxmiflourmill.com/',
      },

      {
        imageSrc: 'https://www.fahimshakir.com/admin/upload/1605982470laxmiflourmill.png',
        paragraphText: 'LAXMIFLOURMILL',
        Moreinfo:'http://thestudentwindow.com/',
      },
      {
        imageSrc: 'https://www.fahimshakir.com/admin/upload/1538244974Thestudentwindow.png',
        paragraphText: 'THESTUDENTWINDOW',
        Moreinfo:'http://www.coolblues.co.in/',
      },
      {
        imageSrc: 'https://www.fahimshakir.com/admin/upload/15382447045.jpg',
        paragraphText: 'COOLBLUES',
        Moreinfo:'https://radiuslog.com/',
      },
      {
        imageSrc: 'https://www.fahimshakir.com/admin/upload/1683736737Screenshot%20(55).png',
        paragraphText: 'RADIUSLOG',
        Moreinfo:'https://www.evolvegarments.ae/',
      },
      {
        imageSrc: 'https://www.fahimshakir.com/admin/upload/1683652185Screenshot%20(27).png',
        paragraphText: 'EVOLVEGARMENTS',
        Moreinfo:'https://www.evolvegarments.ae/',
      },
      {
        imageSrc: 'https://www.fahimshakir.com/admin/upload/1683652112Screenshot%20(26).png',
        paragraphText: 'NEUFANGO',
        Moreinfo:'http://www.neufango.com/',
      },
      {
        imageSrc: 'https://www.fahimshakir.com/admin/upload/1683652006Screenshot%20(25).png',
        paragraphText: 'IBG-INT',
        Moreinfo:'https://www.ibg-int.com/',
      },
      {
        imageSrc: 'https://www.fahimshakir.com/admin/upload/1683614671Screenshot%20(24).png',
        paragraphText: 'BISMILLAHCHARITY',
        Moreinfo:'https://bismillahcharity.org/',
      },
      {
        imageSrc: 'https://www.fahimshakir.com/admin/upload/1683614611Screenshot%20(23).png',
        paragraphText: 'THAKKARCLASSES',
        Moreinfo:'https://www.thakkarclasses.com/',
      },
      {
        imageSrc: 'https://www.fahimshakir.com/admin/upload/1683614112Screenshot%20(16).png',
        paragraphText: 'LABELLEZA',
        Moreinfo:'https://www.labelleza.co.in/',
      },
      {
        imageSrc: 'https://www.fahimshakir.com/admin/upload/1683614001Screenshot%20(15).png',
        paragraphText: 'GELAB',
        Moreinfo:'https://www.gelab.co.in/',
      },
      {
        imageSrc: 'https://www.fahimshakir.com/admin/upload/1683613706Screenshot%20(13).png',
        paragraphText: 'AMARPROJECTS',
        Moreinfo:'https://www.amarprojects.co.in/',
      },
      {
        imageSrc: 'https://www.fahimshakir.com/admin/upload/1683613605Screenshot%20(12).png',
        paragraphText: 'PALLETTRUCKSUK',
        Moreinfo:'https://www.pallettrucksuk.co.uk/',
      },
      {
        imageSrc: 'https://www.fahimshakir.com/admin/upload/1683733603Screenshot%20(32).png',
        paragraphText: 'CARZEX',
        Moreinfo:'http://www.carzex.com/',
      },
      {
        imageSrc: 'https://www.fahimshakir.com/admin/upload/1683733678Screenshot%20(33).png',
        paragraphText: 'PLANET-HERBS',
        Moreinfo:'http://www.evolvegarments.ae/',
      },
      {
        imageSrc: 'https://www.fahimshakir.com/admin/upload/1542051696evolvegarments.png',
        paragraphText: 'EVOLVEGARMENTS',
        Moreinfo:'http://lyallpuruniforms.com/',
      },
      {
        imageSrc: 'https://www.fahimshakir.com/admin/upload/1542051625lyallpuruniforms.png',
        paragraphText: 'LYALLPURUNIFORMS',
        Moreinfo:'https://www.skinrange.com/',
      },
      {
        imageSrc: 'https://www.fahimshakir.com/admin/upload/1542048011skinrange.png',
        paragraphText: 'SKINRANGE',
        Moreinfo:'https://www.carzex.com/',
      },
      {
        imageSrc: 'https://www.fahimshakir.com/admin/upload/1542047607carzex.png',
        paragraphText: 'CARZEX',
        Moreinfo:'https://www.carzex.com/',
      },
      {
        imageSrc: 'https://www.fahimshakir.com/admin/upload/1605984012sialindia.png',
        paragraphText: 'SIALINDIA',
        Moreinfo:'https://www.sialindia.com/',
      },
// 10pz
      {
        imageSrc: 'https://www.fahimshakir.com/admin/upload/1541932606ibg-world.png',
        paragraphText: 'IBG-WORLD',
        Moreinfo:'https://www.ibg-world.com/',
      },
      {
        imageSrc: 'https://www.fahimshakir.com/admin/upload/1541932421bismillahcharity.png',
        paragraphText: 'BISMILLAHCHARITY',
        Moreinfo:'https://bismillahcharity.org/',
      },
      {
        imageSrc: 'https://www.fahimshakir.com/admin/upload/1541930518avanta.png',
        paragraphText: 'AVANTA',
        Moreinfo:'http://www.avanta.co.in/',
      },
      {
        imageSrc: 'https://www.fahimshakir.com/admin/upload/1541930312alejandrapoupel.png',
        paragraphText: 'ALEJANDRAPOUPEL',
        Moreinfo:'http://alejandrapoupel.com/',
      },
      {
        imageSrc: 'https://www.fahimshakir.com/admin/upload/1541929811versatilepremedia.png',
        paragraphText: 'VERSATILEPREMEDIA',
        Moreinfo:'https://www.versatilepremedia.com/',
      },
      {
        imageSrc: 'https://www.fahimshakir.com/admin/upload/1541928495interconnective.png',
        paragraphText: 'INTERCONNECTIVE',
        Moreinfo:'http://www.interconnective.co.uk/interconnective/',
      },
      {
        imageSrc: 'https://www.fahimshakir.com/admin/upload/1541928280planet-herbs.png',
        paragraphText: 'PLANET-HERBS',
        Moreinfo:'https://www.planet-herbs.com/',
      },
      {
        imageSrc: 'https://www.fahimshakir.com/admin/upload/1541927599astol.png',
        paragraphText: 'ASTOL',
        Moreinfo:'http://www.astol.in/',
      },
      {
        imageSrc: 'https://www.fahimshakir.com/admin/upload/1605986065txgltd.png',
        paragraphText: 'TXGLTD',
        Moreinfo:'https://txgltd.com/',
      },
      {
        imageSrc: 'https://www.fahimshakir.com/admin/upload/1541927265whitewaterevents.png',
        paragraphText: 'WHITEWATEREVENTS',
        Moreinfo:'http://www.whitewaterevents.com/',
      },
      {
        imageSrc: 'https://www.fahimshakir.com/admin/upload/1605986298radiuslog.png',
        paragraphText: 'RADIUSLOG',
        Moreinfo:'http://www.whitewaterevents.com/',
      },
      {
        imageSrc: 'https://www.fahimshakir.com/admin/upload/1541791350steadysteps.png',
        paragraphText: 'STEADYSTEPS',
        Moreinfo:'https://radiuslog.com/',
      },
      {
        imageSrc: 'https://www.fahimshakir.com/admin/upload/1541790755neufango.png',
        paragraphText: 'NEUFANGO',
        Moreinfo:'http://www.steadysteps.co.in',
      },
      {
        imageSrc: 'https://www.fahimshakir.com/admin/upload/1605986608bioconnexus.png',
        paragraphText: 'BIOCONNEXUS',
        Moreinfo:'http://www.neufango.com/',
      },
      {
        imageSrc: 'https://www.fahimshakir.com/admin/upload/1683736388Screenshot%20(53).png',
        paragraphText: 'DEPENDABLE-TRADING',
        Moreinfo:'https://skinrange.com/',
      },
      {
        imageSrc: 'https://www.fahimshakir.com/admin/upload/1683736004Screenshot%20(52).png',
        paragraphText: 'PEBBLEGREY',
        Moreinfo:'https://pebblegrey.co.uk/sale',

      },
// 42
      {
        imageSrc: 'https://www.fahimshakir.com/admin/upload/1683735724Screenshot%20(51).png',
        paragraphText: 'PEBBLEGREY',
        Moreinfo:'https://pebblegrey.co.uk/sale',
      },
      {
        imageSrc: 'https://www.fahimshakir.com/admin/upload/1683736004Screenshot%20(52).png',
        paragraphText: 'PEBBLEGREY',
        Moreinfo:'https://pebblegrey.co.uk/sale',
      },
      {
        imageSrc: 'https://www.fahimshakir.com/admin/upload/1683735319Screenshot%20(49).png',
        paragraphText: 'DEPENDABLE-TRADING',
        Moreinfo:'https://www.dependable-trading.com/',
      },
      {
        imageSrc: 'https://www.fahimshakir.com/admin/upload/1683735161Screenshot%20(48).png',
        paragraphText: 'VIVEKFLOWERS',
        Moreinfo:'https://www.vivekflowers.com/',
      },

      {
        imageSrc: 'https://www.fahimshakir.com/admin/upload/1683734984Screenshot%20(47).png',
        paragraphText: 'MODESTFOREVER',
        Moreinfo:'https://www.modestforever.com/in/',
      },
      {
        imageSrc: 'https://www.fahimshakir.com/admin/upload/1683734669Screenshot%20(44).png',
        paragraphText: 'ANDAAZFASHION',
        Moreinfo:'https://www.andaazfashion.com/',
      },
      {
        imageSrc: 'https://www.fahimshakir.com/admin/upload/1683734524Screenshot%20(43).png',
        paragraphText: 'EVOK',
        Moreinfo:'https://www.evok.in/',
      },
      {
        imageSrc: 'https://www.fahimshakir.com/admin/upload/1683734459Screenshot%20(42).png',
        paragraphText: 'ISHALIFE',
        Moreinfo:'https://www.ishalife.com/in/',
      },

      {
        imageSrc: 'https://www.fahimshakir.com/admin/upload/1683602159Screenshot%20(10).png',
        paragraphText: 'WTRAWLEIGH',
        Moreinfo:'https://www.planet-herbs.com/',
      },
      {
        imageSrc: 'https://www.fahimshakir.com/admin/upload/1683733447Screenshot%20(29).png',
        paragraphText: 'WTRAWLEIGH',
        Moreinfo:'https://www.wtrawleigh.com/',
      },
      {
        imageSrc: 'https://www.fahimshakir.com/admin/upload/1683733447Screenshot%20(29).png',
        paragraphText: 'PUREBORN',
        Moreinfo:'https://pureborn.com/',
      },
      {
        imageSrc: 'https://www.fahimshakir.com/admin/upload/1683734009Screenshot%20(37).png',
        paragraphText: 'BLUSHANDBLOOM',
        Moreinfo:'https://blushandbloom.ae/',
      },


      {
        imageSrc: 'https://www.fahimshakir.com/admin/upload/1683734081Screenshot%20(38).png',
        paragraphText: 'COGNITIONUAE',
        Moreinfo:'https://cognitionuae.com/',
      },
      {
        imageSrc: 'https://www.fahimshakir.com/admin/upload/1606042972stickon.png',
        paragraphText: 'STICKON',
        Moreinfo:'https://www.stickon.co.in/',
      },
      {
        imageSrc: 'https://www.fahimshakir.com/admin/upload/1542047830newu.png',
        paragraphText: 'NEWU',
        Moreinfo:'https://www.newu.in/',
      },
      {
        imageSrc: 'https://www.fahimshakir.com/admin/upload/1606043523skinrange.png',
        paragraphText: 'SKINRANGE',
        Moreinfo:'https://www.skinrange.com/',
      },
      {
        imageSrc: 'https://www.fahimshakir.com/admin/upload/1606044062vivekflowers.png',
        paragraphText: 'VIVEKFLOWERS',
        Moreinfo:'https://vivekflowers.com/english/',
      },
      {
        imageSrc: 'https://www.fahimshakir.com/admin/upload/1606044372xcelldirect.png',
        paragraphText: 'XCELLDIRECT',
        Moreinfo:'https://xcelldirect.com/',
      },
      {
        imageSrc: 'https://www.fahimshakir.com/admin/upload/1542046881astrodidi.png',
        paragraphText: 'ASTRODIDI',
        Moreinfo:'https://www.astrodidi.com/',
      },
      {
        imageSrc: 'https://www.fahimshakir.com/admin/upload/1542046737newzenx.png',
        paragraphText: 'NEWZENX',
        Moreinfo:'https://www.newzenx.com/',
      },


      {
        imageSrc: 'https://www.fahimshakir.com/admin/upload/1606044691orientbell.png',
        paragraphText: 'ORIENTBELL',
        Moreinfo:'http://www.neufango.com/',
      },
      {
        imageSrc: 'https://www.fahimshakir.com/admin/upload/1683734232Screenshot%20(40).png',
        paragraphText: 'MYIMAGINESTORE',
        Moreinfo:'https://bioconnexus.com/',
      },
      {
        imageSrc: 'https://www.fahimshakir.com/admin/upload/1683734314Screenshot%20(41).png',
        paragraphText: 'MINIKLUB',
        Moreinfo:'https://skinrange.com/',
      },
      {
        imageSrc: 'https://www.fahimshakir.com/admin/upload/1542048464officeforce.png',
        paragraphText: 'OFFICEFORCE',
        Moreinfo:'https://skinrange.com/',
      },
      {
        imageSrc: 'https://www.fahimshakir.com/admin/upload/1542048333superbuniforms.png',
        paragraphText: 'SUPERBUNIFORMS',
        Moreinfo:'https://www.superbuniforms.com/',
      },
      {
        imageSrc: 'https://www.fahimshakir.com/admin/upload/1683614531Screenshot%20(22).png',
        paragraphText: 'SUPERGLAMOUROUS',
        Moreinfo:'https://www.superglamourous.it/',
      },
      {
        imageSrc: 'https://www.fahimshakir.com/admin/upload/1683614383Screenshot%20(19).png',
        paragraphText: 'NEWU',
        Moreinfo:'https://www.newu.in/',
      },
      {
        imageSrc: 'https://www.fahimshakir.com/admin/upload/1683614263Screenshot%20(17).png',
        paragraphText: 'EQUATOR',
        Moreinfo:'https://equator.ca/',
      },



      {
        imageSrc: 'https://www.fahimshakir.com/admin/upload/1605987827easywayportal.png',
        paragraphText: 'EASYWAYPORTAL',
        Moreinfo:'https://www.gkhair.co.in/',
      },
      {
        imageSrc: 'https://www.fahimshakir.com/admin/upload/1542051342kingdomofcakes.png',
        paragraphText: 'KINGDOMOFCAKES',
        Moreinfo:'https://www.planet-herbs.com/',
      },
      {
        imageSrc: 'https://www.fahimshakir.com/admin/upload/1542050467nehmofindia.png',
        paragraphText: 'NEHMOFINDIA',
        Moreinfo:'https://www.superglamourous.it/',
      },
      {
        imageSrc: 'https://www.fahimshakir.com/admin/upload/1683733819Screenshot%20(35).png',
        paragraphText: 'JAP-EXPRESS',
        Moreinfo:'http://tasshs.com/',
      },
      {
        imageSrc: 'https://www.fahimshakir.com/admin/upload/1683733888Screenshot%20(36).png',
        paragraphText: 'SURGICALSYSTEMS',
        Moreinfo:'https://www.surgicalsystems.in/',
      },
      {
        imageSrc: 'https://www.fahimshakir.com/admin/upload/1605988228indiansconnect.png',
        paragraphText: 'INDIANSCONNECT',
        Moreinfo:'https://play.google.com/store/apps/details?id=com.indiansconnect',
      },
      {
        imageSrc: 'https://www.fahimshakir.com/admin/upload/15421268591.png',
        paragraphText: 'JAMA',
        Moreinfo:'https://play.google.com/store/apps/details?id=in.jama.app'
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
          view={card.view}npm install react-image-lightbox

        />
      ))}
    
    </div>

  );
};




export default All;





