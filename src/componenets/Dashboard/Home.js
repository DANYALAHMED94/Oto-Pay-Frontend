import React from "react";
import {  useLocation } from "react-router-dom";
import profile from "../../assets/profilePic.svg";
import Calendar from "./Calendar";
import Cards from "./Cards";
import { BackArrow, Notification, TenantCommunication, Theme } from "../../iconComponent/Icons";
import TenantCards from "./TenantCards";
const Home = () => {
  const location = useLocation();

  const AdminDashboard =
  location.pathname === "/admin-dashboard" ;

  const showdiv =
  location.pathname === "/admin-dashboard" ;
   const showdivtwo =
  location.pathname === "/admin-dashboard" ||   location.pathname === "/tenant-dashboard"  ;

  return (
    <div className="w-full bg-[#F6F6F6] px-[16px] lg:py-[16px] md:py-[18px] py-[8px] ">
      <div className="flex w-full   lg:justify-between gap-4  flex-col justify-center  items-center ">
      {AdminDashboard && (
        <div className="w-full  xl:p-[32px] lg:p-[26px] md:p-[24px] p-[18px] bg-[#2E0664] rounded-lg">
          <p className="text-white font-bold xl:text-[28px] lg:text-xl md:text-xl text-sm leading-[36px] ">
            Hi, Mark Smith ! Welcome To OTO~PAY 👋
          </p>

          <div className=" w-full mt-6 flex  gap-x-4 justify-between items-center">
            <div className=" border border-white flex gap-3 p-2 xl:w-[490px] lg:w-[370px] md:w-[370px] w-full h-auto bg-[#F6F6F6] rounded-md   justify-between items-center">
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
                placeholder="Search"
              />
            </div>

            <div className=" justify-between gap-4 items-center xl:flex lg:flex md:flex hidden">
              <div className="xl:h-16 xl:w-16 lg:w-[60px] lg:[60px] md:w-[60px] md:h-[60px] p-4 bg-gray-100   shadow-lg rounded-lg flex justify-center items-center ">
                <svg
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M6 8C6 6.4087 6.63214 4.88258 7.75736 3.75736C8.88258 2.63214 10.4087 2 12 2C13.5913 2 15.1174 2.63214 16.2426 3.75736C17.3679 4.88258 18 6.4087 18 8C18 15 21 17 21 17H3C3 17 6 15 6 8Z"
                    stroke="#312245"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                  <path
                    d="M10.3 21C10.4674 21.3044 10.7134 21.5583 11.0125 21.7352C11.3115 21.912 11.6526 22.0053 12 22.0053C12.3474 22.0053 12.6885 21.912 12.9875 21.7352C13.2865 21.5583 13.5326 21.3044 13.7 21"
                    stroke="#312245"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                </svg>
              </div>

              <div className="text-[24px] font-semi-bold  leading-[31px]  text-center flex items-center justify-center gap-[10px]  ">
                <img
                  className="xl:h-[70px] xl:w-[70px]  rounded-full lg:h-[60px] lg:w-[60px]  md:h-14 md:w-16 h-16 w-16 flex items-center justify-center   "
                  src={profile}
                  alt="property-logo"
                />
              </div>
            </div>
          </div>
        </div>
      )}

       <div className="flex w-full justify-between items-center">
        <div className="flex w-full  gap-2 ">
        <BackArrow/>
      <h1 className="text-[28px] font-bold leading-9 text-[#434146]"> WelCome back, <span className="font-medium"> Alien</span></h1>
       </div>


       <div className=" flex w-full justify-end gap-2 ">
       <div className=" p-3  rounded-xl bg-[#F2F2F2] border ">
            <Notification/>
          </div>
          <div className=" p-3 rounded-lg bg-[#F2F2F2] border">
            <Theme/>
          </div>
          <div className=" p-3 rounded-lg bg-[#F2F2F2] border">
            <TenantCommunication/>
          </div>
          
          <div className="text-[24px] font-semi-bold  leading-[31px]  text-center flex items-center justify-center gap-[10px]  ">
                <img
                  className="xl:h-[48px] xl:w-[48px]  rounded-full lg:h-[40px] lg:w-[40px]  md:h-14 md:w-16 h-16 w-16 flex items-center justify-center   "
                  src={profile}
                  alt="property-logo"
                />
              </div>
       </div>
       </div>
        <div className="w-full">
        {showdivtwo && (
          <Calendar />
        )}
        </div>

        <div className="w-full">
        {AdminDashboard && (
          <Cards />
        )}
        {showdiv && (
        <TenantCards/>
        )}
        </div>
      </div>
    </div>
  );
};

export default Home;
