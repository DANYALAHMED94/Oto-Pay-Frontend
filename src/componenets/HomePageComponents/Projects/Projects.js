import React from "react";
// import { useNavigate } from "react-router-dom";
import project1 from "../../../assets/project1.svg";
import project2 from "../../../assets/project2.svg";
import project3 from "../../../assets/project3.svg";
import project4 from "../../../assets/project4.svg";
const Projects = () => {
  // const navigate = useNavigate();

  return (
    <section className="bg-[#F6F6F6] 3xl:px-[70px] 2xl:px-[50px] xl:px-[40px] lg:px-[40px] md:px-[40px] px-6 text-black-600 body-font flex justify-center items-center  relative z-0 ">
      <div className="choose container py-24  space-y-16 ">
        <div className="flex flex-wrap w-full  mb-8 flex-col items-center">
          <h1 className=" xltext-[45px] lg:text-4xl md:text-3xl text-[21px] leading-[56px] font-bold title-font mb-2 text-[#312245] ">
            Our Projects
          </h1>
        </div>
        <div className=" grid xl:grid-cols-4 lg:grid-cols-2 md:grid-cols-2 sm:grid-col-1 3xl:gap-40 2xl:gap-x-16 xl:gap-x-7 xl:gap-y-12 gap-y-5 lg:gap-x-16 lg:gap-y-20 md:gap-x-6 sm:gap-y-8">
          <div className="3xl:w-[420px] 2xl:w-[350px] xl:w-[282px] lg:w-[430px] md:w-[320px] sm:w-[310px] xs:w-[330px] p-6  bg-[#FAFCFF] rounded-2xl  shadow-lg space-y-4">
            <div className=" w-full card_title_flex  space-y-4">
              <img src={project1} className="w-full " alt="" />
              <div className="chooose_title text-base leading-[32px] font-bold text-black dark:text-white text-center">
                <h1> Tenant screening </h1>
                <p className="choose_content text-xs font-medium leading-[20px] text-[#717171] dark:text-[#959CB1] ">
                  We find and verify the best tenants for your properties,
                  saving you time and hassle
                </p>
              </div>
            </div>
          </div>
          <div className="3xl:w-[420px] 2xl:w-[350px] xl:w-[280px] lg:w-[430px] md:w-[320px] sm:w-[310px] xs:w-[330px] p-6 bg-[#FAFCFF]  rounded-2xl  shadow-lg space-y-4">
            <div className=" w-full card_title_flex  space-y-4">
              <img src={project2} className="w-full " alt="" />
              <div className="chooose_title text-base leading-[32px] font-bold text-black dark:text-white text-center">
                <h1> Tenant screening </h1>
                <p className="choose_content text-xs font-medium leading-[20px] text-[#717171] dark:text-[#959CB1] ">
                  We find and verify the best tenants for your properties,
                  saving you time and hassle
                </p>
              </div>
            </div>
          </div>

          <div className="3xl:w-[420px] 2xl:w-[350px] xl:w-[280px] lg:w-[430px] md:w-[320px] sm:w-[310px] xs:w-[330px] p-6  bg-[#FAFCFF]  rounded-2xl shadow-lg space-y-4">
            <div className=" w-full card_title_flex  space-y-4">
              <img src={project3} className="w-full " alt="" />
              <div className="chooose_title text-base leading-[32px] font-bold text-black dark:text-white text-center">
                <h1> Tenant screening </h1>
                <p className="choose_content text-xs font-medium leading-[20px] text-[#717171] dark:text-[#959CB1] ">
                  We find and verify the best tenants for your properties,
                  saving you time and hassle
                </p>
              </div>
            </div>
          </div>

          <div className="3xl:w-[420px] 2xl:w-[350px] xl:w-[280px] lg:w-[430px] md:w-[320px] sm:w-[310px] xs:w-[330px] p-6  bg-[#FAFCFF]  rounded-2xl shadow-lg space-y-4">
            <div className=" w-full card_title_flex  space-y-4">
              <img src={project4} className="w-full " alt="" />
              <div className="chooose_title text-base leading-[32px] font-bold text-black dark:text-white text-center">
                <h1> Tenant screening </h1>
                <p className="choose_content text-xs font-medium leading-[20px] text-[#717171] dark:text-[#959CB1] ">
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
