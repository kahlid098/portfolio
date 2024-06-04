import React from 'react';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import First from '../components/image/first.webp'
import Second from '../components/image/1.webp'
import Third from '../components/image/2.webp'
import forth from '../components/image/3.webp'
import five from '../components/image/4.webp'
import six from '../components/image/5.webp'
import '../Pages/Slick.css'

function Slic() {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
  };

  return (
    <div className="App">
      <Slider {...settings}>
        <div>
          <img src={First} alt="first" className='imaggg' />
        </div>
        <div>
          <img src={Second} alt="" className='imaggg'/>
        </div>
        <div>
        <img src={Third} alt=""  className='imaggg'/>
        </div>
        <div>
        <img src={forth} alt=""  className='imaggg'/>
        </div>
        <div>
        <img src={five} alt="" className='imaggg'/>
        </div>
        <div>
        <img src={six} alt="" className='imaggg'/>
        </div>
      </Slider>
    </div>
  );
}

export default Slic;
