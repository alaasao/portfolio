import React from "react";
import AnimatedText from "../components/AnimatedText";
import ArticleCard from "./components/ArticleCard";
import Aritcle from "./components/Aritcle";
import Transition from "../components/Transition";
const page = () => {
  return (
    <div className="max-lg:pt-[50px]">
         <Transition />
      <AnimatedText
        text={"Words Can Change The World! "}
        sep=" "
        className={
          "font-bold text-8xl capitalize mb-[30px]  items-center  max-lg:text-4xl w-full max-lg:mt-[100px]  "
        }
      />
      <div className="grid w-full grid-cols-[1fr_1fr] gap-y-[100px] gap-x-[70px] ] mx-auto mb-[200px] max-lg:grid-cols-[1fr]">
        <ArticleCard
          title={"Build A Custom Pagination Component In Reactjs From Scratch"}
          desc={
            "Learn how to build a custom pagination component in ReactJS from scratch. Follow this step-by-step guide to integrate Pagination component in your ReactJS project."
          }
          time={9}
          picture={"../images/articles/create loading screen in react js.jpg"}
        />
        <ArticleCard
          title={"Build A Custom Pagination Component In Reactjs From Scratch"}
          desc={
            "Learn how to build a custom pagination component in ReactJS from scratch. Follow this step-by-step guide to integrate Pagination component in your ReactJS project."
          }
          time={9}
          picture={"../images/articles/create loading screen in react js.jpg"}
        />
      </div>
      <div className="flex flex-col items-center w-full gap-5 mb-5">
        <h1 className="mx-auto text-8xl">All Articles</h1>{" "}
        <Aritcle
          title="Form Validation In Reactjs: Build A Reusable Custom Hook For Inputs And
        Error Handling"
          day={27}
          mounth={"january"}
          img={"../images/articles/create loading screen in react js.jpg"}
          year={2023}
        />
        <Aritcle
          title="Form Validation In Reactjs: Build A Reusable Custom Hook For Inputs And
        Error Handling"
          day={27}
          mounth={"january"}
          img={"../images/articles/create loading screen in react js.jpg"}
          year={2023}
        />
        <Aritcle
          title="Form Validation In Reactjs: Build A Reusable Custom Hook For Inputs And
        Error Handling"
          day={27}
          mounth={"january"}
          img={"../images/articles/create loading screen in react js.jpg"}
          year={2023}
        />
        <Aritcle
          title="Form Validation In Reactjs: Build A Reusable Custom Hook For Inputs And
        Error Handling"
          day={27}
          mounth={"january"}
          img={"../images/articles/create loading screen in react js.jpg"}
          year={2023}
        />
        <Aritcle
          title="Form Validation In Reactjs: Build A Reusable Custom Hook For Inputs And
        Error Handling"
          day={27}
          mounth={"january"}
          img={"../images/articles/create loading screen in react js.jpg"}
          year={2023}
        />
        <Aritcle
          title="Form Validation In Reactjs: Build A Reusable Custom Hook For Inputs And
        Error Handling"
          day={27}
          mounth={"january"}
          img={"../images/articles/create loading screen in react js.jpg"}
          year={2023}
        />
        <Aritcle
          title="Form Validation In Reactjs: Build A Reusable Custom Hook For Inputs And
        Error Handling"
          day={27}
          mounth={"january"}
          img={"../images/articles/create loading screen in react js.jpg"}
          year={2023}
        />
        <Aritcle
          title="Form Validation In Reactjs: Build A Reusable Custom Hook For Inputs And
        Error Handling"
          day={27}
          mounth={"january"}
          img={"../images/articles/create loading screen in react js.jpg"}
          year={2023}
        />
      </div>
    </div>
  );
};

export default page;
