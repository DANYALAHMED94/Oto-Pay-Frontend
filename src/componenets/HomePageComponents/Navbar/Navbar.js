import React from "react";
import { Link } from "react-router-dom";
import Logo from "../../../assets/logo.svg";
import Logo2 from "../../../assets/OTO.svg";

const NavBar = () => {
  const [open, setOpen] = React.useState(false);

  return (
    <>
      <div className=" bg-[#2E0664] sticky top-0 w-[100%] 2xl:h-[90px] xl:h-[87px] lg:h-[80px] md:h-[60px] h-[62px] 3xl:px-[90px]  2xl:px-[70px] xl:px-[120px] lg:px-[60px] md:px-[45px] px-5 z-50 ">
        <div className=" mx-auto h-full ">
          <div className="flex h-full justify-between items-center  ">
            <Link to="/">
              <img
                className="xl:h-[87px] xl:w-[94px] lg:h-[80px] lg:w-[94px] md:h-14 md:w-16 h-16 w-16 flex items-center justify-center   "
                src={Logo}
                alt="property-logo"
              />
            </Link>

            <div className=" xl:hidden lg:hidden  justify-center items-center block ">
              <button
                type="button"
                className="bg-white rounded-md p-2 inline-flex items-center justify-center text-gray-400 dark:text-black hover:text-gray-500 hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-indigo-500"
                onClick={() => setOpen(!open)}
              >
                <span className="sr-only">Open menu</span>

                <svg
                  className="h-6 w-6"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  aria-hidden="true"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M4 6h16M4 12h16M4 18h16"
                  />
                </svg>
              </button>
            </div>

            <nav className="lg:flex xl:flex hidden xl:gap-12 lg:gap-10 md:gap-6 h-full xl:w-[482px] xl:h-[87px]   lg:w-[70%] md:w-[50%] justify-center items-center ">
              <Link
                to="/"
                className="xl:text-base md:text-sm font-normal font-inter   text-white "
              >
                Home
              </Link>

              <Link
                to="/plots"
                className="xl:text-base md:text-sm font-normal font-inter text-white hover:text-white"
              >
                Plots
              </Link>

              <Link
                to="/commercial"
                className="xl:text-base md:text-sm font-normal font-inter text-white hover:text-white"
              >
                Commercial
              </Link>
              <Link
                to="/rent"
                className="xl:text-base md:text-sm font-normal font-inter text-white hover:text-white"
              >
                Rent
              </Link>

              <Link
                to="/agents"
                className="xl:text-base md:text-sm font-normal font-inter text-white hover:text-white"
              >
                Agents
              </Link>
            </nav>

            <div className="lg:block hidden">
              <Link to="/admin-dashboard">
                <button
                  type="submit"
                  className=" flex justify-center  items-center xl:gap-[8px] md:gap-[6px] text-[#FFFFFF]  xl:w-[159px] md:w-[128px] xl:h-[56px] md:h-[40px]  border border-[#FFFFFF] hover:text-white   rounded-md xl:text-sm md:text-[12px]  text-center    "
                >
                  SignIn
                </button>
              </Link>
            </div>

                 <div className="lg:block hidden">
              <Link to="/tenant-dashboard">
                <button
                  type="submit"
                  className=" flex justify-center  items-center xl:gap-[8px] md:gap-[6px] text-[#FFFFFF]  xl:w-[159px] md:w-[128px] xl:h-[56px] md:h-[40px]  border border-[#FFFFFF] hover:text-white   rounded-md xl:text-sm md:text-[12px]  text-center    "
                >
                  Tenant
                </button>
              </Link>
            </div>

            <div className="xl:flex ml-3 xl:ml-0 lg:flex xl:w-[349px] xl:h-[87px]  lg:h-[87px] lg:gap-4 justify-between items-center hidden">
              <button
                type="submit"
                className=" flex md:gap-[6px] text-[#FFFFFF]  xl:w-[159px] md:w-[128px] xl:h-[56px] md:h-10 border border-[#FFFFFF] hover:text-white rounded-md xl:text-sm md:text-xs  py-2.5 text-center items-center dark:focus:ring-gray-500   "
              >
                <input
                  type="text"
                  placeholder="Property ID"
                  className="w-full placeholder:text-white bg-transparent pl-2 border-none outline-none"
                />
                <svg
                  className="xl:w-[22px] xl:h-[23px] md:w-[16px] md:h-[16px] mr-2"
                  viewBox="0 0 22 23"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M21 21.5L19 19.5M10.5 20.5C11.7476 20.5 12.9829 20.2543 14.1355 19.7769C15.2881 19.2994 16.3354 18.5997 17.2175 17.7175C18.0997 16.8354 18.7994 15.7881 19.2769 14.6355C19.7543 13.4829 20 12.2476 20 11C20 9.75244 19.7543 8.5171 19.2769 7.36451C18.7994 6.21191 18.0997 5.16464 17.2175 4.28249C16.3354 3.40033 15.2881 2.70056 14.1355 2.22314C12.9829 1.74572 11.7476 1.5 10.5 1.5C7.98044 1.5 5.56408 2.50089 3.78249 4.28249C2.00089 6.06408 1 8.48044 1 11C1 13.5196 2.00089 15.9359 3.78249 17.7175C5.56408 19.4991 7.98044 20.5 10.5 20.5Z"
                    stroke="white"
                    strokeWidth="1.5"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                </svg>
              </button>

              <button
                type="submit"
                className="flex xl:gap-[8px] whitespace-nowrap md:gap-[6px] text-[#FFFFFF]  xl:w-[159px] md:w-[128px]  xl:h-[56px] md:h-[40px] bg-[#17062F] border border-[#FFFFFF] hover:text-white   rounded-md xl:text-sm md:text-[12px] xl:px-5 md:px-4 py-2.5   items-center dark:focus:ring-gray-500   "
              >
                <svg
                  className="xl:w-[18px] xl:h-[18px] md:w-[12px] md:h-[12px]"
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
                Add Property
              </button>
            </div>
          </div>
        </div>
        {/*
    Mobile menu, show/hide based on mobile menu state.

    Entering: "duration-200 ease-out"
      From: ""
      To: ""
    Leaving: "duration-100 ease-in"
      From: "opacity-100 scale-100"
      To: "opacity-0 scale-95"
  */}

        <div
          className={
            open
              ? "opacity-100 scale-100 transition ease-out duration-200 absolute top-0 inset-x-0 p-2  transform origin-top-right "
              : "opacity-0 scale-95 absolute top-0 inset-x-0 p-2 transition transform origin-top-right md:hidden hidden"
          }
        >
          <div className="rounded-lg shadow-lg ring-1 ring-black ring-opacity-5 bg-white divide-y-2 divide-gray-50">
            <div className="w-full ">
              <div className="w-full bg-[#F0EEF2] flex rounded-md items-center justify-between p-2 ">
                <div className="flex justify-center items-center gap-4 text-center text-xl font-semibold text-[#2E0664]  ">
                  <img className="h-10 w-10  " src={Logo2} alt="Workflow" />
                  OTO~PAY
                </div>
                <div className="">
                  <button
                    type="button"
                    className="bg-white dark:bg-[#003036] rounded-md p-2 inline-flex items-center justify-center text-gray-400 hover:text-gray-500 hover:bg-gray-100  "
                    onClick={() => setOpen(!open)}
                  >
                    <span className="sr-only">Close menu</span>
                    {/* Heroicon name: outline/x */}
                    <svg
                      className="h-6 w-6"
                      xmlns="http://www.w3.org/2000/svg"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                      aria-hidden="true"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M6 18L18 6M6 6l12 12"
                      />
                    </svg>
                  </button>
                </div>
              </div>
              <div className="p-5">
                <nav className="grid gap-y-8 ">
                  <Link
                    onClick={() => setOpen(!open)}
                    to="/"
                    className="-m-3 p-3 flex items-center rounded-md hover:bg-[#04505B]"
                  >
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      fill="none"
                      viewBox="0 0 24 24"
                      strokeWidth="1.5"
                      stroke="currentColor"
                      className="w-6 h-6 dark:text-gray-200 "
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        d="M2.25 12l8.954-8.955c.44-.439 1.152-.439 1.591 0L21.75 12M4.5 9.75v10.125c0 .621.504 1.125 1.125 1.125H9.75v-4.875c0-.621.504-1.125 1.125-1.125h2.25c.621 0 1.125.504 1.125 1.125V21h4.125c.621 0 1.125-.504 1.125-1.125V9.75M8.25 21h8.25"
                      />
                    </svg>

                    <span className="ml-3 text-base font-medium text-gray-900 dark:text-gray-200">
                      Home
                    </span>
                  </Link>
                  <Link
                    onClick={() => setOpen(!open)}
                    to="/about"
                    className="-m-3 p-3 flex items-center rounded-md hover:bg-[#04505B]"
                  >
                    {/* Heroicon name: outline/cursor-click */}
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      fill="none"
                      viewBox="0 0 24 24"
                      strokeWidth="1.5"
                      stroke="currentColor"
                      className="w-6 h-6  dark:text-gray-200"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        d="M11.25 11.25l.041-.02a.75.75 0 011.063.852l-.708 2.836a.75.75 0 001.063.853l.041-.021M21 12a9 9 0 11-18 0 9 9 0 0118 0zm-9-3.75h.008v.008H12V8.25z"
                      />
                    </svg>

                    <span className="ml-3 text-base font-medium text-gray-900 dark:text-gray-200">
                      Plots
                    </span>
                  </Link>
                  <Link
                    onClick={() => setOpen(!open)}
                    to="/services"
                    className="-m-3 p-3 flex items-center rounded-md hover:bg-[#04505B]"
                  >
                    {/* Heroicon name: outline/shield-check */}
                    <svg
                      className="flex-shrink-0 h-6 w-6  dark:text-gray-200"
                      xmlns="http://www.w3.org/2000/svg"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                      aria-hidden="true"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z"
                      />
                    </svg>
                    <span className="ml-3 text-base font-medium text-gray-900  dark:text-gray-200">
                      Commercial
                    </span>
                  </Link>
                  <Link
                    onClick={() => setOpen(!open)}
                    to="/client"
                    className="-m-3 p-3 flex items-center rounded-md hover:bg-[#04505B]"
                  >
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="22"
                      height="22"
                      fill="currentColor"
                      className="bi bi-people  dark:text-gray-200"
                      viewBox="0 0 16 16"
                      id="IconChangeColor"
                    >
                      <path
                        d="M15 14s1 0 1-1-1-4-5-4-5 3-5 4 1 1 1 1h8zm-7.978-1A.261.261 0 0 1 7 12.996c.001-.264.167-1.03.76-1.72C8.312 10.629 9.282 10 11 10c1.717 0 2.687.63 3.24 1.276.593.69.758 1.457.76 1.72l-.008.002a.274.274 0 0 1-.014.002H7.022zM11 7a2 2 0 1 0 0-4 2 2 0 0 0 0 4zm3-2a3 3 0 1 1-6 0 3 3 0 0 1 6 0zM6.936 9.28a5.88 5.88 0 0 0-1.23-.247A7.35 7.35 0 0 0 5 9c-4 0-5 3-5 4 0 .667.333 1 1 1h4.216A2.238 2.238 0 0 1 5 13c0-1.01.377-2.042 1.09-2.904.243-.294.526-.569.846-.816zM4.92 10A5.493 5.493 0 0 0 4 13H1c0-.26.164-1.03.76-1.724.545-.636 1.492-1.256 3.16-1.275zM1.5 5.5a3 3 0 1 1 6 0 3 3 0 0 1-6 0zm3-2a2 2 0 1 0 0 4 2 2 0 0 0 0-4z"
                        id="mainIconPathAttribute"
                      ></path>
                    </svg>

                    <span className="ml-3 text-base font-medium text-gray-900  dark:text-gray-200">
                      Rent
                    </span>
                  </Link>

                  <Link
                    onClick={() => setOpen(!open)}
                    to="/contact"
                    className="-m-3 p-3 flex items-center rounded-md hover:bg-[#04505B]"
                  >
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      fill="none"
                      viewBox="0 0 24 24"
                      strokeWidth="1.5"
                      stroke="currentColor"
                      className="w-6 h-6  dark:text-gray-200"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        d="M21.75 6.75v10.5a2.25 2.25 0 01-2.25 2.25h-15a2.25 2.25 0 01-2.25-2.25V6.75m19.5 0A2.25 2.25 0 0019.5 4.5h-15a2.25 2.25 0 00-2.25 2.25m19.5 0v.243a2.25 2.25 0 01-1.07 1.916l-7.5 4.615a2.25 2.25 0 01-2.36 0L3.32 8.91a2.25 2.25 0 01-1.07-1.916V6.75"
                      />
                    </svg>

                    <span className="ml-3 text-base font-medium text-gray-900  dark:text-gray-200">
                      Agents
                    </span>
                  </Link>
                </nav>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default NavBar;
