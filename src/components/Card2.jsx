import React from "react";
import "../components/Card2.css";
import project from "../components/image/project-1.png";
import webdesign from "../components/image/web.webp";

const Card2 = () => {
  return (
    <>
      <div className="container">
        <h1 className="balance">
          Balance Your Time And Money With Our Web Design and Development
          Process
        </h1>
      </div>

  
        <div className="container relative">
          <div className="d-flex">
            <div className="first-box">
              <img src={project} alt="" />
              <h2 className="heeed">1. Project Definition</h2>
              <p className="define">
                {" "}
                We start with defining the business goals which website should
                accomplish.
              </p>
            </div>
            <div className="first-box">
              <img src={project} alt="" />
              <h2 className="heeed">1. Project Definition</h2>
              <p className="define">
                {" "}
                We start with defining the business goals which website should
                accomplish.
              </p>
            </div>
          </div>

          <div className="webc">
            <img src={webdesign} alt="" className="design" />
          </div>

          <div className="d-flex">
            <div className="first-box number">
              <img src={project} alt="" />
              <h2 className="heeed">1. Project Definition</h2>
              <p className="define">
                {" "}
                We start with defining the business goals which website should
                accomplish.
              </p>
            </div>
            <div className="first-box">
              <img src={project} alt="" />
              <h2 className="heeed">1. Project Definition</h2>
              <p className="define">
                {" "}
                We start with defining the business goals which website should
                accomplish.
              </p>
            </div>
          </div>
        </div>
  
      <div className="container">
      <div className="d-flex">
        <div className="first-box1">
          <img src={project} alt="" />
          <h2 className="heeed">1. Project Definition</h2>
          <p className="define">
            {" "}
            We start with defining the business goals which website should
            accomplish.
          </p>
        </div>
        <div className="first-box1">
          <img src={project} alt="" />
          <h2 className="heeed">1. Project Definition</h2>
          <p className="define">
            {" "}
            We start with defining the business goals which website should
            accomplish.
          </p>
        </div>
        <div className="first-box1">
          <img src={project} alt="" />
          <h2 className="heeed">1. Project Definition</h2>
          <p className="define">
            {" "}
            We start with defining the business goals which website should
            accomplish.
          </p>
        </div>
        <div className="first-box1">
          <img src={project} alt="" />
          <h2 className="heeed">1. Project Definition</h2>
          <p className="define">
            {" "}
            We start with defining the business goals which website should
            accomplish.
          </p>
        </div>
      </div>
      </div>
    </>
  );
};

export default Card2;
