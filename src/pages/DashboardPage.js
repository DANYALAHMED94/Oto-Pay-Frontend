import React, { useState, useEffect } from "react";
import { NavLink, Outlet, useNavigate } from "react-router-dom";
import menu from "../assets/menuIcon.svg";
// import profile from "../assests/profilePic.svg";
import logout from "../assets/logoutIcon.svg";
import profile from "../assets/profilePic.svg";
import Logo2 from "../assets/OTO.svg";
import {
  HomeIcon,
  // SettingIcon,
  PropertyIcon,
  TenantsIcon,
  AccessIcon,
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
    <div className="bg-[#F5F5F5] w-[323px] h-auto flex lg:flex-row flex-col items-center justify-center  ">
      <div className="mt-10 self-start relative  h-10 w-10 ">
        <img
          src={menu}
          alt="menu bar"
          className="left-10 cursor-pointer lg:hidden visible absolute"
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

      <div className="w-full h-auto flex  justify-start items-between    ">
        <div className="  shadow-lg   xl:w-[323px] lg:flex items-center justify-center flex-col gap-[32px] p-6  bg-white lg:visible hidden ">
          <div className=" w-[282px]  text-[24px] font-semi-bold  leading-[31px]  text-center flex items-center justify-center gap-[10px]   px-[24px]">
            <img
              className="xl:h-[56px] xl:w-[56px] lg:h-[80px] lg:w-[94px] md:h-14 md:w-16 h-16 w-16 flex items-center justify-center   "
              src={Logo2}
              alt="property-logo"
            />
            OTO~PAY
          </div>
          <div className=" w-[290px] flex items-center justify-around flex-col py-6  px-3   ">
            <div className="w-[103px] h-[103px] rounded-lg ">
              <img src={profile} alt="menu bar" className="h-full w-full" />
            </div>
            <h2 className="font-extrabold text-lg mt-2">Mark Smith</h2>
            <p className="text-xs font-semibold text-gray-400 uppercase">
              Admin
            </p>
          </div>

          <div className="">
            <NavLink to="/home">
              {({ isActive }) => (
                <li
                  className={`flex items-center ${
                    isActive
                      ? "bg-[#34A2B2] text-white"
                      : "bg-white text-[#64748B]"
                  }  justify-center hover:bg-[#34A2B2] hover:text-white  px-4`}
                >
                  <div className="w-[282px] h-[52px] flex items-center">
                    <HomeIcon />
                    <p className="font-normal text-[14px] ml-5 ">Home</p>
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
                  <div className="w-[282px] h-[52px] flex items-center">
                    <PropertyIcon />
                    <p className="font-normal text-[14px] ml-5 ">Properties</p>
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
                  <div className="w-[282px] h-[52px] flex items-center">
                    <TenantsIcon />
                    <p className="font-normal text-[14px] ml-5 ">tenants</p>
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
                  <div className="w-[282px] h-[52px] flex items-center">
                    <AccessIcon />
                    <p className="font-normal text-[14px] ml-5 ">Access</p>
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
                  <div className="w-[282px] h-[52px] flex items-center">
                    <AccessIcon />
                    <p className="font-normal text-[14px] ml-5 ">Payments</p>
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
                  <div className="w-[282px] h-[52px] flex items-center">
                    <AccessIcon />
                    <p className="font-normal text-[14px] ml-5 ">Services</p>
                  </div>
                </li>
              )}
            </NavLink>
          </div>

          <div
            className="w-full flex items-center py-14  cursor-pointer "
            onClick={() => {
              handleLogout();
            }}
          >
            <img src={logout} className="rotate-180" alt="menu bar" />
            <p className=" font-normal text-[14px] text-[#CD2424] ml-5">
              Logout
            </p>
          </div>
        </div>

        <div className="bg-gray-100 w-[1026px] border border-red-400                        ">
          <Outlet />
        </div>
      </div>
    </div>
  );
}
