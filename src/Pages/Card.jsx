import React from 'react'
import Template from '../components/image/template.webp'
import feature from '../components/image/feature3.webp'
import dealopmemt from '../components/image/app-development.webp'
import '../Pages/Card.css'

const Card = () => {

  return (
    <>
 
  
      <div className='container mar'>
        <div className='d-flex'>
      <div className='card'>
        <img src={Template} className='template' alt='Template'/>
        <h1 className='web'>Web Designing</h1>
        <p className='think'>Most of us think that Web Design is a normal Designing process but it's a different concept, it involves the integration of image, banner</p>
        <button className='read-more'>Read More</button>
       </div>

       <div className='card'>
        <img src={feature}  className='template' alt='feature'/>
        <h2 className='web'>Web Designing</h2>
        <p className='think'>Most of us think that Web Design is a normal Designing process but it's a different concept, it involves the integration of image, banner</p>
        <button className='read-more'>Read More</button>
       </div>

       <div className='card'>
        <img src={dealopmemt}  className='template' alt='dealopmemt'/>
        <h3 className='web'>Web Designing</h3>
        <p className='think'>Most of us think that Web Design is a normal Designing process but it's a different concept, it involves the integration of image, banner</p>
        <button className='read-more'>Read More</button>
       </div>
       </div>
      </div>
   


    </>
  )
}

export default Card;