import React from "react";
import Wrapper from "./Wrapper";
import { TiTick } from "react-icons/ti";
import HeroBanner from "@/app/assets/TDA-Website_05-removebg-preview.png";
import Image from "next/image";

const Hero = () => {
  return (
    <section>
      <Wrapper>
        <div className="flex items-center justify-around mb-12 gap-60">
          {/* div for content */}
          <div className="flex flex-col gap-y-8">
            <div className="flex flex-col gap-y-1">
              <span className="text-3xl text-white uppercase">
                Creative & Customized
              </span>

              <span className="text-6xl font-semibold text-[#00FFFF] uppercase">
                Website Design
              </span>

              <span className="text-3xl text-white uppercase ">
                Adding Life to Your Brand Story
              </span>
            </div>
            <div className="flex gap-12 ">
              <span className="flex items-center gap-3">
                <TiTick size={18} className="bg-[#24C4DA] rounded-full" />
                <span className="text-lg text-white">Unlimited Web Pages</span>
              </span>
              <span className="flex items-center gap-3">
                <TiTick size={18} className="bg-[#24C4DA] rounded-full" />
                <span className="text-lg text-white">Free Logo Design</span>
              </span>
            </div>
            <div className="flex gap-12 ">
              <span className="flex items-center gap-3">
                <TiTick size={18} className="bg-[#24C4DA] rounded-full" />
                <span className="text-lg text-white">Unlimited Web Pages</span>
              </span>
              <span className="flex items-center gap-3">
                <TiTick size={18} className="bg-[#24C4DA] rounded-full" />
                <span className="text-lg text-white">Money Back Guarantee</span>
              </span>
            </div>
            <div className="space-x-4">
              <button className="items-center px-12 py-2 text-xl font-medium uppercase bg-white rounded-full">
                Order Your logo Now
              </button>
              <button className="px-8 py-2 text-xl font-medium uppercase bg-white rounded-full">
                Live Chat
              </button>
            </div>
          </div>

          {/* div for image */}
          <div className=" rounded-full w-[500px] h-[500px] bg-[#186D79] max-2xl:hidden">
            <div className="">
              <Image
                src={HeroBanner}
                alt="heroImg"
                // width={650}
                // height={650}
                className="mt-4 ml-4"
              />
            </div>
          </div>
          {/* image ends */}
        </div>
      </Wrapper>
    </section>
  );
};

export default Hero;
