import React from "react";
import "../About/AboutHero.css";
import Fahim from "../../components/image/FAHIM.jpg";

const AboutHero = () => {
  return (
    <>
      <div className="about">
        <h1 className="hed">ABOUT US</h1>
        <h3>Full Stack Web Developer.</h3>
        <h3 className="headaboy">
          You only live once, but if you do it right, once is enough.
        </h3>
      </div>

      <div className="containerr">
        <div className="flax">
          <div className="image-div">
            <img src={Fahim} alt="" />
          </div>
          <div className="pardiv">
            <p >
              My name is Fahim Shakir. In the discipline of Web Development and
              Design I am full stack prominent as PHP Programmer / Web Developer
              / Web Freelancer. I am reputated by my outstanding work, excellent
              programming skills and versatile nature of program coding with
              Software and Website Development.
            </p>
            <p>
              I am full stack developed many web based applications. I am
              persistent in developing the web application as well as dynamic
              websites. It’s my smart intellect and confidence level that keeps
              me pushing to work beyond boundaries in the world of Application
              and Web Development. I have experience & knowledge of many
              programming languages like C,C++,JAVA,C#. I am always keen to
              reach out to web developments in the field of PHP-Mysql With Open
              Source CMS like Joomla, Drupal, WordPress, Magento, Opencart,
              Shopify, Woocommerce, Laravel, Symfony, GraphQL, Os-commerce,
              Osclass, Xcart, all types of payment gateway integration, Flights,
              Hotel, Bus, Bank EMI all types of 3rd Party API integration etc.
              and Digital experience (SEO,SMO,GTM,GA4,GMC etc) Project manage
              from cloud server AWS, Jira, Git, In my 11.5 years of career I am
              well versed and have a strong hand on PHP, Mysql, Mysqli, MongoDB,
              Ajax, Jquery, Angular, and JavaScript as Scripting Languages. The
              web tools I often used for Web developing are Joomla, Megento,
              WordPress, Woocommerce, Drupal, Opercart. I have multiple
              professionals working individually and in teams as per the project
              requirements.
            </p>
          </div>
        </div>

        <div className="second-div">
          <p>
            Work on individual modules- The modules developed by each team
            member is then integrated, and the functionality of the complete
            system is tested. Each team member is examined, based on the tasks
            assigned & performed by them.
          </p>
          <p>
            <strong>Mission:</strong> My mission as a software developer working
            in Software industry is to cope up with the current needs by the end
            user. I mentioned this statement in my article,our Mission as
            Software Developers.
          </p>
          <p>
            <strong>Vision:</strong> I am keen to help software developers learn
            and grow as professionals. Enhance professionalism& craze in the IT
            industry. Make the IT industry a more delightful and rewarding field
            to work in. I aim to achieve this by: Continuous content posting, a
            content rich with knowledge & literature once every two weeks. These
            articles are idea centric & share my thoughts, ideas & experience
            concerning software development, particularly in the areas of
            PHP&MYSQL and enterprise business software. I am also keen on
            continuous learning of software developers and other IT
            professionals.
          </p>
        </div>
      </div>
    </>
  );
};

export default AboutHero;
