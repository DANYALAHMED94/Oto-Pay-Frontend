import React from "react";
import { useNavigate } from "react-router-dom";
import { Slide1 } from "../../iconComponent/Slide";

function Slide({ darkMode, setDarkMode }) {
  const navigate = useNavigate();
  return (
    <div className="bg-[#F5F5F5] dark:bg-[#07343A] w-full lg:h-[500px] font-inter relative md:h-[400px] h-[300px] overflow-hidden z-0">
      <section
        className="w-full h-full body-font relative " 
      >
        <div className="w-full h-full absolute flex items-center justify-center ">
          <Slide1 />
        </div>
        <div className="absolute w-full h-full flex items-center justify-center">
          <div className="lg:w-7/12  md:w-7/12 w-full p-4  xl:gap-8 lg:gap-6 md:gap-4 gap-4 flex flex-col items-center justify-center  ">
            <h1 className=" xl:text-5xl lg:text-3xl md:text-xl text-[24px] font-inter font-bold font-inter text[#434343] dark:text-white text-center">
              The Solution We Offer
            </h1>
            <hr className="xl:w-[512px] lg:w-[320px] md:w-[220px] w-[220px] xl:h-[4px] lg:h-[4px] md:h-[3px] h-[2px]  bg-[#4BA9B6] border-[#4BA9B6] xl:-mt-6 md:-mt-4  -mt-4"></hr>
            <p className=" font-inter xl:text-xl lg:text-lg  md:text-md  text-base xl:leading-8 lg:leading-7 md:leading-5 leading-5 xl:font-medium lg:font-medium md:font-medium font-base text-[#6D6D6D]  dark:text-white text-center">
              Guddge is a professional services company specialized in
              delivering Information Management, and Business Intelligence
              solutions for corporate and government agencies.
            </p>
            <div className=" flex justify-center items-center gap-8 text-center">
              <button
                type="button"
                onClick={() => {
                  navigate("/");
                }}
                className=" text-white xl:w-[151px] xl:h-[56px] lg:w-[140px] lg:h-[52px] md:w-[123px] md:h-[42px] w-[100px] h-[36px] bg-[#078CA0]  dark:bg-[#4BA9B6] hover:text-white hover:bg-gradient-to-b from-[#3799CC] to-[#374BCC] focus:ring-4 focus:outline-none focus:ring-gray-100 font-semibold rounded-lg xl:text-base lg:text-base md:text-base text-sm  leading-6  py-[16px] justify-center text-center inline-flex items-center dark:focus:ring-gray-500 mr-2 mb-2 "
              >
                Learn More
              </button>
              <button
                type="button"
                onClick={() => {
                  navigate("/services");
                }}
                className=" text-[#565656] dark:text-white border border-[#565656] dark:border-none dark:bg-[#FFFFFF33] xl:w-[151px] xl:h-[56px] lg:w-[140px] lg:h-[52px] md:w-[123px] md:h-[42px] w-[100px] h-[36px] dark:bg-[#4BA9B6] hover:text-white hover:bg-gradient-to-b from-[#3799CC] to-[#374BCC] focus:ring-4 focus:outline-none focus:ring-gray-100 font-semibold rounded-lg xl:text-base lg:text-base md:text-base text-sm leading-6  py-[16px]  text-center inline-flex justify-center items-center dark:focus:ring-gray-500 mr-2 mb-2 "
              >
                Services
              </button>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
export default Slide;
