import React, { useState } from "react";
import OurPortfolio from "./OurPortfolio";
import Lightbox from "react-image-lightbox";
import "react-image-lightbox/style.css";
import "./Port.css"; // Assuming your CSS is in this file

const cardsData = [
  {
    imageSrc: 'https://techkritigroup.com/wp-content/uploads/2024/01/House-of-Computers.png.webp',
    paragraphText: 'House of Computers',
  },
  {
    imageSrc: 'https://techkritigroup.com/wp-content/uploads/2024/01/IFL-ME.jpg',
    paragraphText: 'IFL ME',
  },
  {
    imageSrc: 'https://techkritigroup.com/wp-content/uploads/2024/01/Water-To-Go.png.webp',
    paragraphText: 'Water To Go',
  },
  {
    imageSrc: 'https://techkritigroup.com/wp-content/uploads/2024/01/Caskers.png.webp',
    paragraphText: 'This is My ProjectCaskers',
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
