
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


function App() {
  return (
    <>
    <Header/>
    <Routes>
      <Route path="/" element={<Home/> }/>
      <Route path="/About" element={<About/> }/>
      <Route path="/Resume" element={<Resume/>}/>
      <Route path="/Service" element={<Service/> }/>
      <Route path="/Portfolio" element={<Portfolio/> }/>
      <Route path="/Blog" element={<Blog/> }/>
      <Route path="/contact" element={<Contact/>}/>
    </Routes>
    <Footer/>
    
    <WhatsAppPopup/>
    <OpenForm/>
    <a href='#' className='topcorner'><IoIosArrowUp /></a>
    </>
  );
}

export default App;
