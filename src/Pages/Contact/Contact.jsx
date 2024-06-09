import React from 'react';
import  hrline from '../../components/image/hr-line.png'
import '../Contact/Contact.css'
import ContactCard from './ContactCard';
import ContactForm from './ContactForm';

const Contact = () => {
  return (
    <>
    <div>
      <iframe
        src="https://www.google.com/maps/embed?pb=!1m14!1m12!1m3!1d23861.497220428748!2d77.27650333996905!3d28.561741245000512!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!5e0!3m2!1sen!2sin!4v1717870993833!5m2!1sen!2sin"
        width="600"
        height="450"
        style={{ border: 0 }}
        allowFullScreen=""
        loading="lazy"
        referrerPolicy="no-referrer-when-downgrade"
      ></iframe>
    </div>
        <div className='tell'>
          <h1 className='contact'>Contact us and tell us what you think</h1>
          <img src={hrline} alt="" />
        </div>

        <ContactCard/>
        <ContactForm/>
    </>
  );
};

export default Contact;
