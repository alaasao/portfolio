"use client";
import React, { useRef } from "react";
import { motion, spring, useScroll } from "framer-motion";
import { experiences } from "./data";
import AnimatedCircle from "./AnimatedCircle";

const Exper = ({ position, company, companyLink, address, time, work }) => {
  const ref = useRef(null);

  return (
    <li ref={ref} className="relative my-8 first:mt-0 last:mb-0">
      <AnimatedCircle refference={ref} />
      <motion.div
        className="flex flex-col w-[60%] mx-auto    "
        initial={{ y: 100 }}
        whileInView={{ y: 0 }}
        transition={{ duration: 0.5, type: spring }}
        viewport={{ once: true, amount: 0.1 }}
      >
        <div className="flex gap-[10px] font-bold text-2xl">
          <div> {position} </div>{" "}
          <div className="text-[#B73E97] dark:text-[#58E6D9] ">@{company}</div>
        </div>
        <div className="flex font-medium text-[#515151] max-lg:flex-col ">
          <div>{time}</div><span className="max-lg:hidden">|</span>
          <div>{address}</div>
        </div>
        <div className="w-full font-medium">{work}</div>
      </motion.div>
    </li>
  );
};
export default Exper;
