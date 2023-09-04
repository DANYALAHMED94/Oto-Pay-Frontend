import React from "react";
import profile from "../../assets/profilePic.svg";
import logout from "../../assets/logoutIcon.svg";
// import menu from "../../assests/menuIcon.svg";
import { NavLink, useNavigate } from "react-router-dom";
import {
  HomeIcon,
  CancelIcon,
  PropertyIcon,
  TenantsIcon,
} from "../../iconComponent/Icons";

export default function SideBar({ show, setShow }) {
  const navigate = useNavigate();

  const handleLogout = () => {
    localStorage.removeItem("user");
    // instance.logoutRedirect();
    navigate("/login");
  };
  return (
    <div
      className={
        show
          ? "opacity-100 scale-100 ease-out z-40 w-[300px] shadow-lg bg-white duration-200 absolute top-0 inset-x-0 transition transform origin-top-right "
          : "opacity-0 scale-95 absolute top-0 z-40 w-[300px] bg-white inset-x-0 transition transform origin-top-right "
      }
    >
      <div className="bg-white w-full -ml-[1px] h-screen relative z-auto">
        <div className="shadow-lg h-full max-w-[318px] xl:w-[318px] bg-white lg:hidden  ">
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

          <>
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
                    <p className="font-normal text-[14px] ml-5 ">Projects</p>
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
                    <p className="font-normal text-[14px] ml-5 ">
                      Profile Setting
                    </p>
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
