import React from "react";

const Contact = () => {
  return (
    <section>
      <div
        className="flex flex-col items-center w-full"
        style={{
          backgroundImage: `url('https://i.postimg.cc/sXzq79VG/bg-contactus.jpg')`,
          backgroundSize: "cover",
          backgroundRepeat: "no-repeat",
        }}
      >
        <h1 className="pt-32 mb-3 font-bold text-white text-7xl">
          Let's Get You <span className="text-[#24c4da]">Ranked</span>
        </h1>
        <p className="text-xl font-light text-white">
          Delivering Tailored and Distinctive Website Development Services for
          Your Business of Affordable Prices
        </p>
        <form className="flex flex-col items-center">
          <div className="flex w-full gap-8 mt-8">
            <input
              className="w-full bg-[#1B2526] pr-20 pl-6 py-2 border border-white rounded-full placeholder:text-white "
              placeholder="Full Name"
              name="name"
            />
            <input
              className="w-full bg-[#1B2526] pr-20 pl-6 py-2 border border-white rounded-full placeholder:text-white "
              placeholder="Email"
              name="email"
            />
          </div>
          <div className="flex w-full gap-8 mt-4">
            <input
              className="w-full bg-[#1B2526] pr-20 pl-6 py-2 border border-white rounded-full placeholder:text-white "
              placeholder="Phone Number"
              name="number"
            />
            <input
              className="w-full bg-[#1B2526] pr-20 pl-6 py-2 border border-white rounded-full placeholder:text-white "
              placeholder="Country"
              name="cn"
            />
          </div>
          <div className="flex w-full gap-8 mt-4">
            <input
              className="w-full bg-[#1B2526] pr-20 pl-6 py-2 border border-white rounded-full placeholder:text-white "
              placeholder="I am Interested In"
              name="interest"
            />
            <input
              className="w-full bg-[#1B2526] pr-20 pl-6 py-2 border border-white rounded-full placeholder:text-white "
              placeholder="Forecasted-Budget"
              name="budget"
            />
          </div>
          <div className="flex w-full gap-8 mt-4">
            <textarea
              placeholder="Talk about your project"
              className="w-full resize-none bg-[#1B2526] pr-20 pl-6 pt-4 pb-2 border border-white rounded-lg placeholder:text-white "
              rows={5}
              cols={30}
            ></textarea>
          </div>
          <div className="flex w-full gap-2 mt-4">
            <input
              type="checkbox"
              name="checkbox"
              className="mr-2 border border-black "
            />
            <span className="text-white">
              Please hit the check box to confirm your request
            </span>
          </div>
          <button className="w-1/2 px-8 py-4 mt-4 mb-20 font-semibold text-gray-500 uppercase bg-white rounded-full">
            Contact Our Team
          </button>
        </form>
      </div>
    </section>
  );
};

export default Contact;
