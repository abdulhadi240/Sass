import React from "react";
import Navbar from "./Nav/Navbar";
import Index from "./Index";
const Hero = () => {
  return (
    <>
          <Index writing/>

      <div className="relative flex flex-col h-[100vh] items-center justify-center bg-white -mt-10  transition-bg">


        <div className="absolute inset-0 overflow-hidden">
          <div className="jumbo absolute -inset-[10px] opacity-50"></div>
        </div>

        <div className="relative flex flex-col font-[115px] leading-none -tracking-[.035em] items-center text-[100px]  text-transparent transition-colors animate-gradient">
          <h1 className="text-center text-transparent gradient-text animate-gradient">Building Web</h1>
          <h1 className="text-transparent gradient-text animate-gradient">Dreams.</h1>
        </div>
        <div className="mt-10">
          <p className="text-lg  font-medium text-[#687076]  max-w-[720px] text-center">
            Transforming Your Digital Dreams into Online Masterpieces – Building
            Web Dreams: Your Partner in Designing, Developing, and Delivering
            Success
          </p>
        </div>
      </div>
    </>
  );
};

export default Hero;
