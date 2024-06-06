import ImageSlider from "./Slic-slider";
import "../components/Header/Header.css"

const ImageSlid = () => {
  const slides = [
    { url: "https://www.fahimshakir.com/img/slider/first.webp", title: "beach" },
    { url: "https://www.fahimshakir.com/img/slider/1.webp", title: "boat" },
    { url: "https://www.fahimshakir.com/img/slider/2.webp", title: "forest" },
    { url: "https://www.fahimshakir.com/img/slider/3.webp", title: "city" },
    { url: "https://www.fahimshakir.com/img/slider/4.webp", title: "city" },
  ];
  const containerStyles = {
    width: "100%",
    height: "389px",
    margin: "-1px auto",
  };
  return (
    <div>
      <div style={containerStyles} className="res">
        <ImageSlider slides={slides} />
      </div>
    </div>
  );
};

export default ImageSlid;