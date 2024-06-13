import React from "react";
import Slider from "react-slick";
import "../Pages/Slider.css";
import diwaker from "../components/image/diwakr.png";
import imran from "../components/image/imran.png";
import hershita from "../components/image/harshita.png";
import YoutubeSlider from "./YoutubeSlider";
import PortCard from "./Ourportfolio/PortCard";
import { NavLink } from "react-router-dom";

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
        <h4 class="elementor-heading">We Love Our Works</h4>
        <p className="projects">
          2000+ awesome projects delivered in 50+ nations earned us the respect
          we proudly cherish today. We love what we do and that makes our work
          as diverse as you possibly expect from the best web design &
          development company.
        </p>
        <div><NavLink to="/Portfolio" className="viewhere">View All Project</NavLink></div>
      </div>
      <PortCard />
      <div className="back-image">
        <div className="client">
          <h3 className="our-client">What our clients have to say</h3>
          <p>Happy Customer</p>
        </div>
        <div className="container margin uniqe">
          <Slider {...settings}>
            <div className="align-center">
              <img src={hershita} alt="" />
              <p className="experience">
                Great experience working on my personal website development
                project with Fahim Shakir Web Developer. He was professional and
                creative. Their dedicated approach to the work is commendable. I
                got user-friendly and incredible looking website within the
                stipulated time outstanding Ecommerce Website Designing and
                development. Thanks for giving my brand and my business great
                web presence and an added online edge.
              </p>
            </div>
            <div className="align-center">
              <img src={imran} alt="" />
              <p className="experience">
                Excellent Quality Highly recommends A+++ +, Fahim Shakir is a
                Superb web developer.
              </p>
            </div>
            <div className="align-center">
              <img src={diwaker} alt="" />
              <p className="experience">
                One of the best Magento developer I have met. He help me out
                from several typical problems. We have also worked together for
                several projects.
              </p>
            </div>
          </Slider>
        </div>

        <YoutubeSlider />
      </div>
    </>
  );
}
