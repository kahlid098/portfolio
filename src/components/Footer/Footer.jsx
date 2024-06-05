import React from 'react';
import '../Footer/Footer.css';
import { FaLocationDot } from "react-icons/fa6";
import { IoMdCall } from "react-icons/io";
import { FaWhatsapp } from "react-icons/fa";
import { CiMail } from "react-icons/ci";
import { FaSkype } from "react-icons/fa6";
import footerimg from "../image/img.jpg";

import TestimonialCarousel from '../../Pages/testimonial';
import FacebookIframe from '../../Pages/Facebook';
import FacebookPageEmbed from '../../Pages/Facebook';

const Footer = () => {
    return (
        <>

        <TestimonialCarousel/>


            {/* footer main */}
            <div className="FooterMain">
                <div className='container flex-boxes'>
                    <div className="content1">
                        <h2>About Us</h2>
                        <p>My name is Fahim Shakir. In the discipline of Web Development and Design I am full stack prominent as PHP Programmer / Web Developer / Web Freelancer. I am reputated by my outstanding work, excellent programming skills and versatile nature of program coding with Software and Website Development.
                            I am full stack developed many web based applications. I am persistent in developing the web application as well as dynamic websites <a href="about-us.php">Readmore</a></p>
                    </div>
                    <div className="content1">
                        <h2>Contect Us</h2>
                        <ul>
                            <li><a href='#' className='sp'><FaLocationDot /></a>Block C-11B, Top Floor, New Ashok Nagar</li>
                            <li><a href='#' className='sp'><FaLocationDot /></a>Delhi NCR 110096, India</li>
                            <li><a href='#' className='sp'><IoMdCall /></a>09718925775</li>
                            <li><a href='#' className='sp'><FaWhatsapp /></a>09268751849</li>
                            <li><a href='#' className='sp'><CiMail /></a>fahimshakir786@gmail.com</li>
                            <li><a href='#' className='sp'><CiMail /></a>info@fahimshakir.com </li>
                            <li><a href='#' className='sp'><FaSkype /></a>fahim.shakir40</li>
                        </ul>
                    </div>
                    <div className="content1">
                        <h2>Usefull Link</h2>
                        <ul>
                            <li>ABOUT US</li>
                            <li>My RESUME</li>
                            <li>OUR SERVICES</li>
                            <li>CONTACT US</li>
                            <li>Privacy Policy</li>
                            <li>Terms & Conditions</li>
                        </ul>
                    </div>
                    <div className="content4">
                        <FacebookPageEmbed/>
                    </div>
                </div>
            </div>

            <div className='copy'>
                <p>Copyright © 2024 <span>Fahim Shakir Web Developer</span> All rights reserved.</p>
            </div>
        </>
    )
}

export default Footer;