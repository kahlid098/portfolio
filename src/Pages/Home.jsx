import React, { useState, useEffect } from "react";
import "../Pages/Home.css";
import Card from "./Card";
import Tech from "../components/Tech";
import screan from "../components/image/Screen.png";
import screan3 from "../components/image/Screen3.png";
import seen4 from "../components/image/seen4.webp";
import Card2 from "../components/Card2";
import SimpleSlider from "./Slider";
import Chooseus from "./Chooseus/Chooseus";
import ImageSlid from "./ImageSlide";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
const Home = () => {
  useEffect(() => {
    document.title =
      "Part Time and Full Time Freelance Web Developer in Delhi NCR,India";
  }, []);
  const mycard = [
    {
      id: 1,
      title: "PHP Development",
      img: "https://www.fahimshakir.com/img/php.png",
    },
    {
      id: 2,
      title: "Laravel Development",
      img: "https://www.fahimshakir.com/img/laravel.webp",
    },
    {
      id: 3,
      title: "Codeigniter Development",
      img: "https://www.fahimshakir.com/img/codignitor.png",
    },
    {
      id: 4,
      title: "Wordpress Development",
      img: "https://www.fahimshakir.com/img/wordpress.png",
    },

    {
      id: 5,
      title: "Woocommerce Development",
      img: "https://www.fahimshakir.com/img/woocommerce.webp",
    },
    {
      id: 6,
      title: "Shopify Development",
      img: "https://www.fahimshakir.com/img/shopify.png",
    },
    {
      id: 7,
      title: "Magento Development",
      img: "https://www.fahimshakir.com/img/magento.png",
    },
    {
      id: 8,
      title: "Opencart Development",
      img: "https://www.fahimshakir.com/img/opencart.png",
    },
    {
      id: 9,
      title: "Prestashop Development",
      img: "https://www.fahimshakir.com/img/presta.png",
    },
    {
      id: 10,
      title: "Joomla Development",
      img: "https://www.fahimshakir.com/img/joomla.png",
    },
    {
      id: 11,
      title: "Drupal Development",
      img: "https://www.fahimshakir.com/img/drupal.png",
    },
    {
      id: 12,
      title: "Moodle Development",
      img: "https://www.fahimshakir.com/img/moodle.webp",
    },
    {
      id: 13,
      title: "Mobile Application Development",
      img: "https://www.fahimshakir.com/img/android-studio.webp",
    },
    {
      id: 14,
      title: "Payment Gateway Integration",
      img: "https://www.fahimshakir.com/img/gateway.webp",
    },
    {
      id: 15,
      title: "3rd Party APIs Integration",
      img: "https://www.fahimshakir.com/img/gateway.webp",
    },
    {
      id: 16,
      title: "HTML5",
      img: "https://www.fahimshakir.com/img/HTML5.webp",
    },
    {
      id: 17,
      title: "React Js",
      img: "https://www.fahimshakir.com/img/react.svg",
    },
    {
      id: 18,
      title: "CSS",
      img: "https://www.fahimshakir.com/img/CSS.webp",
    },
    {
      id: 19,
      title: "Bootstrap",
      img: "https://www.fahimshakir.com/img/bootstrap.svg",
    },
    {
      id: 20,
      title: "Vue Js",
      img: "https://www.fahimshakir.com/img/Vue.webp",
    },
  ];
  const respo = {
    dots: false,
    infinite: true,
    speed: 300,
    slidesToShow: 4,
    slidesToScroll: 4,
    autoplay: true,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 3,
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
          slidesToShow: 2,
          slidesToScroll: 2,
        },
      },
    ],
  };

  const [isDesktop, setIsDesktop] = useState(window.innerWidth > 600);

  useEffect(() => {
    const handleResize = () => {
      setIsDesktop(window.innerWidth > 600);
    };

    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  return (
    <div>
      <ImageSlid/>
      <Card/>
      <div>
        <div className="tech-main-box">
          <h2 className="font">Use Technology</h2>
          <p className="align-centr">
            Crafting innovative web experiences with cutting-edge technology to
            elevate digital presence and user engagement.
          </p>
          <div className="card-box">
            {isDesktop ? (
              <div className="desktop-list card-box">
                {mycard.map((item, index) => (
                  <Tech key={index} myItem={item} />
                ))}
              </div>
            ) : (
              <Slider {...respo}>
                {mycard.map((item, index) => (
                  <Tech key={index} myItem={item} />
                ))}
              </Slider>
            )}
          </div>
        </div>
      </div>

      <div className="background">
        <div className="container">
          <div>
            <div className="work-together">
              <h2 className="lets">Let's Work Together</h2>
              <p className="gon">
                We, re passionate about brilliant ideas and the execution that
                brings it all together in one beautiful experience. If you are
                too, call or send us an email to get started.
              </p>
            </div>

            <div className="flexx marrr">
              <div className="screen b-right">
                <img src={screan} className="immggg" alt="screan" />
                <div>
                  <h2 className="heading">WE DISCUSS</h2>
                  <p className="paragraph">
                    We ,re a full-service Web Development agency that hustles
                    hard to makes users happy while infusing everything we do
                    with the heart.
                  </p>
                </div>
              </div>

              <div className="screen b-right">
                <img src={seen4} className="immggg" alt="seen4" />
                <div>
                  <h2 className="heading">WE DEVELOP</h2>
                  <p className="paragraph">
                    We see beyond the insights and take you to the eye stand.
                  </p>
                </div>
              </div>

              <div className="screen">
                <img src={screan3} className="immggg" alt="screan3" />
                <div>
                  <h1 className="heading">WE DELIVER</h1>
                  <p className="paragraph">
                    As a multifaceted Web Development agency, we craft beautiful
                    solutions that outdo business goals and garner recognition.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <Card2 ></Card2>
      <div>
        <SimpleSlider ></SimpleSlider>
      </div>
      <Chooseus ></Chooseus>
      <div className="container">
        <div className="d-flex">
          <div className="wi-box box-mar">
            <span>1000+</span>
            <h3 className="john">
              Completed <div></div> Projects
            </h3>
          </div>
          <div className="wi-box box-mar">
            <span>Best Offer</span>
            <h3 className="john">Delivered On Time</h3>
          </div>
          <div className="wi-box box-mar">
            <span>Best Web Maker</span>
            <h3 className="john">
              100% Qc faster<div></div> production
            </h3>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;
