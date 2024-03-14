import AnimatedText from "./components/AnimatedText";
import Link from "next/link";
import { LinkArrow } from "./icons";
import HireMe from "./components/HireMe";
import Image from "next/image";
import lightBulb from "../public/svgs/miscellaneous_icons_1.svg";
import Transition from "./components/Transition";
export default function Home() {
  return (
    <div className="flex justify-center w-full min-h-screen max-lg:flex-col max-lg:items-center max-lg:mb-[100px]">
      <Transition />
      <div className="w-1/2 max-lg:w-full">
        <img src="../developer-pic-1.png" alt="" className="w-full h-full " />
      </div>
      <div className="self-center w-1/2 max-lg:w-full max-lg:items-center">
        <div className="flex flex-col w-full ">
          <AnimatedText
            text="Turning Vision Into Reality With Code And Design."
            className={
              "font-bold text-7xl capitalize mb-[30px]  items-center !text-left max-lg:!text-center max-lg:text-4xl"
            }
            sep=" "
          />
        </div>

        <p className="text-[20px] font-[400] mb-[30px] max-lg:text-center">
          As a skilled full-stack developer, I am dedicated to turning ideas
          into innovative web applications. Explore my latest projects and
          articles, showcasing my expertise in React.js and web development.
        </p>
        <div className="flex items-center self-start max-lg:justify-center max-lg:self-center ">
          <Link
            href="/dzbrK.pdf"
            download={true}
            target="_blank"
            className="bg-dark flex items-center text-light p-2.5 px-[24px] rounded-lg text-lg hover:text-dark
             hover:bg-white border-2 border-transparent hover:border-dark dark:bg-white dark:text-dark dark:hover:bg-dark
              dark:hover:text-white dark:border-light"
          >
            {" "}
            Resume <LinkArrow className={"!w-6 ml-3"} />
          </Link>
          <Link
            href="alaa.souchi.dz@gmail.com"
            target="_blank"
            className="text-lg font-medium underline capitalize text-dark  p-2.5 px-[24px] dark:text-light"
          >
            contact
          </Link>

          <div className="absolute w-24 right-8 bottom-8 max-lg:hidden">
            <Image src={lightBulb} className="w-full h-auto" alt="jj" />
          </div>
        </div>
      </div>
    </div>
  );
}
