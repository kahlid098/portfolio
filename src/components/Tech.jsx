import React from "react";
import "../Pages/Home.css";

const Tech = (props) => {

  return (
    <>

      <div className="card1">
        <img src={props.myItem.img} alt="" />
        {props.myItem.title}
        </div>
    
     
    </>
  );
};

export default Tech;
