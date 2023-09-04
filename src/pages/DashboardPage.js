import React, { useState, useEffect } from "react";
import { NavLink, Outlet, useNavigate } from "react-router-dom";
import menu from "../assets/menuIcon.svg";
// import profile from "../assests/profilePic.svg";
import logout from "../assets/logoutIcon.svg";
import profile from "../assets/profilePic.svg";
import Logo2 from "../assets/OTO.svg";
import {
  HomeIcon,
  PropertyIcon,
  TenantsIcon,
  AccessIcon,
  Payment,
  SidebarService,
  ArrowIcon,
} from "../iconComponent/Icons";
import SideBar from "../componenets/Dashboard/Sidebar";

export default function DashboardPage() {
  const [show, setShow] = useState(false);
  const navigate = useNavigate();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const handleLogout = () => {
    localStorage.removeItem("user");
    navigate("/login");
    window.location.reload(true);
  };
  return (
    <div className="lg:flex block relative h-screen bg-white z-10">
      <div className=" sidebar xl:w-[323px] sxl:w-[300px] lg:w-[290px]  bg-gray-100    lg:h-full md:h-[48px] h-[56px] xl:overflow-y-auto sxl:overflow-y-auto lg:overflow-y-auto overflow-y-hidden overflow-x-hidden lg:absolute  flex lg:flex-row flex-col items-center justify-center  ">
        <div className="  self-start  relative z-10  h-10 w-10 ">
          <img
            src={menu}
            alt="menu bar"
            className="left-3  p-2 cursor-pointer lg:hidden  absolute"
            onClick={() => {
              setShow(true);
            }}
          />
          <div
            className={
              show
                ? "lg:hidden visible z-50 border border-yellow-400 fixed top-0"
                : "invisible "
            }
          >
            <SideBar setShow={setShow} show={show} />
          </div>
        </div>
        <div className=" w-full h-full    xl:gap-6  lg:gap-4  justify-center bg-white  lg:py-12 py-2  items-between xl:block lg:block hidden   ">
          <div className="xl:py-4  lg:py-0 -full xl:w-[323px] sxl:w-[300px] lg:w-[290px] lg:flex  flex-col  items-center justify-center bg-white   ">
            <div className="  w-[282px] gap-4 xl:text-[24px] lg:text-xl font-semi-bold  leading-[31px]  text-center flex items-center justify-center  xl:px-[24px] lg:px-[20px]">
              <img
                className="xl:h-[56px]  xl:w-[56px] lg:h-[70px] lg:w-[70px] md:h-14 md:w-16 h-16 w-16 flex items-center justify-center   "
                src={Logo2}
                alt="property-logo"
              />
              OTO~PAY
            </div>
            <div className=" w-[290px] flex items-center justify-around flex-col py-6  px-3   ">
              <div className="xl:w-[103px] xl:h-[103px] lg:w-[90px] lg:h-[90px] rounded-lg ">
                <img src={profile} alt="menu bar" className="h-full w-full" />
              </div>
              <h2 className="font-extrabold text-lg mt-2">Mark Smith</h2>
              <p className="text-xs font-semibold text-gray-400 uppercase">
                Admin
              </p>
            </div>

            <div className=" flex flex-col justify-center w-full gap-4 h-auto p-4 ">
              <NavLink to="/home">
                {({ isActive }) => (
                  <li
                    className={`flex items-center ${
                      isActive
                        ? "bg-[#34A2B2] text-white"
                        : "bg-white text-[#64748B]"
                    }  justify-center hover:bg-[#34A2B2] hover:text-white  px-4`}
                  >
                    <div className="w-[282px]  flex items-center">
                      <HomeIcon />
                      <p className="font-normal text-[16px] ml-5 ">Home</p>
                    </div>
                  </li>
                )}
              </NavLink>

              <NavLink to="/projects">
                {({ isActive }) => (
                  <li
                    className={`flex items-center  ${
                      isActive
                        ? "bg-[#34A2B2] text-white"
                        : "bg-white text-[#64748B]"
                    }  justify-center hover:bg-[#34A2B2] hover:text-white  px-4 `}
                  >
                    <div className="w-[282px]  flex  items-center">
                      <PropertyIcon />
                      <div className="font-normal text-[16px] ml-5 ">
                        Properties
                      </div>
                      <div className=" w-[22px] h-[22px] text-white bg-[#653E92] rounded-full ml-3 flex  justify-center items-center  font-normal text-[12px]  ">
                        13
                      </div>
                    </div>
                  </li>
                )}
              </NavLink>

              <NavLink to="/profile-setting">
                {({ isActive }) => (
                  <li
                    className={`flex items-center ${
                      isActive
                        ? "bg-[#34A2B2] text-white"
                        : "bg-white text-[#64748B]"
                    }  justify-center hover:bg-[#34A2B2] hover:text-white  px-4`}
                  >
                    <div className="w-[282px]  flex items-center">
                      <TenantsIcon />
                      <p className="font-normal text-[16px] ml-5 ">tenants</p>
                    </div>
                  </li>
                )}
              </NavLink>

              <NavLink to="/projects">
                {({ isActive }) => (
                  <li
                    className={`flex items-center ${
                      isActive
                        ? "bg-[#34A2B2] text-white"
                        : "bg-white text-[#64748B]"
                    }  justify-center hover:bg-[#34A2B2] hover:text-white  px-4`}
                  >
                    <div className="w-[282px]  flex items-center">
                      <AccessIcon />
                      <p className="font-normal text-[16px] ml-5 ">Access</p>
                    </div>
                  </li>
                )}
              </NavLink>

              <NavLink to="/projects">
                {({ isActive }) => (
                  <li
                    className={`flex items-center ${
                      isActive
                        ? "bg-[#34A2B2] text-white"
                        : "bg-white text-[#64748B]"
                    }  justify-center hover:bg-[#34A2B2] hover:text-white  px-4`}
                  >
                    <div className="w-[282px]  flex items-center">
                      <Payment />
                      <p className="font-normal text-[16px] ml-5 ">Payments</p>
                    </div>
                  </li>
                )}
              </NavLink>

              <div className="w-full px-4 -mt-2  ">
                <div className="    relative w-full h-auto overflow-hidden ">
                  <input
                    type="checkbox"
                    className=" peer absolute top-0 insert-x-0 w-full h-12 opacity-0 z-10 cursor-pointer"
                  />
                  <div className="  h-12 w-full  flex items-center text-[#64748B]  peer-checked:text-white peer-checked:bg-[#34A2B2]">
                    <SidebarService />
                    <p className="font-normal text-[16px] ml-5">Services</p>
                  </div>

                  <div className="absolute top-[18px]  mr-5 right-3 text-[#64748B] peer-checked:text-white transition-transform duration-500 rotate-0 peer-checked:rotate-180 ">
                    <ArrowIcon className="transition-transform -rotate-90" />
                  </div>

                  <div className=" bg-white transition-all duration-500 overflow-hidden max-h-0 peer-checked:max-h-64 pl-10 ">
                    <div className="px-2 pt-2">
                      <NavLink to="/admin">
                        {({ isActive }) => (
                          <button
                            className={`w-full ${
                              isActive ? "bg-[#F0FAFC]" : ""
                            } flex items-center  py-3 rounded-md`}
                          >
                            <div>
                              <svg
                                width="12"
                                height="13"
                                viewBox="0 0 12 13"
                                fill="none"
                                xmlns="http://www.w3.org/2000/svg"
                              >
                                <path
                                  d="M6 12.5C9.3138 12.5 12 9.8138 12 6.5C12 3.1862 9.3138 0.5 6 0.5C2.6862 0.5 0 3.1862 0 6.5C0 9.8138 2.6862 12.5 6 12.5Z"
                                  fill="#B3A1C9"
                                />
                              </svg>
                            </div>

                            <div className="ml-3 font-normal text-[16px] text-[#5A4278]">
                              Service Requests
                            </div>
                            <div className=" w-[22px] h-[22px] text-white bg-[#653E92] rounded-full ml-3 flex  justify-center items-center  font-normal text-[12px]  ">
                              13
                            </div>
                          </button>
                        )}
                      </NavLink>
                    </div>

                    <div className="px-2">
                      <NavLink to="/contractors">
                        {({ isActive }) => (
                          <button
                            className={`w-full ${
                              isActive ? "bg-[#F0FAFC]" : ""
                            } flex items-center  py-3 rounded-md`}
                          >
                            <div>
                              <svg
                                width="12"
                                height="13"
                                viewBox="0 0 12 13"
                                fill="none"
                                xmlns="http://www.w3.org/2000/svg"
                              >
                                <path
                                  d="M6 12.5C9.3138 12.5 12 9.8138 12 6.5C12 3.1862 9.3138 0.5 6 0.5C2.6862 0.5 0 3.1862 0 6.5C0 9.8138 2.6862 12.5 6 12.5Z"
                                  fill="#B3A1C9"
                                />
                              </svg>
                            </div>

                            <div className="ml-3 text-[#07377C] font-normal text-[16px] text-[#5A4278]">
                              Service Providers
                            </div>
                          </button>
                        )}
                      </NavLink>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <div
              className="w-full flex px-8 w-full h-20 mt-8 justify-start items-center    cursor-pointer "
              onClick={() => {
                handleLogout();
              }}
            >
              <img src={logout} className="rotate-180" alt="menu bar" />
              <p className=" font-normal text-[14px] text-[#CD2424] ml-6">
                Logout
              </p>
            </div>
          </div>
        </div>
      </div>
      <div className="bg-gray-100 content xl:w-[1117px] sxl:w-[1066px] xlg:w-[990px] lg:w-[734px]  md:w-full lg:absolute  xl:left-[323px] sxl:left-[300px]  lg:left-[290px] md:left-0 h-full overflow-y-auto">
        <Outlet />
      </div>
    </div>
  );
}
