import React from "react";
import profile from "../../assets/profilePic.svg";
import logout from "../../assets/logoutIcon.svg";
// import menu from "../../assests/menuIcon.svg";
import { NavLink, useNavigate , useLocation} from "react-router-dom";
import {
  HomeIcon,
  CancelIcon,
  PropertyIcon,
  TenantsIcon,
  AccessIcon,
  Payment,
  SidebarService,
  ArrowIcon,
  TenantCommunication,
  TenantPaymentIcon,
  TenantServiceIcon,
  TenantPropertyIcon,
  TenantHomeIcon,
} from "../../iconComponent/Icons";

export default function SideBar({ show, setShow }) {
  const navigate = useNavigate();
  const location = useLocation();
  const AdminDashboard =
  location.pathname === "/admin-dashboard" ||  location.pathname === "/admin-dashboard/properties" ;


  const handleLogout = () => {
    localStorage.removeItem("user");
    // instance.logoutRedirect();
    navigate("/login");
  };
  return (
    <div
      className={
        show
          ? "opacity-100 scale-100 ease-out z-40 w-[300px] shadow-lg bg-white duration-200 absolute top-0 inset-x-0 transition transform origin-top-right  "
          : "opacity-0 scale-95 absolute top-0 z-40 w-[300px] bg-white inset-x-0 transition transform origin-top-right "
      }
    >
      <div className="bg-white w-full -ml-[1px] h-screen relative z-auto ">
        <div className="shadow-lg h-full max-w-[318px] xl:w-[318px] bg-white lg:hidden overflow-y-auto ">
          <div className=" w-full flex items-center justify-between mt-4 px-4">
            <p className=" font-normal text-[14px] text-gray-500 ml-5">
             
            </p>
            <CancelIcon
              color={"red"}
              onClick={() => setShow(false)}
              className="cursor-pointer"
            />
          </div>

          <div className=" w-[290px] flex items-center justify-around flex-col py-2 px-3">
            <div className="w-[103px] h-[103px] rounded-lg ">
              <img src={profile} alt="menu bar" className="h-full w-full" />
            </div>
            <h2 className="font-extrabold text-lg mt-2">Mark Smith</h2>
            <p className="text-xs font-semibold text-gray-400 uppercase">
              Admin
            </p>
          </div>
   {AdminDashboard && (
          <>
            <NavLink to="/admin-dashboard">
              {({ isActive }) => (
                <li
                  className={`flex items-center ${
                    isActive
                    ?   "bg-[#E4DFEB] text-[#2E0664]"
                    : "bg-white text-[#17062F]"
                  }  justify-center hover:bg-[#E4DFEB] hover:text-[#2E0664]   px-4`}
                >
                  <div className="w-[282px] h-[52px] flex items-center">
                    <HomeIcon />
                    <p className="font-normal text-[14px] ml-5 ">Home</p>
                  </div>
                </li>
              )}
            </NavLink>

            <NavLink to="properties">
              {({ isActive }) => (
                <li
                  className={`flex items-center ${
                    isActive
                    ?   "bg-[#E4DFEB] text-[#2E0664]"
                    : "bg-white text-[#17062F]"
                  }  justify-center hover:bg-[#E4DFEB] hover:text-[#2E0664]  px-4`}
                >
                  <div className="w-[282px] h-[52px] flex items-center">
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
                    ?   "bg-[#E4DFEB] text-[#2E0664]"
                    : "bg-white text-[#17062F]"
                  }  justify-center hover:bg-[#E4DFEB] hover:text-[#2E0664]   px-4`}
                >
                  <div className="w-[282px] h-[52px] flex items-center">
                  <TenantsIcon />
                      <p className="font-normal text-[16px] ml-5 ">Tenants</p>
                  </div>
                </li>
              )}
            </NavLink>

            

            <NavLink to="landlord">
              {({ isActive }) => (
                <li
                  className={`flex items-center ${
                    isActive
                    ?   "bg-[#E4DFEB] text-[#2E0664]"
                    : "bg-white text-[#17062F]"
                  }  justify-center hover:bg-[#E4DFEB] hover:text-[#2E0664]   px-4`}
                >
                  <div className="w-[282px] h-[52px] flex items-center">
                  <TenantsIcon />
                      <p className="font-normal text-[16px] ml-5 ">LandLord</p>
                  </div>
                </li>
              )}
            </NavLink>


            <NavLink to="access">
              {({ isActive }) => (
                <li
                  className={`flex items-center ${
                    isActive
                    ?   "bg-[#E4DFEB] text-[#2E0664]"
                    : "bg-white text-[#17062F]"
                  }  justify-center hover:bg-[#E4DFEB] hover:text-[#2E0664]  px-4`}
                >
                  <div className="w-[282px] h-[52px] flex items-center">
                  <AccessIcon />
                      <p className="font-normal text-[16px] ml-5 ">Access</p>
                  </div>
                </li>
              )}
            </NavLink>

            <NavLink to="payments">
              {({ isActive }) => (
                <li
                  className={`flex items-center ${
                    isActive
                    ?   "bg-[#E4DFEB] text-[#2E0664]"
                    : "bg-white text-[#17062F]"
                  }  justify-center hover:bg-[#E4DFEB] hover:text-[#2E0664]   px-4`}
                >
                  <div className="w-[282px] h-[52px] flex items-center">
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
                  <div className="  h-12 w-full  flex items-center text-[#17062F]  peer-checked:text-[#2E0664] peer-checked:bg-[#E4DFEB]">
                    <SidebarService />
                    <p className="font-normal text-[16px] ml-5">Services</p>
                  </div>

                  <div className="absolute top-[18px]  mr-5 right-3 text-[#2E0664] peer-checked:text-[#2E0664] transition-transform duration-500 rotate-0 peer-checked:rotate-180 ">
                    <ArrowIcon className="transition-transform -rotate-90" />
                  </div>

                  <div className=" bg-white transition-all duration-500 overflow-hidden max-h-0 peer-checked:max-h-64 pl-10 ">
                    <div className="px-2 pt-2">
                      <NavLink to="services">
                        {({ isActive }) => (
                          <button
                            className={`w-full ${
                              isActive ? "bg-[#E4DFEB]" : " bg-white"
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
                      <NavLink to="servicesProviders">
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

                            <div className="ml-3  font-normal text-[16px] text-[#5A4278]">
                              Service Providers
                            </div>
                          </button>
                        )}
                      </NavLink>
                    </div>
                  </div>
                </div>
              </div>
          </>
   )}
   <>
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
                      <TenantHomeIcon />
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
                      <TenantServiceIcon />
                      <p className="font-normal text-[16px] ml-5 ">Service Requests</p>
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
                      <TenantPaymentIcon />
                      <p className="font-normal text-[16px] ml-5 ">Payments</p>
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
                      <TenantCommunication/>
                      <p className="font-normal text-[16px] ml-5 ">Communication</p>
                    </div>
                  </li>
                )}
              </NavLink>
   </>
          <div
            className=" w-[282px] flex items-center px-5 pt-3 cursor-pointer"
            onClick={() => {
              handleLogout();
            }}
          >
            <img src={logout} alt="menu bar" />
            <p className=" font-normal text-[14px] text-[#CD2424] ml-5">
              Logout
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
