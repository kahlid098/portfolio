import React from "react";
import Slic from "./Slic-slider";
import "../Pages/Home.css";
import Card from "./Card";
import Tech from "../components/Tech";
import screan from "../components/image/Screen.png";
import screan2 from "../components/image/Screen2.png";
import screan3 from "../components/image/Screen3.png";
import Card2 from "../components/Card2";
import SimpleSlider from "./Slider";
import Chooseus from "./Chooseus/Chooseus";

const Home = () => {
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

  return (
    <>
      <div>
        <Slic />
        <Card />
        <div className="tech-main-box">
          <h1 className="font">Use Technology</h1>
          <p className="align-centr">
            Crafting innovative web experiences with cutting-edge technology to
            elevate digital presence and user engagement.
          </p>
          <div className="card-box">
            {mycard.map((item) => {
              return <Tech myItem={item} />;
            })}
          </div>
        </div>
      </div>

      <div className="background">
        <div className="container">
          <div>
            <div className="work-together">
              <h1 className="lets">Let's Work Together</h1>
              <p className="gon">
                We’re passionate about brilliant ideas and the execution that
                brings it all together in one beautiful experience. If you are
                too, call or send us an email to get started.
              </p>
            </div>

            <div className="d-flex marrr">

           

            <div className="screen b-right">
              <img src={screan} alt=""  className="immggg"/>
              <div>
                <h1 className="heading">WE DISCUSS</h1>
                <p className="paragraph">
                  We’re a full-service Web Development agency that hustles hard
                  to makes users happy while infusing everything we do with the
                  heart.
                </p>
              </div>
            </div>

            <div className="screen b-right">
              <img src={screan} alt=""  className="immggg"/>
              <div>
                <h1 className="heading">WE DISCUSS</h1>
                <p className="paragraph">
                  We’re a full-service Web Development agency that hustles hard
                  to makes users happy while infusing everything we do with the
                  heart.
                </p>
              </div>
            </div>

            <div className="screen">
              <img src={screan} alt=""  className="immggg"/>
              <div>
                <h1 className="heading">WE DISCUSS</h1>
                <p className="paragraph">
                  We’re a full-service Web Development agency that hustles hard
                  to makes users happy while infusing everything we do with the
                  heart.
                </p>
              </div>
            </div>

            </div>
          </div>
        </div>
      </div>

      <Card2/>
      <SimpleSlider/>
      <Chooseus/>
      
    </>
  );
};

export default Home;
