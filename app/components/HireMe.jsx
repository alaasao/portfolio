"use client";
import React, { useEffect, useState } from "react";
import { CircularText } from "../icons";
import Link from "next/link";
import { useTheme } from "next-themes";
import Image from "next/image";
import dynamic from "next/dynamic";

const HireMe = () => {
  // const [isClient, setIsClient] = useState(false)

  // useEffect(() => {
  //   setIsClient(true)
  // }, [])
  const { setTheme, resolvedTheme } = useTheme();
  return (
    <div className="fixed max-lg:absolute flex items-center justify-center w-64 lg:left-4 bottom-4 max-lg:right-[-10px] max-lg:w-32  max-lg:top-[-10px] max-lg:h-32 ">
      <div className="relative p-0">
        {resolvedTheme === "dark" ? (
          <img
            src="../../webwhite-transformed.png"
            className="w-[250px] h-[250px] animate-spin max-lg:h-32 max-lg:w-32"
          />
        ) : (
          <CircularText
            className={
              "animate-spin w-[200px] h-[200px] max-lg:h-20 max-lg:w-20"
            }
          />
        )}
        <Link
          href="/hireme"
          target="_blank"
          className="absolute z-[100] top-[50%] translate-y-[-50%] text-[16px] left-[50%] translate-x-[-50%] shadow-md font-medium bg-dark text-light rounded-[50%] h-[80px] w-[80px] flex items-center justify-center
          hover:text-dark hover:bg-light dark:bg-light border border-dark dark:border-white dark:text-dark dark:hover:bg-dark dark:hover:text-white max-lg:h-8 max-lg:w-8 max-lg:text-[8px]"
        >
          Hire me
        </Link>
      </div>
    </div>
  );
};

export default dynamic(() => Promise.resolve(HireMe), { ssr: false });
