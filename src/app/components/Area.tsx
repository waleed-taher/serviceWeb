import React from "react";
import Wrapper from "./Wrapper";
import { HiOutlineMailOpen } from "react-icons/hi";
import { GrMapLocation } from "react-icons/gr";
import { BiPhoneCall } from "react-icons/bi";

const Area = () => {
  return (
    <section className="bg-[#24c4da]">
      <Wrapper>
        <div className="flex items-center justify-around ">
          <div className="flex items-center w-1/4 gap-4 px-8 py-8 border-gray-400 border-x">
            {/* email us icon */}
            <HiOutlineMailOpen size={30} />
            {/* email uss info */}
            <div className="flex flex-col ">
              <span className="font-extrabold">Email Us</span>
              <span className="mt-[-4px] ">info@thedesignersagency.com</span>
            </div>
          </div>
          <div className="flex items-center w-1/4 gap-4 py-8 border-r border-gray-400">
            {/* email us icon */}
            <GrMapLocation size={30} />
            {/* email uss info */}
            <div className="flex flex-col ">
              <span className="font-extrabold">Meet Us On</span>
              <span className="mt-[-4px]">
                442 5th Ave, New York, NY 10018, USA
              </span>
            </div>
          </div>
          <div className="flex items-center w-1/4 gap-4 py-8 border-r border-gray-400">
            {/* email us icon */}
            <BiPhoneCall size={30} />
            {/* email uss info */}
            <div className="flex flex-col ">
              <span className="font-extrabold">Give Us Call</span>
              <span className="mt-[-4px]">+1 (855) 554-4057</span>
            </div>
          </div>
        </div>
      </Wrapper>
    </section>
  );
};

export default Area;
