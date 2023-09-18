import React from "react";
// import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import PropertyCard from "../global/PropertyCard";

const SearchResult = ({ searchStyle }) => {
  // const [searchStyle, setSearchStyle] = useState("Card");

  return (
    <section className="bg-[#F6F6F6] 3xl:px-[70px] 2xl:px-[50px] pt-10 xl:px-[80px] xl:py-[120px] lg:px-[40px] md:px-[40px] px-6 space-y-4 text-black-600 body-font flex flex-col justify-center items-center gap-4 relative z-0">
      <div className="xl:w-[1199px] lg:w-[950px]">
        <h1 className="text-black xl:self-start font-bold text-[32px] leading-[41px]">
          Search Results
        </h1>
      </div>
      <div className="xl:w-[1199px] lg:w-[950px] w-full p-4 h-auto lg:h-[179px] bg-[#2E0664] space-y-4 rounded-lg  ">
        <h1 className="text-white"> “Properties for Rent in NewYork”</h1>

        <h1 className="text-white"> Filtered</h1>
        <div className="flex lg:flex-row flex-col gap-4 mt-4 ">
          <div className=" flex px-[16px] lg:w-[202px] w-full h-[56px] space-y-2 rounded-md border border-[#FFFFFF] justify-center">
            <select className=" w-full  rounded-md px-[16px]  bg-[#2E0664]  focus:outline-none text-white text-sm">
              <option value="">All</option>
              <option value="fully-furnished">Washington, street xyz</option>
              <option value="partially-furnished">
                Washington, street xyz
              </option>
              <option value="not-furnished">Washington, street xyz</option>
            </select>
          </div>

          <div className="lg:w-[131px] w-full h-[56px] px-[16px] rounded-md border border-[#FFFFFF] flex justify-center ">
            <select className=" w-full rounded-md   bg-[#2E0664]  text-white text-sm focus:outline-none">
              <option value="">Ratings</option>
              <option value="fully-furnished">Washington, street xyz</option>
              <option value="partially-furnished">
                Washington, street xyz
              </option>
              <option value="not-furnished">Washington, street xyz</option>
            </select>
          </div>

          <div className="w-full lg:w-[132px] h-[56px] px-[16px] rounded-md border border-[#FFFFFF] flex justify-center ">
            <select className=" w-full rounded-md   bg-[#2E0664]  text-white text-sm focus:outline-none">
              <option value="">Popular</option>
              <option value="fully-furnished">Washington, street xyz</option>
              <option value="partially-furnished">
                Washington, street xyz
              </option>
              <option value="not-furnished">Washington, street xyz</option>
            </select>
          </div>

          <div className="w-full lg:w-[272px] h-[56px] px-[16px] rounded-md border border-[#FFFFFF] flex justify-center">
            <select className=" w-full rounded-md  tracking-widest bg-[#2E0664]  text-white text-sm focus:outline-none">
              <option value="">$208600 To $400890</option>
              <option value="fully-furnished">Washington, street xyz</option>
              <option value="partially-furnished">
                Washington, street xyz
              </option>
              <option value="not-furnished">Washington, street xyz</option>
            </select>
          </div>

          <div className="w-full lg:w-[170px] h-[56px]  px-[16px] rounded-md border border-[#FFFFFF] flex justify-center items-center">
            <svg
              width="24"
              height="25"
              viewBox="0 0 24 25"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M22 3.38086H2L10 12.8409V19.3809L14 21.3809V12.8409L22 3.38086Z"
                stroke="white"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>
            <select className=" w-full rounded-md bg-[#2E0664]  text-white text-sm focus:outline-none">
              <option value=""> All Filters </option>
              <option value="fully-furnished">Washington, street xyz</option>
              <option value="partially-furnished">
                Washington, street xyz
              </option>
              <option value="not-furnished">Washington, street xyz</option>
            </select>
          </div>

          <div className="w-full px-4 py-3 lg:w-[175px] h-[56px] space-y-2 rounded-md">
            <button className="text-[#FF9F9F]">Clear Filters</button>
          </div>
        </div>
      </div>

      <div className="xl:w-[1200px] lg:pb-10 pb-5 lg:w-[950px] h-auto lg:flex flex-col justify-center items-center gap-[56px]">
        <div className="flex w-full  h-full flex-col 3xl:gap-40 lg:gap-y-6 gap-y-8">
          <PropertyCard searchStyle={searchStyle} />
          <PropertyCard />
          <PropertyCard />
        </div>
      </div>
    </section>
  );
};

export default SearchResult;
