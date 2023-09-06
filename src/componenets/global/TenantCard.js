import React from "react";
import tenant1 from "../../assets/tenant1.svg";
import { useLocation } from 'react-router-dom';
import PropertyCard from "./PropertyCard";


const TenantCard = ({ tenants, access }) => {

  const location = useLocation();

  const shouldShowdiv = location.pathname === '/admin-dashboard/tenants';
  const ShowOtherdiv = location.pathname === '/admin-dashboard/access';
  return (
    <div className="  w-full    p-4 space-y-4   rounded-2xl bg-white ">
      <div className="w-full p-4 rounded-lg bg-gray-100 shadow-lg  flex  h-full md:flex-row flex-col  xl:gap-[32px] sxl:gap-[32px] gap-4 ">
        <div className={`xl:w-[239px]  sxl:w-[239px] lg:w-[200px]  w-full h-full ${
               access === "All"
                  ? " xl:h-72 md:h-[350px] md:w-[350px]"
                  : "md:h-72 md:w-[300px] "
              }   flex flex-col gap-2 justify-center items-center   `}>
          <img
            alt="gallery"
            className="w-full object-cover  h-full rounded-lg object-center block"
            src={tenant1}
          />

          <button className=" w-full h-[45px] rounded-lg p-3 text-white bg-black">
            View All dettails
          </button>
        </div>

        <div className="xl:w-[740px]  sxl:w-full lg:w-[410px] w-full h-full flex flex-col gap-4  ">
          <div className={`flx gap-2  ${
                access === "All"
                  ? "flex xl:flex-row flex-col justify start"
                  : "flex md:flex-row justify-between"
              }  `}>
            <h1 className=" w-full  text-black font-semibold md:text-2xl text-lg leading-9">
              {" "}
              Mark John Smith
            </h1>
            {tenants === "All" ? (
              <button className="w-[100px] relative font-bold text-base leading-5 flex justify-center items-center gap-2 text-[#CD2424]">
                <svg
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M16 21V19C16 17.9391 15.5786 16.9217 14.8284 16.1716C14.0783 15.4214 13.0609 15 12 15H6C4.93913 15 3.92172 15.4214 3.17157 16.1716C2.42143 16.9217 2 17.9391 2 19V21"
                    stroke="#CD2424"
                    stroke-width="2"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                  />
                  <path
                    d="M9 11C11.2091 11 13 9.20914 13 7C13 4.79086 11.2091 3 9 3C6.79086 3 5 4.79086 5 7C5 9.20914 6.79086 11 9 11Z"
                    stroke="#CD2424"
                    stroke-width="2"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                  />
                  <path
                    d="M17 8L22 13"
                    stroke="#CD2424"
                    stroke-width="2"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                  />
                  <path
                    d="M22 8L17 13"
                    stroke="#CD2424"
                    stroke-width="2"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                  />
                </svg>
                <div className="absolute inset-0 bg-[#CD2424] opacity-10 pointer-events-none rounded-md"></div>
                Block
              </button>
            ) : null}

            {tenants === "Total Block" ? (
              <button className="w-[110px] bg-[#2E0664] p-2 h-8 relative rounded-lg font-bold md:text-base text-sm leading-5 flex justify-center items-center gap-2 text-white">
                <svg
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M16 21V19C16 17.9391 15.5786 16.9217 14.8284 16.1716C14.0783 15.4214 13.0609 15 12 15H6C4.93913 15 3.92172 15.4214 3.17157 16.1716C2.42143 16.9217 2 17.9391 2 19V21"
                    stroke="white"
                    stroke-width="2"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                  />
                  <path
                    d="M9 11C11.2091 11 13 9.20914 13 7C13 4.79086 11.2091 3 9 3C6.79086 3 5 4.79086 5 7C5 9.20914 6.79086 11 9 11Z"
                    stroke="white"
                    stroke-width="2"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                  />
                  <path
                    d="M17 8L22 13"
                    stroke="white"
                    stroke-width="2"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                  />
                  <path
                    d="M22 8L17 13"
                    stroke="white"
                    stroke-width="2"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                  />
                </svg>
                <div className="absolute inset-0 bg-[#CD2424] opacity-10 pointer-events-none rounded-md"></div>
                UnBlock
              </button>
            ) : null}

{access === "All" ? (
            <div className="flex gap-2"> 
              <button className="lg:w-[129px] md:w-[100px] md:p-0 p-2 w-full h-10 relative font-bold xl:text-base text-sm leading-5 flex justify-center items-center gap-2 text-[#CD2424]">
            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M3 6H21" stroke="#CD2424" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
<path d="M19 6V20C19 21 18 22 17 22H7C6 22 5 21 5 20V6" stroke="#CD2424" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
<path d="M8 6V4C8 3 9 2 10 2H14C15 2 16 3 16 4V6" stroke="#CD2424" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
<path d="M10 11V17" stroke="#CD2424" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
<path d="M14 11V17" stroke="#CD2424" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
</svg>


<div className="absolute inset-0 bg-[#CD2424] opacity-10 pointer-events-none rounded-md"></div>

                Remove </button>

                <button className="flex lg:w-[180px] md:w-[150px]  w-full md:p-0 p-2 h-10 relative rounded-lg font-bold xl:text-base text-sm leading-5 justify-center items-center gap-2 text-#2E0664 whitespace-nowrap">
  
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M19 3H5C3.89543 3 3 3.89543 3 5V19C3 20.1046 3.89543 21 5 21H19C20.1046 21 21 20.1046 21 19V5C21 3.89543 20.1046 3 19 3Z" stroke="#2E0664" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
<path d="M17 12H15L13 17L11 7L9 12H7" stroke="#2E0664" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
</svg>

<div className="absolute inset-0 bg-[#2E0664] opacity-10 pointer-events-none rounded-md"></div>

                View All Activity</button>
                </div>

) : null }
          </div>

          <div className=" w-full h-full text-black flex flex-col   ">
            {/* First Div */}
            <div className="flex md:flex-row flex-col gap-2 md:h-[59px]  h-full justify-between ">
              <div className="w-full flex md:flex-col flex-row gap-2 font-medium text-sm leading-4 text-[#5A4278] md:justify-start justify-between items-start ">
                {" "}
                <div className=" w-full  "> Date of Birth </div>{" "}
                <div className="w-full   md:text-base text-sm leading-5 text-[#312245]">
                  {" "}
                  2-6-1992
                </div>{" "}
              </div>
              <div className="w-full flex md:flex-col flex-row gap-2 font-medium text-sm leading-4 text-[#5A4278] md:justify-start justify-between items-start ">
                {" "}
                <div className=" w-full  "> Gender </div>{" "}
                <div className="w-full   md:text-base text-sm leading-5 text-[#312245]">
                  {" "}
                  2-6-1992
                </div>
              </div>
            </div>

            <hr className="border-t border-gray-300 my-4" />
            {/* Second Div */}

            <div className="flex md:flex-row flex-col gap-2 md:h-[59px]  h-full justify-between  ">
              <div className="w-full flex md:flex-col flex-row gap-2 font-medium text-sm leading-4 text-[#5A4278] md:justify-start justify-between items-start ">
                {" "}
                <div className=" w-full  "> Email </div>{" "}
                <div className="w-full  md:text-base text-sm leading-5 text-[#312245]">
                  {" "}
                  Parker@gmail.com
                </div>{" "}
              </div>
              <div className="w-full flex md:flex-col flex-row gap-2 font-medium text-sm leading-4 text-[#5A4278] md:justify-start justify-between items-start ">
                {" "}
                <div className=" w-full  "> Phone Number </div>{" "}
                <div className="w-full   md:text-base text-sm leading-5 text-[#312245]">
                  {" "}
                  +9272828272772
                </div>
              </div>
            </div>

            <hr className="border-t border-gray-300 my-4" />
            {/* Third Div */}
            {shouldShowdiv && (
            <div className="flex md:flex-row flex-col gap-2 md:h-[59px]  h-full justify-between   ">
              <div className="w-full flex md:flex-col flex-row gap-2 font-medium text-sm leading-4 text-[#5A4278] md:justify-start justify-between items-start ">
                {" "}
                <div className=" w-full  "> Lease Start Date </div>{" "}
                <div className="w-full  md:text-base text-sm leading-5 text-[#0C8B3F]">
                  {" "}
                  2-6-1992
                </div>{" "}
              </div>
              <div className="w-full flex md:flex-col flex-row gap-2 font-medium text-sm leading-4 text-[#5A4278] md:justify-start justify-between items-start ">
                {" "}
                <div className=" w-full  "> Lease End Date </div>{" "}
                <div className="w-full   md:text-base text-sm leading-5 text-[#CD2424]">
                  {" "}
                  2-6-1992
                </div>
              </div>
              <div className="w-full flex md:flex-col flex-row gap-2 font-medium text-sm leading-4 text-[#5A4278] md:justify-start justify-between items-start ">
                {" "}
                <div className=" w-full  "> Lease Duration </div>{" "}
                <div className="w-full  md:text-base text-sm leading-5 text-[#312245]">
                  {" "}
                  5 Years
                </div>{" "}
              </div>
            </div>
            )}

{ShowOtherdiv && (
            <div className="w-full  h-full flex flex-col gap-2 font-medium text-sm leading-4 text-[#5A4278]">Current Address <span classname=" text-base leading-5 font-medium text-[#312245]">Washington ,street xyzWashington ,street xyzWashington ,street xyzWashington ,street xyzWashington ,street xyzWashington ,street xyzWashington ,street xyzWashington ,street xyz</span>
            </div>
            )}


          </div>
        </div>
      </div>

      <div className="w-full h-auto   ">
        <div className=" relative w-full  space-y-4   ">
          <input
            type="checkbox"
            className="peer absolute top-0 inset-x-0 w-full h-12 opacity-0 z-10 cursor-pointer  "
          />
          <div className="    w-full  flex items-center     ">
            <h1 className=" xl:text-[24px] lg:text-2xl md:text-2xl text-md leading-[32px] font-semibold text-black dark:text-white ">
              Properties Occupied (12)
            </h1>
          </div>
          <div className=" absolute -top-3   right-3 text-white  transition-tranform duration-500 rotate-0 peer-checked:rotate-180   ">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth="1.5"
              className="w-6 h-6 stroke-black dark:stroke-white"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M19.5 8.25l-7.5 7.5-7.5-7.5"
              />
            </svg>
          </div>
          <div className=" shadow-lg overflow-hidden transition-all duration-500 max-h-0 peer-checked:max-h-full bg-[#F9F9F9] dark:bg-[#042A2F] rounded-lg ">
            <div className="w-full h-auto rounded-lg  ">
              <div className="  overflow-hidden transition-all duration-500 max-h-auto peer-checked:h-auto  w-full  h-auto  space-y-12 rounded-2xl   ">
                <PropertyCard />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default TenantCard;
