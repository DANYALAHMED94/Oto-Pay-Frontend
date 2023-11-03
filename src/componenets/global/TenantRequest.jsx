import React from "react";

import Frame from "../../assets/frame2.png";
import Voice from "../../assets/voice.png";
const TenantRequest = ({ width, setServices , setRequest}) => {
  return (
    <div className={`${width} p-4 space-y-4   rounded-2xl bg-[#ECEBED] `}>
      <div className="w-full p-4 rounded-lg  flex  h-full flex-col   gap-6 ">
    <h1 className="text-base font-bold leading-5 text-[#18171B]">Attachment Added</h1> 

    <div className="grid md:grid-cols-5 gap-x-5 gap-y-3 grid-cols-1">
                              <div className="flex flex-col justify-center items-center">
                                <img src={Frame} alt="" />
                                <img src={Voice} alt="" />
                              </div>
                              <div className="flex flex-col justify-center items-center">
                                <img src={Frame} alt="" />
                                <img src={Voice} alt="" />
                              </div>
                              <div className="flex flex-col justify-center items-center">
                                <img src={Frame} alt="" />
                                <img src={Voice} alt="" />
                              </div>
                              <div className="flex flex-col justify-center items-center">
                                <img src={Frame} alt="" />
                                <img src={Voice} alt="" />
                              </div>
                              <div className="flex flex-col justify-center items-center">
                                <img src={Frame} alt="" />
                                <img src={Voice} alt="" />
                              </div>
                            </div>
        <div className=" w-full h-auto flex flex-col gap-4  ">
          <div className=" w-full h-full text-black flex flex-col   ">
            {/* First Div */}
            <div className="flex md:flex-row flex-col gap-2  h-full justify-between ">
              <div className="w-full flex md:flex-col flex-row gap-2 font-medium text-sm leading-4 text-[#5A4278] md:justify-start justify-between items-start ">
                <div className=" w-full  ">Property Name </div>
                <div className="w-full   md:text-base text-sm leading-5 text-[#312245]">
                Park View City, Washington
                </div>
              </div>

              <div className="w-full flex md:flex-col flex-row gap-2 font-medium text-sm leading-4 text-[#5A4278] md:justify-start justify-between items-start ">
                <div className=" w-full  "> Property Number </div>
                <div className="w-full  md:text-base text-sm leading-5 text-[#312245]">
                1215262232NY
                </div>
              </div>

              <div className="w-full flex md:flex-col flex-row gap-2 font-medium text-sm leading-4 text-[#5A4278] md:justify-start justify-between items-start ">
                <div className=" w-full  "> Status </div>
                <div className="w-full  md:text-base text-sm leading-5 text-[#0C39AC]">
                InProgress
                </div>
              </div>
            </div>

            <hr className="border-t border-gray-300 my-4" />

            <div className="flex md:flex-row flex-col gap-2   h-full justify-between   ">
              <div className="w-full flex md:flex-col flex-row gap-2 font-medium text-sm leading-4 text-[#5A4278] md:justify-start justify-between items-start ">
                <div className=" w-full  "> Landlord Name </div>
                <div className="w-full  md:text-base text-sm leading-5 text-[#312245]">
                Mark Smith Kim
                </div>
              </div>
              <div className="w-full flex md:flex-col flex-row gap-2 font-medium text-sm leading-4 text-[#5A4278] md:justify-start justify-between items-start ">
                <div className=" w-full  "> Type of Request</div>
                <div className="w-full   md:text-base text-sm leading-5 text-[#312245]">
                Maintenance
                </div>
              </div>
              <div className="w-full flex md:flex-col flex-row gap-2 font-medium text-sm leading-4 text-[#5A4278] md:justify-start justify-between items-start ">
                <div className=" w-full  "> Service Request ID</div>
                <div className="w-full   md:text-base text-sm leading-5 text-[#312245]">
                123456
                </div>
              </div>
            </div>

            <hr className="border-t border-gray-300 my-4" />

<div className="flex md:flex-row flex-col gap-2 h-full justify-between   ">
  <div className="w-full flex md:flex-col flex-row gap-2 font-medium text-sm leading-4 text-[#5A4278] md:justify-start justify-between items-start ">
    <div className=" w-full  "> Date </div>
    <div className="w-full  md:text-base text-sm leading-5 text-[#312245]">
    23-Aug-2023
    </div>
  </div>
  <div className="w-full flex md:flex-col flex-row gap-2 font-medium text-sm leading-4 text-[#5A4278] md:justify-start justify-between items-start ">
    <div className=" w-full  "> Time</div>
    <div className="w-full   md:text-base text-sm leading-5 text-[#312245]">
    05 : 26 : PM
    </div>
  </div>
  <div className="w-full flex md:flex-col flex-row gap-2 font-medium text-sm leading-4 text-[#5A4278] md:justify-start justify-between items-start ">
    <div className=" w-full  "> Urgency Level</div>
    <div className="w-full   md:text-base text-sm leading-5 text-[#312245]">
    Medium
    </div>
  </div>
</div>


<hr className="border-t border-gray-300 my-4" />

<div className="flex xl:flex-row flex-col gap-2   h-full justify-between   ">
<div className="w-full  h-full flex flex-col gap-2 font-medium text-sm leading-4 text-[#5A4278]">
    Description
    <span classname=" text-base leading-5 font-medium text-[#312245]">
    As you approach the property, a picturesque driveway winds through lush gardens and old-growth trees, creating an immediate sense of seclusion and privacy. The exterior boasts a classic architectural design, characterized by its natural stone façade, charming dormer windows, and a welcoming front porch that exudes warmth.As you approach the property, a picturesque driveway winds through lush gardens and old-growth trees, creating an immediate sense of seclusion and privacy. The exterior boasts a classic architectural design, characterized by its natural stone façade, charming dormer windows, and a welcoming front porch that exudes warmth.
    </span>
  </div>
  </div>

  <hr className="border-t border-gray-300 my-4" />

<div className="flex xl:flex-row flex-col gap-2  p-3 bg-[#0C8B3F] bg-opacity-10 rounded-lg h-full justify-between   ">
<div className="w-full h-full flex flex-col gap-2 font-medium text-sm leading-4 text-[#5A4278]">
Landlord Response
    <span classname=" text-base leading-5 font-medium text-[#312245]">
    Thank you for underlining this issueThank you for underlining this issueThank you for underlining this issueThank you for underlining this issueThank you for underlining this issueThank you for underlining this issueThank you for underlining this issueThank you for underlining this issueThank you for underlining this issueThank you for underlining this issueThank you for underlining this issueThank you for underlining this issueThank you for underlining this issue
      </span>
  </div>
  <div className="">
  <button
              type="submit"
              className="flex justify-center p-3 font-bold gap-[8px] text-[#0C8B3F] bg-[#0C8B3F] bg-opacity-10 md:w-[160px] w-full h-12 rounded-md text-xs  text-center  items-center  mb-2 "
            >
                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 16 16" fill="none">
  <path d="M6.66667 10.9385L4 8.27187L4.93333 7.33854L6.66667 9.07188L11.0667 4.67188L12 5.60521L6.66667 10.9385Z" fill="#0C8B3F"/>
</svg>
              Accept Request
            </button>
  </div>
  </div>


            <div className="w-full flex md:flex-row flex-col gap-2 h-full justify-end pt-4  ">
              <button
               onClick={() => {
                setServices("services");
                setRequest("");
              }}
              type="submit"
              className="flex justify-center p-3 font-bold gap-[8px] text-[#17062F] md:w-[100px] w-full h-full border border-[#17062F]   rounded-md text-sm  text-center  items-center  mb-2 "
            >
              close
            </button>
               
            </div>
          </div>
        </div>

      </div>
    </div>
  );
};

export default TenantRequest;
