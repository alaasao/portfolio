"use client";
import React from "react";

import { motion } from "framer-motion";

const Skill = ({ name, x, y }) => {
  return (
    <motion.div
      className="absolute flex items-center justify-center px-6 py-3 font-semibold rounded-full cursor-pointer bg-dark max-md:font-thin text-light dark:text-dark dark:bg-light max-md:px-3 max-md:text-[13px] max-md:py-1"
      whileHover={{ scale: 1.05 }}
      initialState={{ x: 0, y: 0 }}
      whileInView={{ x: x, y: y }}
      viewport={{ once: true }}
      animate={{
        // x: (x * windowWidth) / 1440,
        // y: (y * (windowWidth < 768 ? windowWidth * 2.5 : windowWidth)) / 1440,
        // backgroundColor: ["#121212", "#121212"], // You can set the color to change fro now its working but you want notice because it is changing from black to black
      }}
      transition={{
        y: { duration: 2, type: "spring" },
        x: { duration: 2, type: "spring" },
        backgroundColor: { duration: 2.5, repeat: Infinity },
      }}
      // viewport={{once:true}}
    >
      {name}
    </motion.div>
  );
};
export default Skill;
