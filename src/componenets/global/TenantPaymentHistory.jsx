import React, { useState } from "react";
import { useLocation } from "react-router-dom";

import PaymentDetails from "./PaymentDetails";
import img from "../../assets/Frame 267.png";
import PropertyDetails from "./PropertyDetails";

const TenantPaymentHistory = ({
  width,
  history,
  setHistory,
  setTenantPayment,
  setAnotherProperty,
  tenantPayment,
}) => {
  //   const [isChecked, setIsChecked] = useState(true);

  //   const handleCheckboxChange = () => {
  //     setIsChecked(!isChecked);
  //   };

  return (
    <div className={`${width} p-4 space-y-4   rounded-2xl bg-white`}>
      <div className="w-full border border-black p-4 rounded-lg bg-gray-100  flex  h-full  flex-col  xl:gap-3  gap-4 ">
        <div className="w-full flex gap-2  flex-col  justify-center items-center">
          <h1 className=" w-full   text-black font-bold xl:text-start text-center text-base leading-5">
            Park View City, Washington
          </h1>
          <p className="w-full p-0 text-sm font-medium leading-4 xl:text-start text-center">
            Washington ,street xyz
          </p>
        </div>
        <hr className="border-t border-gray-300 " />

        <div className="w-full flex  xl:flex-row flex-col justify-between bg-[#F6F6F6] gap-2 rounded-lg p-3 ">
          <div className="flex xl:flex-row flex-col w-full  justify-start items-center gap-4 ">
            <div className="md:w-12 w-16 h-16 md:h-12">
              <img
                alt="gallery"
                className="w-full  h-full rounded-lg object-center block"
                src={img}
              />
            </div>

            <div className=" flex flex-col text-sm font-medium leading-5 text-[#0C8B3F] whitespace-nowrap ">
              Lanlord Name
              <span className="text-[#17062F] leading-5 font-medium text-base">
                Smith john
              </span>
            </div>
          </div>

          <div className="flex flex-col w-full   md:justify-end justify-center items-center gap-1 ">
            <div className="flex  text-black text-sm  leading-5 font-medium ">
              Lease Start Date
            </div>
            <div className="flex  text-[#0C8B3F] text-base  leading-5 font-medium ">
              02-06-1992
            </div>
          </div>

          <div className="flex flex-col w-full   md:justify-end justify-center items-center gap-1 ">
            <div className="flex  text-black text-sm  leading-5 font-medium ">
              Lease End Date
            </div>
            <div className="flex  text-[#CD2424] text-base  leading-5 font-medium ">
              02-06-1992
            </div>
          </div>

          <div className="flex flex-col w-full   md:justify-end justify-center items-center gap-1 ">
            <div className="flex  text-black text-sm  leading-5 font-medium ">
              Lease Duration
            </div>
            <div className="flex  text-[#312245] text-base  leading-5 font-medium ">
              5 Years
            </div>
          </div>

          <button
            onClick={() => {
              setTenantPayment("PropertyDetails");
            
            }}
            className="flex justify-center items-center rounded-lg p-1 w-full border border-[#17062F]  font-bold text-base leading-5 text-[#17062F]"
          >
            See Details
          </button>
        </div>
      </div>

      <div className="w-full h-auto   ">
        <div className=" relative w-full  space-y-4   ">
          <input
            type="checkbox"
            className="peer absolute top-0 inset-x-0 w-full h-12 opacity-0 z-10 cursor-pointer  "
          />
          <div className="w-full  flex items-center">
            <h1 className=" xl:text-[24px] lg:text-2xl md:text-2xl text-md leading-[32px] font-semibold text-black dark:text-white ">
              All Payment History of this property
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
                <PaymentDetails
                  setAnotherProperty={setAnotherProperty}
                  setTenantPayment={setTenantPayment}
                  tenantPayment={tenantPayment}
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default TenantPaymentHistory;
