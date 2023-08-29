import React from "react";
import { Link } from "react-router-dom";

import Logo from "../../../assets/logo.svg";
import {
  FooterIcon1,
  FooterIcon2,
  FooterIcon3,
} from "../../../iconComponent/FooterImages";
function Footer() {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };
  return (
    <div>
      <footer className="py-10 bg-[#2E0664] 3xl:px-[70px] 2xl:px-[50px] xl:px-[80px] lg:px-[40px] md:px-[40px] px-6 w-full xl:h-[550px] relative z-0 overflow-hidden ">
        <div className="w-full h-auto relative z-20">
          <div className="grid 2xl:grid-cols-4 xl:grid-cols-6 lg:grid-cols-4 md:grid-cols-3 grid-col-1 2xl:gap-8 xl:gap-[4px] md:gap-0 md:gap-y-12 gap-y-5">
            <div className="xl:col-span-2 lg:col-span-1 col-span-full lg:block flex flex-col justify-center items-center">
              <div className=" h-[90px] w-[94px]  ">
                <Link to="/" className="flex items-center">
                  <img
                    src={Logo}
                    className="w-full h-[75px] mr-3 "
                    alt="FlowBite Logo"
                  />
                </Link>
              </div>
              <div className=" lg:w-[270px] w-full text-[#959CB1]  text-base font-medium leading-[26px] ">
                <p className="lg:text-left text-center">
                  Elevate your well-being with the power of inspiration!
                  Discover daily to keep you on track. Click now to get started
                  on your ,
                </p>
              </div>
              <div className="flex mt-4 sm:justify-start space-x-4">
                <Link
                  to="/"
                  className="text-gray-500 hover:text-gray-900 dark:hover:text-white"
                >
                  <FooterIcon1 />
                </Link>
                <Link
                  to="/"
                  className="text-gray-500 hover:text-gray-900 dark:hover:text-white"
                >
                  <FooterIcon2 />
                </Link>
                <Link
                  to="/"
                  className="text-gray-500 hover:text-gray-900 dark:hover:text-white"
                >
                  <FooterIcon3 />
                </Link>
              </div>
            </div>

            <div className="xl:block flex flex-col justify-center -ml-5 md:-ml-0 items-center lg:py-20 md:py-14 py-5 ">
              <h2 className="mb-6 -ml-5 md:-ml-0 text-base font-semibold leading-[28px] text-white">
                Services
              </h2>
              <ul className=" text-base font-medium leading-[28px] text-[#959CB1] space-y-4">
                <li className="">
                  <Link to="/" className="hover:underline">
                    Service
                  </Link>
                </li>
                <li>
                  <Link
                    to="https://tailwindcss.com/"
                    className="hover:underline"
                  >
                    Talk To Us
                  </Link>
                </li>
                <li>
                  <Link
                    to="https://tailwindcss.com/"
                    className="hover:underline"
                  >
                    service
                  </Link>
                </li>
              </ul>
            </div>

            <div className="xl:block flex flex-col justify-center items-center lg:py-20 md:py-14 py-5">
              <h2 className="mb-6 -ml-10 lg:-ml-10 xl:-ml-0 text-base xl:text-left font-semibold leading-[28px] text-white">
                Contact
              </h2>
              <ul className="text-[#959CB1]  text-base font-medium leading-[24px] space-y-7">
                <li>
                  <Link
                    to="https://discord.gg/4eeurUVvTy"
                    className="hover:underline"
                  >
                    Privacy Policy
                  </Link>
                </li>
                <li className="">
                  <Link
                    to="https://github.com/themesberg/flowbite"
                    className="hover:underline "
                  >
                    Terms of Use
                  </Link>
                </li>
                <li>
                  <Link
                    to="https://discord.gg/4eeurUVvTy"
                    className="hover:underline"
                  >
                    Help
                  </Link>
                </li>
              </ul>
            </div>

            <div className="xl:block flex flex-col justify-center items-center -ml-5 md:-ml-0 lg:py-20 md:py-14 py-5 ">
              <h2 className="mb-6 text-base font-semibold leading-[28px] text-white">
                Resources
              </h2>
              <ul className="text-[#959CB1] text-base font-medium leading-[24px] space-y-7 ">
                <li>
                  <Link
                    to="https://discord.gg/4eeurUVvTy"
                    className="hover:underline"
                  >
                    Our Team
                  </Link>
                </li>
                <li className="">
                  <Link
                    to="https://github.com/themesberg/flowbite"
                    className="hover:underline "
                  >
                    About Us
                  </Link>
                </li>

                <li>
                  <Link
                    to="https://discord.gg/4eeurUVvTy"
                    className="hover:underline"
                  >
                    Services
                  </Link>
                </li>
              </ul>
            </div>

            {/* <div className=" w-auto h-[268px]  flex justify-center items-center">
              <div
                onClick={scrollToTop}
                className="w-[80px] h-[80px] bg-gray-100 flex justify-center rounded-xl items-center"
              >
                <button className="hover:underline cursor-pointer ">
                  <svg
                    width="22"
                    height="39"
                    viewBox="0 0 22 39"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M11 36.8105V2.31055M11 2.31055L20 11.623M11 2.31055L2 11.623"
                      stroke="#312245"
                      strokeWidth="3"
                      strokeLinecap="round"
                    />
                  </svg>
                </button>
              </div>
            </div> */}
            {/* <div className="flex justify-end  w-24   place-self-end  ">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="50"
                height="50"
                fill="currentColor"
                className="bi bi-arrow-up-square-fill"
                viewBox="0 0 16 16"
                id="IconChangeColor"
              >
                {" "}
                <path
                  d="M2 16a2 2 0 0 1-2-2V2a2 2 0 0 1 2-2h12a2 2 0 0 1 2 2v12a2 2 0 0 1-2 2H2zm6.5-4.5V5.707l2.146 2.147a.5.5 0 0 0 .708-.708l-3-3a.5.5 0 0 0-.708 0l-3 3a.5.5 0 1 0 .708.708L7.5 5.707V11.5a.5.5 0 0 0 1 0z"
                  id="mainIconPathAttribute"
                  fill="#4BA9B6"
                ></path>{" "}
              </svg>
            </div> */}
          </div>
        </div>
      </footer>
      <div className=" w-full h-12 flex items-center  bg-[#D9CFE3] justify-center ">
        <span className="text-sm  sm:text-center text-[#5A4278]">
          Copyright © 2023{" "}
          {/* <Link to="/" className="hover:underline">
            Guddge™
          </Link> */}
          . All Rights Reserved.
        </span>
      </div>
    </div>
  );
}

export default Footer;
