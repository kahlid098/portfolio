import React from 'react';
import '../Ourportfolio/Port.css'
import Phpmain from './Phpmain';


const Php = () => {
  const cardsData = [
    {
      imageSrc: 'https://www.fahimshakir.com/admin/upload/1683601241Screenshot%20(6).png',
      paragraphText: 'AUTOX',
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

  ];


  return (
    <div className='hoxx'>
      {cardsData.map((card, index) => (
        <Phpmain
          key={index}
          imageSrc={card.imageSrc}
          paragraphText={card.paragraphText}
        />
      ))}
    </div>
  );
};




export default Php;
