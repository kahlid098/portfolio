import React from 'react';
import '../Ourportfolio/Port.css'
import Magmain from './Magmain';


const Mag = () => {
  const cardsData = [
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

  ];


  return (
    <div className='hoxx'>
      {cardsData.map((card, index) => (
        <Magmain
          key={index}
          imageSrc={card.imageSrc}
          paragraphText={card.paragraphText}
        />
      ))}
    </div>
  );
};




export default Mag;
