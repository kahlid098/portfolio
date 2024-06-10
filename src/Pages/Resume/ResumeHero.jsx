import React from "react";
import TypeWriter from "./TypeWriter";
import { TiSocialFacebook } from "react-icons/ti";
import { FaXTwitter } from "react-icons/fa6";
import { FaLinkedinIn } from "react-icons/fa6";
import '../Resume/Resume.css';
import fahim from '../../components/image/FAHIM.jpg'

const ResumeHero = () => {
  return (
    <>
      <div className="conatainer">
        <div className="flex-daretion">
          <div className="first-right-side">
            <p className="world-pa">WELCOME TO MY WORLD</p>
            <TypeWriter />
            <p>
              I am full stack developed many web based applications. I am
              persistent in developing the web application as well as dynamic
              websites. It’s my smart intellect and confidence level that keeps
              me pushing to work beyond boundaries in the world of Application
              and Web Development.!
            </p>
            <div className="followus">
                <span class="find-us-title">find with me</span>
                <ul className="social-share">
                <li className="facebook"><a href="#"><TiSocialFacebook /></a></li>
                <li className="twiter"><a href="#"><FaXTwitter /></a></li>
                <li className="linkedin"><a href="#"><FaLinkedinIn /></a></li>
                </ul>
            </div>
          </div>
          <div className="secon-left-side">
            <div className="thumnail">  
                <div className="inner">
                    <img src={fahim} alt="" />
                </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default ResumeHero;
