import React from "react";
import { motion, useScroll } from "framer-motion";
const AnimatedCircle = ({ refference }) => {
  const { scrollYProgress } = useScroll({
    target: refference,
    offset: ["center end", "center center"],
  });
  return (
    <figure className="absolute top-[-21px] left-0 flex items-center justify-center -translate-x-1/2 ">
      <svg
        width={75}
        height={75}
        viewBox="0 0 100 100"
        className=" stroke-dark dark:stroke-light"
      >
        <circle
          cx="75"
          cy="50"
          r="20"
          className="stroke-1 stroke-primary dark:stroke-[#58E6D9]  fill-none"
        />
        <motion.circle
          cx="75"
          cy="50"
          r="20"
          className="stroke-[5px] fill-light dark:fill-dark"
          style={{ pathLength: scrollYProgress }}
        />
        <circle
          cx="75"
          cy="50"
          r="10"
          className="stroke-1 fill-primary dark:fill-[#58E6D9]  "
        />
      </svg>
    </figure>
  );
};

export default AnimatedCircle;

{
  /* <svg
id="progress"
width="50"
height="50"
viewBox="0 0 100 100"
className="absolute  top-[50%] translate-x-[-15%] left-0 flex "
fill="white"
style={{ strokeWidth: 10 }}
>
<circle
  cx="50"
  cy="50"
  r="30"
  pathLength="1"
  className="stroke-purple-800 "
  style={{ strokeWidth: 5 }}
/>

<motion.circle
  cx="50"
  cy="50"
  r="30"
  pathLength="1"
  className=" stroke-black"
  style={{ pathLength: scrollYProgress }}
/>
</svg> */
}
