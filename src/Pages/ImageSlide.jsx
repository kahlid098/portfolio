import ImageSlider from "./Slic-slider";
import "../components/Header/Header.css";

const ImageSlid = () => {
  const slides = [
    { url: "https://www.fahimshakir.com/img/slider/first.webp" },
    { url: "https://www.fahimshakir.com/img/slider/1.webp" },
    { url: "https://www.fahimshakir.com/img/slider/2.webp" },
    { url: "https://www.fahimshakir.com/img/slider/3.webp" },
    { url: "https://www.fahimshakir.com/img/slider/4.webp" },
    { url: "https://www.fahimshakir.com/img/slider/5.webp" },
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
