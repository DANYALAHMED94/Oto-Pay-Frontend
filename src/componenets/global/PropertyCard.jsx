import React, { useState } from "react";
import prop from "../../assets/prop.png";
import bed from "../../assets/bed.svg";
import bath from "../../assets/bath.svg";
import area from "../../assets/area.svg";
// import rating from "../../assets/rating.svg";
import update from "../../assets/update.svg";
import img from "../../assets/Frame 267.png";
import UpdatePropertyModal from "./UpdatePropertyModal";
import { useLocation } from "react-router-dom";


function PropertyCard({
  properties,
  access,
  searchStyle,
  option, 
  option2,
  property,
  occupied,
setAnotherProperty,
  setProperty,
  landLord,
  request,
  featureEffect 
}) {
  const [showModal, setShowModal] = useState(false);
  const [state, setState] = useState("");
  const [isChecked, setIsChecked] = useState(true);


  const handleCheckboxChange = () => {
    setIsChecked(!isChecked);
  };
  
  // const [handleButton, setHandleButton] = useState("");
 
  // const [button, setButton] = useState("");
  // const [details, setDetails] = useState("");
  const location = useLocation();

  // Determine which buttons to render based on the location.pathname
  const shouldShowButton =
    location.pathname === "/admin-dashboard/tenants" ||
    location.pathname === "/admin-dashboard/landlord";
  const ShowOtherButton =
    location.pathname === "/admin-dashboard/properties" ||
    location.pathname === "/admin-dashboard/access" ||
    location.pathname === "/search";

  return (
    <>
      <div className="w-full h-full xl:p-[24px] lg:p-4  p-6 rounded-lg     shadow-lg     bg-[#FFFFFF] flex   flex-col xl:gap-[32px] lg:gap-0  gap-4">
        {access === "Activity" ? (
          <div className=" flex md:flex-row flex-col justify-between bg-[#F6F6F6] gap-2 rounded-lg p-3 ">
            <div className="flex md:flex-row flex-col w-full  justify-start items-center gap-4 ">
              <div className="md:w-12 w-16 h-16 md:h-12">
                <img
                  alt="gallery"
                  className="w-full  h-full rounded-lg object-center block"
                  src={img}
                />
              </div>
              <div className="text-base font-normal leading-5 text-[#0C8B3F] ">
                Added by
                <span className="text-[#17062F] leading-5 font-bold text-base">
                  Mark John Smith
                </span>
              </div>
            </div>

            <div className="flex w-full   md:justify-end justify-center items-center gap-4 ">
              <div className="flex  text-black text-base  leading-5 font-medium ">
                23-Aug-2023
              </div>
              <div className="flex  text-black text-base  leading-5 font-normal ">
                05 : 26 : PM
              </div>
            </div>
          </div>
        ) : null}

        {request === "All Landlords" ||
        landLord === "landlord" ||
        landLord === "drop" ||
        request === "Blocked Landlords" ||
        option === "options" ? (
          <div className=" flex  md:flex-row flex-col justify-between bg-[#F6F6F6] gap-2 rounded-lg p-3 ">
            <div className="flex md:flex-row flex-col w-full  justify-start items-center gap-4 ">
              <div className="md:w-12 w-16 h-16 md:h-12">
                <img
                  alt="gallery"
                  className="w-full  h-full rounded-lg object-center block"
                  src={img}
                />
              </div>
              {option === "options" ? (
                <div className=" flex flex-col text-sm font-medium leading-5 text-[#0C8B3F] whitespace-nowrap ">
                  Lanlord Name
                  <span className="text-[#17062F] leading-5 font-medium text-base">
                    Smith john
                  </span>
                </div>
              ) : (
                <div className=" flex flex-col text-sm font-medium leading-5 text-[#0C8B3F] whitespace-nowrap ">
                  Tenant Name
                  <span className="text-[#17062F] leading-5 font-medium text-base">
                    John Smith
                  </span>
                </div>
              )}
            </div>

            <div className="flex flex-col w-full   md:justify-end justify-center items-center gap-1 ">
              <div className="flex  text-black text-sm  leading-5 font-medium ">
                Lease Start Date
              </div>
              <div className="flex  text-[#0C8B3F] text-base  leading-5 font-medium ">
                02-06-1992
              </div>
            </div>

            <div className="flex flex-col w-full   md:justify-end justify-center items-center gap-1 ">
              <div className="flex  text-black text-sm  leading-5 font-medium ">
                Lease End Date
              </div>
              <div className="flex  text-[#CD2424] text-base  leading-5 font-medium ">
                02-06-1992
              </div>
            </div>

            <div className="flex flex-col w-full   md:justify-end justify-center items-center gap-1 ">
              <div className="flex  text-black text-sm  leading-5 font-medium ">
                Lease Duration
              </div>
              <div className="flex  text-[#312245] text-base  leading-5 font-medium ">
                5 Years
              </div>
            </div>
            {property === "propertycard" ? (
              <button
              onClick={() => {setProperty('PropertyDetails');
              setAnotherProperty('');}}
                className="flex justify-center items-center rounded-lg p-1 w-full border border-[#17062F]  font-bold text-base leading-5 text-[#17062F]"
              >
                See Details
              </button>
            ) : (
              <button className="flex justify-center items-center rounded-lg p-1 w-full border border-[#17062F]  font-bold text-base leading-5 text-[#17062F]">
                Tenant Details
              </button>
            )}
          </div>
        ) : null}

        <div className=" flex   xl:flex-row flex-col xl:gap-[32px] lg:gap-4  gap-4">
          <div className="  xl:w-[534px]  w-full xl:h-[486px] h-80 flex justify-center items-center   ">
            <img
              alt="gallery"
              className="w-full  h-full rounded-lg object-center block"
              src={prop}
            />
          </div>

          <div
            className={`xl:w-[580px]  w-full   h-full     ${
              searchStyle === "Card" ? " space-y-[30px]" : " space-y-[10px]"
            }     `}
          >
            <div className="w-full h-full space-y-[11px]">
              <div className="flex md:flex-row flex-col justify-between">
                <h2
                  className=" xl:text-3xl text-2xl  font-semibold leading-[28px] text-[#5A4278]  rounded-lg  title-font mb-2
        "
                >
                  $8,827648
                </h2>
               

                { featureEffect === "feature Effect" ? (
                  <div
                 
                    className="p-3 px-4 md:w-[250px] w-full h-10 rounded-lg border gap-x-1 flex justify-center items-center  bg-[#2E0664] bg-opacity-10"
                  >
                   <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none">
  <path d="M2.24999 8.25H21.75M1.6603 8.82234L11.3986 21.4533C11.4694 21.5455 11.5604 21.6203 11.6647 21.6717C11.769 21.7232 11.8837 21.7499 12 21.7499C12.1163 21.7499 12.231 21.7232 12.3353 21.6717C12.4396 21.6203 12.5306 21.5455 12.6014 21.4533L22.3397 8.82234C22.4354 8.69768 22.491 8.54682 22.4989 8.38983C22.5069 8.23284 22.4669 8.07714 22.3842 7.94344L19.0809 2.61141C19.0129 2.50106 18.9178 2.40993 18.8047 2.34668C18.6916 2.28343 18.5641 2.25015 18.4345 2.25H5.56546C5.43584 2.25015 5.30842 2.28343 5.19528 2.34668C5.08215 2.40993 4.98706 2.50106 4.91905 2.61141L1.61577 7.94344C1.53311 8.07714 1.4931 8.23284 1.50105 8.38983C1.50901 8.54682 1.56455 8.69768 1.6603 8.82234Z" stroke="#2E0664" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
  <path d="M18.75 3L16.5 8.25M16.5 8.25L12 2.25L7.5 8.25M16.5 8.25L12 21L7.5 8.25M5.25 3L7.5 8.25" stroke="#2E0664" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
</svg>
                    <p className="md:text-base text-sm text-[#2E0664] leading-5 font-bold whitespace-nowrap">
                     Feature Effect Applied
                    </p>
                  </div>

                ) : null}
                {properties === "Update" ? (
                  <button
                    onClick={() => {
                      setShowModal(true);
                      setState("Property Pictures");
                    }}
                    className="p-3 px-4 md:w-[160px] w-full h-10 rounded-lg border gap-x-1 flex justify-center items-center border-[#312245]"
                  >
                    <img src={update} alt="delete" />
                    <p className="text-sm text-[#312245] font-semibold whitespace-nowrap">
                      Update Property
                    </p>
                  </button>

                ) : null}
                  {option2 === "option2" ? (
                  <button
                  
                   onClick={() => {setProperty('otherDetails');
                   setAnotherProperty('');
                  }}
                
                  
                    className="p-3 px-4 md:w-[160px] w-full h-10 rounded-lg border gap-x-1 flex justify-center items-center border-[#312245]"
                  >
                    <img src={update} alt="delete" />
                    <p className="text-sm text-[#312245] font-semibold whitespace-nowrap">
                      details
                    </p>
                  </button>
                ) : null}

                {properties === "All Vacant" ? (
                  <button className="text-[#CD2424] text-base font-medium">
                    Marked as vacant
                  </button>
                ) : null}
              </div>
              <div className="space-y-[4px]">
                <h2 className="  text-[#312245] text-[16px] font-bold leading-[20px] ">
                  Park View City, Washington
                </h2>
                <h2 className="bg-[#F6F6F6] flex  gap-2 p-3 font-medium text-xs leading-3 text-[#866FA3] ">
                  Property Number
                  <span className="text-xs font-normal leading-3 text-[#312245]">
                    1215262232NY
                  </span>
                </h2>

                <h2 className=" 3xl:text-[20px] text-[14px]  font-medium leading-[18px] text-[#5A4278]  rounded-lg  title-font mb-2 ">
                  Washington ,street xyz
                </h2>
              </div>
{/* 
              <div className="rounded-lg   ">
                <img
                  alt="gallery"
                  className="w-28 object-cover h-full object-center block"
                  src={rating}
                />
              </div> */}
              <p className="text-[#5A4278] md:text-base text-sm leading-[18.2px] font-medium">
                As you approach the property, a picturesque driveway winds
                through lush gardens and old-growth trees, creating an immediate
                sense of seclusion and privacy. The exterior boasts a classic
                architectural design, characterized by its natural stone façade,
                charming dormer windows, and a welcoming front porch that exudes
                warmth.
              </p>

              <div className="flex xxsm:gap-4 gap-6 ">
                <div className=" flex  items-center lg:gap-2 md:gap-2 gap-1 ">
                  <div className=" w-4 h-4     ">
                    <img
                      alt="gallery"
                      className="w-full object-cover h-full object-center block"
                      src={bed}
                    />
                  </div>
                  <p className="text-[#866FA3] xxsm:text-xs text-sm whitespace-nowrap">
                    4 beds
                  </p>
                </div>

                <div className=" flex  items-center lg:gap-2 md:gap-2 gap-1">
                  <div className=" w-4 h-4     ">
                    <img
                      alt="gallery"
                      className="w-full object-cover h-full object-center block"
                      src={bath}
                    />
                  </div>
                  <p className="text-[#866FA3] text-sm whitespace-nowrap">
                    2 ba
                  </p>
                </div>

                <div className=" flex  items-center lg:gap-2 md:gap-2 gap-1 ">
                  <div className=" w-4 h-4     ">
                    <img
                      alt="gallery"
                      className="w-full object-cover h-full object-center block"
                      src={area}
                    />
                  </div>
                  <p className="text-[#866FA3] text-sm whitespace-nowrap">
                    1155 sqft to 2684 sqft
                  </p>
                </div>
              </div>
              <div className="text-[#866FA3] text-[12px] leading-[15.6px] font-normal tracking-wider">
                Added: 5 hours ago (Updated: 2 hours ago)
              </div>

              <div className="w-[278px] h-[39px]  rounded-md p-[8px] flex gap-[4px] bg-[#F6F6F6] items-center tracking-wider text-[#5A4278]">
                <h1 className=" text-[14px] leading-[18.2px] font-medium ">
                  INSTALMENT
                  <span className="text-[12px] font-normal leading-[15.6px]">
                    USD
                  </span>
                  <span className="text-[18px] leading-[23.4px] font-bold">
                    $4,820
                  </span>
                  <span className="text-[12px] leading-[15.6px] font-normal">
                    per month
                  </span>
                </h1>
              </div>
            </div>

            {occupied ==="Occupied" ?(
             <div className=" flex md:flex-row flex-col justify-between bg-[#F6F6F6] gap-2 rounded-lg p-3 ">
             <div className="flex md:flex-row flex-col w-full  justify-start items-center gap-3 ">
            <h1 className="text-sm font-semibold leading-4 whitespace-nowrap"> Occupied by </h1>
               <div className="w-full flex md:flex-row flex-col  items-center gap-2  ">
                
                <div className="md:w-10 w-16 h-16 md:h-10">
                 <img
                   alt="gallery"
                   className="w-full  h-full rounded-lg object-center block"
                   src={img}
                 />
               </div>
                 <span className="text-[#17062F] leading-4 font-normal text-base">
                   Mark John Smith
                 </span>
               </div>
               <div className="flex w-full justify-end items-center">
               <button className="flex justify-center items-center rounded-lg p-3 md:w-[150px] w-full  border border-[#17062F]  font-bold text-base leading-5 text-[#17062F]">
                See Details
              </button>
              </div>
             </div>
               
              </div>
): null }

{option2 ==="option2" ?(
            <div className=" w-full md:h-[48px] h-auto flex md:flex-row flex-col  md:justify-between justify-center gap-4 ">
                <button
                  type="submit"
                  className="flex justify-center gap-[8px] p-2 text-[#CD2424] dark:text-white  w-full h-full border border-[#CD2424]   rounded-md text-sm  text-center  items-center  mb-2 "
                >
                  <svg
                    width="25"
                    height="25"
                    viewBox="0 0 25 25"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M20.8335 4.38086H4.8335C3.72893 4.38086 2.8335 5.27629 2.8335 6.38086V18.3809C2.8335 19.4854 3.72893 20.3809 4.8335 20.3809H20.8335C21.9381 20.3809 22.8335 19.4854 22.8335 18.3809V6.38086C22.8335 5.27629 21.9381 4.38086 20.8335 4.38086Z"
                      stroke="#CD2424"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                    <path
                      d="M22.8335 7.38086L13.8635 13.0809C13.5548 13.2743 13.1978 13.3769 12.8335 13.3769C12.4692 13.3769 12.1122 13.2743 11.8035 13.0809L2.8335 7.38086"
                      stroke="#CD2424"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                  </svg>
                  Email
                </button>

                <button
                  type="submit"
                  className="flex justify-center p-2 gap-[8px] text-[#0C8B3F] dark:text-white  w-full h-full border border-[#0C8B3F]   rounded-md text-sm  text-center  items-center  mb-2 "
                >
                  <svg
                    width="25"
                    height="25"
                    viewBox="0 0 25 25"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <g clipPath="url(#clip0_1045_943)">
                      <path
                        d="M12.9902 3.38087C11.3331 3.38249 9.70858 3.8417 8.29578 4.70788C6.88299 5.57405 5.73678 6.81355 4.9835 8.28973C4.23022 9.76591 3.89912 11.4215 4.02672 13.0738C4.15431 14.7262 4.73564 16.3113 5.70662 17.6543L4.58174 21.0012L8.04074 19.8902C9.21193 20.664 10.5479 21.1531 11.9418 21.3183C13.3357 21.4835 14.7489 21.3204 16.0685 20.8418C17.3881 20.3633 18.5775 19.5827 19.5416 18.5624C20.5057 17.542 21.2177 16.3103 21.6209 14.9656C22.024 13.621 22.107 12.2006 21.8633 10.8181C21.6196 9.43562 21.0558 8.12931 20.2172 7.0036C19.3785 5.87789 18.2882 4.964 17.0333 4.33496C15.7785 3.70592 14.3939 3.37919 12.9902 3.38087Z"
                        fill="#0C8B3F"
                      />
                      <path
                        d="M17.8471 15.3104C17.6922 15.5756 17.4769 15.8047 17.2169 15.9811C16.9568 16.1575 16.6586 16.2767 16.3438 16.33C15.9507 16.4177 15.4303 16.4725 13.6843 15.7818C12.1456 15.0632 10.8395 13.965 9.90302 12.6025C9.38576 11.9693 9.07255 11.2079 9.00107 10.4099C8.99081 10.0804 9.05458 9.75264 9.18816 9.44832C9.32173 9.14401 9.52205 8.87011 9.77582 8.64481C9.98835 8.46524 10.2661 8.37091 10.5506 8.38169H10.805C11.0362 8.40362 11.1519 8.41458 11.2906 8.75444L11.9844 10.3222C12.0188 10.3803 12.0387 10.445 12.0427 10.5115C12.0467 10.578 12.0347 10.6445 12.0076 10.7059C11.9458 10.8272 11.8638 10.9383 11.7647 11.0348C11.6491 11.1663 11.5335 11.254 11.4294 11.3856C11.3253 11.4952 11.2097 11.6268 11.3369 11.8461C11.6722 12.3867 12.089 12.8779 12.5742 13.3042C13.0923 13.7585 13.6965 14.1156 14.3549 14.3566C14.4439 14.3975 14.5441 14.4111 14.6415 14.3954C14.739 14.3796 14.8288 14.3354 14.8984 14.2689C15.1088 14.0305 15.3056 13.7817 15.4882 13.5234C15.5416 13.4374 15.6265 13.3731 15.7268 13.3428C15.827 13.3125 15.9356 13.3182 16.0316 13.359C16.2398 13.4357 17.3267 13.94 17.558 14.0497C17.7893 14.1593 17.928 14.2031 17.9743 14.3018C18.0337 14.6426 17.9896 14.9925 17.8471 15.3104Z"
                        fill="#FAFAFA"
                      />
                    </g>
                    <defs>
                      <clipPath id="clip0_1045_943">
                        <rect
                          width="24"
                          height="24"
                          fill="white"
                          transform="translate(0.5 0.380859)"
                        />
                      </clipPath>
                    </defs>
                  </svg>
                  WhatsApp
                </button>

                <button
                  type="submit"
                  className="flex justify-center p-2 gap-[8px] bg-[#17062F] text-white w-full h-full border border-[#17062F]   rounded-md text-sm  text-center  items-center  mb-2 "
                >
                  <svg
                    width="25"
                    height="25"
                    viewBox="0 0 25 25"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M19.9686 16.3599V18.7686C19.9695 18.9922 19.9237 19.2135 19.8341 19.4184C19.7445 19.6233 19.6131 19.8072 19.4484 19.9583C19.2836 20.1095 19.089 20.2246 18.8772 20.2962C18.6654 20.3679 18.4409 20.3945 18.2182 20.3743C15.7475 20.1059 13.3742 19.2617 11.289 17.9095C9.34901 16.6768 7.70424 15.0321 6.47148 13.0922C5.11453 10.9976 4.27007 8.61292 4.00652 6.13122C3.98645 5.9092 4.01284 5.68543 4.084 5.47416C4.15516 5.26289 4.26953 5.06876 4.41983 4.90411C4.57014 4.73947 4.75308 4.60792 4.95701 4.51785C5.16094 4.42777 5.38139 4.38115 5.60433 4.38094H8.01309C8.40275 4.3771 8.78052 4.51508 9.07597 4.76916C9.37142 5.02323 9.5644 5.37607 9.61893 5.76189C9.7206 6.53271 9.90915 7.28956 10.181 8.01799C10.289 8.30536 10.3124 8.61768 10.2483 8.91793C10.1843 9.21818 10.0355 9.49378 9.81966 9.71207L8.79995 10.7317C9.94296 12.7418 11.6073 14.4061 13.6175 15.549L14.6372 14.5294C14.8555 14.3135 15.1311 14.1647 15.4314 14.1007C15.7316 14.0367 16.044 14.06 16.3314 14.1681C17.0598 14.4399 17.8167 14.6284 18.5876 14.7301C18.9776 14.7851 19.3338 14.9816 19.5884 15.2821C19.8431 15.5826 19.9784 15.9662 19.9686 16.3599Z"
                      stroke="white"
                      strokeWidth="1.6058"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                    <path
                      d="M13.5845 4.38086C15.221 4.55329 16.7497 5.27912 17.9177 6.43831C19.0857 7.59749 19.8231 9.1206 20.0078 10.7557"
                      stroke="white"
                      strokeWidth="1.6058"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                    <path
                      d="M13.5845 7.5918C14.3742 7.74751 15.0988 8.13698 15.6643 8.70966C16.2299 9.28234 16.6102 10.0118 16.756 10.8033"
                      stroke="white"
                      strokeWidth="1.6058"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                  </svg>
                  Call
                </button>
               
              </div>
): null }

{property ==="landlordProperty" ?(
            <div className=" w-full md:h-[48px] h-auto flex md:flex-row flex-col  md:justify-between justify-center gap-4 ">
                <div className="w-full p-2 rounded-lg border border-[#ECEBED] flex justify-between items-center ">
                {isChecked ? (
                  <span className="font-bold text-base leading-5 text-[#312245]">
                    Activate
                  </span>
                ) : (
                  <span className="font-bold text-base leading-5 text-[#312245]">
                    DeActivate
                  </span>
                )}
                <label className="relative inline-flex  cursor-pointer">
                  <input
                    type="checkbox"
                    value=""
                    className="sr-only peer "
                    checked={isChecked}
                    onChange={handleCheckboxChange}
                  />
                  <div className="w-11 h-6 bg-gray-200  rounded-full peer   peer-checked:after:translate-x-full  peer-checked:after:bg-white  after:content-[''] after:absolute after:top-0.5 after:left-[2px] after:bg-[#2E0664]  after:rounded-full after:h-5 after:w-5 after:transition-all  peer-checked:bg-gray-200"></div>
                </label>
              </div>

                <button
                  type="submit"
                  className="flex justify-center p-2 gap-[8px] text-[#17062F] dark:text-white  w-full h-full border border-[#17062F]   rounded-lg text-sm  text-center  items-center  mb-2 "
                >
                 <svg xmlns="http://www.w3.org/2000/svg" width="25" height="24" viewBox="0 0 25 24" fill="none">
  <path d="M19.25 19.5H19.75V19V12.5H20.75V19C20.75 19.3978 20.592 19.7794 20.3107 20.0607C20.0294 20.342 19.6478 20.5 19.25 20.5H5.25C4.85218 20.5 4.47064 20.342 4.18934 20.0607C3.90804 19.7794 3.75 19.3978 3.75 19V5C3.75 4.16614 4.41614 3.5 5.25 3.5H11.75V4.5H5.25H4.75V5V19V19.5H5.25H19.25ZM19.6964 6.10355L19.6964 6.10362L19.7034 6.11042C19.7259 6.13199 19.745 6.1697 19.745 6.22125C19.745 6.27257 19.7257 6.31693 19.6968 6.34606C19.6967 6.34619 19.6966 6.34632 19.6964 6.34645L18.8315 7.20434L17.0386 5.41146L17.902 4.55505C17.9021 4.55504 17.9021 4.55502 17.9021 4.55501C17.9367 4.52069 17.9832 4.50102 18.0319 4.50002C18.0644 4.50055 18.1076 4.51473 18.1464 4.55355L19.6964 6.10355ZM8.75 13.7069L15.6202 6.82735L17.4131 8.62024L10.5427 15.5H8.75V13.7069Z" fill="#434146" stroke="#17062F"/>
</svg>
                 Update
                </button>

                <button
                  type="submit"
                  className="flex justify-center p-2 gap-[8px]  text-[#CD2424] w-full h-full border border-[#CD2424]   rounded-md text-sm  text-center  items-center  mb-2 "
                >
               <svg xmlns="http://www.w3.org/2000/svg" width="25" height="24" viewBox="0 0 25 24" fill="none">
  <path d="M6.25 19.0006V19V6V5.5H5.75H5.25V4.5H9.75H10.25V4V3.5H15.25V4V4.5H15.75H20.25V5.5H19.75H19.25V6V19C19.25 19.4162 19.1075 19.7604 18.8084 20.0594C18.5094 20.3585 18.1658 20.5005 17.7506 20.5H17.75H7.75C7.33379 20.5 6.98962 20.3575 6.69055 20.0584C6.3915 19.7594 6.2495 19.4158 6.25 19.0006ZM18.25 6V5.5H17.75H7.75H7.25V6V19V19.5H7.75H17.75H18.25V19V6ZM11.25 8.5V16.5H10.25V8.5H11.25ZM15.25 8.5V16.5H14.25V8.5H15.25Z" fill="#FDFCFF" stroke="#CD2424"/>
</svg>
 Delete
                </button>
               
              </div>
): null }

            {ShowOtherButton && (

            
              <div className=" w-full md:h-[48px] h-auto flex md:flex-row flex-col  md:justify-between justify-center gap-4 ">
                <button
                  type="submit"
                  className="flex justify-center gap-[8px] p-2 text-[#CD2424] dark:text-white  w-full h-full border border-[#CD2424]   rounded-md text-sm  text-center  items-center  mb-2 "
                >
                  <svg
                    width="25"
                    height="25"
                    viewBox="0 0 25 25"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M20.8335 4.38086H4.8335C3.72893 4.38086 2.8335 5.27629 2.8335 6.38086V18.3809C2.8335 19.4854 3.72893 20.3809 4.8335 20.3809H20.8335C21.9381 20.3809 22.8335 19.4854 22.8335 18.3809V6.38086C22.8335 5.27629 21.9381 4.38086 20.8335 4.38086Z"
                      stroke="#CD2424"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                    <path
                      d="M22.8335 7.38086L13.8635 13.0809C13.5548 13.2743 13.1978 13.3769 12.8335 13.3769C12.4692 13.3769 12.1122 13.2743 11.8035 13.0809L2.8335 7.38086"
                      stroke="#CD2424"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                  </svg>
                  Email
                </button>

                <button
                  type="submit"
                  className="flex justify-center p-2 gap-[8px] text-[#0C8B3F] dark:text-white  w-full h-full border border-[#0C8B3F]   rounded-md text-sm  text-center  items-center  mb-2 "
                >
                  <svg
                    width="25"
                    height="25"
                    viewBox="0 0 25 25"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <g clipPath="url(#clip0_1045_943)">
                      <path
                        d="M12.9902 3.38087C11.3331 3.38249 9.70858 3.8417 8.29578 4.70788C6.88299 5.57405 5.73678 6.81355 4.9835 8.28973C4.23022 9.76591 3.89912 11.4215 4.02672 13.0738C4.15431 14.7262 4.73564 16.3113 5.70662 17.6543L4.58174 21.0012L8.04074 19.8902C9.21193 20.664 10.5479 21.1531 11.9418 21.3183C13.3357 21.4835 14.7489 21.3204 16.0685 20.8418C17.3881 20.3633 18.5775 19.5827 19.5416 18.5624C20.5057 17.542 21.2177 16.3103 21.6209 14.9656C22.024 13.621 22.107 12.2006 21.8633 10.8181C21.6196 9.43562 21.0558 8.12931 20.2172 7.0036C19.3785 5.87789 18.2882 4.964 17.0333 4.33496C15.7785 3.70592 14.3939 3.37919 12.9902 3.38087Z"
                        fill="#0C8B3F"
                      />
                      <path
                        d="M17.8471 15.3104C17.6922 15.5756 17.4769 15.8047 17.2169 15.9811C16.9568 16.1575 16.6586 16.2767 16.3438 16.33C15.9507 16.4177 15.4303 16.4725 13.6843 15.7818C12.1456 15.0632 10.8395 13.965 9.90302 12.6025C9.38576 11.9693 9.07255 11.2079 9.00107 10.4099C8.99081 10.0804 9.05458 9.75264 9.18816 9.44832C9.32173 9.14401 9.52205 8.87011 9.77582 8.64481C9.98835 8.46524 10.2661 8.37091 10.5506 8.38169H10.805C11.0362 8.40362 11.1519 8.41458 11.2906 8.75444L11.9844 10.3222C12.0188 10.3803 12.0387 10.445 12.0427 10.5115C12.0467 10.578 12.0347 10.6445 12.0076 10.7059C11.9458 10.8272 11.8638 10.9383 11.7647 11.0348C11.6491 11.1663 11.5335 11.254 11.4294 11.3856C11.3253 11.4952 11.2097 11.6268 11.3369 11.8461C11.6722 12.3867 12.089 12.8779 12.5742 13.3042C13.0923 13.7585 13.6965 14.1156 14.3549 14.3566C14.4439 14.3975 14.5441 14.4111 14.6415 14.3954C14.739 14.3796 14.8288 14.3354 14.8984 14.2689C15.1088 14.0305 15.3056 13.7817 15.4882 13.5234C15.5416 13.4374 15.6265 13.3731 15.7268 13.3428C15.827 13.3125 15.9356 13.3182 16.0316 13.359C16.2398 13.4357 17.3267 13.94 17.558 14.0497C17.7893 14.1593 17.928 14.2031 17.9743 14.3018C18.0337 14.6426 17.9896 14.9925 17.8471 15.3104Z"
                        fill="#FAFAFA"
                      />
                    </g>
                    <defs>
                      <clipPath id="clip0_1045_943">
                        <rect
                          width="24"
                          height="24"
                          fill="white"
                          transform="translate(0.5 0.380859)"
                        />
                      </clipPath>
                    </defs>
                  </svg>
                  WhatsApp
                </button>

                <button
                  type="submit"
                  className="flex justify-center p-2 gap-[8px] bg-[#17062F] text-white w-full h-full border border-[#17062F]   rounded-md text-sm  text-center  items-center  mb-2 "
                >
                  <svg
                    width="25"
                    height="25"
                    viewBox="0 0 25 25"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M19.9686 16.3599V18.7686C19.9695 18.9922 19.9237 19.2135 19.8341 19.4184C19.7445 19.6233 19.6131 19.8072 19.4484 19.9583C19.2836 20.1095 19.089 20.2246 18.8772 20.2962C18.6654 20.3679 18.4409 20.3945 18.2182 20.3743C15.7475 20.1059 13.3742 19.2617 11.289 17.9095C9.34901 16.6768 7.70424 15.0321 6.47148 13.0922C5.11453 10.9976 4.27007 8.61292 4.00652 6.13122C3.98645 5.9092 4.01284 5.68543 4.084 5.47416C4.15516 5.26289 4.26953 5.06876 4.41983 4.90411C4.57014 4.73947 4.75308 4.60792 4.95701 4.51785C5.16094 4.42777 5.38139 4.38115 5.60433 4.38094H8.01309C8.40275 4.3771 8.78052 4.51508 9.07597 4.76916C9.37142 5.02323 9.5644 5.37607 9.61893 5.76189C9.7206 6.53271 9.90915 7.28956 10.181 8.01799C10.289 8.30536 10.3124 8.61768 10.2483 8.91793C10.1843 9.21818 10.0355 9.49378 9.81966 9.71207L8.79995 10.7317C9.94296 12.7418 11.6073 14.4061 13.6175 15.549L14.6372 14.5294C14.8555 14.3135 15.1311 14.1647 15.4314 14.1007C15.7316 14.0367 16.044 14.06 16.3314 14.1681C17.0598 14.4399 17.8167 14.6284 18.5876 14.7301C18.9776 14.7851 19.3338 14.9816 19.5884 15.2821C19.8431 15.5826 19.9784 15.9662 19.9686 16.3599Z"
                      stroke="white"
                      strokeWidth="1.6058"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                    <path
                      d="M13.5845 4.38086C15.221 4.55329 16.7497 5.27912 17.9177 6.43831C19.0857 7.59749 19.8231 9.1206 20.0078 10.7557"
                      stroke="white"
                      strokeWidth="1.6058"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                    <path
                      d="M13.5845 7.5918C14.3742 7.74751 15.0988 8.13698 15.6643 8.70966C16.2299 9.28234 16.6102 10.0118 16.756 10.8033"
                      stroke="white"
                      strokeWidth="1.6058"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                  </svg>
                  Call
                </button>
               
              </div>
            )}
            {shouldShowButton && (
              <div className=" w-full  md:h-[48px] h-auto flex md:flex-row flex-col lg:justify-start md:justify-start justify-center gap-[16px] ">
                {request === "All Landlords" ||
                request === "Blocked Landlords" ? (
                  <button
                    type="submit"
                    className="flex justify-center items-center gap-[4px] text-[#2E0664] bg-[#F6EFFF]  md:w-[184px] w-full h-full border  rounded-md text-base  leading-4 py-2.5 text-center  font-bold  mb-2 "
                  >
                    <svg
                      width="25"
                      height="24"
                      viewBox="0 0 25 24"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        d="M20.75 6L9.75 17L4.75 12"
                        stroke="#2E0664"
                        stroke-width="2"
                        stroke-linecap="round"
                        stroke-linejoin="round"
                      />
                    </svg>
                    Property On Rent
                  </button>
                ) : (
                  <button
                    type="submit"
                    className="flex justify-center items-center gap-[4px] text-[#2E0664] bg-[#F6EFFF]  md:w-[184px] w-full h-full border  rounded-md text-base  leading-4 py-2.5 text-center  font-bold  mb-2 "
                  >
                    <svg
                      width="25"
                      height="24"
                      viewBox="0 0 25 24"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        d="M20.75 6L9.75 17L4.75 12"
                        stroke="#2E0664"
                        stroke-width="2"
                        stroke-linecap="round"
                        stroke-linejoin="round"
                      />
                    </svg>
                    Add Property
                  </button>
                )}

                <button
                  type="submit"
                  className="flex justify-center items-center gap-[8px] text-white bg-[#CD2424] md:w-[184px] w-full h-full   rounded-md text-base leading-4  py-2.5 text-center font-bold  mb-2 "
                >
                  <svg
                    width="25"
                    height="24"
                    viewBox="0 0 25 24"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M3.25 6H21.25"
                      stroke="white"
                      stroke-width="2"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                    />
                    <path
                      d="M19.25 6V20C19.25 21 18.25 22 17.25 22H7.25C6.25 22 5.25 21 5.25 20V6"
                      stroke="white"
                      stroke-width="2"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                    />
                    <path
                      d="M8.25 6V4C8.25 3 9.25 2 10.25 2H14.25C15.25 2 16.25 3 16.25 4V6"
                      stroke="white"
                      stroke-width="2"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                    />
                    <path
                      d="M10.25 11V17"
                      stroke="white"
                      stroke-width="2"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                    />
                    <path
                      d="M14.25 11V17"
                      stroke="white"
                      stroke-width="2"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                    />
                  </svg>
                  Delete
                </button>
              </div>
            )}

            {option === "options" ? (
              <div className=" w-full  md:h-[48px] h-auto flex md:flex-row flex-col lg:justify-start md:justify-start justify-center gap-[16px] ">
                <button
                  type="submit"
                  className="flex justify-center items-center gap-[8px] text-[#0C8B3F] bg-[#F2F2F2]  w-full h-full   rounded-md text-base leading-4  py-2.5 text-center font-bold  mb-2 "
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                    fill="none"
                  >
                    <path
                      d="M20 6L9 17L4 12"
                      stroke="#0C8B3F"
                      stroke-width="2"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                    />
                  </svg>
                  It is occupied by you
                </button>
              </div>
            ) : null}
          </div>     

   
        </div>
      </div>
   
      <UpdatePropertyModal
        state={state}
        setShowModal={setShowModal}
        showModal={showModal}
      />
    </>
  );
}

export default PropertyCard;
