import React, { useState, useEffect } from "react";
import { NavLink, Outlet, useNavigate, useLocation } from "react-router-dom";
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
  TenantHomeIcon,
  TenantPropertyIcon,
  TenantServiceIcon,
  TenantPaymentIcon,
  TenantCommunication,
} from "../iconComponent/Icons";
import SideBar from "../componenets/Dashboard/Sidebar";

export default function DashboardPage() {
  const [show, setShow] = useState(false);
  const navigate = useNavigate();
  const location = useLocation();
  const AdminDashboard =
  location.pathname === "/admin-dashboard" ||  location.pathname === "/admin-dashboard/properties" ;
 

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const handleLogout = () => {
    localStorage.removeItem("user");
    navigate("/login");
    window.location.reload(true);
  };
  return (
    <div className="lg:flex block relative h-screen bg-[#F0EEF2] z-10">
      <div className=" sidebar xl:w-[323px] sxl:w-[300px] lg:w-[290px] bg-[#F0EEF2]   lg:h-full md:h-[48px] h-[56px] xl:overflow-y-auto sxl:overflow-y-auto lg:overflow-y-auto overflow-y-hidden overflow-x-hidden lg:absolute  flex lg:flex-row flex-col items-center justify-center  ">
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
        <div className=" w-full h-full    xl:gap-6  lg:gap-4  justify-center bg-[#F0EEF2] lg:py-6 py-2  items-between xl:block lg:block hidden   ">
          <div className="xl:py-4  lg:py-0 -full xl:w-[323px] sxl:w-[300px] lg:w-[290px] lg:flex  flex-col  items-center justify-center bg-[#F0EEF2] gap-4  ">
            <div className="  w-[282px] gap-4 xl:text-[24px] text-xl font-semibold text-[#2E0664] leading-[31px]  text-center flex items-center justify-center  xl:px-[24px] lg:px-[20px]">
              <img
                className="lg:h-[50px]  lg:w-[50px] md:h-14 md:w-16 h-16 w-16 flex items-center justify-center   "
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
            {AdminDashboard && (
            <div className=" flex flex-col justify-center w-full gap-4 h-auto p-4 ">
              <NavLink to="/admin-dashboard">
                {({ isActive }) => (
                  <li
                    className={`flex items-center ${
                      isActive
                        ? "bg-[#F0EEF2] text-[#17062F]"
                        : "bg-[#E4DFEB] text-[#2E0664]"
                    }  justify-center hover:bg-[#E4DFEB] hover:text-[#2E0664]  p-3`}
                  >
                    <div className="w-[282px]  flex items-center">
                      <HomeIcon />
                      <p className="font-normal text-[16px] ml-5 ">Home</p>
                    </div>
                  </li>
                )}
              </NavLink>

              <NavLink to="properties">
                {({ isActive }) => (
                  <li
                    className={`flex items-center  ${
                      isActive
                        ? "bg-[#E4DFEB] text-[#2E0664]"
                        : "bg-[#F0EEF2] text-[#17062F]"
                    }  justify-center hover:bg-[#E4DFEB] hover:text-[#2E0664]  p-3`}
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

              <NavLink to="tenants">
                {({ isActive }) => (
                  <li
                    className={`flex items-center ${
                      isActive
                        ? "bg-[#E4DFEB] text-[#2E0664]"
                        : "bg-[#F0EEF2] text-[#17062F]"
                    }  justify-center hover:bg-[#E4DFEB] hover:text-[#2E0664]  p-3`}
                  >
                    <div className="w-[282px]  flex items-center">
                      <TenantsIcon />
                      <p className="font-normal text-[16px] ml-5 ">Tenants</p>
                    </div>
                  </li>
                )}
              </NavLink>

              <NavLink to="access">
                {({ isActive }) => (
                  <li
                    className={`flex items-center ${
                      isActive
                        ? "bg-[#E4DFEB] text-[#2E0664]"
                        : "bg-[#F0EEF2] text-[#17062F]"
                    }  justify-center hover:bg-[#E4DFEB] hover:text-[#2E0664]  p-3`}
                  >
                    <div className="w-[282px]  flex items-center">
                      <AccessIcon />
                      <p className="font-normal text-[16px] ml-5 ">Access</p>
                    </div>
                  </li>
                )}
              </NavLink>

              <NavLink to="landlord">
                {({ isActive }) => (
                  <li
                    className={`flex items-center ${
                      isActive
                        ? "bg-[#E4DFEB] text-[#2E0664]"
                        : "bg-[#F0EEF2] text-[#17062F]"
                    }  justify-center hover:bg-[#E4DFEB] hover:text-[#2E0664]  p-3`}
                  >
                    <div className="w-[282px]  flex items-center">
                      <AccessIcon />
                      <p className="font-normal text-[16px] ml-5 ">LandLord</p>
                    </div>
                  </li>
                )}
              </NavLink>

              <NavLink to="payments">
                {({ isActive }) => (
                  <li
                    className={`flex items-center ${
                      isActive
                        ? "bg-[#E4DFEB] text-[#2E0664]"
                        : "bg-[#F0EEF2] text-[#17062F]"
                    }  justify-center hover:bg-[#E4DFEB] hover:text-[#2E0664]  p-3`}
                  >
                    <div className="w-[282px]  flex items-center">
                      <Payment />
                      <p className="font-normal text-[16px] ml-5 ">Payments</p>
                    </div>
                  </li>
                )}
              </NavLink>

              <li
                className={`flex items-center justify-center hover:text-[#2E0664]`}
              >
                <div className="w-full">
                  <div className="w-full relative  h-auto overflow-hidden">
                    <input
                      type="checkbox"
                      className=" peer absolute top-0 insert-x-0 w-full h-12 opacity-0 z-10 cursor-pointer"
                    />
                    <div className="h-12 w-full flex items-center text-[#17062F] px-3  peer-checked:text-[#2E0664] peer-checked:bg-[#E4DFEB]">
                      <SidebarService />
                      <p className="font-normal text-[16px] ml-5">Services</p>
                    </div>

                    <div className="absolute top-[18px]  mr-5 right-3 text-[#2E0664] peer-checked:text-[#2E0664] transition-transform duration-500 rotate-0 peer-checked:rotate-180 ">
                      <ArrowIcon className="transition-transform -rotate-90" />
                    </div>

                    <div className="w-full transition-all duration-500 overflow-hidden max-h-0 peer-checked:max-h-64 pl-8">
                      <div className="w-full px-2 pt-2">
                        <NavLink to="service-request">
                          {({ isActive }) => (
                            <button
                              className={` ${
                                isActive ? "bg-[#E4DFEB] " : ""
                              } w-full flex items-center px-2  py-3 rounded-md`}
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

                              <div className="ml-3 font-normal text-[16px] text-[#5A4278] whitespace-nowrap">
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
                        <NavLink to="service-providers">
                          {({ isActive }) => (
                            <button
                              className={` ${
                                isActive ? "bg-[#E4DFEB]" : ""
                              } w-full flex items-center px-2 py-3 rounded-md`}
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
                                Service Providers
                              </div>
                            </button>
                          )}
                        </NavLink>
                      </div>
                    </div>
                  </div>
                </div>
              </li>
            </div>
            )}
             <div className=" flex flex-col justify-center w-full gap-4 h-auto p-4 ">
             <NavLink to="/tenant-dashboard">
                {({ isActive }) => (
                  <li
                    className={`flex items-center ${
                      isActive
                        ? "bg-[#F0EEF2] text-[#17062F]"
                        : "bg-[#E4DFEB] text-[#2E0664]"
                    }  justify-center hover:bg-[#E4DFEB] hover:text-[#2E0664]  p-3`}
                  >
                    <div className="w-[282px]  flex items-center">
                      <TenantHomeIcon />
                      <p className="font-normal text-[16px] ml-5 ">Home</p>
                    </div>
                  </li>
                )}
              </NavLink>

              <NavLink to="tenant-property">
                {({ isActive }) => (
                  <li
                    className={`flex items-center  ${
                      isActive
                        ? "bg-[#E4DFEB] text-[#2E0664]"
                        : "bg-[#F0EEF2] text-[#17062F]"
                    }  justify-center hover:bg-[#E4DFEB] hover:text-[#2E0664]  p-3`}
                  >
                    <div className="w-[282px]  flex  items-center">
                      <TenantPropertyIcon />
                      <div className="font-normal text-[16px] ml-5 ">
                        Property
                      </div>
                      <div className=" w-[22px] h-[22px] text-white bg-[#653E92] rounded-full ml-3 flex  justify-center items-center  font-normal text-[12px]  ">
                        13
                      </div>
                    </div>
                  </li>
                )}
              </NavLink>

              <NavLink to="tenant-services">
                {({ isActive }) => (
                  <li
                    className={`flex items-center ${
                      isActive
                        ? "bg-[#E4DFEB] text-[#2E0664]"
                        : "bg-[#F0EEF2] text-[#17062F]"
                    }  justify-center hover:bg-[#E4DFEB] hover:text-[#2E0664]  p-3`}
                  >
                    <div className="w-[282px]  flex items-center">
                      <TenantServiceIcon />
                      <p className="font-normal text-[16px] ml-5 ">Service Requests</p>
                    </div>
                  </li>
                )}
              </NavLink>

     

              <NavLink to="tenant-payments">
                {({ isActive }) => (
                  <li
                    className={`flex items-center ${
                      isActive
                        ? "bg-[#E4DFEB] text-[#2E0664]"
                        : "bg-[#F0EEF2] text-[#17062F]"
                    }  justify-center hover:bg-[#E4DFEB] hover:text-[#2E0664]  p-3`}
                  >
                    <div className="w-[282px]  flex items-center">
                      <TenantPaymentIcon />
                      <p className="font-normal text-[16px] ml-5 ">Payments</p>
                    </div>
                  </li>
                )}
              </NavLink>


              <hr className="border-t border-gray-300 my-4" />
             
              </div>  
            <div
              className="w-full flex px-8  h-20 mt-8 justify-start items-center    cursor-pointer "
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
      <div className="bg-[#F6F6F6]  content xl:w-[1117px] sxl:w-[1066px] xlg:w-[990px] lg:w-[734px]  md:w-full lg:absolute  xl:left-[323px] sxl:left-[300px]  lg:left-[290px] md:left-0 h-full overflow-y-auto">
        <Outlet />
      </div>
    </div>
  );
}
