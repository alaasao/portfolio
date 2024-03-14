import Link from "next/link";
import React from "react";

const Footer = () => {
  return (
    <footer className="flex items-center justify-between w-full px-[6.7vw] py-8 text-lg font-medium capitalize border-t-2 border-dark dark:border-light max-md:flex-col dark:bg-[#1A1A1B]  ">
      <span className="">
        {new Date().getFullYear()}&copy; All rights reserved.
      </span>
      <div className="translate-x-[-50%] max-md:translate-x-0">
        Build With{" "}
        <span className="text-2xl text-primary dark:text-[#58E6D9]">
          &#9825;
        </span>
        by&nbsp;
        <Link
          href="/sao"
          target="_blank"
          className="underline underline-offset-2"
        >
          Sao
        </Link>
      </div>
      <span>say hello</span>
    </footer>
  );
};

export default Footer;
