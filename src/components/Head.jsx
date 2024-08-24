import React from "react";
import bfslogo from "../assets/BFS-logo.png";
import biharlogo from "../assets/Bihar-Logo.png";
import Slider from "../components/Slider";

function Head() {
  return (
    <>
      <div id="home" className="relative flex flex-col lg:flex-row items-center justify-between w-full py-4 bg-white">
        {/* Left Logo on All Devices */}
        <div className="absolute lg:relative lg:left-4 lg:top-1/2 lg:-translate-y-1/2 flex items-center justify-start w-full lg:w-auto">
          <img
            src={bfslogo}
            alt="BFS Logo"
            className="h-16 w-auto lg:h-20"
          />
        </div>
        
        {/* Centered Text */}
        <div className="flex-1 text-center px-4 lg:px-8 lg:mx-0 mx-10">
          <h1 className="text-2xl lg:text-3xl text-black">
            बिहार अग्निशमन सेवा (Bihar Fire Service), <br />
            Govt.of Bihar
          </h1>
        </div>

        {/* Right Logo on All Devices */}
        <div className="absolute lg:relative lg:right-4 lg:top-1/2 lg:-translate-y-1/2 flex items-center justify-end w-full lg:w-auto">
          <img
            src={biharlogo}
            alt="Bihar Logo"
            className="h-16 w-auto lg:h-20"
          />
        </div>
      </div>
      <Slider />
    </>
  );
}

export default Head;
