import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { FaGoogle } from "react-icons/fa";
import { FaStar } from "react-icons/fa";
import '../components/Footer/Footer.css';
import screenshot from "../components/image/mm.png"

const TestimonialCarousel = () => {
  const settings = {
    dots: true,
    infinite: false,
    speed: 300,
    slidesToShow: 4,
    slidesToScroll: 4,
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
          slidesToShow: 2,
          slidesToScroll: 2,
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

  return (
    <>
    <div>
      <h2 className="text-head">5.0 <FaStar className="orang-color"/> <FaStar className="orang-color"/> <FaStar className="orang-color"/> <FaStar className="orang-color"/> <FaStar className="orang-color"/> Google Reviews</h2>
    </div>

    <div className="container f-margin">
    <Slider {...settings}>
  
   
          <div className="g1 ">
            <div className="h-flex">
              <div className="h-flex">
                <div className="h">H</div>
                <div>
                  <p className="clf">Harish kumar</p>
                  <p className="year">a months ago</p>
                </div>
              </div>
              <span>
                <img src={screenshot} alt="screenshot" />
              </span>
            </div>
            <div className="st5">
              <FaStar />
              <FaStar />
              <FaStar />
              <FaStar />
              <FaStar />
            </div>
            <p className="typ">
            Fahim worked on multiple projects with us and he is very experienced regarding Website development. One of the best Magento developer i know.
            </p>
          </div>

          <div className="g1">
            <div className="h-flex">
              <div className="h-flex">
                <div className="h">H</div>
                <div>
                  <h3 className="clf">Gurjas Bedi</h3>
                  <p className="year">5 years ago</p>
                </div>
              </div>
              <span>
               <img src={screenshot} alt="screenshot"/>
              </span>
            </div>
            <div className="st5">
              <FaStar />
              <FaStar />
              <FaStar />
              <FaStar />
              <FaStar />
            </div>
            <p className="typ">
               After number of cheaters and fake developers, I finally found Fahim who helped me in developing my website just like I wanted. After completion of website services provided are true and reasonable . Would recommend everyone to get their work done from him.
            </p>
          </div>

          <div className="g1">
            <div className="h-flex">
              <div className="h-flex">
                <div className="h">H</div>
                <div>
                  <h3 className="clf">Gaurav Arora</h3>
                  <p className="year">5 years ago</p>
                </div>
              </div>
              <span>
              <img src={screenshot} alt="screenshot"/>
              </span>
            </div>
            <div className="st5">
              <FaStar />
              <FaStar />
              <FaStar />
              <FaStar />
              <FaStar />
            </div>
            <p className="typ">
            Fahim has good conceptional knowledge regarding his developing domain.  He has good command on different coding languages. He is hardworking and always reachable to get help.
            </p>
          </div>

          <div className="g1">
            <div className="h-flex">
              <div className="h-flex">
                <div className="h">H</div>
                <div>
                  <h3 className="clf">Diwakar kumar</h3>
                  <p className="year">3 years ago</p>
                </div>
              </div>
              <span>
              <img src={screenshot} alt="screenshot"/>
              </span>
            </div>
            <div className="st5">
              <FaStar />
              <FaStar />
              <FaStar />
              <FaStar />
              <FaStar />
            </div>
            <p className="typ">
            One of the best Magento developer I have met. He help me out from several typical problems. We have also worked together for several projects.
            </p>
          </div>

          <div className="g1">
            <div className="h-flex">
              <div className="h-flex">
                <div className="h">H</div>
                <div>
                  <h3 className="clf">jatin nanda</h3>
                  <p className="year">3 Year ago</p>
                </div>
              </div>
              <span>
              <img src={screenshot} alt="screenshot"/>
              </span>
            </div>
            <div className="st5">
              <FaStar />
              <FaStar />
              <FaStar />
              <FaStar />
              <FaStar />
            </div>
            <p className="typ">
            Fahim is a Hard Working and  Professional in his work. A Full-Stack Developer with great knowledge. Will Surely Recommend his work.
            </p>
          </div>

          <div className="g1">
            <div className="h-flex">
              <div className="h-flex">
                <div className="h">H</div>
                <div>
                  <h3 className="clf">Gamer Buddy</h3>
                  <p className="year">6 years ago</p>
                </div>
              </div>
              <span>
              <img src={screenshot} alt="screenshot"/>
              </span>
            </div>
            <div className="st5">
              <FaStar />
              <FaStar />
              <FaStar />
              <FaStar />
              <FaStar />
            </div>
            <p className="typ">
            Fahim Shakir is the best website developer. They can working PHP, Wordpress, Megento, opencart, Durpal and etc. They provides impressive services to there clients.
            </p>
          </div>

          <div className="g1">
            <div className="h-flex">
              <div className="h-flex">
                <div className="h">H</div>
                <div>
                  <h3 className="clf">Shiraj Alam </h3>
                  <p className="year">5 Year ago</p>
                </div>
              </div>
              <span>
              <img src={screenshot} alt="screenshot"/>
              </span>
            </div>
            <div className="st5">
              <FaStar />
              <FaStar />
              <FaStar />
              <FaStar />
              <FaStar />
            </div>
            <p className="typ">
            Fahim is very good developer he delivered some very critical projects for CTS. Really appreciate for his work .Keep it up.
            </p>
          </div>
  
         

          
          <div className="g1">
            <div className="h-flex">
              <div className="h-flex">
                <div className="h">H</div>
                <div>
                  <h3 className="clf">Vishu Agarwal</h3>
                  <p className="year">a month ago</p>
                </div>
              </div>
              <span>
              <img src={screenshot} alt="screenshot"/>
              </span>
            </div>
            <div className="st5">
              <FaStar />
              <FaStar />
              <FaStar />
              <FaStar />
              <FaStar />
            </div>
            <p className="typ">
            Fahim Website Developer is outstanding. Excellent job, wonderful, and the Very punctual with almost all the requirements. Highly recommended.
            </p>
          </div>
  
          <div className="g1">
            <div className="h-flex">
              <div className="h-flex">
                <div className="h">H</div>
                <div>
                  <h3 className="clf">Foysal Afridi</h3>
                  <p className="year">a year ago</p>
                </div>
              </div>
              <span>
              <img src={screenshot} alt="screenshot"/>
              </span>
            </div>
            <div className="st5">
              <FaStar />
              <FaStar />
              <FaStar />
              <FaStar />
              <FaStar />
            </div>
            <p className="typ">
            Great experience working on my personal website development project with Fahim Shakir Web Developer. He was professional and creative. Their dedicated approach to the work is commendable. I got user-friendly and incredible looking website within the stipulated time outstanding Ecommerce Website Designing and development. Thanks for giving my brand and my business great web presence and an added online edge.
            </p>
          </div>
    </Slider>
    </div>
    </>
  );
};

export default TestimonialCarousel;
