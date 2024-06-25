import React from "react";
import "../Chooseus/Chooseus.css";
import mydata from "./ChooseData";

const Chooseus = () => {
  console.log(mydata);

  return (
    <>
    <div className="bcka-color">

        <div className="kind">
          <h3 className="whychoose">Why Choose Us</h3>
          <p className="innovation">Expertise and innovation fuel our development, ensuring tailored solutions that exceed expectations</p>
        </div>
     <div className="icon-box">

     {mydata.map((item, i) => {
        return (
          <div key={i} className="ch-box">
            <i class={item.icon}></i>
            <div className="Choose">{item.dis}</div>
          </div>
        );
      })}
     </div>
     </div>
    </>
  );
};

export default Chooseus;
