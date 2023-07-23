import React from "react";
import Wrapper from "./Wrapper";
import Image from "next/image";
import PortfolioImage from "@/app/assets/portfolio.jpg";

const Portfolio = () => {
  return (
    <section className="pt-16 pb-16 bg-white">
      <Wrapper>
        <div className="flex flex-col items-center gap-3">
          {/* headings */}
          <h1 className="text-3xl font-extrabold ">
            Looking For <span className="text-[#24c4da]">Design</span>{" "}
            Inspirations?
          </h1>
          <h1 className="text-6xl font-extrabold ">
            <span className="text-[#24c4da]">Check</span> Our{" "}
            <span className="text-[#24c4da]">Creative</span> Work
          </h1>
          <p className="text-xl font-light">
            Creating Captivating Digital Personas: Merging Impeccable Logo and
            Design Expertise to Attract Your Target Audience
          </p>
        </div>
      </Wrapper>
      <div className="mt-8 mb-8">
        <Image
          src={PortfolioImage}
          alt="portfolio images"
          className="w-screen"
        />
      </div>
      <Wrapper>
        <div className="flex flex-col items-center">
          <button className="uppercase text-grray-400 bg-[#24c4da] rounded-full border cursor-pointer font-medium border-gray-300 px-12 py-4">
            View All Our Portfolio
          </button>
        </div>
      </Wrapper>
    </section>
  );
};

export default Portfolio;
