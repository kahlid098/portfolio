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
            1000, // Wait for 1 second
            "Professional Coder.",
            1000, // Wait for 1 second
            "Web Developer.",
            1000, // Wait for 1 second
          ]}
          speed={50} // Speed in milliseconds per character
          repeat={Infinity}
        />
   </span>
    </div>
  );
}

export default Type;
