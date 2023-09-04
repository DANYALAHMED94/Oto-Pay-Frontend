import React from "react";
import card1 from "../../assets/Insurance.svg";
import card2 from "../../assets/vacant.svg";
import card3 from "../../assets/rent.svg";
import card4 from "../../assets/unpaid.svg";
import card5 from "../../assets/service1.svg";
import card6 from "../../assets/service2.svg";
const Cards = () => {
  return (
    <div className="  px-6 py-4 bg-white rounded-xl">
      <div className="flex grid xl:grid-cols-2 lg:grid-cols-2 md:grid-cols-2  grid-cols-1 gap-8 ">
        <div className="flex xl:p-6  lg:p-4   xl:gap-6 lg:gap-4  md:p-5 md:gap-2 p-4 gap-2 rounded-lg bg-[#FFE8C6]  ">
          <div className="">
            <img src={card1} alt="" />
          </div>
          <div className="flex flex-col  gap-4  ">
            <div className="flex gap-4 text-[#0C8B3F] text-xl font-semibold leading-6 text-center">
              <svg
                width="24"
                height="25"
                viewBox="0 0 24 25"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M12 22.666C17.523 22.666 22 18.189 22 12.666C22 7.14302 17.523 2.66602 12 2.66602C6.477 2.66602 2 7.14302 2 12.666C2 18.189 6.477 22.666 12 22.666Z"
                  stroke="#0C8B3F"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
                <path
                  d="M9 12.666L11 14.666L15 10.666"
                  stroke="#0C8B3F"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
              817191
            </div>
            <div className="flex justify-between items-center gap-2 font-medium xl:text-base lg:text-sm leading-7">
              Occupied Properties
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
            </div>
          </div>
        </div>

        <div className="flex xl:p-6  lg:p-4 xl:gap-6 lg:gap-4 md:p-5 md:gap-2 p-4 gap-2 rounded-lg bg-[#FFE2E2]">
          <div className="">
            <img src={card2} alt="" />
          </div>
          <div className="flex flex-col gap-4">
            <div className="flex gap-4 text-[#CD2424] text-xl font-semibold leading-6 text-center">
              <svg
                width="25"
                height="25"
                viewBox="0 0 25 25"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M12.5 22.666C18.023 22.666 22.5 18.189 22.5 12.666C22.5 7.14302 18.023 2.66602 12.5 2.66602C6.977 2.66602 2.5 7.14302 2.5 12.666C2.5 18.189 6.977 22.666 12.5 22.666Z"
                  stroke="#CD2424"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
                <path
                  d="M9 12.998H15"
                  stroke="#CD2424"
                  strokeWidth="2"
                  strokeLinecap="round"
                />
              </svg>
              817191
            </div>
            <div className="flex justify-between items-center gap-2 font-medium xl:text-base lg:text-sm leading-7">
              Vacant Properties
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
            </div>
          </div>
        </div>

        <div className="flex  xl:p-6  lg:p-4 xl:gap-6 lg:gap-4 md:p-5 md:gap-2 p-4 gap-2 rounded-lg bg-[#D8FFE7]">
          <div className="">
            <img src={card3} alt="" />
          </div>
          <div className="flex flex-col gap-4">
            <div className="flex gap-4 text-[#0C8B3F] text-xl font-semibold leading-6 text-center ">
              <svg
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M12 13C14.7614 13 17 10.7614 17 8C17 5.23858 14.7614 3 12 3C9.23858 3 7 5.23858 7 8C7 10.7614 9.23858 13 12 13Z"
                  stroke="#0C8B3F"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
                <path
                  d="M20 21C20 18.8783 19.1571 16.8434 17.6569 15.3431C16.1566 13.8429 14.1217 13 12 13C9.87827 13 7.84344 13.8429 6.34315 15.3431C4.84285 16.8434 4 18.8783 4 21"
                  stroke="#0C8B3F"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
              817191
            </div>
            <div className="flex justify-between items-center gap-2 font-medium xl:text-base lg:text-sm leading-7">
              Rent Paid
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
            </div>
          </div>
        </div>

        <div className="flex xl:p-6  lg:p-4 xl:gap-6 lg:gap-4 md:p-5 md:gap-2 p-4 gap-2 rounded-lg bg-[#F7E1FF]">
          <div className="">
            <img src={card4} alt="" />
          </div>
          <div className="flex flex-col gap-4 ">
            <div className="flex gap-4 text-[#CD2424] text-xl font-semibold leading-6 text-center">
              <svg
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M12 13C14.7614 13 17 10.7614 17 8C17 5.23858 14.7614 3 12 3C9.23858 3 7 5.23858 7 8C7 10.7614 9.23858 13 12 13Z"
                  stroke="#CD2424"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
                <path
                  d="M20 21C20 18.8783 19.1571 16.8434 17.6569 15.3431C16.1566 13.8429 14.1217 13 12 13C9.87827 13 7.84344 13.8429 6.34315 15.3431C4.84285 16.8434 4 18.8783 4 21"
                  stroke="#CD2424"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
              817191
            </div>
            <div className="flex justify-between items-center gap-2 font-medium xl:text-base lg:text-sm leading-7">
              Unpaid Rent
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
            </div>
          </div>
        </div>

        <div className="flex  xl:p-6  lg:p-4 xl:gap-6 lg:gap-4 md:p-5 md:gap-2 p-4 gap-2 rounded-lg bg-[#ECE9FF]">
          <div className="">
            <img src={card5} alt="" />
          </div>
          <div className="flex flex-col gap-4">
            <div className="flex gap-4 text-[#2E0664] text-xl font-semibold leading-6 text-center">
              <svg
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M12 13C14.7614 13 17 10.7614 17 8C17 5.23858 14.7614 3 12 3C9.23858 3 7 5.23858 7 8C7 10.7614 9.23858 13 12 13Z"
                  stroke="#2E0664"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
                <path
                  d="M20 21C20 18.8783 19.1571 16.8434 17.6569 15.3431C16.1566 13.8429 14.1217 13 12 13C9.87827 13 7.84344 13.8429 6.34315 15.3431C4.84285 16.8434 4 18.8783 4 21"
                  stroke="#2E0664"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
              817191
            </div>
            <div className="flex justify-between items-center gap-2 font-medium xl:text-base lg:text-sm leading-7 ">
              Service Providers
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
            </div>
          </div>
        </div>

        <div className="flex  xl:p-6  lg:p-4 xl:gap-6 lg:gap-4 md:p-5 md:gap-2 p-4 gap-2 rounded-lg bg-[#D4E3FF]">
          <div className="">
            <img src={card6} alt="" />
          </div>
          <div className="flex flex-col gap-4">
            <div className="flex gap-4 text-[#034D92] text-xl font-semibold leading-6 text-center">
              <svg
                width="25"
                height="25"
                viewBox="0 0 25 25"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M15 2.33203H6.5C5.96957 2.33203 5.46086 2.54274 5.08579 2.91782C4.71071 3.29289 4.5 3.8016 4.5 4.33203V20.332C4.5 20.8625 4.71071 21.3712 5.08579 21.7462C5.46086 22.1213 5.96957 22.332 6.5 22.332H18.5C19.0304 22.332 19.5391 22.1213 19.9142 21.7462C20.2893 21.3712 20.5 20.8625 20.5 20.332V7.83203L15 2.33203Z"
                  stroke="#034D92"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
                <path
                  d="M14.5 2.33203V8.33203H20.5"
                  stroke="#034D92"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
                <path
                  d="M16.5 13.332H8.5"
                  stroke="#034D92"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
                <path
                  d="M16.5 17.332H8.5"
                  stroke="#034D92"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
                <path
                  d="M10.5 9.33203H8.5"
                  stroke="#034D92"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
              817191
            </div>
            <div className="flex justify-between  items-center gap-2 font-medium xl:text-base lg:text-sm leading-7 ">
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
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Cards;
