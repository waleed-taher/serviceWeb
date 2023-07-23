import Image from "next/image";
import IdeaImage from "@/app/assets/TDA-Website_03.jpg";

const IdeaSection = () => {
  return (
    <div
      className="flex items-center gap-48 pt-10"
      style={{
        backgroundImage: `url('https://i.postimg.cc/RCNGv7WT/TDA-Website-12.jpg')`,
        backgroundSize: "cover",
        backgroundRepeat: "no-repeat",
      }}
    >
      <div className="flex flex-col ml-64 gap-y-3">
        <h1 className="text-[#24c4da] text-3xl font-medium">
          Make you First Move
        </h1>
        <h1 className="text-5xl font-semibold text-white uppercase ">
          Share <span className="text-[#24C4DA]">Idea</span> With{" "}
          <span className="text-[#24C4DA]">Us</span>
        </h1>
        <div className="flex gap-6">
          <button className="px-10 py-4 text-lg text-black uppercase bg-white rounded-full">
            Get Started
          </button>
          <button className="px-10 py-4 text-lg text-white uppercase bg-[#24c4da] rounded-full">
            Live Chat
          </button>
        </div>
      </div>
      <div className="mt-[-92.5px] ">
        {/* img from photshop */}
        <Image src={IdeaImage} alt="ideaimg" width={550} />
      </div>
    </div>
  );
};

export default IdeaSection;
