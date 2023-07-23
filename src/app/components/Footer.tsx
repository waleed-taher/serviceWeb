import Image from "next/image";
import Logo from "@/app/assets/TDA-Website_02-removebg-preview.png";
import Wrapper from "./Wrapper";
import {
  FaFacebookF,
  FaInstagram,
  FaTwitter,
  FaPinterestP,
} from "react-icons/fa";

const Footer = () => {
  return (
    <footer className="bg-[#393E40] ">
      <Wrapper>
        <div className="flex items-center justify-between mb-8">
          <div>
            <Image src={Logo} alt="logo" />
          </div>
          <div className="flex flex-col gap-2">
            <span className="text-white ">Follow Us On</span>
            <div className="flex items-center gap-3 text-white">
              <button className="p-2 border border-white rounded-full shadow-inner bg-gradient-to-b from-black via-black to-white shadow-black">
                <FaFacebookF size={12} />
              </button>
              <button className="p-2 border border-white rounded-full shadow-inner bg-gradient-to-b from-black via-black to-white shadow-black">
                <FaInstagram size={12} />
              </button>
              <button className="p-2 border border-white rounded-full shadow-inner bg-gradient-to-b from-black via-black to-white shadow-black">
                <FaTwitter size={12} />
              </button>
              <button className="p-2 border border-white rounded-full shadow-inner bg-gradient-to-b from-black via-black to-white shadow-black">
                <FaPinterestP size={12} />
              </button>
            </div>
          </div>
        </div>
        <div>
          <p className="capitalize text-[#00FFFF] ml-12 text-lg mb-5">
            Copyright &copy; The Designer Agency All Rights Reserved{" "}
          </p>
          <p className="pb-8 ml-12 text-sm text-white">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Error quas
            delectus sequi id tempore, excepturi illum? Ut officia earum neque
            deleniti molestias exercitationem dicta, quo incidunt soluta
            adipisci ipsum pariatur? Lorem, ipsum dolor sit amet consectetur
            adipisicing elit. Iusto dicta quaerat modi repellendus magnam
            tenetur, ullam voluptates perferendis eius ad expedita incidunt
            beatae odio maiores ratione debitis mollitia alias excepturi! Lorem
            ipsum dolor sit amet consectetur adipisicing elit. Nemo earum quas
            praesentium excepturi corrupti? Voluptates commodi vel, provident,
            quasi quidem enim magni, quia maiores laborum ipsa minima dolores
            doloremque praesentium.
          </p>
        </div>
      </Wrapper>
    </footer>
  );
};

export default Footer;
