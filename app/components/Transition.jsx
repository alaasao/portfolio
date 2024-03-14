"use client";
import React from "react";
import { AnimatePresence, motion } from "framer-motion";
const Transition = () => {
  return (
      <>
          <AnimatePresence>
      <motion.div
        className="fixed top-0 bottom-0 z-30 w-screen h-screen right-full bg-primary dark:bg-[#58E6D9]"
        initial={{ x: "100%", width: "100%" }}
        animate={{ x: "0%", width: "0%" }}
        exit={{ x: ["0%", "100%"], width: ["0%", "100%"] }}
        transition={{ duration: 0.8, ease: "easeInOut" }}
      />
      <motion.div
        className="fixed top-0 bottom-0 z-20 w-screen h-screen right-full bg-light dark:bg-dark"
        initial={{ x: "100%", width: "100%" }}
        animate={{ x: "0%", width: "0%" }}
        transition={{ duration: 0.8, ease: "easeInOut", delay: 0.2 }}
      />
      <motion.div
        className="fixed top-0 bottom-0 z-10 w-screen h-screen right-full bg-dark dark:bg-light"
        initial={{ x: "100%", width: "100%" }}
        animate={{ x: "0%", width: "0%" }}
        transition={{ duration: 0.8, ease: "easeInOut", delay: 0.4 }}
      /></AnimatePresence>
    </>
  );
};

export default Transition;
