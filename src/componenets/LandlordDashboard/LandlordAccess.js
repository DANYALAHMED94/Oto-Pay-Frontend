import React, { useState } from "react";

import TenantPaymentHistory from "../global/TenantPaymentHistory";
import AddPaymentForm from "../global/AddPaymentForm";


const LandlordAccess = ({state,setAnotherProperty}) => {
  const [landlordAccess, setLandlordAccess] = useState("");
  const [filterClicked, setFilterClicked] = useState(false);

  return (
    <>
      <div className={`w-full bg-[#F6F6F6] px-[16px]  md:py-[18px] py-[8px] flex    lg:justify-between   ${
              filterClicked ? " " : "gap-4"
            } flex-col justify-center `}>
        <div className="w-full  xl:px-[20px] xl:py-[4px] lg:p-[14px] md:p-[16px] p-[18px]  bg-[#F6F6F6]  rounded-lg flex flex-col  md:gap-4 gap-2 ">
          <div className={`w-full flex md:flex-row flex-col justify-start gap-6  ${
              filterClicked ? "hidden " : ""
            }`}>
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

            <button
              onClick={() => {
                setLandlordAccess("LandlordAccess");
                setFilterClicked(!filterClicked);
              }}
              type="submit"
              className="flex justify-center items-center gap-[4px] text-white bg-[#17062F]  lg:w-[250px] md:w-48 w-full lg:h-14 h-12  px-[16px]    rounded-md xl:text-base text-sm  leading-4 text-center  font-bold whitespace-nowrap   "
            >
           
             Access
            </button>
            <button
              onClick={() => {
                setLandlordAccess("AddManager");
                setFilterClicked(!filterClicked);
              }}
              type="submit"
              className="flex justify-center items-center gap-[4px] text-white bg-[#17062F]  lg:w-[250px] md:w-48 w-full lg:h-14 h-12  px-[16px]    rounded-md xl:text-base text-sm  leading-4 text-center  font-bold whitespace-nowrap   "
            >
              <svg
                className="w-[20px] h-[20px]"
                viewBox="0 0 14 15"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M1 7.5H13M7 13.5V1.5"
                  stroke="white"
                  strokeWidth="1.5"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
               Add New Manager
            </button>
          </div>
        </div>

 

         {landlordAccess === "LandlordAccess" ? (
          <TenantPaymentHistory landlordAccess={landlordAccess} setLandlordAccess={setLandlordAccess}  />
        ) : null}

{landlordAccess === "AddManager" ? (
          <AddPaymentForm landlordAccess={landlordAccess} setLandlordAccess={setLandlordAccess}  />
        ) : null}

{landlordAccess === "AddLink" ? (
          <AddPaymentForm landlordAccess={landlordAccess} setLandlordAccess={setLandlordAccess}  />
        ) : null}
      </div>
    </>
  );
};

export default LandlordAccess;