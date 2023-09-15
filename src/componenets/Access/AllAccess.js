import React, { useState } from "react";
import staff from "../../assets/image 9.png";
import activity from "../../assets/image 10.png";
import TenantCard from "../global/TenantCard";
import PropertyCard from "../global/PropertyCard";
import TenantRegistrationForm from "../global/TenantRegistrationForm";
const AllAccess = () => {
  const [access, setAccess] = useState("");
  const [request, setRequest] = useState("");
  const [showModal, setShowModal] = useState(false);
  const [info, setInfo] = useState("");

  return (
    <>
      <div className="w-full bg-[#F6F6F6] px-[16px] lg:py-[24px] md:py-[18px] py-[8px] flex    lg:justify-between gap-4  flex-col justify-center ">
        <div className="w-full  xl:p-[32px] lg:p-[26px] md:p-[24px] p-[18px] bg-[#2E0664] rounded-lg flex  flex-col md:gap-4 gap-2 ">
          <div className="text-white font-bold text-xl ">Staff</div>

          <div className="w-full flex md:flex-row flex-col justify-between gap-2">
            <div className=" border border-white flex gap-3 p-2 xl:w-[740px]  lg:w-[390px] md:w-[350px] w-full lg:h-14 h-12 bg-[#F6F6F6] rounded-md   justify-between items-center">
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
                placeholder="Search Tenant Name , Location & More"
              />
            </div>


            <button
            onClick={() => {
              setInfo(" Staff Member");
                setShowModal(true);
              }}
           
              type="submit"
              className="flex md:justify-center justify-start items-center gap-[4px] text-white bg-[#17062F]  lg:w-64 md:w-48 w-full lg:h-14 h-12  px-[16px]    rounded-md xl:text-base text-sm  leading-4 text-center  font-bold whitespace-nowrap   "
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
              Add New Staff Member
            </button>
          </div>

          <div className="flex md:flex-row flex-col w-full justify-between gap-2">
            <button
              type="submit"
              onClick={() => { setAccess("All");
            setRequest("Accepted")}}
              className={`flex justify-between items-center gap-[4px] text-[#17062F] ${
                access === "All"
                  ? "bg-[#E4DFEB] text-black"
                  : "bg-[#2E0664] text-white"
              }   w-full lg:h-[56px] md:h-[50px] xl:px-4 px-1  h-12  rounded-md xl:text-base text-sm border-[2px] border-white leading-4 text-center  font-bold whitespace-nowrap`}
            >
              <div className="flex justify-start items-center xl:2 gap-1">
                <div className="xl:w-10 lg:w-9 w-full lg:h-10 h-7 flex justify-center items-center">
                  <img
                    alt="gallery"
                    className="w-full object-cover  h-full rounded-lg object-center block"
                    src={staff}
                  />
                </div>
                All Staff
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
                      stroke={access === "All" ? "#17062F" : "white"}
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
              onClick={() => setAccess("Activity")}
              className={`flex justify-between items-center gap-[4px] text-[#17062F] ${
                access === "Activity"
                  ? "bg-[#E4DFEB] text-black"
                  : "bg-[#2E0664] text-white"
              }   w-full lg:h-[56px] md:h-[50px] xl:px-4 px-1 h-12  rounded-md xl:text-base text-sm border-[2px] border-white leading-4 text-center  font-bold whitespace-nowrap`}
            >
              <div className="flex justify-start items-center xl:2 gap-1">
                <div className="xl:w-10 lg:w-9 w-full lg:h-10 h-7  flex justify-center items-center">
                  <img
                    alt="gallery"
                    className="w-full object-cover  h-full rounded-lg object-center block"
                    src={activity}
                  />
                </div>
                Staff Activity
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
                      stroke={access === "Activity" ? "#17062F" : "white"}
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
        <div className="font-semibold xl:text-2xl text-xl text-[#17062F] flex xl:flex-row flex-col  gap-2 justify-between items-start leading-7">
          {" "}
          <h1 className="flex whitespace-nowrap gap-2">
            {" "}
            {access} Staff {" "}
            <span className="text-[#5A4278] ">987,272,000</span>{" "}
          </h1>

   
        </div>
       
        {access === "All" ? <TenantCard  access={access} request={request} /> : null}
        {access === "Activity" ?( <PropertyCard access={access} /> ): null}

      </div>

      <TenantRegistrationForm info={info} showModal={showModal} setShowModal={setShowModal}   />
    </>
  );
};

export default AllAccess;
