import React from "react";
import "../Chooseus/Chooseus.css";
import mydata from "./ChooseData";

const Chooseus = () => {
  console.log(mydata);

  return (
    <>
    <div className="bcka-color">

        <div className="kind">
          <h1>Why Choose Us</h1>
          <p className="innovation">Expertise and innovation fuel our development, ensuring tailored solutions that exceed expectations</p>
        </div>
     <div className="icon-box">

     {mydata.map((item, i) => {
        return (
          <div key={i} className="ch-box">
            <i class={item.icon}></i>
            <p className="Choose">{item.dis}</p>
          </div>
        );
      })}
     </div>
     </div>
    </>
  );
};

export default Chooseus;
