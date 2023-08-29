import React from "react";
import { useNavigate } from "react-router-dom";
import banner from "../../../assets/banner.svg";

function Banner() {
  const navigate = useNavigate();
  return (
    <div className="bg-[#F5F5F5] dark:bg-[#07343A] w-full lg:h-[790px] font-inter relative md:h-[400px] xsm:h-[150vh] xxsm:h-[140vh] h-[140vh] overflow-hidden z-0">
      <section className="w-full h-full body-font relative">
        <div className="w-full flex justify-center items-center h-full relative">
          <div className="w-full h-full absolute flex items-center justify-center ">
            <img
              alt="gallery"
              className="w-full object-cover h-full object-center block"
              src={banner}
            />
          </div>

          <div className="absolute w-[95%] md:w-full md:h-full h-[95%] flex items-center justify-center md:mx-3 my-3">
            <div className="backdrop-blur-md flex items-center justify-center xl:h-[584px] lg:h-[560px] md:h-[360px] h-[80%">
              <div className="border border-black bg-[#14022D] md:h-full  h-[80%] opacity-70 xl:w-[1016px] lg:w-[870px] md:w-[650px] w-full  py-[40px] px-[32px] rounded-xl  xl:gap-2 lg:gap-6 md:gap-2 gap-4 flex flex-col items-center justify-center">
                <h1 className=" xl:text-[32px] lg:text-3xl md:text-[20px] text-[24px] leading-[41px] font-inter font-bold  text-[#F6EFFF] text-center">
                  Manage your properties with ease and confidence
                </h1>

                <p className=" xl:w-[728px] lg:w-[720px] md:w-[500px] font-inter xl:text-[16px] lg:text-lg md:text-[14px]  text-base xl:leading-[20px] lg:leading-7 md:leading-4 leading-5 xl:font-normal lg:font-medium md:font-medium font-base text-[#E4DFEB]  text-center">
                  We offer professional, full-service property management
                  solutions for residential and commercial properties in USA
                </p>
                <div className="flex w-full px-14 justify-center md:flex-row flex-col items-center xl:gap-2 lg:gap-4  md:gap-3 text-center xl:mt-12 lg:mt-12 md:mt-6">
                  <button
                    type="button"
                    onClick={() => {
                      navigate("/");
                    }}
                    className=" text-[#FFFFFF] border border-[#FFFFFF] xl:w-[468px] xl:h-20 lg:w-[390px] lg:h-[70px] md:w-[285px] md:h-[42px] w-full h-[36px] hover:text-black hover:bg-white focus:ring-4 focus:outline-none focus:ring-gray-100 font-semibold rounded-lg xl:text-base lg:text-base md:text-base text-sm  leading-6  py-[16px] justify-center text-center inline-flex items-center dark:focus:ring-gray-500  mb-2 "
                  >
                    Rent
                  </button>
                  <button
                    type="button"
                    onClick={() => {
                      navigate("/services");
                    }}
                    className=" text-[#FFFFFF] border border-[#FFFFFF]  xl:w-[468px] xl:h-20 lg:w-[390px] lg:h-[70px] md:w-[285px] md:h-[42px] w-full h-[36px]  hover:text-black hover:bg-white focus:ring-4 focus:outline-none focus:ring-gray-100 font-semibold rounded-lg xl:text-base lg:text-base md:text-base text-sm leading-6  py-[16px]  text-center inline-flex justify-center items-center dark:focus:ring-gray-500  mb-2 "
                  >
                    Custom property Request
                  </button>
                </div>
                <div className="xl:mt-6 lg:mt-6 mt-0  w-full">
                  <h1 className=" xl:text-[24px] lg:text-[24px] md:text-[16px] text- leading-[31px] font-inter font-bold  text-[#F6EFFF] text-center mb-4">
                    Search properties for sale in USA
                  </h1>

                  <div className="w-full flex md:flex-row flex-col gap-4  mt-4 ">
                    <div className="col-span-1 px-4 flex flex-col py-2 md:py-0 justify-center xl:w-[198px] xl:h-20 lg:w-[170px] lg:h-[70px] md:w-[170px] md:h-[50px] xl:space-y-2 lg:space-y-2 space-y-0 rounded-md bg-gray-100 ">
                      <label className="block text-sm font-medium text-black ml-0.5 ">
                        City
                      </label>
                      <select className=" w-full rounded-md text-sm bg-gray-100 focus:outline-none">
                        <option value="">Washington</option>
                        <option value="for-rent">Washington1</option>
                        <option value="for-sale">Washington2</option>
                      </select>
                    </div>

                    <div className="flex flex-col justify-center px-4 py-2 md:py-3 xl:w-[543px] xl:h-20 lg:w-[440px] lg:h-[70px] md:w-[360px] md:h-[50px] xl:space-y-2  lg:space-y-2 space-y-0 rounded-md bg-gray-100">
                      <label className="block text-sm font-medium text-gray-700 ml-0.5">
                        Street
                      </label>
                      <select className=" w-full rounded-md bg-gray-100 focus:outline-none text-sm">
                        <option value="">Washington, street xyz</option>
                        <option value="fully-furnished">
                          Washington, street xyz
                        </option>
                        <option value="partially-furnished">
                          Washington, street xyz
                        </option>
                        <option value="not-furnished">
                          Washington, street xyz
                        </option>
                      </select>
                    </div>

                    <div className="col-span-1 px-4 py-2 md:py-3 xl:w-[178px] xl:h-20  lg:w-[160px] lg:h-[70px] md:w-[130px] md:h-[50px] flex items-center justify-center rounded-md bg-gray-100">
                      <button
                        type="button"
                        onClick={() => {
                          navigate("/");
                        }}
                        className=" text-Black lg:w-[140px] lg:h-[52px] md:w-[123px] md:h-[42px] w-[100px] h-9  hover:text-black hover:bg-white focus:ring-4 focus:outline-none focus:ring-gray-100 font-semibold rounded-lg xl:text-base lg:text-base md:text-base text-sm  leading-6  py-[16px] justify-center text-center inline-flex items-center dark:focus:ring-gray-500  "
                      >
                        Find
                      </button>
                    </div>
                  </div>

                  <div className="flex md:flex-row flex-col gap-4 mt-4 ">
                    <div className=" flex flex-col justify-center px-4 md:py-3 py-2 xl:w-[159px] xl:h-20 lg:w-[140px] lg:h-[70px] md:w-[130px] md:h-[50px] xl:space-y-2 lg:space-y-2 space-y-0 rounded-md bg-gray-100">
                      <label className="block text-sm font-medium text-gray-700 ml-0.5">
                        Property Type
                      </label>
                      <select className=" w-full rounded-md  text-sm bg-gray-100 focus:outline-none">
                        <option value="">All</option>
                        <option value="fully-furnished">
                          Washington, street xyz
                        </option>
                        <option value="partially-furnished">
                          Washington, street xyz
                        </option>
                        <option value="not-furnished">
                          Washington, street xyz
                        </option>
                      </select>
                    </div>

                    <div className="flex flex-col justify-center px-4 md:py-3 py-2 xl:w-[292px] xl:h-20 lg:w-[239px] lg:h-[70px] md:w-[160px] md:h-[50px] xl:space-y-2 lg:space-y-2 space-y-0 rounded-md bg-gray-100">
                      <label className="block text-sm font-medium text-gray-700 ml-0.5">
                        Price(USD)
                      </label>
                      <select className=" w-full rounded-md  text-sm bg-gray-100 focus:outline-none">
                        <option value="">23854 to 52487</option>
                        <option value="fully-furnished">
                          Washington, street xyz
                        </option>
                        <option value="partially-furnished">
                          Washington, street xyz
                        </option>
                        <option value="not-furnished">
                          Washington, street xyz
                        </option>
                      </select>
                    </div>

                    <div className="flex flex-col justify-center px-4 md:py-3 py-2 xl:w-[292px] xl:h-20 lg:w-[239px] lg:h-[70px] md:w-[160px] md:h-[50px] xl:space-y-2 lg:space-y-2 space-y-0 rounded-md bg-gray-100">
                      <label className="block text-sm font-medium text-gray-700 ml-0.5">
                        Area (sq. yd.)
                      </label>
                      <select className=" w-full rounded-md  text-sm bg-gray-100 focus:outline-none">
                        <option value="">0 to any</option>
                        <option value="fully-furnished">
                          Washington, street xyz
                        </option>
                        <option value="partially-furnished">
                          Washington, street xyz
                        </option>
                        <option value="not-furnished">
                          Washington, street xyz
                        </option>
                      </select>
                    </div>

                    <div className="col-span-1 flex flex-col justify-center px-4 md:py-3 py-2 xl:w-[159px] xl:h-20 lg:w-[140px] lg:h-[70px] md:w-[100px] md:h-[50px] xl:space-y-2 lg:space-y-2 space-y-0 rounded-md bg-gray-100">
                      <label className="block text-sm font-medium text-gray-700 ml-0.5">
                        Beds
                      </label>
                      <select className=" w-full rounded-md  text-sm bg-gray-100 focus:outline-none">
                        <option value="">6</option>
                        <option value="fully-furnished">
                          Washington, street xyz
                        </option>
                        <option value="partially-furnished">
                          Washington, street xyz
                        </option>
                        <option value="not-furnished">
                          Washington, street xyz
                        </option>
                      </select>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
export default Banner;
