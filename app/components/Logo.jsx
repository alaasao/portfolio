"use client";
import React from "react";
import Link from "next/link";

import { motion } from "framer-motion";

const MotionLink = motion(Link);
const Logo = () => {
  return (
    <div>
      <MotionLink
        href="/"
        className="flex items-center justify-center w-16 h-16 text-2xl font-bold max-lg:text-2xl max-lg:border-2 max-lg:border-white rounded-full bg-dark text-light max-lg:h-[70px] max-lg:w-[70px]  dark:border-2 dark:border-white"
        whileHover={{
          backgroundColor: [
            "#121212",
            "rgba(131,58,180,1)",
            "rgba(253,29,29,1)",
            "rgba(252,176,69,1)",
            "rgba(131,58,180,1)",
            "#121212",
          ],
          transition: { duration: 1.5, repeat: Infinity },
        }}
      >
        CB
      </MotionLink>
    </div>
  );
};

export default Logo;
