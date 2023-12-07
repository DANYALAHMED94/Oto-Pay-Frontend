import React from "react";


import PaymentDetails from "./PaymentDetails";

const PaymentCard = ({

  details,
 
  payment,
 
  width,


}) => {
  return (
    <div className={`${width} p-4 space-y-4   rounded-2xl bg-white`}>
     
        <PaymentDetails payment={payment} request={"response"}  />
  
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
                <PaymentDetails details={details} />
                <PaymentDetails payment={"Approval"} request={"response"}  />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PaymentCard;
