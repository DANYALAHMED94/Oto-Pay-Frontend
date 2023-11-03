import React from "react";
import tenant1 from "../../assets/tenant1.svg";
import prop from "../../assets/prop.png";
import arrow from "../../assets/Arrow-left.svg";
import image from "../../assets/detailimg.svg";
import arrowright from "../../assets/Arrow-right.svg";
import bed from "../../assets/bed.svg";
import bath from "../../assets/bath.svg";
import area from "../../assets/area.svg";
import Map from "../../assets/map.png";
import { useNavigate } from 'react-router-dom';
const PropertyDetails = ({
  width,
  handleButton,
  sethandleButton,
  setProperty,
}) => {
  const navigate = useNavigate();

 
  return (
    <>
      <div className={`${width} rounded-2xl bg-white`}>
        <div className="w-full rounded-lg bg-gray-100 flex h-full flex-col gap-4 ">
          <h1 className=" w-full md:whitespace-normal whitespace-nowrap  text-black font-semibold lg:text-2xl text-xl leading-9">
            Property Details
          </h1>
          <div className="w-full flex flex-col xl:gap-[32px] sxl:gap-[32px] gap-4">
            <div className="w-full h-full flex md:flex-row md:justify-between justify-center md:items-start items-center flex-col gap-6">
              <div className="xl:w-[800px] h-full w-full  flex flex-col gap-3">
                <div className="w-full  flex justify-center items-center">
                  <img
                    alt="gallery"
                    className="w-full  h-full rounded-lg object-center block"
                    src={prop}
                  />
                </div>

                <div className="w-full flex justify-between gap-6">
                  <div>
                    <img
                      alt="gallery"
                      className="w-full  h-full rounded-lg object-center block"
                      src={arrow}
                    />
                  </div>

                  <div className=" flex justify-center">
                    <div>
                      <img
                        alt="gallery"
                        className="w-full  h-full rounded-lg object-center block"
                        src={image}
                      />
                    </div>
                    <div>
                      <img
                        alt="gallery"
                        className="w-full  h-full rounded-lg object-center block"
                        src={image}
                      />
                    </div>

                    <div>
                      <img
                        alt="gallery"
                        className="w-full  h-full rounded-lg object-center block"
                        src={image}
                      />
                    </div>

                    <div>
                      <img
                        alt="gallery"
                        className="w-full  h-full rounded-lg object-center block"
                        src={image}
                      />
                    </div>

                    <div>
                      <img
                        alt="gallery"
                        className="w-full  h-full rounded-lg object-center block"
                        src={image}
                      />
                    </div>

                    <div>
                      <img
                        alt="gallery"
                        className="w-full  h-full rounded-lg object-center block"
                        src={image}
                      />
                    </div>
                  </div>

                  <div>
                    <img
                      alt="gallery"
                      className="w-full  h-full rounded-lg object-center block"
                      src={arrowright}
                    />
                  </div>
                </div>
                <div className="w-full flex justify-center items-center">
                  <p>15 Pictures Added</p>
                </div>
              </div>
              <div className="w-[350px] xl:h-[650px] lg:h-[530px] md:h-[500px]  h-full flex flex-col justify-between p-6 gap-2  rounded-lg shadow-lg bg-[#FAFAFA]">
                <div className="">
                  <h2 className=" xl:text-3xl text-2xl  font-semibold leading-[28px] text-[#5A4278]  rounded-lg  title-font mb-2">
                    $8,827648
                  </h2>
                  <h2 className="  text-[#312245] xl:text-[16px] text-[14px] font-bold leading-[20px] ">
                    Park View City, Washington
                  </h2>
                  <h2 className=" 3xl:text-[20px] text-[14px]  font-medium leading-[18px] text-[#5A4278]  rounded-lg  title-font  ">
                    Washington ,street xyz
                  </h2>
                </div>
                <div className="w-full p-3 rounded-lg flex flex-col justify-center items-center xl:gap-6 lg:gap-4 gap-3 bg-[#F2F2F2]">
                  <div className="w-full flex  flex-col justify-center items-center  gap-2">
                    <div className="xl:w-[200px]  lg:w-[150px] md:w-[130px] w-full h-full">
                      <img
                        alt="gallery"
                        className="w-full object-cover  h-full rounded-lg object-center block"
                        src={tenant1}
                      />
                    </div>
                    <div>
                      <h1 className="text-base font-medium leading-5 text-[#18171B]">
                        Name of landlord
                      </h1>
                      <p className="text-xs font-normal leading-4 text-[#18171B]">
                        address xyz street xyx
                      </p>
                    </div>
                  </div>

                  <div className=" w-full  flex  flex-col  md:justify-between justify-center xl:gap-4  gap-2">
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
                </div>
              </div>
            </div>
          </div>

          <div className=" w-full h-full flex flex-col gap-4  ">
            <div className=" w-full h-full text-black flex flex-col   ">
              {/* First Div */}
              <div className="flex md:flex-row flex-col gap-2 md:h-[52px]  h-full justify-between ">
                <div className="w-full flex md:flex-col flex-row gap-2 font-medium text-sm leading-4 text-[#5A4278] md:justify-start justify-between items-start ">
                  <div className=" w-full  ">Property Name </div>
                  <div className="w-full   md:text-base text-sm leading-5 text-[#312245]">
                    Park View City, Washington
                  </div>
                </div>

                <div className="w-full flex md:flex-col flex-row gap-2 font-medium text-sm leading-4 text-[#5A4278] md:justify-start justify-between items-start ">
                  <div className=" w-full  "> Property Tracking Number</div>
                  <div className="w-full  md:text-base text-sm leading-5 text-[#312245]">
                    1215262232NY
                  </div>
                </div>
              </div>

              <hr className="border-t border-gray-300 my-4" />

              <div className="flex md:flex-row flex-col gap-2 md:h-[52px]  h-full justify-between   ">
                <div className="w-full flex md:flex-col flex-row gap-2 font-medium text-sm leading-4 text-[#5A4278] md:justify-start justify-between items-start ">
                  <div className=" w-full  "> Property Number</div>
                  <div className="w-full flex gap-4  md:text-base text-sm leading-5 text-[#0C8B3F]">
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
                </div>
              </div>

              <hr className="border-t border-gray-300 my-4" />

              <div className="flex md:flex-row flex-col gap-2 md:h-[52px]  h-full justify-between ">
                <div className="w-full flex md:flex-col flex-row gap-2 font-medium text-sm leading-4 text-[#5A4278] md:justify-start justify-between items-start ">
                  <div className=" w-full  ">Installment </div>
                  <div className="w-full   md:text-base text-sm leading-5 text-[#312245]">
                    $4,820 (Per month)
                  </div>
                </div>

                <div className="w-full flex md:flex-col flex-row gap-2 font-medium text-sm leading-4 text-[#5A4278] md:justify-start justify-between items-start ">
                  <div className=" w-full  "> Added</div>
                  <div className="w-full  md:text-base text-sm leading-5 text-[#312245]">
                    5 hours ago(Updated: 2 hours ago)
                  </div>
                </div>
              </div>

              <hr className="border-t border-gray-300 my-4" />

              <div className="flex md:flex-row flex-col gap-2 md:h-[100px]  h-full justify-between   ">
                <div className="w-full  h-full flex flex-col gap-2 font-medium text-sm leading-4 text-[#5A4278]">
                  description
                  <div classname="w-full h-full  text-base leading-5 font-medium text-[#312245]">
                    As you approach the property, a picturesque driveway winds
                    through lush gardens and old-growth trees, creating an
                    immediate sense of seclusion and privacy. The exterior
                    boasts a classic architectural design, characterized by its
                    natural stone façade, charming dormer windows, and a
                    welcoming front porch that exudes warmth.As you approach the
                    property, a picturesque driveway winds through lush gardens
                    and old-growth trees, creating an immediate sense of
                    seclusion and privacy. The exterior boasts a classic
                    architectural design, characterized by its natural stone
                    façade, charming dormer windows, and a welcoming front porch
                    that exudes warmth.{" "}
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="w-full flex flex-col mt-3 py-3">
            <label
              htmlFor="whatsApp"
              className="text-sm font-medium leading-4 text-[#5A4278]"
            >
              Map Location
            </label>

            <div className="w-full mt-3">
              <img src={Map} className="w-full" alt="map" />
            </div>
          </div>

          <div className="w-full flex md:flex-row flex-col justify-end gap-4">
            <button
    onClick={() => navigate(-1)}
              type="submit"
              className="flex justify-center p-4 font-bold gap-[8px] text-[#17062F] md:w-[200px] w-full h-full border border-[#17062F]   rounded-md text-sm  text-center  items-center  mb-2 "
            >
              Go Back
            </button>

            <button
              type="button"
              onClick={() => setProperty("occupyProperty")}
              className="flex justify-center font-bold p-4 gap-[8px] text-white md:w-[200px] w-full bg-[#17062F] h-full border border-[#17062F]   rounded-md text-sm  text-center  items-center  mb-2 "
            >
              Occupy Property
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="25"
                height="24"
                viewBox="0 0 25 24"
                fill="none"
              >
                <path
                  d="M16.65 13.001H5.5C5.21667 13.001 4.979 12.905 4.787 12.713C4.595 12.521 4.49934 12.2837 4.5 12.001C4.5 11.7177 4.596 11.48 4.788 11.288C4.98 11.096 5.21734 11.0004 5.5 11.001H16.65L13.8 8.15104C13.6 7.95104 13.504 7.71771 13.512 7.45104C13.52 7.18437 13.616 6.95104 13.8 6.75104C14 6.55104 14.2377 6.4467 14.513 6.43804C14.7883 6.42937 15.0257 6.52537 15.225 6.72604L19.8 11.301C19.9 11.401 19.971 11.5094 20.013 11.626C20.055 11.7427 20.0757 11.8677 20.075 12.001C20.075 12.1344 20.054 12.2594 20.012 12.376C19.97 12.4927 19.8993 12.601 19.8 12.701L15.225 17.276C15.025 17.476 14.7877 17.572 14.513 17.564C14.2383 17.556 14.0007 17.4517 13.8 17.251C13.6167 17.051 13.5207 16.8177 13.512 16.551C13.5033 16.2844 13.5993 16.051 13.8 15.851L16.65 13.001Z"
                  fill="#FDFCFF"
                />
              </svg>
            </button>
          </div>
        </div>
      </div>
    </>
  );
};

export default PropertyDetails;
