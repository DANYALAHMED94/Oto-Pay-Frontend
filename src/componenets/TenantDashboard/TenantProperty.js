import React, { useState } from "react";
import smh from "../../assets/image 2.png";
import PropertyCard from "../global/PropertyCard";
import list from "../../assets/unlist.svg";
import trash from "../../assets/trash-2.svg";
import { PropertyModal } from "../global/PropertyModal";
import vacant from "../../assets/image 20.png";
import del from "../../assets/image 3.png";
import update from "../../assets/image 4.png";
import apply from "../../assets/image-5.png";
import {useLocation } from "react-router-dom";

const TenantProperty = (property) => {

  const location = useLocation();
  const Showdiv =
  location.pathname === "/tenant-dashboard/property"  ;
 
  return (
    <>
          <div className="w-full bg-[#F6F6F6] px-[16px]  md:py-[18px] py-[8px] flex    lg:justify-between gap-4  flex-col justify-center ">
        <div className="w-full  xl:px-[20px] xl:py-[4px] lg:p-[14px] md:p-[16px] p-[18px]  bg-[#F6F6F6]  rounded-lg flex flex-col  md:gap-4 gap-2 ">
        

          <div className="w-full flex md:flex-row flex-col justify-start gap-6">
            <div className=" border border-[#C5C2C9] flex gap-3 p-2 xl:w-[585px]  lg:w-[390px] md:w-[350px] w-full lg:h-14 h-12 bg-[#ECEBED] rounded-md   justify-between items-center">
              <svg
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M11 19C15.4183 19 19 15.4183 19 11C19 6.58172 15.4183 3 11 3C6.58172 3 3 6.58172 3 11C3 15.4183 6.58172 19 11 19Z"
                  stroke="#5A4278"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
                <path
                  d="M21.0004 20.9984L16.6504 16.6484"
                  stroke="#5A4278"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>

              <input
                id="search"
                name="search"
                type="text"
                required
                className="w-full  xl:h-[48px] lg:h-[40px] md:h-[40px] h-[32px] flex-auto  px-2 py-2 text-black  focus:outline-none bg-[#ECEBED] sm:text-sm sm:leading-6"
                placeholder="Search Property Name & Location "
              />
            </div>

            <div className=" lg:w-[170px] md:w-36 w-full lg:h-14 h-12  px-[16px] rounded-md bg-[#653E92] flex justify-center items-center">
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
              <select className=" w-full rounded-md  bg-[#653E92] text-white xl:text-base text-sm focus:outline-none">
                <option value=""> All Filters </option>
                <option value="fully-furnished">Washington, street xyz</option>
                <option value="partially-furnished">
                  Washington, street xyz
                </option>
                <option value="not-furnished">Washington, street xyz</option>
              </select>
            </div>

          </div>
            </div>
      
       
          
       <PropertyCard property= {property} /> 
       <PropertyCard property= {property} /> 
      </div>
    
    </>
  );
};

export default TenantProperty;