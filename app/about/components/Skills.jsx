"use client";

import { motion } from "framer-motion";
import React, { useState, useEffect } from "react";
import Skill from "./Skill";

const Skills = () => {
  return (
    <div>
      <h1 className="w-full font-bold text-center text-8xl">Skills</h1>
      <div className="flex items-center justify-center w-full h-screen mx-auto rounded-full bg-circularLight dark:bg-circularDark max-lg:h-[100vw] ">
        <motion.div
          className="flex items-center justify-center p-6 font-semibold rounded-full cursor-pointer bg-dark text-light shadow-dark max-md:p-3 dark:text-dark dark:bg-white"
          whileHover={{ scale: 1.05 }}
        >
          web
        </motion.div>{" "}
        <Skill name="React" x={"-25vw"} y={"-8vw"} />
        <Skill name="Next.js" x={"25vw"} y={"-12vw"} />
        <Skill name="js" x={"-25vw"} y={"20vw"} />
        <Skill name="css" x={"25vw"} y={"07vw"} />
        <Skill name="tailwind" x={"30vw"} y={"-18vw"} />
        <Skill name="framer-motion" x={"-37vw"} y={"-15vw"} />
        <Skill name="html" x={"-20vw"} y={"9vw"} />
        <Skill name="python" x={"05vw"} y={"-20vw"} />
        <Skill name="django" x={"10vw"} y={"20vw"} />
      </div>
    </div>
  );
};

export default Skills;
