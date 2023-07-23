import Wrapper from "./Wrapper";
import LogoBanner from "@/app/assets/LogoServices.jpg";
const Services = () => {
  return (
    <section className="pt-12 bg-white pb-28">
      <Wrapper>
        <div className="flex flex-col items-center justify-center gap-2">
          <h1 className="text-2xl">Unparalleled Web Solutions</h1>
          <h1 className="text-5xl font-extrabold">
            To <span className="text-[#24C4DA]">Cement</span> Your{" "}
            <span className="text-[#24C4DA] ">Digital</span> Footprint
          </h1>
          <p className=" mx-32 text-center text-[#393B3A]  font-light mb-12">
            Lorem ipsum dolor sit amet consectetur adipisicing elit.
            Repudiandae, doloremque alias temporibus explicabo labore quidem
            earum autem repellendus praesentium odio officiis, iure voluptas
            dolorem ad, velit ratione accusantium fuga corrupti? Lorem ipsum
            dolor sit amet consectetur adipisicing elit. Aperiam, explicabo.
          </p>
        </div>
        <div className="flex justify-between gap-4 mx-20">
          <div
            className="flex flex-col items-start w-1/3 pt-6 bg-white shadow-lg rounded-3xl dark:bg-neutral-700 "
            style={{
              backgroundImage: `url('https://i.postimg.cc/NGXk2Nbd/Logo-Services.jpg')`,
              backgroundSize: "cover",
              backgroundRepeat: "no-repeat",
            }}
          >
            <h5 className="mx-8 mt-40 mb-3 text-6xl font-semibold leading-tight text-white">
              Logo <br /> Design
            </h5>
            <p className="mx-8 mb-20 text-base text-neutral-600 dark:text-neutral-200">
              Lorem ipsum dolor sit, amet consectetur adipisicing elit. Ipsum
              provident veniam illo, officiis animi optio quaerat incidunt.
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Quasi,
              quae.
            </p>
          </div>
          <div
            className="flex flex-col items-start w-1/3 pt-6 bg-white shadow-lg rounded-3xl dark:bg-neutral-700 "
            style={{
              backgroundImage: `url('https://i.postimg.cc/k503w1ST/Web-Services.jpg')`,
              backgroundSize: "cover",
              backgroundRepeat: "no-repeat",
            }}
          >
            <h5 className="mx-8 mt-40 mb-3 text-6xl font-semibold leading-tight text-white ">
              Web <br /> Development
            </h5>
            <p className="mx-8 mb-20 text-base text-neutral-600 dark:text-neutral-200">
              Lorem ipsum dolor sit, amet consectetur adipisicing elit. Ipsum
              provident veniam illo, officiis animi optio quaerat incidunt.
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Quasi,
              quae.
            </p>
          </div>
          <div
            className="flex flex-col items-start w-1/3 pt-6 bg-white shadow-lg rounded-3xl "
            style={{
              backgroundImage: `url('https://i.postimg.cc/1tQ7fLw1/marketing.jpg')`,
              backgroundSize: "cover",
              backgroundRepeat: "no-repeat",
            }}
          >
            <h5 className="mx-8 mt-40 mb-3 text-6xl font-semibold leading-tight text-white">
              Marketing <br /> Collateral
            </h5>
            <p className="mx-8 mb-20 text-base text-neutral-600 dark:text-neutral-200">
              Lorem ipsum dolor sit, amet consectetur adipisicing elit. Ipsum
              provident veniam illo, officiis animi optio quaerat incidunt.
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Quasi,
              quae.
            </p>
          </div>
        </div>
      </Wrapper>
    </section>
  );
};

export default Services;
