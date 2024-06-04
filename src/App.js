
import './App.css';
import Header from './components/Header/Header';
import {  Routes, Route } from "react-router-dom";
import Home from './Pages/Home'
import About from './Pages/About';
import Resume from './Pages/Resume';
import Service from './Pages/Service'
import Portfolio from './Pages/Portfolio'
import Blog from './Pages/Blog'
import Footer from './components/Footer/Footer';


function App() {
  return (
    <>
    <Header/>
    <Routes>
      <Route path="/" element={<Home/> }/>
      <Route path="/About" element={<About/> }/>
      <Route path="/Resume" element={<Resume/>}/>
      <Route path="/Service" element={<Service/> }/>
      <Route path="/Porfolio" element={<Portfolio/> }/>
      <Route path="/Blog" element={<Blog/> }/>
    </Routes>

    <Footer/>
    </>
  );
}

export default App;
