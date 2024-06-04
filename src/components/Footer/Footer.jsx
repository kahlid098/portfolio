import React from 'react';
import '../Footer/Footer.css';
import { FaLocationDot } from "react-icons/fa6";
import { IoMdCall } from "react-icons/io";
import { FaWhatsapp } from "react-icons/fa";
import { CiMail } from "react-icons/ci";
import { FaSkype } from "react-icons/fa6";
import footerimg from "../image/img.jpg";

import TestimonialCarousel from '../../Pages/testimonial';

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
                        <div className='img-box'>
                            <div className='inner-top'>
                                <span>logo</span><span><a href="#">Fahim sakir websites</a></span>
                                <br /><span><a href="#">Follow page</a></span>
                            </div>
                            <div className="inner1">
                                <img src={footerimg} alt="" />
                                <div className='inmain'>
                                    <div className='inimg'><img src={footerimg} alt="" /></div>
                                    <h3>Fahim sakir websites Developer</h3>
                                </div>
                                <div>
                                    <a href="#">2 week ago</a>
                                    <p>moodle development</p>
                                    <a href="#">www.fahimshakir.com</a>
                                    <br />
                                    <a href="#">info@fahimshakir.com</a>
                                    <p>91 9718925775</p>
                                </div>
                                <div>
                                    <span>like</span>
                                    <span>Comment</span>
                                    <span>Share</span>
                                </div>
                            </div>
                            <img src={footerimg} alt="" />
                            <img src={footerimg} alt="" />
                            <img src={footerimg} alt="" />
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Footer;