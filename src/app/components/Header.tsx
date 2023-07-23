import React from "react";
import Wrapper from "./Wrapper";
import Image from "next/image";
import Logo from "@/app/assets/TDA-Website_02-removebg-preview.png";
import { TiMessages } from "react-icons/ti";
import { BiPhoneCall } from "react-icons/bi";
import { RxHamburgerMenu } from "react-icons/rx";

const Header = () => {
  return (
    <header className="mb-8">
      <Wrapper>
        <div className="flex items-center justify-between">
          <div>
            <Image src={Logo} alt="Logo" className="cursor-pointer" />
          </div>
          <nav className="flex items-center gap-8">
            <div className="flex items-center gap-4">
              <TiMessages size={30} className="text-[#00FFFF] " />
              <div className="text-white">
                <span className="ml-1 text-xl leading-none">Talk</span> <br />{" "}
                With Us
              </div>
            </div>
            <div className="flex items-center gap-4">
              <BiPhoneCall size={30} className="text-[#00FFFF] " />
              <div className="text-white">
                <span className="ml-1 text-xl leading-none">Give Us Call</span>{" "}
                <br /> +1 (512) 961-8675
              </div>
            </div>
            <div className="p-2 text-black font-bold bg-[#00FFFF] rounded-lg cursor-pointer">
              <RxHamburgerMenu />
            </div>
          </nav>
        </div>
      </Wrapper>
    </header>
  );
};

export default Header;
