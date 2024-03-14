import React from "react";
import { FaGithub } from "react-icons/fa";
const ArticleCard = ({
  time,
  title,
  desc,

  picture,
  className,
}) => {
  return (
    <div className={`${className} relative `}>
      <div className="absolute w-[101%] h-full bg-black dark:bg-white top-3 left-[-2px] rounded-[30px] z-[-1]"></div>
      <div className="flex flex-col w-full p-6 gap-[30px] items-center bg-light dark:bg-dark rounded-[20px] border-[1px] border-black dark:border-light max-lg:flex-col">
        <div className="overflow-hidden max-lg:w-full rounded-[10px]">
          {" "}
          <img
            src={picture}
            className="w-full  h-full hover:scale-[1.05] cursor-pointer"
            alt=""
          />
        </div>

        <div className="flex flex-col justify-center gap-[15px]  ">
          <div className="text-4xl font-bold capitalize hover:underline">
            <a href="">{title}</a>{" "}
          </div>
          <p className="capitalize text-[18px]"> {desc} </p>
          <div className="text-[#B73E97] dark:text-[#58E6D9] font-bold text-xl">
            {time}&nbsp;min&nbsp;read
          </div>
        </div>
      </div>
    </div>
  );
};

export default ArticleCard;
