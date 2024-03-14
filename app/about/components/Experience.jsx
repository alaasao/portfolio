"use client";
import React, { useRef } from "react";
import { motion, useScroll } from "framer-motion";
import { experiences } from "./data";
import AnimatedCircle from "./AnimatedCircle";
import Exper from "./Exper";
const Experience = () => {
  const ref = useRef(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", " center start"],
  });
  return (
    <div className="w-full">
      <h1 className="mx-auto mt-10 mb-10 text-center text-7xl ">Experinces</h1>
      <div className="relative w-3/4 mx-auto" ref={ref}>
        <motion.div
          className=" absolute left-4 h-[90%] w-[4px] bg-dark origin-top dark:bg-[#58E6D9] "
          style={{ scaleY: scrollYProgress }}
        />
        <ul className="flex flex-col  mb-[300px] ">
          {experiences.map((e) => {
            return (
              <Exper
                position={e.position}
                address={e.address}
                company={e.company}
                companyLink={e.companyLink}
                time={e.time}
                work={e.work}
              />
            );
          })}
        </ul>
      </div>
    </div>
  );
};

export default Experience;
