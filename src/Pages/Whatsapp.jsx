// src/WhatsAppPopup.js
import React, { useState } from 'react';
import '../Pages/Whatsapp.css';
import { FaWhatsapp } from "react-icons/fa";
import { FaRegMessage } from "react-icons/fa6";
import { HiMiniXMark } from "react-icons/hi2";

const WhatsAppPopup = () => {
  const [isOpen, setIsOpen] = useState(false);

  const togglePopup = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div>
      <button id="openPopup" onClick={togglePopup}>
      <FaWhatsapp />
      </button>

      {isOpen && (
        <>
        <div id="popup" className="popup">
          <div className="popup-content">
            <span className="close-btn" onClick={togglePopup}>&times;</span>
            <h2 className='message'><FaRegMessage className='icon-mesag'/></h2>
            <p>I checked the website, and I have a few questions to ask</p>
            <a href="https://wa.me/1234567890" target="_blank" className="whatsapp-btn" rel="noopener noreferrer"><FaWhatsapp  className='icon-what'/> Chat With Us</a>
          </div>
        </div>
        </>
      )}
    </div>
  );
};

export default WhatsAppPopup;
