import React, { useEffect } from 'react';
import '../Ourportfolio/Main.css'
import MainPortfolio from './MainPortfolio'

const Portfolio = () => {
  useEffect(() => {
    document.title = "Portfolio- Web and eCommerce Development";
  }, []);
  return (
    <>
    <div className='main-port'>
        <h1 className='head-port'>OUR PORTFOLIO</h1>
        <h2 className='head2port'>I'm a kibitzer with a broad portfolio. </h2>
        <h3 className='inno-head2'>- Our Innovative Creations - </h3>
        <p className='discipline'>My name is Fahim Shakir Sidiqui. In the discipline of Web Development and Design I am prominent as PHP Programmer / Web Developer / Web Freelancer. I am reputated by my outstanding work, excellent programming skills and versatile nature of program coding with Software and Website Development.
           Read More Sign up for special offers</p>  
    </div>
    <MainPortfolio/>
    </>
  )
}

export default Portfolio