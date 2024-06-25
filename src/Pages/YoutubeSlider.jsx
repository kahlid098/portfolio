import React, { useState, useEffect } from 'react';
import "../Pages/Home.css";

const YoutubeSlider = () => {
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
    </div>
  );
};

export default YoutubeSlider;















