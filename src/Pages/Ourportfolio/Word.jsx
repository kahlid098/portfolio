import React from 'react';
import '../Ourportfolio/Port.css'
import Allmain from './Allmain';
import Wordmain from './Woedmain';


const Word = () => {
  const cardsData = [
  
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

  ];


  return (
    <div className='hoxx'>
      {cardsData.map((card, index) => (
        <Wordmain
          key={index}
          imageSrc={card.imageSrc}
          paragraphText={card.paragraphText}
        />
      ))}
    </div>
  );
};




export default Word;
