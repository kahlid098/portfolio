import React, { useEffect } from 'react';
import '../OurService/service.css'
import ServiceCard from './ServiceCard';
import SecondCard from './SecondCard';

const Service = () => {
  useEffect(() => {
    document.title = "PHP Framework and CMS Development Services- Wordpress, ...";
  }, []);
  return (
    <>
      <div className='service-image'>
          <h1>Our-Service</h1>
      </div>
      <ServiceCard/>
      <SecondCard/>

    </>
  )
}

export default Service;