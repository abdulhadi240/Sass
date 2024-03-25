'use client'
import React from "react";
import { motion } from "framer-motion";
const HeroContent = ({year}) => {
  
  return (
    <div className="flex justify-start sm:justify-between">
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1 }}
        className="flex flex-col font-bold"
      >
        <h1 className=" text-[20px] sm:text-[40px] lg:text-[50px] ">
          JAMSTACK Developer
        </h1>
        <h1 className=" text-[10px] sm:text-[20px] lg:text-[20px]">
          Last Update {year} V//\\
        </h1>
      </motion.div>
    </div>
  );
};

export default HeroContent;
