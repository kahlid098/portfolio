import React from "react";
import Slider from "react-slick";
import "../Pages/Slider.css";
import diwaker from "../components/image/diwakr.png";
import imran from "../components/image/imran.png";
import hershita from "../components/image/harshita.png";
import YoutubeSlider from "./YoutubeSlider";
import PortCard from "./PortCard";

export default function SimpleSlider() {
  var settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: false,
  };
  return (
    <>
      <div className="our-portfolio">
        <h1 >Our Portfolio</h1>
      </div>
    <PortCard/>
      <div className="back-image">
        <div className="client">
          <h2>What our clients have to say</h2>
          <span>Happy Customer</span>
        </div>
<div className="container margin uniqe">
        <Slider {...settings}>
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
          <div className="align-center">
            <img src={imran} alt="" />
            <p>Excellent Quality Highly recommends A+++ +, Fahim Shakir is a Superb web developer.</p>
          </div>
          <div className="align-center">
            <img src={diwaker} alt="" />
            <p>
            One of the best Magento developer I have met. He help me out from
              several typical problems. We have also worked together for several
              projects.
            </p>
          </div>
        </Slider>
        </div>
        
       <YoutubeSlider/>
      </div>
    
     
    </>
  );
}
