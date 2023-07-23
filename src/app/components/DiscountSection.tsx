import React from "react";
import Wrapper from "./Wrapper";
import DiscountImage from "@/app/assets/DiscountSection.png";
import Image from "next/image";
const DiscountSection = () => {
  return (
    <section className="flex">
      <div className="bg-[rgb(60,65,67)] w-3/5 flex flex-col">
        <span className="mt-4 ml-64 text-lg text-white">Sign up now to</span>
        <h1 className="ml-64 text-5xl font-semibold text-white">
          Avail <span className="text-[#24C4DA]">50%</span>Discount
        </h1>
        <span className="mb-4 ml-64 text-lg text-white uppercase">
          *offer is available for a limited time!
        </span>
      </div>
      <div className="w-3/5 bg-[#24C4DA] flex items-center gap-4 justify-center">
        <input
          placeholder="Your Name"
          className="w-1/3 px-4 py-2 border border-black rounded-full "
        />
        <button className="uppercase bg-[#3C4143] rounded-full py-2 px-8 text-white">
          Next
        </button>
      </div>
    </section>
  );
};

export default DiscountSection;
