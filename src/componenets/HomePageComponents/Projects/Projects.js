import React from "react";
// import { useNavigate } from "react-router-dom";
import project1 from "../../../assets/project1.svg";
import project2 from "../../../assets/project2.svg";
import project3 from "../../../assets/project3.svg";
import project4 from "../../../assets/project4.svg";
const Projects = () => {
  // const navigate = useNavigate();

  return (
    <section className="bg-[#F6F6F6] 3xl:px-[70px] 2xl:px-[50px] xl:px-[40px] lg:px-[40px] md:px-[40px] px-6 text-black-600 body-font flex justify-center items-center relative z-0 ">
      <div className="choose container lg:py-14 md:space-y-16">
        <div className="flex flex-wrap w-full md:mb-8 mb-2 flex-col items-center">
          <h1 className=" xl:text-[45px] lg:text-4xl md:text-3xl text-[21px] leading-[56px] font-bold title-font md:mb-2 text-[#312245]">
            Our Projects
          </h1>
        </div>
        <div className="grid xl:grid-cols-4 md:grid-cols-2 sm:grid-col-1 3xl:gap-40 2xl:gap-x-16 xl:gap-x-7 xl:gap-y-12 gap-y-5 lg:gap-x-16 lg:gap-y-20 md:gap-x-6 sm:gap-y-8">
          <div className="h-auto w-full p-6 bg-[#FAFCFF] rounded-2xl shadow-lg space-y-4">
            <div className="w-full card_title_flex md:space-y-4 space-y-1">
              <div className="h-full w-full flex justify-center">
                <img src={project1} className="md:w-full" alt="" />
              </div>
              <div className="chooose_title text-base md:leading-8 font-bold text-black dark:text-white text-center">
                <h1> Tenant screening </h1>
                <p className="choose_content text-xs font-medium md:leading-5 text-[#717171] dark:text-[#959CB1] ">
                  We find and verify the best tenants for your properties,
                  saving you time and hassle
                </p>
              </div>
            </div>
          </div>

          <div className="h-auto w-full p-6 bg-[#FAFCFF] rounded-2xl shadow-lg space-y-4">
            <div className="w-full card_title_flex md:space-y-4 space-y-1">
              <div className="h-full w-full flex justify-center">
                <img src={project2} className="md:w-full" alt="" />
              </div>
              <div className="chooose_title text-base md:leading-8 font-bold text-black dark:text-white text-center">
                <h1> Tenant screening </h1>
                <p className="choose_content text-xs font-medium md:leading-5 text-[#717171] dark:text-[#959CB1] ">
                  We find and verify the best tenants for your properties,
                  saving you time and hassle
                </p>
              </div>
            </div>
          </div>

          <div className="h-auto w-full p-6 bg-[#FAFCFF] rounded-2xl shadow-lg space-y-4">
            <div className="w-full card_title_flex md:space-y-4 space-y-1">
              <div className="h-full w-full flex justify-center">
                <img src={project3} className="md:w-full" alt="" />
              </div>
              <div className="chooose_title text-base md:leading-8 font-bold text-black dark:text-white text-center">
                <h1> Tenant screening </h1>
                <p className="choose_content text-xs font-medium md:leading-5 text-[#717171] dark:text-[#959CB1] ">
                  We find and verify the best tenants for your properties,
                  saving you time and hassle
                </p>
              </div>
            </div>
          </div>

          <div className="h-auto w-full p-6 bg-[#FAFCFF] rounded-2xl shadow-lg space-y-4">
            <div className="w-full card_title_flex md:space-y-4 space-y-1">
              <div className="h-full w-full flex justify-center">
                <img src={project4} className="md:w-full" alt="" />
              </div>
              <div className="chooose_title text-base md:leading-8 font-bold text-black dark:text-white text-center">
                <h1> Tenant screening </h1>
                <p className="choose_content text-xs font-medium md:leading-5 text-[#717171] dark:text-[#959CB1] ">
                  We find and verify the best tenants for your properties,
                  saving you time and hassle
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Projects;
