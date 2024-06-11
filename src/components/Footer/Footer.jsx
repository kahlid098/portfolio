import React from 'react';
import '../Footer/Footer.css';
import { FaLocationDot } from "react-icons/fa6";
import { IoMdCall } from "react-icons/io";
import { FaWhatsapp } from "react-icons/fa";
import { CiMail } from "react-icons/ci";
import { FaSkype } from "react-icons/fa6";

import TestimonialCarousel from '../../Pages/testimonial';
import FacebookPageEmbed from '../../Pages/Facebook';

const Footer = () => {
    return (
        <>

        <TestimonialCarousel/>


            {/* footer main */}
            <div className="FooterMain ">
                <div className='container flex-boxes '>
                    <div className="content1">
                        <h2 className='cochead'>About Us</h2>
                        <p>My name is Fahim Shakir. In the discipline of Web Development and Design I am full stack prominent as PHP Programmer / Web Developer / Web Freelancer. I am reputated by my outstanding work, excellent programming skills and versatile nature of program coding with Software and Website Development.
                            I am full stack developed many web based applications. I am persistent in developing the web application as well as dynamic websites <a href="about-us.php" className='reed'>Readmore</a></p>
                    </div>
                    <div className="content3">
                        <h2 className='cochead'>Contect Us</h2>
                        <ul className='list-section'>
                            <li>
                                <span><FaLocationDot /></span>
                                <span className='sp'>Block C-11B, Top Floor, New Ashok Nagar</span>
                            </li>
                            <li>
                                <span><FaLocationDot /></span>
                                <span><a href='#' className='sp'> Delhi NCR 110096, India</a></span>    
                            </li>
                            <li>
                                <span><IoMdCall /> </span>
                                <span><a href='tel:09718925775' className='sp'>09718925775</a></span>
                            </li>
                            <li>
                                <span><FaWhatsapp /></span>
                                <span><a href='https://api.whatsapp.com/send/?phone=919268751849&text&type=phone_number&app_absent=0' className='sp'> 09268751849</a></span>
                            </li>
                            <li>
                                <span><CiMail /></span>
                                <span><a href='mailto:fahimshakir786@gmail.com' className='sp'>fahimshakir786@gmail.com</a></span>
                            </li>
                            <li>
                                <span><CiMail /></span>
                                <span><a href='mailto:fahimshakir786@gmail.com' className='sp'> info@fahimshakir.com</a></span> 
                            </li>
                            <li>
                                <span><FaSkype /></span>
                                <span><a href='skype:fahim.shakir40' className='sp'> fahim.shakir40</a></span>
                            </li>
                        </ul>
                    </div>
                    <div className="content6">
                        <h2 className='cochead'>Usefull Links</h2>
                        <ul className='list-section'>
                            <li><span><a href="#">ABOUT US</a></span></li>
                            <li><span><a href="#">My RESUME</a></span></li>
                            <li><span><a href="#">OUR SERVICES</a></span></li>
                            <li><span><a href="#">OUR PORTFOLIO</a></span></li>
                            <li><span><a href="#">BLOG</a></span></li>
                            <li><span><a href="#">CONTACT US</a></span></li>
                            <li><span><a href="#">Privacy Policy</a></span></li>
                            <li><span><a href="#">Terms & Conditions</a></span></li>
                        </ul>
                    </div>
                    <div className="content4">
                    <FacebookPageEmbed />
                    </div>
                </div>
            </div>

            <div className='copy'>
                <p className='Copyright'>Copyright © 2024 <span>Fahim Shakir Web Developer</span> All rights reserved.</p>
            </div>
        </>
    )
}

export default Footer;