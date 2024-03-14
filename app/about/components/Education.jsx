"use client";
import React, { useRef } from "react";
import { motion, useScroll } from "framer-motion";
import { Educations } from "./data";
import AnimatedCircle from "./AnimatedCircle";
import Educ from "./Educ";
const Education = () => {
  const ref = useRef(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", " center start"],
  });
  return (
    <div className="w-full">
      <h1 className="mx-auto text-center text-7xl mb-[100px] ">Education</h1>
      <div
        className="relative w-3/4 mx-auto mb-[500px] max-lg:mb-[100px] max-md:mb-0"
        ref={ref}
      >
        <motion.div
          className=" absolute left-4 h-[90%] w-[4px] bg-dark origin-top dark:bg-white"
          style={{ scaleY: scrollYProgress }}
        />
        <ul className="flex flex-col  mb-[300px] ">
          {Educations.map((e) => {
            return (
              <Educ
                title={e.title}
                desc={e.desc}
                address={e.address}
                time={e.time}
              />
            );
          })}
        </ul>
      </div>
    </div>
  );
};

export default Education;
