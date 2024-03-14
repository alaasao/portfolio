import React from "react";
import AnimatedText from "../components/AnimatedText";
import BigCard from "./components/BigCard";
import SmallCard from "./components/SmallCard";
import Transition from "../components/Transition";
const page = () => {
  return (
    <div className="flex flex-col items-center w-full ">
      <Transition />
      <AnimatedText
        text={"Imagination Trumps Knowledge!"}
        className={
          "font-bold text-9xl capitalize mb-[30px]  items-center  max-lg:text-4xl w-full   "
        }
        sep=" "
      />
      <div className="grid w-full grid-cols-[1fr_1fr] gap-y-[100px] max-lg:gap-[50px] gap-x-[70px] max-xl:grid-cols-[1fr] mx-auto mb-[200px]">
        <BigCard
          type="Featured Project"
          title={"Crypto Screener Application"}
          picture={"../images/projects/crypto-screener-cover-image.jpg"}
          githubLink={"https://github.com/codebucks27/CryptoBucks-Final-Code"}
          siteLink={
            "https://devdreaming.com/videos/build-crypto-screener-app-with-react-tailwind-css"
          }
          desc={
            "A feature-rich Crypto Screener App using React, Tailwind CSS, Context API, React Router and Recharts. It shows detail regarding almost all the cryptocurrency. You can easily convert the price in your local currency."
          }
          className="col-span-2 max-xl:col-span-1"
        />
        <SmallCard
          title={"NFT collection Website"}
          type="Website Template"
          githubLink={
            "https://github.com/codebucks27/The-Weirdos-NFT-Website-Starter-Code"
          }
          siteLink={
            "https://devdreaming.com/videos/create-nft-collection-website-reactjs"
          }
          picture={"../images/projects/nft-collection-website-cover-image.jpg"}
        />
        <SmallCard
          title={"NFT collection Website"}
          type="Website Template"
          githubLink={
            "https://github.com/codebucks27/The-Weirdos-NFT-Website-Starter-Code"
          }
          siteLink={
            "https://devdreaming.com/videos/create-nft-collection-website-reactjs"
          }
          picture={"../images/projects/nft-collection-website-cover-image.jpg"}
        />
        <BigCard
          type="Featured Project"
          title={"Crypto Screener Application"}
          picture={"../images/projects/crypto-screener-cover-image.jpg"}
          githubLink={"https://github.com/codebucks27/CryptoBucks-Final-Code"}
          siteLink={
            "https://devdreaming.com/videos/build-crypto-screener-app-with-react-tailwind-css"
          }
          desc={
            "A feature-rich Crypto Screener App using React, Tailwind CSS, Context API, React Router and Recharts. It shows detail regarding almost all the cryptocurrency. You can easily convert the price in your local currency."
          }
          className="col-span-2 max-xl:col-span-1"
        />
        <SmallCard
          title={"NFT collection Website"}
          type="Website Template"
          githubLink={
            "https://github.com/codebucks27/The-Weirdos-NFT-Website-Starter-Code"
          }
          siteLink={
            "https://devdreaming.com/videos/create-nft-collection-website-reactjs"
          }
          picture={"../images/projects/nft-collection-website-cover-image.jpg"}
        />
        <SmallCard
          title={"NFT collection Website"}
          type="Website Template"
          githubLink={
            "https://github.com/codebucks27/The-Weirdos-NFT-Website-Starter-Code"
          }
          siteLink={
            "https://devdreaming.com/videos/create-nft-collection-website-reactjs"
          }
          picture={"../images/projects/nft-collection-website-cover-image.jpg"}
        />
      </div>
    </div>
  );
};

export default page;
