import React from "react";
import card1 from "../../assets/tenantCard1.svg";
import card2 from "../../assets/tenantCard2.svg";
import card3 from "../../assets/tenantCard3.svg";
import card4 from "../../assets/tenantCard4.svg";

const TenantCards = () => {
  return (
    <div className="  px-6 py-4 bg-white rounded-xl">
      <div className=" grid xl:grid-cols-2 lg:grid-cols-2 md:grid-cols-2  grid-cols-1 gap-8 ">
        <div className="flex xl:p-6  lg:p-4   xl:gap-6 lg:gap-4  md:p-5 md:gap-2 p-4 gap-2 rounded-lg bg-[#F6F6F6] ">
          <div className="">
            <img src={card1} alt="" />
          </div>
          <div className="flex flex-col  gap-4  ">
            <h1 className="flex gap-4 text-black text-xl font-semibold leading-6 text-center">
             12
            </h1>
            <p className="flex justify-between items-center gap-2 font-medium xl:text-base lg:text-sm leading-7">
               My Occupied Properties
              <svg
                width="25"
                height="25"
                viewBox="0 0 25 25"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M14.93 6.5957L21 12.6657L14.93 18.7357M4 12.6657H20.83"
                  stroke="#40302A"
                  strokeWidth="1.5"
                  strokeMiterlimit="10"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
            </p>
          </div>
        </div>

        <div className="flex xl:p-6  lg:p-4 xl:gap-6 lg:gap-4 md:p-5 md:gap-2 p-4 gap-2 rounded-lg bg-[#F6F6F6]">
          <div className="">
            <img src={card2} alt="" />
          </div>
          <div className="flex flex-col gap-4">
            <h1 className="flex gap-4 text-black text-xl font-semibold leading-6 text-center">
             12
            </h1>
            <p className="flex justify-between items-center gap-2 font-medium xl:text-base lg:text-sm leading-7">
              Service Requests
              <svg
                width="25"
                height="25"
                viewBox="0 0 25 25"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M14.93 6.5957L21 12.6657L14.93 18.7357M4 12.6657H20.83"
                  stroke="#40302A"
                  strokeWidth="1.5"
                  strokeMiterlimit="10"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
            </p>
          </div>
        </div>

        <div className="flex  xl:p-6  lg:p-4 xl:gap-6 lg:gap-4 md:p-5 md:gap-2 p-4 gap-2 rounded-lg bg-[#F6F6F6]">
          <div className="">
            <img src={card3} alt="" />
          </div>
          <div className="flex flex-col gap-4">
            <h1 className="flex gap-4 text-black text-xl font-semibold leading-6 text-center ">
           12
            </h1>
            <p className="flex justify-between items-center gap-2 font-medium xl:text-base lg:text-sm leading-7">
              Payments
              <svg
                width="25"
                height="25"
                viewBox="0 0 25 25"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M14.93 6.5957L21 12.6657L14.93 18.7357M4 12.6657H20.83"
                  stroke="#40302A"
                  strokeWidth="1.5"
                  strokeMiterlimit="10"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
            </p>
          </div>
        </div>

        <div className="flex xl:p-6  lg:p-4 xl:gap-6 lg:gap-4 md:p-5 md:gap-2 p-4 gap-2 rounded-lg bg-[#F6F6F6]">
          <div className="">
            <img src={card4} alt="" />
          </div>
          <div className="flex flex-col gap-4 ">
            <h1 className="flex gap-2 text-black text-xl font-semibold leading-6 text-center">
           
              50 <span className="text-[#8B8A8C] font-normal"> (unseen ) </span>
            </h1>
            <p className="flex justify-between items-center gap-2 font-medium xl:text-base lg:text-sm leading-7">
            Communication
              <svg
                width="25"
                height="25"
                viewBox="0 0 25 25"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M14.93 6.5957L21 12.6657L14.93 18.7357M4 12.6657H20.83"
                  stroke="#40302A"
                  strokeWidth="1.5"
                  strokeMiterlimit="10"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
            </p>
          </div>
        </div>

      
      </div>
    </div>
  );
};

export default TenantCards;
