// src/WhatsAppPopup.js
import React, { useState } from 'react';
import '../Pages/FormOpen.css'

const OpenForm = () => {
  const [isOpen, setIsOpen] = useState(false);

  const togglePopup = () => {
    setIsOpen(!isOpen);
  };
 

  return (
    <div>
      <button id="openPopup1" onClick={togglePopup}>
        SCHEDULE A VISIT
      </button>

      {isOpen && (
        <>
        <div id="popup" className="popup">
          <div className="popup-content1">
            <span className="close-btn1" onClick={togglePopup}>&times;</span>
            <h4 className='Hello-every'>Hello Everyone</h4>
            <input type="text"  placeholder="Your Name" className='Section-input'/>
            <input type="text"  placeholder="Email ID" className='Section-input'/>
            <input type="text"  placeholder="Phone*" className='Section-input'/>
            <textarea placeholder="Enter your message..."  className='Section-input'/>
            <button className='Submit'>Submit</button>
          </div>
        </div>
        </>
      )}
    </div>
  );
};

export default OpenForm;
