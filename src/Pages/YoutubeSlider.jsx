import React, { useState, useEffect } from 'react';
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import "../Pages/Home.css";

const YoutubeSlider = () => {
  const respo = {
    dots: false,
    infinite: true,
    speed: 300,
    slidesToShow: 4,
    slidesToScroll: 4,
    autoplay: false,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 6,
          slidesToScroll: 6,
          infinite: true,
          dots: true,
        },
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 3,
        },
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  };

  const [isDesktop, setIsDesktop] = useState(window.innerWidth > 600);

  useEffect(() => {
    const handleResize = () => {
      setIsDesktop(window.innerWidth > 600);
    };

    window.addEventListener('resize', handleResize);

    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, []);

  const videos = [
    "W3Nt3lnJLUM",
    "xhg6bCboLD0?si=Dx8VnT14vp0LowWe",
    "JOns6D8fZpA?si=Pyyukrh3cIlQIXPO",
    "1w7ujjVdLmM?si=XgdUI8G6MkUhGilx"
  ];

  return (
    <div>
      {isDesktop ? (
        <div className="container2">
          <div className="d-flex mabt">
            {videos.map((video, index) => (
              <div key={index} className="box-no">
                <iframe
                  width="100%"
                  height="100%"
                  src={`https://www.youtube.com/embed/${video}`}
                  frameBorder="0"
                  allowFullScreen
                  title={`video-${index}`}
                ></iframe>
              </div>
            ))}
          </div>
        </div>
      ) : (
        <Slider {...respo}>
          {videos.map((video, index) => (
            <div key={index} className="container2">
              <div className="d-flex mabt">
                <div className="box-no">
                  <iframe
                    width="100%"
                    height="100%"
                    src={`https://www.youtube.com/embed/${video}`}
                    frameBorder="0"
                    allowFullScreen
                    title={`video-${index}`}
                  ></iframe>
                </div>
              </div>
            </div>
          ))}
        </Slider>
      )}
    </div>
  );
};

export default YoutubeSlider;














