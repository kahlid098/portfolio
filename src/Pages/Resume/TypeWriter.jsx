import React from "react";
import { TypeAnimation } from "react-type-animation";

function Type() {
  return (
    <div className="typemain">
      <h1 className="tittle-head"> Hi, I’m <span className="fah-color">Fahim</span></h1> 
      <span className="a-color">a
      <TypeAnimation
          sequence={[
            "Full Stack.",
            1000,
            "Professional Coder.",
            1000,
            "Web Developer.",
            1000, 
          ]}
          speed={50} 
          repeat={Infinity}
        />
   </span>
    </div>
  );
}

export default Type;
