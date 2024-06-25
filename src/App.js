
import './App.css';
import Header from './components/Header/Header';
import {  Routes, Route, Link } from "react-router-dom";
import Home from './Pages/Home'
import About from './Pages/About/About';
import Resume from './Pages/Resume/Resume';
import Service from './Pages/OurService/Service'
import Portfolio from './Pages/Ourportfolio/Portfolio'
import Blog from './Pages/Blog'
import Footer from './components/Footer/Footer';
import WhatsAppPopup from './Pages/Whatsapp';
import Contact from './Pages/Contact/Contact';
import OpenForm from './Pages/FormOpen';
import { IoIosArrowUp } from "react-icons/io";
import Term from './Pages/Term-and-condition';
import Privacy from './Pages/Privacy';


function App() {
  return (
    <div>
    <Header/>
    <Routes>
      <Route path="/" element={<Home/> }/>
      <Route path="/about-us" element={<About/> }/> 
      <Route path="/resume" element={<Resume/>}/>
      <Route path="/services" element={<Service/> }/>
      <Route path="/portfolio" element={<Portfolio/> }/>
      <Route path="/blog" element={<Blog/> }/>
      <Route path="/contact" element={<Contact/>}/>
      <Route path='/terms-and-conditions' element={<Term/>}/>
      <Route path='privacy-policy' element={<Privacy/> }/>
    </Routes>
    <Footer/>
    
    <WhatsAppPopup/>
    <OpenForm/>
    <a href='#' className='topcorner'><IoIosArrowUp /></a>

    </div>
  );
}

export default App;
