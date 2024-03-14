"use client";
import { useMotionValue, useScroll } from "framer-motion";
import React, { useRef } from "react";
import { motion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";
const MovingImg = ({ title, img, link }) => {
  const x = useMotionValue(0);
  const y = useMotionValue(0);
  const imgRef = useRef(null);
  function HandleMouse(event) {
    imgRef.current.style.display = "inline-block";
    console.log(imgRef);
    console.log(event.pageX);
    x.set(event.pageX);
    y.set(0);
  }
  function HandleMouseLeave(event) {
    imgRef.current.style.display = "none";
    x.set(0);
    y.set(0);
  }
  return (
    <Link
      href={link}
      target="_blank"
      onMouseMove={HandleMouse}
      onMouseLeave={HandleMouseLeave}
    >
      <h2 className="text-2xl font-thin capitalize hover:underline">
        {" "}
        {title}
      </h2>
      <motion.img
        style={{ x: x, y: y }}
        src={img}
        className="absolute z-10 hidden h-auto rounded-lg w-96"
        ref={imgRef}
        alt={title}
      ></motion.img>
    </Link>
  );
};
const Aritcle = ({ title, img, day, mounth, year }) => {
  return (
    <motion.div
      initial={{ y: 100 }}
      whileInView={{ y: 0 }}
      transition={{ duration: 0.5, type: "spring" }}
      viewport={{ once: true, amount: 0.1 }}
      className="flex items-center justify-between w-full 
     rounded-[20px] border-2 p-6 relative max-lg:flex-col max-lg:items-start"
    >
      <MovingImg title={title} img={img} link="" />
      <div className="text-[#B73E97] dark:text-[#58E6D9] font-normal text-xl">
        {day}&nbsp;{mounth},{year}
      </div>
    </motion.div>
  );
};

export default Aritcle;
