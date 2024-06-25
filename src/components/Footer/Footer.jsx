import React from "react";
import "../Footer/Footer.css";
import { FaLocationDot } from "react-icons/fa6";
import { IoMdCall } from "react-icons/io";
import { FaWhatsapp } from "react-icons/fa";
import { CiMail } from "react-icons/ci";
import { FaSkype } from "react-icons/fa6";

import TestimonialCarousel from "../../Pages/testimonial";
import FacebookPageEmbed from "../../Pages/Facebook";
import { NavLink, Link } from "react-router-dom";

const Footer = () => {
  return (
    <div>
      <TestimonialCarousel />
      <div className="FooterMain ">
        <div className="container flex-boxes ">
          <div className="content1">
            <h5 className="cochead">About Us</h5>
            <p>
              My name is Fahim Shakir. In the discipline of Web Development and
              Design I am full stack prominent as PHP Programmer / Web Developer
              / Web Freelancer. I am reputated by my outstanding work, excellent
              programming skills and versatile nature of program coding with
              Software and Website Development. I am full stack developed many
              web based applications. I am persistent in developing the web
              application as well as dynamic websites{" "}
              <Link to="/about-us" className="reed">
                Readmore
              </Link>
            </p>
          </div>
          <div className="content3">
            <h5 className="cochead">Contect Us</h5>
            <ul className="list-section">
              <li>
                <span>
                  <FaLocationDot />
                </span>
                <span className="sp">
                  Block C-11B, Top Floor, New Ashok Nagar
                </span>
              </li>
              <li>
                <span>
                  <FaLocationDot />
                </span>
                <span>
                  <a href="#" className="sp">
                    Delhi NCR 110096, India
                  </a>
                </span>
              </li>
              <li>
                <span>
                  <IoMdCall />
                </span>
                <span>
                  <a href="tel:09718925775" className="sp">
                    09718925775
                  </a>
                </span>
              </li>
              <li>
                <span>
                  <FaWhatsapp />
                </span>
                <span>
                  <a
                    href="https://api.whatsapp.com/send/?phone=919268751849&text&type=phone_number&app_absent=0"
                    className="sp"
                  >
                    09268751849
                  </a>
                </span>
              </li>
              <li>
                <span>
                  <CiMail />
                </span>
                <span>
                  <a href="mailto:fahimshakir786@gmail.com" className="sp">
                    fahimshakir786@gmail.com
                  </a>
                </span>
              </li>
              <li>
                <span>
                  <CiMail />
                </span>
                <span>
                  <a href="mailto:fahimshakir786@gmail.com" className="sp">
                    info@fahimshakir.com
                  </a>
                </span>
              </li>
              <li>
                <span>
                  <FaSkype />
                </span>
                <span>
                  <a href="skype:fahim.shakir40" className="sp">
                    fahim.shakir40
                  </a>
                </span>
              </li>
            </ul>
          </div>
          <div className="content6">
            <h5 className="cochead">Usefull Links</h5>
            <ul className="list-section">
              <li>
                <span>
                  <Link to="/about-us">ABOUT US</Link>
                </span>
              </li>
              <li>
                <span>
                  <Link to="/resume">My RESUME</Link>
                </span>
              </li>
              <li>
                <span>
                  <Link to="/services">OUR SERVICES</Link>
                </span>
              </li>
              <li>
                <span>
                  <Link to="/portfolio">OUR PORTFOLIO</Link>
                </span>
              </li>
              <li>
                <span>
                  <a href="#">BLOG</a>
                </span>
              </li>
              <li>
                <span>
                  <Link to="/contact">CONTACT US</Link>
                </span>
              </li>
              <li>
                <span>
                  <Link to="privacy-policy">Privacy Policy</Link>
                </span>
              </li>
              <li>
                <span>
                  <Link to="/terms-and-conditions">Terms & Conditions</Link>
                </span>
              </li>
            </ul>
          </div>
          <div className="content4">
            <FacebookPageEmbed />
          </div>
        </div>
      </div>
      <div className="copy">
        <p className="Copyright">
          Copyright © 2024 <span>Fahim Shakir Web Developer</span> All rights
          reserved.
        </p>
      </div>
    </div>
  );
};

export default Footer;
