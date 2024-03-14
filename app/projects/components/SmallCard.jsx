import React from "react";
import { FaGithub } from "react-icons/fa";
const SmallCard = ({
  type,
  title,
  githubLink,
  siteLink,
  picture,
  className,
}) => {
  return (
    <div className={`${className} relative `}>
      <div className="absolute w-[101%] h-full bg-black dark:bg-white top-3 left-[-2px] rounded-[30px] z-[-1]"></div>
      <div className="flex p-6 gap-[30px] items-center bg-light dark:bg-dark rounded-[20px] border-[1px] border-black dark:border-light flex-col">
        {" "}
        <div className="overflow-hidden rounded-[10px]">
          {" "}
          <img
            src={picture}
            className="w-full h-full max-lg:w-full  hover:scale-[1.05] cursor-pointer"
            alt=""
          />
        </div>
        <div className="flex flex-col justify-center gap-[15px] w-full ">
          <div className="text-[#B73E97] dark:text-[#58E6D9] text-2xl font-medium capitalize ">
            {type}{" "}
          </div>
          <div className="text-4xl font-bold capitalize hover:underline">
            {" "}
            <a href="">{title}</a>{" "}
          </div>

          <div className="flex gap-[20px] items-center w-full justify-between">
            <a href={siteLink} className="text-2xl underline">
              Visit
            </a>
            <a href={githubLink} target="_blank">
              <FaGithub size={40} />
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SmallCard;
