"use client";
import Link from "next/link";
import React, { useState } from "react";
import Logo from "./Logo";
import { usePathname } from "next/navigation";
import HireMe from "./HireMe";
import {
  TwitterIcon,
  LinkedInIcon,
  GithubIcon,
  PinterestIcon,
  DribbbleIcon,
} from "../icons";

import { motion } from "framer-motion";
import ThemeSwitch from "./ThemeSwitch";
const CustomLink = ({ href, title, className }) => {
  const currentPath = usePathname();

  return (
    <Link href={href} className={`${className} relative group  cursor-pointer`}>
      {title}
      <span
        className={`absolute left-0 inline-block w-0 h-[1px] -bottom-0.5 max-lg:dark:bg-dark max-lg:bg-light bg-dark dark:bg-light group-hover:w-full transition-all ease duration-300
      ${currentPath === href ? "w-full" : "w-0"}`}
      ></span>
    </Link>
  );
};
const Nav = () => {
  let path = usePathname();
  let [isOpen, setIsOpen] = useState(false);

  return (
    <div className="relative ">
      {" "}
      {path === "/" ? <HireMe /> : null}
      <nav className="px-[7vw] py-[40px] flex justify-between items-center w-full  dark:bg-[#1A1A1B] max-lg:z-[10] ">
        <div className="max-lg:hidden">
          <CustomLink href={"/"} title={"Home"} className={"mr-4"} />
          <CustomLink href="/about" title={"About"} className="mx-4" />
          <CustomLink href="/projects" title={"Projects"} className="mx-4" />
          <CustomLink href="/articles" title={"Articles"} className="ml-4" />
        </div>
        <div
          className="flex flex-col cursor-pointer lg:hidden"
          onClick={() => {
            setIsOpen((prev) => !prev);
          }}
        >
          <div
            className={`bg-dark dark:bg-white h-0.5 w-6 rounded-sm transition-all ease-in-out duration-200 ${
              isOpen ? "rotate-45 translate-y-1.5" : ""
            }`}
          />
          <div
            className={`bg-dark dark:bg-white h-0.5 w-6 rounded-sm  my-1 transition-all ease-in-out duration-200 ${
              isOpen ? "opacity-0" : "opacity-100 "
            }`}
          />
          <div
            className={`bg-dark dark:bg-white h-0.5 w-6 rounded-sm transition-all ease-in-out duration-200 ${
              isOpen ? "-rotate-45 -translate-y-1.5" : ""
            }`}
          />
        </div>
        <div className="flex items-center max-lg:hidden hover:cursor-pointer">
          <motion.a
            href="/"
            target="_blank"
            whileHover={{
              y: -2,
            }}
            whileTap={{ scale: 0.5 }}
            className="w-6 mr-3"
          >
            <TwitterIcon />
          </motion.a>
          <motion.a
            href="/"
            target="_blank"
            className="w-6 mx-3"
            whileHover={{
              y: -2,
            }}
            whileTap={{ scale: 0.5 }}
          >
            <GithubIcon />
          </motion.a>
          <motion.a
            href="/"
            target="_blank"
            className="w-6 mx-3"
            whileHover={{
              y: -2,
            }}
            whileTap={{ scale: 0.5 }}
          >
            <LinkedInIcon />
          </motion.a>
          <motion.a
            href="/"
            target="_blank"
            className="w-6 mx-3"
            whileHover={{
              y: -2,
            }}
            whileTap={{ scale: 0.5 }}
          >
            <PinterestIcon />
          </motion.a>
          <motion.a
            href="/"
            target="_blank"
            className="w-6 ml-3"
            whileHover={{
              y: -2,
            }}
            whileTap={{ scale: 0.5 }}
          >
            <DribbbleIcon />
          </motion.a>
          <motion.div
            className="w-6 ml-3 "
            whileHover={{
              y: -2,
            }}
            whileTap={{ scale: 0.5 }}
          >
            <ThemeSwitch />
          </motion.div>
        </div>
      </nav>
      <nav
        onClick={() => {
          setIsOpen((prev) => !prev);
        }}
        className={`flex flex-col items-center h-[50vh] justify-center rounded-lg absolute top-1/2 right-1/2 translate-x-1/2 translate-y-[40%] dark:bg-[#BEBFBE] bg-[#303030]  max-lg:z-[100] transition-all ease-linear origin-center  ${
          isOpen ? " opacity-[99%] w-[80vw] " : "opacity-0 w-0"
        } `}
      >
        <div className="flex flex-col items-center w-1/2 text-white dark:text-dark ">
          <CustomLink href={"/"} title={"Home"} className={"mb-3"} />
          <CustomLink href="/about" title={"About"} className="mb-3" />
          <CustomLink href="/projects" title={"Projects"} className="mb-3" />
          <CustomLink href="/articles" title={"Articles"} className="mb-6" />
        </div>

        <div className="flex items-center hover:cursor-pointer">
          <motion.a
            href="/"
            target="_blank"
            whileHover={{
              y: -2,
            }}
            whileTap={{ scale: 0.5 }}
            className="w-6 mr-3"
          >
            <TwitterIcon />
          </motion.a>
          <motion.a
            href="/"
            target="_blank"
            className="w-6 mx-3"
            whileHover={{
              y: -2,
            }}
            whileTap={{ scale: 0.5 }}
          >
            <GithubIcon className={"dark:border-1 dark:border-dark"} />
          </motion.a>
          <motion.a
            href="/"
            target="_blank"
            className="w-6 mx-3"
            whileHover={{
              y: -2,
            }}
            whileTap={{ scale: 0.5 }}
          >
            <LinkedInIcon />
          </motion.a>
          <motion.a
            href="/"
            target="_blank"
            className="w-6 mx-3"
            whileHover={{
              y: -2,
            }}
            whileTap={{ scale: 0.5 }}
          >
            <PinterestIcon />
          </motion.a>
          <motion.a
            href="/"
            target="_blank"
            className="w-6 ml-3"
            whileHover={{
              y: -2,
            }}
            whileTap={{ scale: 0.5 }}
          >
            <DribbbleIcon />
          </motion.a>
          <motion.div
            className="w-6 ml-3 "
            whileHover={{
              y: -2,
            }}
            whileTap={{ scale: 0.5 }}
          >
            <ThemeSwitch />
          </motion.div>
        </div>
      </nav>
      <div className="absolute right-[50%]  top-6 max-lg:top-8  translate-x-[50%] max-lg:translate-y-[-20%] z-10">
        <Logo />
      </div>
    </div>
  );
};

export default Nav;
