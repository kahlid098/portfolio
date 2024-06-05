import React from "react";
import Slider from "react-slick";
import "../Pages/Slider.css";
import diwaker from "../components/image/diwakr.png";
import imran from "../components/image/imran.png";
import hershita from "../components/image/harshita.png";

export default function SimpleSlider() {
  var settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
  };
  return (
    <>
      <div className="back-image">
        <div className="client">
          <h2>What our clients have to say</h2>
          <span>Happy Customer</span>
        </div>
<div className="container margin">
        <Slider {...settings}>
          <div className="align-center">
            <img src={diwaker} alt="" />
            <p>
              One of the best Magento developer I have met. He help me out from
              several typical problems. We have also worked together for several
              projects.
            </p>
          </div>
          <div className="align-center">
            <img src={imran} alt="" />
            <p>Excellent Quality Highly recommends A+++ +, Fahim Shakir is a Superb web developer.</p>
          </div>
          <div className="align-center">
            <img src={hershita} alt="" />
            <p>
              Great experience working on my personal website development
              project with Fahim Shakir Web Developer. He was professional and
              creative. Their dedicated approach to the work is commendable. I
              got user-friendly and incredible looking website within the
              stipulated time outstanding Ecommerce Website Designing and
              development. Thanks for giving my brand and my business great web
              presence and an added online edge.
            </p>
          </div>
        </Slider>
        </div>
       
        <div className="container2">
            <div className="d-flex mabt">
                <div className="box-no">
                <iframe  width="100%" height="100%" src="https://www.youtube.com/embed/W3Nt3lnJLUM" frameborder="0" allowfullscreen=""></iframe>
                </div>
                <div className="box-no">
                <iframe  width="100%" height="100%" src="https://www.youtube.com/embed/xhg6bCboLD0?si=Dx8VnT14vp0LowWe" frameborder="0" allowfullscreen=""></iframe>
                </div>
                <div className="box-no">
                <iframe  width="100%" height="100%" src="https://www.youtube.com/embed/JOns6D8fZpA?si=Pyyukrh3cIlQIXPO" frameborder="0" allowfullscreen=""></iframe>
                </div>
                <div className="box-no">
                <iframe  width="100%" height="100%" src="https://www.youtube.com/embed/1w7ujjVdLmM?si=XgdUI8G6MkUhGilx" frameborder="0" allowfullscreen=""></iframe>
                </div>
            </div>
        </div>
      </div>

      <div className="container">
        <div className="d-flex">
            <div className="wi-box box-mar">
                <span>1000+</span>
                <h1 className="john">Completed <br></br> Projects</h1>
            </div>
            <div className="wi-box box-mar">
                <span>Best Offer</span>
                <h1 className="john">Delivered On Time</h1>
            </div>
            <div className="wi-box box-mar">
                <span>Best Web Maker</span>
                <h1 className="john">100% Qc faster<br></br> production</h1>
            </div>
        </div>
      </div>
    </>
  );
}
