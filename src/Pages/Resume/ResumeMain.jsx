import React from "react";
import Remain from "./Remain";
import "../Resume/Resume.css";

const ResumeMain = () => {
  const Newdata = [
    {
      id: 1,
      paragraphText: "Analytics websites",
    },
    {
     id: 2,  
      paragraphText: "Booking websites",
    },
    {
        id: 3,
      paragraphText: "Blog websites",
    },
    {
        id: 4,
      paragraphText: "Company websites",
    },
    {
        id: 5,
      paragraphText: "Coaching websites",
    },
    {
        id: 6,
      paragraphText: "Construction websites",
    },
    {
        id: 7,
      paragraphText: "Cleaning websites",
    },
    {
        id:8,
      paragraphText: "Courier & Logistics Management",
    },
    {
        id:9,
      paragraphText: "ChatGPT APIs website",
    },
    {
      paragraphText: "Delivery websites",
    },
    {
      paragraphText: "Ecommerce websites B2B",
    },
    {
      paragraphText: "Ecommerce websites B2C",
    },
    {
      paragraphText: "Ecommerce websites C2B",
    },
    {
      paragraphText: "Ecommerce websites C2C",
    },
    {
      paragraphText: "Ecommerce Online store websites",
    },
    {
      paragraphText: "Ecommerce Marketplace websites",
    },
    {
      paragraphText: "Elearning online courses websites",
    },
    {
      paragraphText: "HR Management System",
    },
    {
      paragraphText: "Hospital Management System",
    },
    {
      paragraphText: "Lifestyle websites",
    },
    {
      paragraphText: "Mining websites",
    },
    {
      paragraphText: "Magento Plugin Development",
    },
    {
      paragraphText: "Magento Theme Development",
    },
    {
      paragraphText: "Matrimonial Web Portal",
    },
    {
      paragraphText: "News Management Portal",
    },
    {
      paragraphText: "Online Classes Web Portal",
    },
    {
      paragraphText: "Online Job Portal",
    },
    {
      paragraphText: "Product websites",
    },
    {
      paragraphText: "Pharmacy Management System",
    },
    {
      paragraphText: "Payment Gateway Integration",
    },
    {
      paragraphText: "Portfolio websites",
    },
    {
      paragraphText: "POS System for Restaurants",
    },
    {
      paragraphText: "Real Estate Management",
    },
    {
      paragraphText: "Security websites",
    },
    {
      paragraphText: "Subscription websites",
    },
    {
      paragraphText: "School Management System",
    },
    {
      paragraphText: "Tour & Travel websites",
    },
    {
      paragraphText: "Wedding websites",
    },
    {
      paragraphText: "Wordpress Plugin Development",
    },
    {
      paragraphText: "Wordpress Theme Development",
    },
    {
      paragraphText: "3rd Party APIs Integration",
    },
  ];

  return (
    <>
    <div className="remain-bg">
    <div class="col-md-12">
        <h4 class="text-center sec-review-ti">Project Undertaken</h4>
        <p class="des-choose">Crafting innovative web experiences with cutting-edge technology to elevate digital presence and user engagement.</p>
    </div>
      
        <div className="conatainer">
          <ul className="Newflax">
            {Newdata.map((card, index) => (
              <Remain key={index} paragraphText={card.paragraphText} />
            ))}
          </ul>
        </div>
      </div>
    </>
  );
};

export default ResumeMain;
