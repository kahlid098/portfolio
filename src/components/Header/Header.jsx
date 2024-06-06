import React, { useState } from "react";
import "../Header/Header.css";
import { FaFacebookF } from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";
import { FaPinterest } from "react-icons/fa";
import { ImInstagram } from "react-icons/im";
import { FaLinkedinIn } from "react-icons/fa";
import { VscGithub } from "react-icons/vsc";
import { BsAndroid2 } from "react-icons/bs";
import { GoMail } from "react-icons/go";
import { FaSkype } from "react-icons/fa";
import { IoIosCall } from "react-icons/io";
import { FaWhatsapp } from "react-icons/fa";
import logo from '../image/fs-logo.png'
import { NavLink } from "react-router-dom";
import { FaBars } from "react-icons/fa6";
import { FaXmark } from "react-icons/fa6";

const Header = () => {
  const [isActive, setActive] = useState (false);
  
  const handleClick = ()=>{
    setActive (true);
  }

  const closenave =()=>{
    setActive(false)
  }

  return (
    <>
      <div className="bg-color">
        <div className="container4">

          <div className="d-flex">
            <div className="icon">
            <a href="https://www.facebook.com/FahimShakirWebsiteDeveloper/" target="_blank" rel="noopener noreferrer">
              <FaFacebookF className="icon-color" />
            </a>
            <a href="https://x.com/i/flow/login?redirect_after_login=%2Ffahimshakir786" target="_blank" rel="noopener noreferrer">
              <FaXTwitter className="icon-color" />
            </a>
            <a href="https://in.pinterest.com/fahimwebdeveloper/_saved/" target="_blank" rel="noopener noreferrer" >
              <FaPinterest className="icon-color" />
            </a>
            <a href="https://www.instagram.com/fahimwebdeveloper/" target="_blank" rel="noopener noreferrer">
              <ImInstagram className="icon-color" />
            </a>
            <a href="https://www.linkedin.com/" className="icon-link" target="_blank" rel="noopener noreferrer" >
              <FaLinkedinIn className="icon-color" />
            </a>
            <a href="https://github.com/fahim-web-developer" className="facebook-icon" target="_blank" rel="noopener noreferrer">
              <VscGithub className="icon-color" />
            </a>
            <a href="https://play.google.com/store/apps/details?id=com.fahimshakir2" className="icon-link" target="_blank" rel="noopener noreferrer">
              <BsAndroid2 className="icon-color" />
            </a>
            </div>

       <div className="sociel-icon">
          <a href="https://github.com" className="icon-link" target="_blank" rel="noopener noreferrer">
          <span  className="border"> <GoMail  className="information"/> fahimshakir786@gmail.com</span>
          </a>

          <a href="https://github.com" className="icon-link" target="_blank" rel="noopener noreferrer">
            <span className="border"><FaSkype className="information"/> fahim.shakir40</span>
          </a>

          <a href="https://github.com" className="icon-link" target="_blank" rel="noopener noreferrer">
            <span className="border"><IoIosCall className="information"/> 09718925775</span>
          </a>

          <a href="https://github.com" className="icon-link" target="_blank" rel="noopener noreferrer">
            <span ><FaWhatsapp  className="information"/> 09268751849</span>
          </a>
            </div>
          </div>
        </div>
      </div>


    <div className="bg-color">
      <div className="container4">
      <div className="d-flex">
          <img src={logo} alt="Logo" className="image"/>
          <FaBars  className="bar" onClick={handleClick}/>
            <div>
              <ul className={ isActive ? "ul navactive" : "ul"}>
                <li><NavLink to="/">Home</NavLink></li>
                <li><NavLink to="/About">About Us</NavLink> </li>
                <li><NavLink to="/Resume">Resume</NavLink> </li>
                <li><NavLink to="/Sevice"> Our Sevices</NavLink></li>
                <li><NavLink to="/Portfolio"> Our Portfolio</NavLink></li>
                <li><NavLink to="/Blog"> Blog</NavLink></li>
                <FaXmark  className="xmark" onClick={closenave}/>
              </ul>
            </div>
            <button className="contact-btn">CONTACT US</button>
          </div>
      </div>
    </div>
     


    </>
  );
};

export default Header;
