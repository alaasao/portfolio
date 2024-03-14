import React from "react";
import { FaGithub } from "react-icons/fa";
const BigCard = ({
  type,
  title,
  desc,
  githubLink,
  siteLink,
  picture,
  className,
}) => {
  return (
    <div className={`${className} relative `}>
      <div className="absolute w-[101%] h-full bg-black dark:bg-white top-3 left-[-2px] rounded-[30px] z-[-1]"></div>
      <div className="flex p-6 gap-[30px] items-center bg-light dark:bg-dark rounded-[20px] border-[1px] border-black dark:border-light max-lg:flex-col">
        <div className="overflow-hidden max-lg:w-full rounded-[10px]">
          {" "}
          <img
            src={picture}
            className="w-full  h-full hover:scale-[1.05] cursor-pointer"
            alt=""
          />
        </div>

        <div className="flex flex-col justify-center gap-[15px]  ">
          <div className="text-[#B73E97] text-2xl font-medium capitalize dark:text-[#58E6D9]">
            {type}{" "}
          </div>
          <div className="text-4xl font-bold capitalize hover:underline">
            <a href="">{title}</a>{" "}
          </div>
          <p className="capitalize text-[18px]"> {desc} </p>
          <div className="flex gap-[20px] items-center">
            <a href={githubLink} target="_blank">
              <FaGithub size={40} />
            </a>
            <a
              href={siteLink}
              className="px-6 py-3 bg-black rounded-[10px] text-white font-[500]  text-2xl dark:bg-white dark:text-dark hover:bg-white hover:text-dark hover:border-2 hover:border-dark dark:hover:text-white dark:hover:bg-dark dark:hover:border-light "
            >
              Visit Project
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default BigCard;
