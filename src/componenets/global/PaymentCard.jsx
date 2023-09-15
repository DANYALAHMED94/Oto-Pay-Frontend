import React, { useState } from "react";
import tenant1 from "../../assets/tenant1.svg";
import { useLocation } from "react-router-dom";

import PaymentDetails from "./PaymentDetails";

const PaymentCard = ({ tenants,details, land, payment, access, request, provider, accept, width , handleButton, landLord}) => {

  return (
    <div className={`${width} p-4 space-y-4   rounded-2xl bg-white`}>
      <div className="w-full  p-4 rounded-lg bg-gray-100  flex  h-full md:flex-row flex-col  xl:gap-[32px] sxl:gap-[32px] gap-4 ">
        <div className=" xl:w-[239px]  sxl:w-[239px] lg:w-[200px]  flex flex-col gap-4 justify-between items-center ">
          <div className="w-full  flex flex-col gap-2 justify-center items-center">
            <div
              className={`xl:w-[239px]  sxl:w-[239px] lg:w-[200px]  w-full h-full border xl:h-full md:h-[330px] md:w-[350px]"    `}
            >
              <img
                alt="gallery"
                className="w-full object-cover  h-full rounded-lg object-center block"
                src={tenant1}
              />
            </div>

            <button className=" w-full h-[45px] rounded-lg p-3 text-white bg-black">
              View All details
            </button>
            <button className=" w-full whitespace-nowrap flex items-center justify-center gap-2 h-[45px] rounded-lg p-3 font-bold text-base leading-5 text-#17062F border border-[#17062F]">
            <svg width="25" height="24" viewBox="0 0 25 24" fill="none" xmlns="http://www.w3.org/2000/svg">
<g id="arrow-down-to-line">
<path id="Vector" d="M12.5 17V3" stroke="#17062F" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
<path id="Vector_2" d="M6.5 11L12.5 17L18.5 11" stroke="#17062F" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
<path id="Vector_3" d="M19.5 21H5.5" stroke="#17062F" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
</g>
</svg>

                Download Receipt
              
              </button>
          </div>
    
        </div>

       <PaymentDetails payment={payment}/>
      </div>

      
        <div className="w-full h-auto   ">
          <div className=" relative w-full  space-y-4   ">
            <input
              type="checkbox"
              className="peer absolute top-0 inset-x-0 w-full h-12 opacity-0 z-10 cursor-pointer  "
            />
            <div className="w-full  flex items-center">
              <h1 className=" xl:text-[24px] lg:text-2xl md:text-2xl text-md leading-[32px] font-semibold text-black dark:text-white ">
              Previous Payment History
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
                <div className="p-4   overflow-hidden transition-all duration-500 max-h-auto peer-checked:h-auto  w-full  h-auto  space-y-12 rounded-2xl   ">
                
                    <PaymentDetails  details={details}/>
                
                </div>
              </div>
            </div>
          </div>
        </div>
  



    </div>
  );
};

export default PaymentCard;
