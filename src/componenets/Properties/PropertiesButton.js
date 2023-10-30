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

const PropertiesButton = () => {
  const [properties, setProperties] = useState("");
  const [showModal, setShowModal] = useState(false);
  const [handleButton, setHandleButton] = useState("");
  const location = useLocation();
  const Showdiv =
  location.pathname === "/tenant-dashboard/property"  ;
 
  return (
    <>
      <div className="w-full bg-[#F6F6F6] px-[16px] lg:py-[24px] md:py-[18px] py-[8px] flex    lg:justify-between gap-4  flex-col justify-center ">
        <div className="w-full  xl:p-[32px] lg:p-[14px] md:p-[16px] p-[18px] bg-[#2E0664] rounded-lg flex  flex-col md:gap-4 gap-2 ">
          <div className="text-white font-bold text-xl ">Properties</div>

          <div className="w-full flex md:flex-row flex-col justify-between gap-2">
            <div className=" border border-white flex gap-3 p-2 xl:w-[585px]  lg:w-[390px] md:w-[350px] w-full lg:h-14 h-12 bg-[#F6F6F6] rounded-md   justify-between items-center">
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
                className="w-full  xl:h-[48px] lg:h-[40px] md:h-[40px] h-[32px] flex-auto  px-2 py-2 text-black  focus:outline-none bg-[#F6F6F6]  sm:text-sm sm:leading-6"
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

            <button
              type="submit"
              className="flex justify-center items-center gap-[4px] text-white bg-[#17062F]  lg:w-[220px] md:w-48 w-full lg:h-14 h-12  px-[16px]    rounded-md xl:text-base text-sm  leading-4 text-center  font-bold whitespace-nowrap   "
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
              Add new Property
            </button>
          </div>
    

          <div className="flex w-full md:flex-row flex-col  justify-between gap-2">
            <button
              type="submit"
              onClick={() => setProperties("All")}
              className={`flex w-full justify-between items-center gap-[4px]  ${
                properties === "All"
                  ? "bg-[#E4DFEB] text-black"
                  : "bg-[#2E0664] text-white"
              }    lg:h-[56px] md:h-[50px] xl:px-4 px-1  h-12  rounded-md xl:text-base text-sm border-[2px] border-white leading-4 text-center  xl:font-bold  font-semibold`}
            >
              <div className="flex justify-start items-center xl:2 gap-1 whitespace-nowrap">
                <div className="xl:w-12 lg:w-9  w-full lg:h-10 h-7 flex justify-center items-center">
                  <img
                    alt="gallery"
                    className="w-full object-cover  h-full rounded-lg object-center block"
                    src={smh}
                  />
                </div>
                View All Properties
              </div>
              <div>
                <svg
                  width="25"
                  height="24"
                  viewBox="0 0 25 24"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <g id="Iconsax/Linear/arrowleft">
                    <path
                      id="Vector"
                      d="M15.0967 5.92969L21.1667 11.9997L15.0967 18.0697M4.16675 11.9997H20.9967"
                      stroke={properties === "All" ? "#17062F" : "white"}
                      stroke-width="1.5"
                      stroke-miterlimit="10"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                    />
                  </g>
                </svg>
              </div>
            </button>

            <button
              type="submit"
              onClick={() => setProperties("All Vacant")}
              className={`flex w-full justify-between items-center gap-[4px]  ${
                properties === "All Vacant"
                  ? "bg-[#E4DFEB] text-black"
                  : "bg-[#2E0664] text-white"
              }    lg:h-[56px] md:h-[50px] xl:px-4 px-1 h-12  rounded-md xl:text-base text-sm border-[2px] border-white leading-4 text-center   xl:font-bold  font-semibold `}
            >
              <div className="flex justify-start items-center xl:2 gap-1 whitespace-nowrap">
                <div className="xl:w-12 lg:w-9 md:w-8 w-full lg:h-10 h-7  flex justify-center items-center">
                  <img
                    alt="gallery"
                    className="w-full object-cover  h-full rounded-lg object-center block"
                    src={vacant}
                  />
                </div>
                View Vacant Properties
              </div>
              <div>
                <svg
                  width="25"
                  height="24"
                  viewBox="0 0 25 24"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <g id="Iconsax/Linear/arrowleft">
                    <path
                      id="Vector"
                      d="M15.0967 5.92969L21.1667 11.9997L15.0967 18.0697M4.16675 11.9997H20.9967"
                      stroke={properties === "All Vacant" ? "#17062F" : "white"}
                      stroke-width="1.5"
                      stroke-miterlimit="10"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                    />
                  </g>
                </svg>
              </div>
            </button>

            <button
              type="submit"
              onClick={() => setProperties("Delete or Unlist")}
              className={`flex w-full justify-between items-center gap-[4px]  ${
                properties === "Delete or Unlist"
                  ? "bg-[#E4DFEB] text-black"
                  : "bg-[#2E0664] text-white"
              }    lg:h-[56px] md:h-[50px]  xl:px-4 px-1  h-12  rounded-md xl:text-base text-sm border-[2px] border-white leading-4 text-center   xl:font-bold  font-semibold `}
            >
              <div className="flex justify-start items-center  whitespace-nowrap">
                <div className="xl:w-12 lg:w-9 w-full lg:h-10 h-7  flex justify-center items-center">
                  <img
                    alt="gallery"
                    className="w-full object-cover  h-full rounded-lg object-center block"
                    src={del}
                  />
                </div>
                Delete Property
              </div>
              <div>
                <svg
                  width="25"
                  height="24"
                  viewBox="0 0 25 24"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <g id="Iconsax/Linear/arrowleft">
                    <path
                      id="Vector"
                      d="M15.0967 5.92969L21.1667 11.9997L15.0967 18.0697M4.16675 11.9997H20.9967"
                      stroke={
                        properties === "Delete or Unlist" ? "#17062F" : "white"
                      }
                      stroke-width="1.5"
                      stroke-miterlimit="10"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                    />
                  </g>
                </svg>
              </div>
            </button>
          </div>

          <div className="flex md:flex-row flex-col w-full  justify-between gap-2">
            <button
              type="submit"
              onClick={() => setProperties("Update")}
              className={`flex justify-between items-center gap-[4px]  ${
                properties === "Update"
                  ? "bg-[#E4DFEB] text-black"
                  : "bg-[#2E0664] text-white"
              }   w-full lg:h-[56px] md:h-[50px]  lg:px-4  px-2 h-12 rounded-md xl:text-base text-sm border-[2px] border-white leading-4 text-center  font-bold whitespace-nowrap`}
            >
              <div className="flex justify-start items-center gap-2">
                <div className="xl:w-12 lg:w-9 w-full lg:h-10 h-7  flex justify-center items-center">
                  <img
                    alt="gallery"
                    className="w-full object-cover  h-full rounded-lg object-center block"
                    src={update}
                  />
                </div>
                Update Property Details
              </div>
              <div>
                <svg
                  width="25"
                  height="24"
                  viewBox="0 0 25 24"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <g id="Iconsax/Linear/arrowleft">
                    <path
                      id="Vector"
                      d="M15.0967 5.92969L21.1667 11.9997L15.0967 18.0697M4.16675 11.9997H20.9967"
                      stroke={properties === "Update" ? "#17062F" : "white"}
                      stroke-width="1.5"
                      stroke-miterlimit="10"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                    />
                  </g>
                </svg>
              </div>
            </button>

            <button
              type="submit"
              onClick={() => setProperties("")}
              className={`flex justify-between items-center gap-[4px]  ${
                properties === "All"
                  ? "bg-[#E4DFEB] text-black"
                  : "bg-[#2E0664] text-white"
              }   w-full lg:h-[56px] md:h-[50px] lg:px-4  px-2 h-12  rounded-md xl:text-base text-sm border-[2px] border-white leading-4 text-center  font-bold whitespace-nowrap`}
            >
              <div className="flex justify-start items-center gap-2">
                <div className="xl:w-12 lg:w-9 w-full lg:h-10 h-7  flex justify-center items-center">
                  <img
                    alt="gallery"
                    className="w-full object-cover  h-full rounded-lg object-center block"
                    src={apply}
                  />
                </div>
                Apply Feature Effect
              </div>
              <div>
                <svg
                  width="25"
                  height="24"
                  viewBox="0 0 25 24"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <g id="Iconsax/Linear/arrowleft">
                    <path
                      id="Vector"
                      d="M15.0967 5.92969L21.1667 11.9997L15.0967 18.0697M4.16675 11.9997H20.9967"
                      stroke={properties === "All" ? "#17062F" : "white"}
                      stroke-width="1.5"
                      stroke-miterlimit="10"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                    />
                  </g>
                </svg>
              </div>
            </button>
          </div>
        </div>

        <div className="font-semibold xl:text-2xl md:text-xl text-lg  flex xl:flex-row flex-col  gap-2 justify-between items-start leading-7">
          <h1 className="flex whitespace-nowrap gap-2">
            {properties} Properties
            <span className="text-[#5A4278] ">987,272,000</span>
          </h1>
          {properties === "Delete or Unlist" ? (
            <div className="flex xl:justify-end justify-start md:flex-row w-full flex-col gap-2">
              <button
                onClick={() => {
                  setHandleButton("Unlist");
                  setShowModal(true);
                }}
                className="p-3 px-4 md:w-[160px] w-full text-sm text-[#0C468B] font-semibold whitespace-nowrap h-12 rounded-lg border gap-x-1 flex justify-center items-center border-[#0C468B]"
              >
                <img src={list} alt="delete" />
                Unlist Property
              </button>
              <button
                onClick={() => {
                  setHandleButton("Delete");
                  setShowModal(true);
                }}
                className="p-3 px-4 md:w-auto w-full h-12 rounded-lg border gap-x-1 flex justify-center items-center bg-[#CD2424] border-[#CD2424]"
              >
                <img src={trash} alt="delete" />
                <p className="text-sm text-white font-semibold whitespace-nowrap">
                  Delete Selected Properties
                </p>
              </button>
            </div>
          ) : null}
        </div>
        {properties === "All" ? <PropertyCard /> : null}
        {properties === "All Vacant" ? (
          <PropertyCard properties={properties} />
        ) : null}
        {properties === "Update" ? (
          <PropertyCard properties={properties} />
        ) : null}
        {properties === "Delete or Unlist" ? <PropertyCard /> : null}
      </div>
      <PropertyModal
        showModal={showModal}
        setShowModal={setShowModal}
        handleButton={handleButton}
      />
    </>
  );
};

export default PropertiesButton;