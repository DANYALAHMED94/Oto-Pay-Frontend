import React, { useState } from "react";
import tenant1 from "../../assets/tenant1.svg";
import { useLocation } from "react-router-dom";
import PropertyCard from "./PropertyCard";
import AcceptedReq from "./AcceptedReq";
import country from "../../assets/download 1.png";
import history from "../../assets/history.png";

const TenantCard = ({
  tenants,
  land,
  payment,
  access,
  request,
  provider,
  accept,
  width,
  handleButton,
  landLord,
}) => {
  const [isChecked, setIsChecked] = useState(true);
  const location = useLocation();

  const handleCheckboxChange = () => {
    setIsChecked(!isChecked);
  };

  const shouldShowdiv =
    location.pathname === "/admin-dashboard/tenants" ||
    location.pathname === "/admin-dashboard/service-request";
  const ShowOtherdiv =
    location.pathname === "/admin-dashboard/access" ||
    location.pathname === "/admin-dashboard/service-providers";
  const ShowThirddiv =
    location.pathname === "/admin-dashboard/service-providers";

  const Showlandlorddiv =
    location.pathname === "/admin-dashboard/landlord" ||
    location.pathname === "/admin-dashboard/payments";

  return (
    <div className={`${width} p-4 space-y-4   rounded-2xl bg-white`}>
      <div className="w-full  p-4 rounded-lg bg-gray-100  flex  h-full md:flex-row flex-col  xl:gap-[32px] sxl:gap-[32px] gap-4 ">
        <div className=" xl:w-[239px]  sxl:w-[239px] lg:w-[200px]  flex flex-col gap-4 justify-between items-center ">
          <div className="w-full  flex flex-col gap-2 justify-center items-center">
            <div
              className={`xl:w-[239px]  sxl:w-[239px] lg:w-[200px]  w-full h-full ${
                access === "All"
                  ? " xl:h-full md:h-[330px] md:w-[350px]"
                  : "md:h-[230px]    md:w-[250px]"
              }     `}
            >
              <img
                alt="gallery"
                className="w-full object-cover  h-full rounded-lg object-center block"
                src={tenant1}
              />
            </div>

            <button className=" w-full h-[45px] rounded-lg p-3 text-white bg-black">
              View All dettails
            </button>
          </div>
          {ShowThirddiv && (
            <div className="flex flex-col w-full gap-2">
              <div className="w-full h-[45px] p-3 rounded-lg bg-[#2E0664] bg-opacity-10 flex justify-between items-center ">
                {isChecked ? (
                  <span className="font-bold text-base leading-5 text-[#312245]">
                    Active
                  </span>
                ) : (
                  <span className="font-bold text-base leading-5 text-[#312245]">
                    InActive
                  </span>
                )}
                <label className="relative inline-flex  cursor-pointer">
                  <input
                    type="checkbox"
                    value=""
                    className="sr-only peer"
                    checked={isChecked}
                    onChange={handleCheckboxChange}
                  />
                  <div className="w-11 h-6 bg-white rounded-full peer   peer-checked:after:translate-x-full  after:content-[''] after:absolute after:top-0.5 after:left-[2px] after:bg-[#2E0664]  after:rounded-full after:h-5 after:w-5 after:transition-all  peer-checked:bg-white"></div>
                </label>
              </div>

              {provider === "Block Providers" ? (
                <button className=" w-full flex items-center justify-center gap-2 h-[45px] rounded-lg p-3 font-bold text-base leading-5 text-white bg-[#2E0664] ">
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
                  UnBlocked
                </button>
              ) : (
                <button className=" w-full flex items-center justify-center gap-2 h-[45px] rounded-lg p-3 font-bold text-base leading-5 text-[#CD2424] bg-[#CD2424] bg-opacity-10">
                  <svg
                    width="25"
                    height="25"
                    viewBox="0 0 25 25"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <g id="trash-2">
                      <path
                        id="Vector"
                        d="M4 6.5H22"
                        stroke="#CD2424"
                        stroke-width="2"
                        stroke-linecap="round"
                        stroke-linejoin="round"
                      />
                      <path
                        id="Vector_2"
                        d="M20 6.5V20.5C20 21.5 19 22.5 18 22.5H8C7 22.5 6 21.5 6 20.5V6.5"
                        stroke="#CD2424"
                        stroke-width="2"
                        stroke-linecap="round"
                        stroke-linejoin="round"
                      />
                      <path
                        id="Vector_3"
                        d="M9 6.5V4.5C9 3.5 10 2.5 11 2.5H15C16 2.5 17 3.5 17 4.5V6.5"
                        stroke="#CD2424"
                        stroke-width="2"
                        stroke-linecap="round"
                        stroke-linejoin="round"
                      />
                      <path
                        id="Vector_4"
                        d="M11 11.5V17.5"
                        stroke="#CD2424"
                        stroke-width="2"
                        stroke-linecap="round"
                        stroke-linejoin="round"
                      />
                      <path
                        id="Vector_5"
                        d="M15 11.5V17.5"
                        stroke="#CD2424"
                        stroke-width="2"
                        stroke-linecap="round"
                        stroke-linejoin="round"
                      />
                    </g>
                  </svg>
                  Remove
                </button>
              )}
            </div>
          )}
        </div>

        <div className="xl:w-[740px]  sxl:w-full lg:w-[410px] w-full h-full flex flex-col gap-4  ">
          <div
            className={`flex gap-2 ${
              access === "All"
                ? "flex xl:flex-row flex-col justify start"
                : "flex md:flex-row flex-col justify-between"
            }  `}
          >
            <h1 className=" w-full md:whitespace-normal whitespace-nowrap  text-black font-semibold lg:text-2xl text-xl leading-9">
              Mark John Smith
            </h1>
            {tenants === "All" || request === "All Landlords" ? (
              <button className="w-[150px] p-3 relative font-bold text-base leading-5 flex justify-center items-center gap-2 text-[#CD2424]">
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

            {tenants === "Total Block" || request === "Blocked Landlords" ? (
              <button className="w-[150px] p-3 bg-[#2E0664] relative rounded-lg font-bold md:text-base text-sm leading-5 flex justify-center items-center gap-2 text-white">
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
                UnBlock
              </button>
            ) : null}

            {access === "All" ? (
              <div className="flex gap-2">
                <button className="lg:w-[129px] md:w-[100px] md:p-0 p-2 w-full h-10 relative font-bold xl:text-base text-sm leading-5 flex justify-center items-center gap-2 text-[#CD2424]">
                  <svg
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M3 6H21"
                      stroke="#CD2424"
                      stroke-width="2"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                    />
                    <path
                      d="M19 6V20C19 21 18 22 17 22H7C6 22 5 21 5 20V6"
                      stroke="#CD2424"
                      stroke-width="2"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                    />
                    <path
                      d="M8 6V4C8 3 9 2 10 2H14C15 2 16 3 16 4V6"
                      stroke="#CD2424"
                      stroke-width="2"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                    />
                    <path
                      d="M10 11V17"
                      stroke="#CD2424"
                      stroke-width="2"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                    />
                    <path
                      d="M14 11V17"
                      stroke="#CD2424"
                      stroke-width="2"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                    />
                  </svg>
                  <div className="absolute inset-0 bg-[#CD2424] opacity-10 pointer-events-none rounded-md"></div>
                  Remove
                </button>

                <button className="flex lg:w-[180px] md:w-[150px]  w-full md:p-0 p-2 h-10 relative rounded-lg font-bold xl:text-base text-sm leading-5 justify-center items-center gap-2 text-#2E0664 whitespace-nowrap">
                  <svg
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M19 3H5C3.89543 3 3 3.89543 3 5V19C3 20.1046 3.89543 21 5 21H19C20.1046 21 21 20.1046 21 19V5C21 3.89543 20.1046 3 19 3Z"
                      stroke="#2E0664"
                      stroke-width="2"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                    />
                    <path
                      d="M17 12H15L13 17L11 7L9 12H7"
                      stroke="#2E0664"
                      stroke-width="2"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                    />
                  </svg>
                  <div className="absolute inset-0 bg-[#2E0664] opacity-10 pointer-events-none rounded-md"></div>
                  View All Activity
                </button>
              </div>
            ) : null}

           
        
              { payment === "Landlord Payment" || provider === "All Providers" ||  provider === "Block Providers"? (  
                
                <button className="xl:w-72 whitespace-nowrap w-full flex items-center justify-center gap-2 h-[45px] rounded-lg p-3 font-bold text-base leading-5 text-[#2E0664] bg-[#2E0664] bg-opacity-10 ">
              <img
                       alt="gallery"
                       className="w-6 object-cover  h-6  object-center block"
                       src={history}
                     />
             View All History
            
            </button>) : null }
           
       

          </div>

          <div className=" w-full h-full text-black flex flex-col   ">
            {/* First Div */}
            <div className="flex md:flex-row flex-col gap-2 md:h-[59px]  h-full justify-between ">
              <div className="w-full flex md:flex-col flex-row gap-2 font-medium text-sm leading-4 text-[#5A4278] md:justify-start justify-between items-start ">
                <div className=" w-full  "> Date of Birth </div>
                <div className="w-full   md:text-base text-sm leading-5 text-[#312245]">
                  2-6-1992
                </div>
              </div>
              <div className="w-full flex md:flex-col flex-row gap-2 font-medium text-sm leading-4 text-[#5A4278] md:justify-start justify-between items-start ">
                <div className=" w-full  "> Gender </div>
                <div className="w-full   md:text-base text-sm leading-5 text-[#312245]">
                  2-6-1992
                </div>
              </div>
            </div>

            <hr className="border-t border-gray-300 my-4" />
            {/* Second Div */}

            <div className="flex md:flex-row flex-col gap-2 md:h-[59px]  h-full justify-between  ">
              <div className="w-full flex md:flex-col flex-row gap-2 font-medium text-sm leading-4 text-[#5A4278] md:justify-start justify-between items-start ">
                <div className=" w-full  "> Email </div>
                <div className="w-full  md:text-base text-sm leading-5 text-[#312245]">
                  Parker@gmail.com
                </div>
              </div>
              <div className="w-full flex md:flex-col flex-row gap-2 font-medium text-sm leading-4 text-[#5A4278] md:justify-start justify-between items-start ">
                <div className=" w-full  "> Phone Number </div>
                <div className="w-full   md:text-base text-sm leading-5 text-[#312245]">
                  +9272828272772
                </div>
              </div>
            </div>

            <hr className="border-t border-gray-300 my-4" />
            {/* Third Div */}
            {shouldShowdiv && (
              <div className="flex md:flex-row flex-col gap-2 md:h-[59px]  h-full justify-between   ">
                <div className="w-full flex md:flex-col flex-row gap-2 font-medium text-sm leading-4 text-[#5A4278] md:justify-start justify-between items-start ">
                  <div className=" w-full  "> Lease Start Date </div>
                  <div className="w-full  md:text-base text-sm leading-5 text-[#0C8B3F]">
                    2-6-1992
                  </div>
                </div>
                <div className="w-full flex md:flex-col flex-row gap-2 font-medium text-sm leading-4 text-[#5A4278] md:justify-start justify-between items-start ">
                  <div className=" w-full  "> Lease End Date </div>
                  <div className="w-full   md:text-base text-sm leading-5 text-[#CD2424]">
                    2-6-1992
                  </div>
                </div>
                <div className="w-full flex md:flex-col flex-row gap-2 font-medium text-sm leading-4 text-[#5A4278] md:justify-start justify-between items-start ">
                  <div className=" w-full  "> Lease Duration </div>
                  <div className="w-full  md:text-base text-sm leading-5 text-[#312245]">
                    5 Years
                  </div>
                </div>
              </div>
            )}

            {ShowThirddiv && (
              <div>
                <div className="flex md:flex-row flex-col gap-2 md:h-[59px]  h-full justify-between  ">
                  <div className="w-full flex md:flex-col flex-row gap-2 font-medium text-sm leading-4 text-[#5A4278] md:justify-start justify-between items-start ">
                    <div className=" w-full  "> Availability Start </div>
                    <div className="w-full flex items-center gap-2  text-[#312245]">
                      <svg
                        width="16"
                        height="16"
                        viewBox="0 0 16 17"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <g id="clock-2">
                          <path
                            id="Vector"
                            d="M8.00016 15.1693C11.6821 15.1693 14.6668 12.1845 14.6668 8.5026C14.6668 4.82071 11.6821 1.83594 8.00016 1.83594C4.31826 1.83594 1.3335 4.82071 1.3335 8.5026C1.3335 12.1845 4.31826 15.1693 8.00016 15.1693Z"
                            stroke="#0C8B3F"
                            stroke-width="1.33333"
                            stroke-linecap="round"
                            stroke-linejoin="round"
                          />
                          <path
                            id="Vector_2"
                            d="M8 4.5V8.5L10.6667 7.16667"
                            stroke="#0C8B3F"
                            stroke-width="1.33333"
                            stroke-linecap="round"
                            stroke-linejoin="round"
                          />
                        </g>
                      </svg>
                      <span className="md:text-base text-sm leading-5 text-center text-[#0C8B3F]">
                        05 : 06
                      </span>
                      AM
                    </div>
                  </div>
                  <div className="w-full flex md:flex-col flex-row gap-2 font-medium text-sm leading-4 text-[#5A4278] md:justify-start justify-between items-start ">
                    <div className=" w-full  "> Availability End </div>
                    <div className="w-full flex items-center gap-2   text-[#312245]">
                      <svg
                        width="16"
                        height="16"
                        viewBox="0 0 16 17"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <g id="clock-2">
                          <path
                            id="Vector"
                            d="M8.00016 15.1693C11.6821 15.1693 14.6668 12.1845 14.6668 8.5026C14.6668 4.82071 11.6821 1.83594 8.00016 1.83594C4.31826 1.83594 1.3335 4.82071 1.3335 8.5026C1.3335 12.1845 4.31826 15.1693 8.00016 15.1693Z"
                            stroke="#CD2424"
                            stroke-width="1.33333"
                            stroke-linecap="round"
                            stroke-linejoin="round"
                          />
                          <path
                            id="Vector_2"
                            d="M8 4.5V8.5L10.6667 7.16667"
                            stroke="#CD2424"
                            stroke-width="1.33333"
                            stroke-linecap="round"
                            stroke-linejoin="round"
                          />
                        </g>
                      </svg>
                      <span className="md:text-base text-sm leading-5 text-center text-[#CD2424]">
                        12 : 06
                      </span>
                      PM
                    </div>
                  </div>
                </div>
                <hr className="border-t border-gray-300 my-4" />
                <div className="flex md:flex-row flex-col gap-2 md:h-[59px]  h-full justify-between  ">
                  <div className="w-full flex md:flex-col flex-row gap-2 font-medium text-sm leading-4 text-[#5A4278] md:justify-start justify-between items-start ">
                    <div className=" w-full  "> Country </div>
                    <div className="w-full flex items-center gap-2 md:text-base text-sm leading-5 text-[#312245]">
                      <div className="xl:w-6 lg:w-6 w-full lg:h-4 h-7 flex justify-center items-center">
                        <img
                          alt="gallery"
                          className="w-full object-cover  h-full  object-center block"
                          src={country}
                        />
                      </div>
                      South Africa
                    </div>
                  </div>
                  <div className="w-full flex md:flex-col flex-row gap-2 font-medium text-sm leading-4 text-[#5A4278] md:justify-start justify-between items-start ">
                    <div className=" w-full  "> Price Per Hour </div>
                    <div className="w-full   md:text-base text-sm leading-5 text-[#312245]">
                      $26,262
                    </div>
                  </div>
                </div>
                <hr className="border-t border-gray-300 my-4" />
              </div>
            )}

            {ShowOtherdiv && (
              <div className="w-full  h-full flex flex-col gap-2 font-medium text-sm leading-4 text-[#5A4278]">
                Current Address
                <span classname=" text-base leading-5 font-medium text-[#312245]">
                  Washington ,street xyzWashington ,street xyzWashington ,street
                  xyzWashington ,street xyzWashington ,street xyzWashington
                  ,street xyzWashington ,street xyzWashington ,street xyz
                </span>
              </div>
            )}

            {Showlandlorddiv && (
              <div className="flex md:flex-row flex-col gap-2 md:h-[59px]  h-full justify-between  ">
                <div className="w-full flex md:flex-col flex-row gap-2 font-medium text-sm leading-4 text-[#5A4278] md:justify-start justify-between items-start ">
                  <div className=" w-full  "> Bank Account Details </div>
                  <div className="w-full  md:text-base text-sm leading-5 text-[#312245]">
                    1234 2828 2828
                  </div>
                </div>
                <div className="w-full flex md:flex-col flex-row gap-2 font-medium text-sm leading-4 text-[#5A4278] md:justify-start justify-between items-start ">
                  <div className=" w-full  ">Tax Identification Number </div>
                  <div className="w-full   md:text-base text-sm leading-5 text-[#312245]">
                    282828832VCsg
                  </div>
                </div>
              </div>
            )}
          </div>
        </div>
      </div>

      
    

      {request === "All Requests" || landLord === "req" ? <AcceptedReq /> : null}
      
      {request === "Accepted" || landLord === "drop" || request=== "All Landlords" || request === "Blocked Landlords"  ? (
        <div className="w-full h-auto   ">
          <div className=" relative w-full  space-y-4   ">
            <input
              type="checkbox"
              className="peer absolute top-0 inset-x-0 w-full h-12 opacity-0 z-10 cursor-pointer  "
            />
            <div className="w-full  flex items-center">
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
                  {accept === "accreq" ? (
                    <AcceptedReq request={request} />
                  ) : (
                    <PropertyCard  landLord={landLord} request={request}  />
                  )}
                </div>
              </div>
            </div>
          </div>
        </div>
      ) : null}
    </div>
  );
};

export default TenantCard;
