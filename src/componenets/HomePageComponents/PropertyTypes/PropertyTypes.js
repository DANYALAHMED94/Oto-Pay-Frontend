import React from "react";
// import { useNavigate } from "react-router-dom";
import PropertyIcon1 from "../../../assets/PropertyIcon1.svg";
import PropertyIcon2 from "../../../assets/PropertyIcon2.svg";
import PropertyIcon3 from "../../../assets/PropertyIcon3.svg";
import PropertyIcon4 from "../../../assets/PropertyIcon4.svg";
import PropertyIcon5 from "../../../assets/PropertyIcon5.svg";
import PropertyIcon6 from "../../../assets/PropertyIcon6.svg";

const PropertyTypes = () => {
  // const navigate = useNavigate();

  return (
    <section className="bg-[#F6F6F6] 3xl:px-[70px] 2xl:px-[50px] xl:px-[40px] lg:px-[40px] md:px-[40px] px-6 text-black-600 body-font flex justify-center items-center overflow-hidden ">
      <div className="choose container md:py-16 pt-4 pb-8">
        <div className="flex flex-wrap w-full lg:py-5 flex-col items-center">
          <h1 className="text-[#312245] 3xl:text-[50px] xl:text-[45px] lg:text-4xl md:text-3xl text-[24px] font-lg font-bold title-font mb-2">
            Browse Property Types
          </h1>
        </div>

        <div className="grid xl:grid-cols-3 lg:grid-cols-2 md:grid-cols-2 sm:grid-col-1 3xl:gap-40 2xl:gap-x-16 xl:gap-x-7 xl:gap-y-12 lg:gap-10 md:gap-x-6 md:gap-y-0 sm:gap-y-8">
          <div className=" w-full h-auto p-6 md:mt-8 rounded-lg bg-white-900 text-white  space-y-6 shadow-lg  xl:h-72 md:h-72 bg-[#FAFCFF]">
            <div className=" rounded-lg flex justify-center items-center   ">
              <div className="h-20 w-20 p-4  rounded-lg shadow-lg ">
                <img
                  alt="gallery"
                  className="w-full object-cover rounded-full h-full object-center block"
                  src={PropertyIcon1}
                />
              </div>
            </div>
            <div className="w-full  ">
              <h2 className=" 3xl:text-[20px] text-[18px] font-semibold leading-[20px] text-black dark:text-white  rounded-lg  title-font mb-6 text-center ">
                Commercial
              </h2>

              <p className=" text-black dark:text-[#959CB1] text-base font-normal leading-[24px] mb-6 mt-6 text-center ">
                The best investment opportunities
              </p>

              <a
                href="#!"
                className="text-primary flex justify-center text-black font-semibold underline transition  duration-150 ease-in-out hover:text-primary-600 focus:text-primary-600 active:text-primary -700  "
              >
                View
              </a>
            </div>
          </div>

          <div className=" w-full h-auto p-6 mt-8 rounded-lg bg-white-900 text-white  space-y-6 shadow-lg  xl:h-72 md:h-72  bg-[#FAFCFF]">
            <div className=" rounded-lg flex justify-center items-center   ">
              <div className="h-20 w-20 p-4  rounded-lg shadow-lg ">
                <img
                  alt="gallery"
                  className="w-full object-cover  h-full object-center block"
                  src={PropertyIcon2}
                />
              </div>
            </div>
            <div className="w-full  ">
              <h2 className=" 3xl:text-[20px] text-[18px] font-semibold leading-[20px] text-black dark:text-white  rounded-lg  title-font mb-6 text-center ">
                Commercial
              </h2>

              <p className=" text-black dark:text-[#959CB1] text-base font-normal leading-[24px] mb-6 mt-6 text-center ">
                The best investment opportunities
              </p>

              <a
                href="#!"
                className="text-primary flex justify-center text-black font-semibold underline transition  duration-150 ease-in-out hover:text-primary-600 focus:text-primary-600 active:text-primary -700  "
              >
                View
              </a>
            </div>
          </div>

          <div className="w-full h-auto p-6 mt-8 rounded-lg bg-white-900 text-white  space-y-6 shadow-lg  xl:h-72 md:h-72  bg-[#FAFCFF]">
            <div className=" rounded-lg flex justify-center items-center   ">
              <div className="h-20 w-20 p-4  rounded-lg shadow-lg ">
                <img
                  alt="gallery"
                  className="w-full object-cover  h-full object-center block"
                  src={PropertyIcon3}
                />
              </div>
            </div>
            <div className="w-full  ">
              <h2 className=" 3xl:text-[20px] text-[18px] font-semibold leading-[20px] text-black dark:text-white  rounded-lg  title-font mb-6 text-center ">
                Commercial
              </h2>

              <p className=" text-black dark:text-[#959CB1] text-base font-normal leading-[24px] mb-6 mt-6 text-center ">
                The best investment opportunities
              </p>

              <a
                href="#!"
                className="text-primary flex justify-center text-black font-semibold underline transition  duration-150 ease-in-out hover:text-primary-600 focus:text-primary-600 active:text-primary -700  "
              >
                View
              </a>
            </div>
          </div>

          <div className="w-full h-auto p-6 mt-8 rounded-lg bg-white-900 text-white  space-y-6 shadow-lg  xl:h-72 md:h-72  bg-[#FAFCFF]">
            <div className=" rounded-lg flex justify-center items-center   ">
              <div className="h-20 w-20 p-4  rounded-lg shadow-lg ">
                <img
                  alt="gallery"
                  className="w-full object-cover  h-full object-center block"
                  src={PropertyIcon4}
                />
              </div>
            </div>
            <div className="w-full  ">
              <h2 className=" 3xl:text-[20px] text-[18px] font-semibold leading-[20px] text-black dark:text-white  rounded-lg  title-font mb-6 text-center ">
                Commercial
              </h2>

              <p className=" text-black dark:text-[#959CB1] text-base font-normal leading-[24px] mb-6 mt-6 text-center ">
                The best investment opportunities
              </p>

              <a
                href="#!"
                className="text-primary flex justify-center text-black font-semibold underline transition  duration-150 ease-in-out hover:text-primary-600 focus:text-primary-600 active:text-primary -700  "
              >
                View
              </a>
            </div>
          </div>

          <div className="w-full h-auto p-6 mt-8 rounded-lg bg-white-900 text-white  space-y-6 shadow-lg  xl:h-72 md:h-72  bg-[#FAFCFF]">
            <div className=" rounded-lg flex justify-center items-center   ">
              <div className="h-20 w-20 p-4  rounded-lg shadow-lg ">
                <img
                  alt="gallery"
                  className="w-full object-cover  h-full object-center block"
                  src={PropertyIcon5}
                />
              </div>
            </div>
            <div className="w-full  ">
              <h2 className=" 3xl:text-[20px] text-[18px] font-semibold leading-[20px] text-black dark:text-white  rounded-lg  title-font mb-6 text-center ">
                Commercial
              </h2>

              <p className=" text-black dark:text-[#959CB1] text-base font-normal leading-[24px] mb-6 mt-6 text-center ">
                The best investment opportunities
              </p>

              <a
                href="#!"
                className="text-primary flex justify-center text-black font-semibold underline transition  duration-150 ease-in-out hover:text-primary-600 focus:text-primary-600 active:text-primary -700  "
              >
                View
              </a>
            </div>
          </div>

          <div className="w-full h-auto p-6 mt-8 rounded-lg bg-white-900 text-white  space-y-6 shadow-lg  xl:h-72 md:h-72  bg-[#FAFCFF]">
            <div className=" rounded-lg flex justify-center items-center   ">
              <div className="h-20 w-20 p-4  rounded-lg shadow-lg ">
                <img
                  alt="gallery"
                  className="w-full object-cover  h-full object-center block"
                  src={PropertyIcon6}
                />
              </div>
            </div>
            <div className="w-full  ">
              <h2 className=" 3xl:text-[20px] text-[18px] font-semibold leading-[20px] text-black dark:text-white  rounded-lg  title-font mb-6 text-center ">
                Commercial
              </h2>

              <p className=" text-black dark:text-[#959CB1] text-base font-normal leading-[24px] mb-6 mt-6 text-center ">
                The best investment opportunities
              </p>

              <a
                href="#!"
                className="text-primary flex justify-center text-black font-semibold underline transition  duration-150 ease-in-out hover:text-primary-600 focus:text-primary-600 active:text-primary -700  "
              >
                View
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default PropertyTypes;
