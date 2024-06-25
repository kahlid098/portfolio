import React, { useState } from "react";
import OurPortfolio from "./OurPortfolio";
import Lightbox from "react-image-lightbox";
import "react-image-lightbox/style.css";
import "./Port.css";

const cardsData = [
  {
    imageSrc: 'https://www.fahimshakir.com/admin/upload/1542051625lyallpuruniforms.png',
    paragraphText: 'LYALLPURUNIFORMS',
  },
  {
    imageSrc: 'https://www.fahimshakir.com/admin/upload/1683733888Screenshot%20(36).png ',
    paragraphText: 'SURGICALSYSTEMS',
  },
  {
    imageSrc: 'https://www.fahimshakir.com/admin/upload/1683734669Screenshot%20(44).png',
    paragraphText: 'MODESTFOREVER',
  },
  {
    imageSrc: 'https://www.fahimshakir.com/admin/upload/1683734984Screenshot%20(47).png',
    paragraphText: 'ANDAAZFASHION',
  }
];

const App = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [photoIndex, setPhotoIndex] = useState(0);

  const images = cardsData.map(card => card.imageSrc);

  const openLightbox = (index) => {
    setPhotoIndex(index);
    setIsOpen(true);
  };

  return (
    <div className="haxx">
      {cardsData.map((card, index) => (
        <OurPortfolio
          key={index}
          imageSrc={card.imageSrc}
          paragraphText={card.paragraphText}
          onImageClick={() => openLightbox(index)}
        />
      ))}

      {isOpen && (
        <Lightbox
          mainSrc={images[photoIndex]}
          nextSrc={images[(photoIndex + 1) % images.length]}
          prevSrc={images[(photoIndex + images.length - 1) % images.length]}
          onCloseRequest={() => setIsOpen(false)}
          onMovePrevRequest={() =>
            setPhotoIndex((photoIndex + images.length - 1) % images.length)
          }
          onMoveNextRequest={() =>
            setPhotoIndex((photoIndex + 1) % images.length)
          }
        />
      )}
    </div>
  );
};

export default App;
