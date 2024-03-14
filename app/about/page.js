import React from "react";
import AnimatedText from "../components/AnimatedText";
import AnimatedNumber from "./components/AnimatedNumber";
import Skills from "./components/Skills";
import Experience from "./components/Experience";
import Education from "./components/Education";
import Transition from "../components/Transition";
const page = () => {
  return (
    <div className="">
      <Transition />
      <AnimatedText
        text="Passion Fuels Purpose!"
        className={
          "flex items-center justify-center w-full font-bold text-9xl flex-wrap mb-10 max-lg:w-[80vw] max-md:text-5xl my-10 mb14 "
        }
        sep=" "
      />
      <div className="w-full gap-10 mb-10 lg:w-full lg:grid-cols-8 lg:grid max-md:flex max-md:flex-col max-md:items-center md:grid md:grid-cols-6 md:grid-rows-[1fr_100px]">
        <div className="flex flex-col items-start font-medium lg:col-span-3 md:col-span-3 max-md:order-2 ">
          <h2 className="text-lg !font-bold text-dark/75 dark:text-white">
            Biography
          </h2>
          <p className="">
            Hi, I'm <span className="font-bold">CodeBucks</span>, a web
            developer and UI/UX designer with a passion for creating beautiful,
            functional, and user-centered digital experiences. With 4 years of
            experience in the field. I am always looking for new and innovative
            ways to bring my clients' visions to life.
          </p>
          <p className="my-4">
            I believe that design is about more than just making things look
            pretty – it's about solving problems and creating intuitive,
            enjoyable experiences for users.
          </p>
          <p>
            {" "}
            Whether I'm working on a website, mobile app, or other digital
            product, I bring my commitment to design excellence and
            user-centered thinking to every project I work on. I look forward to
            the opportunity to bring my skills and passion to your next project.
          </p>
        </div>
        <div className="relative p-8 border-2 lg:col-start-4 lg:col-span-3 h-max rounded-2xl border-dark bg-light max-md:order-1 max-md:w-[90%] md:col-span-3">
          <div className="lg:h-[103%] lg:w-[102%] absolute top-3 -right-3  z-[-1] rounded-[2rem] "></div>
          <img
            src="../../developer-pic-2.jpg"
            className="w-full h-auto rounded-2xl"
          />
        </div>
        <div className="flex  text-7xl items-end justify-between lg:col-span-2 max-md:order-3 md:col-span-6 md:col-start-1 md:flex-row max-md:gap-10  max-md:h-[100px] lg:flex lg:flex-col ">
          <div className="flex flex-col items-end justify-between max-md:items-center ">
            <span className="inline-block font-bold max-md:text-4xl ">
              +<AnimatedNumber value={40} />
            </span>
            <h2 className="text-xl font-medium capitalize text-dark/75 max-md:text-[16px] dark:text-light">
              {" "}
              satisfied clients
            </h2>
          </div>
          <div className="flex flex-col items-end justify-between max-md:items-center">
            <span className="inline-block font-bold max-md:text-4xl ">
              +<AnimatedNumber value={50} />
            </span>
            <h2 className="text-xl font-medium capitalize text-dark/75 max-md:text-[16px]  dark:text-light">
              {" "}
              Projects complited
            </h2>
          </div>
          <div className="flex flex-col items-end justify-between max-md:items-center">
            <span className="inline-block font-bold max-md:text-4xl ">
              +<AnimatedNumber value={4} />
            </span>
            <h2 className="text-xl font-medium capitalize text-dark/75 max-md:text-[16px]  dark:text-light">
              {" "}
              Years of experience
            </h2>
          </div>
        </div>
      </div>
      <Skills />
      <Experience />
      <Education />
    </div>
  );
};

export default page;
