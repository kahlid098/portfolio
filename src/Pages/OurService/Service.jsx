import React from 'react'
import '../OurService/service.css'
import SerCard from './SerCard';
import ServiceCard from './ServiceCard';
import SecondCard from './SecondCard';

const Service = () => {
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