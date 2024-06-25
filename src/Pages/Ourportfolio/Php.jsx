import React from 'react';
import '../Ourportfolio/Port.css'
import Phpmain from './Phpmain';


const Php = () => {
  const images = [
    "https://www.fahimshakir.com/admin/upload/1683601241Screenshot%20(6).png",// <--1-->
    "https://www.fahimshakir.com/admin/upload/1606045442agecoearth.png",// <--2-->
    "https://www.fahimshakir.com/admin/upload/1606045233itieekritee.png",// <--3-->
    "https://www.fahimshakir.com/admin/upload/1683601360Screenshot%20(7).png",// <--4-->
    "https://www.fahimshakir.com/admin/upload/1605981376vsmenterprises.png",// <--5-->
    "https://www.fahimshakir.com/admin/upload/1541931008huntoffices.png",// <--6-->
    "https://www.fahimshakir.com/admin/upload/1541790566autox.png",// <--7-->
    "https://www.fahimshakir.com/admin/upload/1541790177championtutor.png",// <--8-->
    "https://www.fahimshakir.com/admin/upload/1541789827garvintools.png",// <--9-->
    "https://www.fahimshakir.com/admin/upload/1541789621careerstrategysolutions.png",// <--10-->
    "https://www.fahimshakir.com/admin/upload/1605981640stefab.png",// <--11-->
    "https://www.fahimshakir.com/admin/upload/1541788854uniplast.png",// <--12-->
    "https://www.fahimshakir.com/admin/upload/1605982470laxmiflourmill.png",// <--13-->
    "https://www.fahimshakir.com/admin/upload/1538244974Thestudentwindow.png",// <--14-->
    "https://www.fahimshakir.com/admin/upload/15382447045.jpg",// <--15-->
  ]
  const cardsData = [
    {
      imageSrc: images[0],
      paragraphText: 'AUTOX',
      Moreinfo: "https://www.autox.com/",
    },
    {
      imageSrc: images[1],
        paragraphText: 'AGECOEARTH',
        Moreinfo: "http://www.agecoearth.com/",
      },
      {
        imageSrc: images[2],
        paragraphText: 'Itieekritee',
        Moreinfo: "http://www.itieekritee.com/",
      },
      {
        imageSrc: images[3],
        paragraphText: 'delhi99',
        Moreinfo: "https://www.delhi99.tv/",
      },
      {
        imageSrc: images[4],
        paragraphText: 'Vsmenterprises',
        Moreinfo: "http://www.vsmenterprises.co.in/",
      },
      {
        imageSrc: images[5],
        paragraphText: 'HUNTOFFICES',
        Moreinfo: "https://www.huntoffices.com/",
      },
      {
        imageSrc: images[6],
        paragraphText: 'AUTOX',
        Moreinfo: "https://www.autox.com/",
      },
      {
        imageSrc: images[7],
        paragraphText: 'CHAMPIONTUTOR',
        Moreinfo: "https://www.championtutor.com/",
      },
      {
        imageSrc: images[8],
        paragraphText: 'GARVINTOOLS',
        Moreinfo: "https://www.garvintools.com/",
      },
      {
        imageSrc: images[9],
        paragraphText: 'CAREERSTRATEGYSOLUTIONS',
        Moreinfo: "https://www.careerstrategysolutions.com/",
      },
      {
        imageSrc: images[10],
        paragraphText: 'STEFAB',
        Moreinfo: "https://www.stefab.com/",
      },
      {
        imageSrc: images[11],
        paragraphText: 'UNIPLAST',
        Moreinfo: "http://uniplast.us/",
      },

      {
        imageSrc: images[12],
        paragraphText: 'LAXMIFLOURMILL',
        Moreinfo: "https://laxmiflourmill.com/",
      },
      {
        imageSrc: images[13],
        paragraphText: 'THESTUDENTWINDOW',
        Moreinfo: "http://thestudentwindow.com/",
      },
      {
        imageSrc: images[14],
        paragraphText: 'COOLBLUES',
        Moreinfo: "http://www.coolblues.co.in/",
      },

  ];


  return (
    <div className="hoxx">
    {cardsData.map((card, index) => (
      <Phpmain
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




export default Php;
