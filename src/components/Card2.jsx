import React from "react";
import "../components/Card2.css";
import project from "../components/image/project-1.png";
import scope from '../components/image/scope-1.png'
import architech from '../components/image/architecture.webp'
import design from '../components/image/design.png'
import develop from '../components/image/development.png'
import testing from '../components/image/testing.png'
import launch from '../components/image/launch.webp'
import main from '../components/image/maintainance.png'
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
              <img src={scope} alt="" />
              <h2 className="heeed">2. Project Scope</h2>
              <p className="define">
                {" "}
                Our Expert web designers work together with you to write the scope of the project.
              </p>
            </div>
          </div>

          <div className="webc">
            <img src={webdesign} alt="" className="design" />
          </div>

          <div className="d-flex">
            <div className="first-box number">
              <img src={architech} alt="" />
              <h2 className="heeed">3. Website Architecture</h2>
              <p className="define">
                {" "}
                The architecture of the website determines how the users will interact with the website.
              </p>
            </div>
            <div className="first-box">
              <img src={design} alt="" />
              <h2 className="heeed">4. Website Designing</h2>
              <p className="define">
                {" "}
                Our creative web designers in India then convert the architecture into visually appealing web design.
              </p>
            </div>
          </div>
        </div>
  
      <div className="container">
      <div className="d-flex">
        <div className="first-box1">
          <img src={develop} alt="" />
          <h2 className="heeed">5. Web Development</h2>
          <p className="define">
            {" "}
            Our web development team then convert these designs into fully functional web pages.
          </p>
        </div>
        <div className="first-box1">
          <img src={testing} alt="" />
          <h2 className="heeed">6. Website Testing</h2>
          <p className="define">
            {" "}
            Our QA team tests the website in real online environment across all devices.
          </p>
        </div>
        <div className="first-box1">
          <img src={launch} alt="" />
          <h2 className="heeed">7. Website Launch</h2>
          <p className="define">
            {" "}
            After launch we monitor the website for next two months free of cost to check the performance.
          </p>
        </div>
        <div className="first-box1">
          <img src={main} alt="" />
          <h2 className="heeed">8. Website Maintenance</h2>
          <p className="define">
            {" "}
            We make sure the website is updated and backed up regularly
          </p>
        </div>
      </div>
      </div>
    </>
  );
};

export default Card2;
