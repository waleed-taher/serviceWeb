import React from "react";
import Wrapper from "./Wrapper";

const Pricing = () => {
  return (
    <section className="pt-16 pb-16 bg-white">
      <Wrapper>
        <div className="flex flex-col items-center gap-3">
          {/* headings */}
          <h1 className="text-5xl font-extrabold ">
            Competitive <span className="text-[#24c4da]">Pricing</span>
          </h1>
          <p className="text-xl font-light">
            Your Buisness, Your Website. Customized Development Services with
            Budget-Friendly Pricing.
          </p>
        </div>
        {/* pricing menus */}
        <div className="relative items-center w-full mx-auto md:px-12 lg:px-16 max-w-7xl">
          <div>
            <div className="relative p-10 space-y-12 overflow-hidden lg:space-y-0 lg:grid lg:grid-cols-3 lg:gap-x-8 rounded-xl">
              <div className="relative flex flex-col p-8 bg-white border border-black rounded-lg">
                <div className="flex-1">
                  <h3 className="text-xl font-semibold text-neutral-600">
                    Startup Website
                  </h3>
                  <p className="flex flex-col items-baseline mt-4 text-neutral-600">
                    <del className="text-2xl font-normal text-gray-400">
                      $500.00 Only
                    </del>
                    <span className="text-5xl font-extrabold tracking-tight text-[#24c4da]">
                      $249.00
                    </span>
                    <span className="ml-1 text-xl font-semibold"></span>
                  </p>
                  <p className="mt-6 text-gray-500">
                    Suitable for newly formed organizations or small incubated
                    startups
                  </p>

                  {/* <!-- Feature list --> */}
                  <ul role="list" className="pt-6 mt-6 space-y-6 border-t">
                    <span className="text-lg font-semibold text-neutral-600">
                      What's included?
                    </span>

                    <li className="flex">
                      <div className="inline-flex items-center w-6 h-6 bg-[#24c4da] rounded-xl">
                        <svg
                          className="flex-shrink-0 w-4 h-4 mx-auto text-white"
                          xmlns="http://www.w3.org/2000/svg"
                          fill="none"
                          viewBox="0 0 24 24"
                          stroke="currentColor"
                          aria-hidden="true"
                        >
                          <path
                            stroke-linecap="round"
                            stroke-linejoin="round"
                            stroke-width="2"
                            d="M5 13l4 4L19 7"
                          ></path>
                        </svg>
                      </div>
                      <span className="ml-3 text-neutral-600">
                        5 Stack Photos
                      </span>
                    </li>

                    <li className="flex">
                      <div className="inline-flex items-center w-6 h-6 bg-[#24c4da] rounded-xl">
                        <svg
                          className="flex-shrink-0 w-4 h-4 mx-auto text-white"
                          xmlns="http://www.w3.org/2000/svg"
                          fill="none"
                          viewBox="0 0 24 24"
                          stroke="currentColor"
                          aria-hidden="true"
                        >
                          <path
                            stroke-linecap="round"
                            stroke-linejoin="round"
                            stroke-width="2"
                            d="M5 13l4 4L19 7"
                          ></path>
                        </svg>
                      </div>
                      <span className="ml-3 text-neutral-600">
                        3 Page Website
                      </span>
                    </li>

                    <li className="flex">
                      <div className="inline-flex items-center w-6 h-6 bg-[#24c4da] rounded-xl">
                        <svg
                          className="flex-shrink-0 w-4 h-4 mx-auto text-white"
                          xmlns="http://www.w3.org/2000/svg"
                          fill="none"
                          viewBox="0 0 24 24"
                          stroke="currentColor"
                          aria-hidden="true"
                        >
                          <path
                            stroke-linecap="round"
                            stroke-linejoin="round"
                            stroke-width="2"
                            d="M5 13l4 4L19 7"
                          ></path>
                        </svg>
                      </div>
                      <span className="ml-3 text-neutral-600">
                        3 Banner Design
                      </span>
                    </li>

                    <li className="flex">
                      <div className="inline-flex items-center w-6 h-6 bg-[#24c4da] rounded-xl">
                        <svg
                          className="flex-shrink-0 w-4 h-4 mx-auto text-white"
                          xmlns="http://www.w3.org/2000/svg"
                          fill="none"
                          viewBox="0 0 24 24"
                          stroke="currentColor"
                          aria-hidden="true"
                        >
                          <path
                            stroke-linecap="round"
                            stroke-linejoin="round"
                            stroke-width="2"
                            d="M5 13l4 4L19 7"
                          ></path>
                        </svg>
                      </div>
                      <span className="ml-3 text-neutral-600">
                        1 jQuery Slider Banner
                      </span>
                    </li>
                    <li className="flex">
                      <div className="inline-flex items-center w-6 h-6 bg-[#24c4da] rounded-xl">
                        <svg
                          className="flex-shrink-0 w-4 h-4 mx-auto text-white"
                          xmlns="http://www.w3.org/2000/svg"
                          fill="none"
                          viewBox="0 0 24 24"
                          stroke="currentColor"
                          aria-hidden="true"
                        >
                          <path
                            stroke-linecap="round"
                            stroke-linejoin="round"
                            stroke-width="2"
                            d="M5 13l4 4L19 7"
                          ></path>
                        </svg>
                      </div>
                      <span className="ml-3 text-neutral-600">
                        Free Google Friendly Sitemap
                      </span>
                    </li>
                    <li className="flex">
                      <div className="inline-flex items-center w-6 h-6 bg-[#24c4da] rounded-xl">
                        <svg
                          className="flex-shrink-0 w-4 h-4 mx-auto text-white"
                          xmlns="http://www.w3.org/2000/svg"
                          fill="none"
                          viewBox="0 0 24 24"
                          stroke="currentColor"
                          aria-hidden="true"
                        >
                          <path
                            stroke-linecap="round"
                            stroke-linejoin="round"
                            stroke-width="2"
                            d="M5 13l4 4L19 7"
                          ></path>
                        </svg>
                      </div>
                      <span className="ml-3 text-neutral-600">
                        Complete W3C Certified HTML
                      </span>
                    </li>
                  </ul>
                </div>
                <div className="mt-6 mb-4 rounded-full ">
                  <a
                    href="#"
                    type="highlight"
                    className="w-full items-center block px-10 py-3.5 text-base font-medium text-center text-white transition duration-500 ease-in-out transform border-2 bg-[#3C4144] shadow-md rounded-full focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-gray-500 "
                  >
                    {" "}
                    Order Now{" "}
                  </a>
                </div>
              </div>
              <div className="relative flex flex-col p-8 bg-[rgb(60,65,68)] rounded-2xl">
                <div className="relative flex-1">
                  <h3 className="text-xl font-semibold text-white">
                    Pro Website
                  </h3>

                  <p className="flex flex-col items-baseline mt-4 text-white">
                    <del className="text-2xl font-normal text-gray-300">
                      $1200.00 Only
                    </del>
                    <span className="text-5xl font-extrabold text-[#24c4da] tracking-tight">
                      $549.00
                    </span>
                    <span className="ml-1 text-xl font-semibold"></span>
                  </p>
                  <p className="mt-6 text-white text-solitud">
                    Suitable for newly formed oragnizations or small incubated
                    startups
                  </p>

                  {/* <!-- Feature list --> */}
                  <ul role="list" className="pt-6 mt-6 space-y-6 border-t">
                    <span className="text-lg font-semibold text-white">
                      What's included?
                    </span>

                    <li className="flex">
                      <div className="inline-flex items-center w-6 h-6 bg-[#24c4da] rounded-xl">
                        <svg
                          className="flex-shrink-0 w-4 h-4 mx-auto text-neutral-600"
                          xmlns="http://www.w3.org/2000/svg"
                          fill="none"
                          viewBox="0 0 24 24"
                          stroke="currentColor"
                          aria-hidden="true"
                        >
                          <path
                            stroke-linecap="round"
                            stroke-linejoin="round"
                            stroke-width="2"
                            d="M5 13l4 4L19 7"
                          ></path>
                        </svg>
                      </div>
                      <span className="ml-3 text-white">
                        5 Unique Page Website
                      </span>
                    </li>

                    <li className="flex">
                      <div className="inline-flex items-center w-6 h-6 bg-[#24c4da] rounded-xl">
                        <svg
                          className="flex-shrink-0 w-4 h-4 mx-auto text-neutral-600"
                          xmlns="http://www.w3.org/2000/svg"
                          fill="none"
                          viewBox="0 0 24 24"
                          stroke="currentColor"
                          aria-hidden="true"
                        >
                          <path
                            stroke-linecap="round"
                            stroke-linejoin="round"
                            stroke-width="2"
                            d="M5 13l4 4L19 7"
                          ></path>
                        </svg>
                      </div>
                      <span className="ml-3 text-white">
                        CMS / Admin Panel Support
                      </span>
                    </li>

                    <li className="flex">
                      <div className="inline-flex items-center w-6 h-6 bg-[#24c4da] rounded-xl">
                        <svg
                          className="flex-shrink-0 w-4 h-4 mx-auto text-neutral-600"
                          xmlns="http://www.w3.org/2000/svg"
                          fill="none"
                          viewBox="0 0 24 24"
                          stroke="currentColor"
                          aria-hidden="true"
                        >
                          <path
                            stroke-linecap="round"
                            stroke-linejoin="round"
                            stroke-width="2"
                            d="M5 13l4 4L19 7"
                          ></path>
                        </svg>
                      </div>
                      <span className="ml-3 text-white">8 Stock Photos</span>
                    </li>

                    <li className="flex">
                      <div className="inline-flex items-center w-6 h-6 bg-[#24c4da] rounded-xl">
                        <svg
                          className="flex-shrink-0 w-4 h-4 mx-auto text-neutral-600"
                          xmlns="http://www.w3.org/2000/svg"
                          fill="none"
                          viewBox="0 0 24 24"
                          stroke="currentColor"
                          aria-hidden="true"
                        >
                          <path
                            stroke-linecap="round"
                            stroke-linejoin="round"
                            stroke-width="2"
                            d="M5 13l4 4L19 7"
                          ></path>
                        </svg>
                      </div>
                      <span className="ml-3 text-white">5 Banner Design</span>
                    </li>

                    <li className="flex">
                      <div className="inline-flex items-center w-6 h-6 bg-[#24c4da] rounded-xl">
                        <svg
                          className="flex-shrink-0 w-4 h-4 mx-auto text-neutral-600"
                          xmlns="http://www.w3.org/2000/svg"
                          fill="none"
                          viewBox="0 0 24 24"
                          stroke="currentColor"
                          aria-hidden="true"
                        >
                          <path
                            stroke-linecap="round"
                            stroke-linejoin="round"
                            stroke-width="2"
                            d="M5 13l4 4L19 7"
                          ></path>
                        </svg>
                      </div>
                      <span className="ml-3 text-white">
                        1 jQuery Slider Banner
                      </span>
                    </li>

                    <li className="flex">
                      <div className="inline-flex items-center w-6 h-6 bg-[#24c4da] rounded-xl">
                        <svg
                          className="flex-shrink-0 w-4 h-4 mx-auto text-neutral-600"
                          xmlns="http://www.w3.org/2000/svg"
                          fill="none"
                          viewBox="0 0 24 24"
                          stroke="currentColor"
                          aria-hidden="true"
                        >
                          <path
                            stroke-linecap="round"
                            stroke-linejoin="round"
                            stroke-width="2"
                            d="M5 13l4 4L19 7"
                          ></path>
                        </svg>
                      </div>
                      <span className="ml-3 text-white">
                        FREE Google Friendly Sitemap
                      </span>
                    </li>
                  </ul>
                </div>
                <div className="z-50 mt-6 rounded-full">
                  <a
                    href="/pricing"
                    type="highlight"
                    className="w-full items-center block px-10 py-3.5 text-base font-medium text-center text-white transition duration-500 ease-in-out transform border-2 border-white shadow-md rounded-full focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-gray-500 bg-[#24c4da]"
                  >
                    {" "}
                    Order Now{" "}
                  </a>
                </div>
              </div>
              <div className="relative flex flex-col p-8 bg-white border border-black rounded-lg">
                <div className="flex-1">
                  <h3 className="text-xl font-semibold text-neutral-600">
                    Elite Website{" "}
                  </h3>
                  <p className="flex flex-col items-baseline mt-4 text-neutral-600">
                    <del className="text-2xl font-normal text-gray-400">
                      $2000.00 Only
                    </del>
                    <span className="text-5xl font-extrabold tracking-tight text-[#24c4da]">
                      $999.00
                    </span>
                    <span className="ml-1 text-xl font-semibold"></span>
                  </p>
                  <p className="mt-6 text-gray-500">
                    Suitable for newly formed organizations or small incubated
                    startups
                  </p>

                  {/* <!-- Feature list --> */}
                  <ul role="list" className="pt-6 mt-6 space-y-6 border-t">
                    <span className="text-lg font-semibold text-neutral-600">
                      What's included?
                    </span>

                    <li className="flex">
                      <div className="inline-flex items-center w-6 h-6 bg-[#24c4da] rounded-xl">
                        <svg
                          className="flex-shrink-0 w-4 h-4 mx-auto text-white"
                          xmlns="http://www.w3.org/2000/svg"
                          fill="none"
                          viewBox="0 0 24 24"
                          stroke="currentColor"
                          aria-hidden="true"
                        >
                          <path
                            stroke-linecap="round"
                            stroke-linejoin="round"
                            stroke-width="2"
                            d="M5 13l4 4L19 7"
                          ></path>
                        </svg>
                      </div>
                      <span className="ml-3 text-neutral-600">
                        5 Stack Photos
                      </span>
                    </li>

                    <li className="flex">
                      <div className="inline-flex items-center w-6 h-6 bg-[#24c4da] rounded-xl">
                        <svg
                          className="flex-shrink-0 w-4 h-4 mx-auto text-white"
                          xmlns="http://www.w3.org/2000/svg"
                          fill="none"
                          viewBox="0 0 24 24"
                          stroke="currentColor"
                          aria-hidden="true"
                        >
                          <path
                            stroke-linecap="round"
                            stroke-linejoin="round"
                            stroke-width="2"
                            d="M5 13l4 4L19 7"
                          ></path>
                        </svg>
                      </div>
                      <span className="ml-3 text-neutral-600">
                        3 Page Website
                      </span>
                    </li>

                    <li className="flex">
                      <div className="inline-flex items-center w-6 h-6 bg-[#24c4da] rounded-xl">
                        <svg
                          className="flex-shrink-0 w-4 h-4 mx-auto text-white"
                          xmlns="http://www.w3.org/2000/svg"
                          fill="none"
                          viewBox="0 0 24 24"
                          stroke="currentColor"
                          aria-hidden="true"
                        >
                          <path
                            stroke-linecap="round"
                            stroke-linejoin="round"
                            stroke-width="2"
                            d="M5 13l4 4L19 7"
                          ></path>
                        </svg>
                      </div>
                      <span className="ml-3 text-neutral-600">
                        3 Banner Design
                      </span>
                    </li>

                    <li className="flex">
                      <div className="inline-flex items-center w-6 h-6 bg-[#24c4da] rounded-xl">
                        <svg
                          className="flex-shrink-0 w-4 h-4 mx-auto text-white"
                          xmlns="http://www.w3.org/2000/svg"
                          fill="none"
                          viewBox="0 0 24 24"
                          stroke="currentColor"
                          aria-hidden="true"
                        >
                          <path
                            stroke-linecap="round"
                            stroke-linejoin="round"
                            stroke-width="2"
                            d="M5 13l4 4L19 7"
                          ></path>
                        </svg>
                      </div>
                      <span className="ml-3 text-neutral-600">
                        1 jQuery Slider Banner
                      </span>
                    </li>
                    <li className="flex">
                      <div className="inline-flex items-center w-6 h-6 bg-[#24c4da] rounded-xl">
                        <svg
                          className="flex-shrink-0 w-4 h-4 mx-auto text-white"
                          xmlns="http://www.w3.org/2000/svg"
                          fill="none"
                          viewBox="0 0 24 24"
                          stroke="currentColor"
                          aria-hidden="true"
                        >
                          <path
                            stroke-linecap="round"
                            stroke-linejoin="round"
                            stroke-width="2"
                            d="M5 13l4 4L19 7"
                          ></path>
                        </svg>
                      </div>
                      <span className="ml-3 text-neutral-600">
                        Free Google Friendly Sitemap
                      </span>
                    </li>
                    <li className="flex">
                      <div className="inline-flex items-center w-6 h-6 bg-[#24c4da] rounded-xl">
                        <svg
                          className="flex-shrink-0 w-4 h-4 mx-auto text-white"
                          xmlns="http://www.w3.org/2000/svg"
                          fill="none"
                          viewBox="0 0 24 24"
                          stroke="currentColor"
                          aria-hidden="true"
                        >
                          <path
                            stroke-linecap="round"
                            stroke-linejoin="round"
                            stroke-width="2"
                            d="M5 13l4 4L19 7"
                          ></path>
                        </svg>
                      </div>
                      <span className="ml-3 text-neutral-600">
                        Complete W3C Certified HTML
                      </span>
                    </li>
                  </ul>
                </div>
                <div className="mt-6 mb-4 rounded-full ">
                  <a
                    href="#"
                    type="highlight"
                    className="w-full items-center block px-10 py-3.5 text-base font-medium text-center text-white transition duration-500 ease-in-out transform border-2 bg-[#3C4144] shadow-md rounded-full focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-gray-500 "
                  >
                    {" "}
                    Order Now{" "}
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
        ;
      </Wrapper>
    </section>
  );
};

export default Pricing;
