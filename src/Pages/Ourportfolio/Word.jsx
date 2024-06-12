import React from 'react';
import '../Ourportfolio/Port.css'
import Allmain from './Allmain';
import Wordmain from './Woedmain';


const Word = () => {

  const cardsData = [
    
      {
        imageSrc: 'https://www.fahimshakir.com/admin/upload/1683736737Screenshot%20(55).png',
        paragraphText: 'RADIUSLOG',
        Moreinfo: 'https://radiuslog.com/',
        view:'admin/upload/1683736737Screenshot (55).png'
      },
      {
        imageSrc: 'https://www.fahimshakir.com/admin/upload/1683652185Screenshot%20(27).png',
        paragraphText: 'EVOLVEGARMENTS',
            Moreinfo: 'https://www.evolvegarments.ae/',
        view:'admin/upload/1683652185Screenshot (27).png'
      },
  
      {
        imageSrc: 'https://www.fahimshakir.com/admin/upload/1683652112Screenshot%20(26).png',
        paragraphText: 'NEUFANGO',
            Moreinfo: 'http://www.neufango.com/',
        view:'admin/upload/1683652112Screenshot (26).png'
      },
  
      {
        imageSrc: 'https://www.fahimshakir.com/admin/upload/1683652006Screenshot%20(25).png',
        paragraphText: 'IBG-INT',
            Moreinfo: 'https://www.ibg-int.com/',
        view:'admin/upload/1683652006Screenshot (25).png'
      },
  
      {
        imageSrc: 'https://www.fahimshakir.com/admin/upload/1683614671Screenshot%20(24).png',
        paragraphText: 'BISMILLAHCHARITY',
                Moreinfo: 'https://bismillahcharity.org/',
        view:'admin/upload/1683614671Screenshot (24).png'
      },
   
  
      {
        imageSrc: 'https://www.fahimshakir.com/admin/upload/1683614611Screenshot%20(23).png',
        paragraphText: 'THAKKARCLASSES',
           Moreinfo: 'http://lyallpuruniforms.com/',
        view:'admin/upload/1542051625lyallpuruniforms.png'
      },
  
      {
        imageSrc: 'https://www.fahimshakir.com/admin/upload/1683614112Screenshot%20(16).png',
        paragraphText: 'LABELLEZA',
           Moreinfo: 'https://www.skinrange.com/',
        view:'admin/upload/1542048011skinrange.png'
      },
  
      {
        imageSrc: 'https://www.fahimshakir.com/admin/upload/1683614001Screenshot%20(15).png',
        paragraphText: 'GELAB',
           Moreinfo: 'https://www.carzex.com/',
        view:'admin/upload/1542047607carzex.png'
      },
  
      {
        imageSrc: 'https://www.fahimshakir.com/admin/upload/1683613706Screenshot%20(13).png',
        paragraphText: 'AMARPROJECTS',
           Moreinfo: 'https://bismillahcharity.org/',
        view:'admin/upload/1541932421bismillahcharity.png'
      },
  
      {
        imageSrc: 'https://www.fahimshakir.com/admin/upload/1683613605Screenshot%20(12).png',
        paragraphText: 'PALLETTRUCKSUK',
            Moreinfo: 'http://www.avanta.co.in/',
        view:'admin/upload/1541930518avanta.png'
      },
  
      {
        imageSrc: 'https://www.fahimshakir.com/admin/upload/1683733603Screenshot%20(32).png',
        paragraphText: 'CARZEX',
           Moreinfo: 'http://alejandrapoupel.com/',
        view:'admin/upload/1541930312alejandrapoupel.png'
      },
  
      {
        imageSrc: 'https://www.fahimshakir.com/admin/upload/1683733678Screenshot%20(33).png',
        paragraphText: 'PLANET-HERBS',
            Moreinfo: 'https://www.versatilepremedia.com/',
        view:'admin/upload/1541929811versatilepremedia.png'
      },
  
      {
        imageSrc: 'https://www.fahimshakir.com/admin/upload/1542051696evolvegarments.png',
        paragraphText: 'EVOLVEGARMENTS',
          Moreinfo: 'http://www.interconnective.co.uk/interconnective/',
        view:'admin/upload/1541928495interconnective.png'
      },
  
      {
        imageSrc: 'https://www.fahimshakir.com/admin/upload/1542051625lyallpuruniforms.png',
        paragraphText: 'LYALLPURUNIFORMS',
              Moreinfo: 'http://www.astol.in/',
        view:'admin/upload/1541927599astol.png'
      },
  
      {
        imageSrc: 'https://www.fahimshakir.com/admin/upload/1542048011skinrange.png',
        paragraphText: 'SKINRANGE',
          Moreinfo: 'https://txgltd.com/',
        view:'admin/upload/1605986065txgltd.png'
      },
  
      {
        imageSrc: 'https://www.fahimshakir.com/admin/upload/1542047607carzex.png',
        paragraphText: 'CARZEX',
          Moreinfo: 'http://www.whitewaterevents.com/',
        view:'admin/upload/1541927265whitewaterevents.png'
      },
  
      {
        imageSrc: 'https://www.fahimshakir.com/admin/upload/1605984012sialindia.png',
        paragraphText: 'SIALINDIA',
          Moreinfo: 'https://radiuslog.com/',
        view:'admin/upload/1605986298radiuslog.png'
      },
  
  // 10pz
      {
        imageSrc: 'https://www.fahimshakir.com/admin/upload/1541932606ibg-world.png',
        paragraphText: 'IBG-WORLD',
            Moreinfo: ' http://www.steadysteps.co.in/',
        view:'admin/upload/1541791350steadysteps.png'
      },
  
      {
        imageSrc: 'https://www.fahimshakir.com/admin/upload/1541932421bismillahcharity.png',
        paragraphText: 'BISMILLAHCHARITY',
             Moreinfo: ' http://www.neufango.com/',
        view:'admin/upload/1541790755neufango.png'
      },
  
      {
        imageSrc: 'https://www.fahimshakir.com/admin/upload/1541930518avanta.png',
        paragraphText: 'AVANTA',
             Moreinfo: ' http://www.neufango.com/',
        view:'admin/upload/1541790755neufango.png'
      },
      {
        imageSrc: 'https://www.fahimshakir.com/admin/upload/1541930312alejandrapoupel.png',
        paragraphText: 'ALEJANDRAPOUPEL',
          Moreinfo: ' http://www.steadysteps.co.in/',
        view:'admin/upload/1541791350steadysteps.png'
      },
      {
        imageSrc: 'https://www.fahimshakir.com/admin/upload/1541929811versatilepremedia.png',
        paragraphText: 'VERSATILEPREMEDIA',
            Moreinfo: 'http://www.whitewaterevents.com/',
        view:'admin/upload/1541927265whitewaterevents.png'
      },
      {
        imageSrc: 'https://www.fahimshakir.com/admin/upload/1541928495interconnective.png',
        paragraphText: 'INTERCONNECTIVE',
               Moreinfo: 'http://www.whitewaterevents.com/',
        view:'admin/upload/1541927265whitewaterevents.png'
      },
      {
        imageSrc: 'https://www.fahimshakir.com/admin/upload/1541928280planet-herbs.png',
        paragraphText: 'PLANET-HERBS',
           Moreinfo: 'https://txgltd.com/',
        view:'admin/upload/1605986065txgltd.png'
      },
      {
        imageSrc: 'https://www.fahimshakir.com/admin/upload/1541927599astol.png',
        paragraphText: 'ASTOL',
          Moreinfo: 'http://www.interconnective.co.uk/interconnective/',
        view:'admin/upload/1541928495interconnective.png'
      },
      {
        imageSrc: 'https://www.fahimshakir.com/admin/upload/1605986065txgltd.png',
        paragraphText: 'TXGLTD',
              Moreinfo: 'http://www.interconnective.co.uk/interconnective/',
        view:'admin/upload/1541928495interconnective.png'
      },
      {
        imageSrc: 'https://www.fahimshakir.com/admin/upload/1541927265whitewaterevents.png',
        paragraphText: 'WHITEWATEREVENTS',
           Moreinfo: 'https://www.evolvegarments.ae/',
        view:'admin/upload/1683652185Screenshot (27).png'
      },
      {
        imageSrc: 'https://www.fahimshakir.com/admin/upload/1605986298radiuslog.png',
        paragraphText: 'RADIUSLOG',
          Moreinfo: 'https://radiuslog.com/',
        view:'admin/upload/1683736737Screenshot (55).png'
      },
      {
        imageSrc: 'https://www.fahimshakir.com/admin/upload/1541791350steadysteps.png',
        paragraphText: 'STEADYSTEPS',
            Moreinfo: 'https://www.carzex.com/',
        view:'admin/upload/1542047607carzex.png'
      },
      {
        imageSrc: 'https://www.fahimshakir.com/admin/upload/1541790755neufango.png',
        paragraphText: 'NEUFANGO',
          Moreinfo: 'http://alejandrapoupel.com/',
        view:'admin/upload/1541930312alejandrapoupel.png'
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
