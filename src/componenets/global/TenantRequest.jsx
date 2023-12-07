import React from "react";

import Frame from "../../assets/frame2.png";
import Voice from "../../assets/voice.png";
const TenantRequest = ({ width, response, setServices, setRequest }) => {
  return (
    <div className={`${width} p-4 space-y-4   rounded-2xl bg-[#ECEBED] `}>
      <div className="w-full p-4 rounded-lg  flex  h-full flex-col   gap-6 ">
        <h1 className="text-base font-bold leading-5 text-[#18171B]">
          Attachment Added
        </h1>

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
                  As you approach the property, a picturesque driveway winds
                  through lush gardens and old-growth trees, creating an
                  immediate sense of seclusion and privacy. The exterior boasts
                  a classic architectural design, characterized by its natural
                  stone façade, charming dormer windows, and a welcoming front
                  porch that exudes warmth.As you approach the property, a
                  picturesque driveway winds through lush gardens and old-growth
                  trees, creating an immediate sense of seclusion and privacy.
                  The exterior boasts a classic architectural design,
                  characterized by its natural stone façade, charming dormer
                  windows, and a welcoming front porch that exudes warmth.
                </span>
              </div>
            </div>
{response==="response"?(
  <>
            <hr className="border-t border-gray-300 my-4" />

            <div className="w-full p-4 rounded-lg h-full flex flex-col border border-[#C5C2C9] bg-[#ECEBED] gap-2 font-medium text-sm leading-4 text-[#5A4278]">
              <label
                htmlFor="installment"
                className="text-sm font-medium leading-4 text-[#5A4278]"
              >
                Your Response
              </label>

              <input
                name="installment"
                className="rounded mt-1 pl-2 w-full h-10 outline-none  "
              />

              <div className="w-full flex md:flex-row flex-col justify-between items-center gap-3">
                <div className="w-full flex md:flex-row flex-col md:justify-start justify-center items-center gap-3">
                  <button
                    type="submit"
                    className="w-[200px] flex items-center justify-center gap-2 font-medium md:text-sm text-xs px-6 py-4  bg-[#CD2424] bg-opacity-10 mt-3 text-[#CD2424] rounded-lg"
                  >
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="16"
                      height="16"
                      viewBox="0 0 16 16"
                      fill="none"
                    >
                      <path
                        d="M12.6654 4.26812L11.7254 3.32812L7.9987 7.05479L4.27203 3.32812L3.33203 4.26812L7.0587 7.99479L3.33203 11.7215L4.27203 12.6615L7.9987 8.93479L11.7254 12.6615L12.6654 11.7215L8.9387 7.99479L12.6654 4.26812Z"
                        fill="#CD2424"
                      />
                    </svg>
                    Reject Request
                  </button>

                  <button
                    type="submit"
                    className="w-[200px] flex items-center justify-center gap-2 font-medium md:text-sm text-xs px-6 py-4  bg-[#434146] bg-opacity-10 mt-3 text-[#434146] rounded-lg"
                  >
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="16"
                      height="16"
                      viewBox="0 0 16 16"
                      fill="none"
                    >
                      <path
                        d="M6.66667 10.9385L4 8.27187L4.93333 7.33854L6.66667 9.07188L11.0667 4.67188L12 5.60521L6.66667 10.9385Z"
                        fill="#434146"
                      />
                    </svg>
                    Accept Request
                  </button>
                </div>
                <div className="w-full flex  md:justify-end justify-center items-center ">
                  <button
                    onClick={() => {
                      setRequest("landlordrequest");
                    }}
                    type="submit"
                    className="w-[160px] flex items-center justify-center gap-2 font-medium md:text-sm text-xs px-6 py-4  bg-[#17062F] mt-3 text-white rounded-lg"
                  >
                    Submit
                  </button>
                </div>
              </div>
            </div>
            </>):
            <>
            <hr className="border-t border-gray-300 my-4" />

            <div className="flex xl:flex-row flex-col gap-2  p-3 bg-[#0C8B3F] bg-opacity-10 rounded-lg h-full justify-between   ">
              <div className="w-full h-full flex flex-col gap-2 font-medium text-sm leading-4 text-[#5A4278]">
                Landlord Response
                <span classname=" text-base leading-5 font-medium text-[#312245]">
                  Thank you for underlining this issueThank you for underlining
                  this issueThank you for underlining this issueThank you for
                  underlining this issueThank you for underlining this
                  issueThank you for underlining this issueThank you for
                  underlining this issueThank you for underlining this
                  issueThank you for underlining this issueThank you for
                  underlining this issueThank you for underlining this
                  issueThank you for underlining this issueThank you for
                  underlining this issue
                </span>
              </div>
              <div className="">
                <div
                  type="submit"
                  className="flex justify-center p-3 font-bold gap-[8px] text-[#0C8B3F] bg-[#0C8B3F] bg-opacity-10 md:w-[160px] w-full h-12 rounded-md text-xs  text-center  items-center  mb-2 "
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="16"
                    height="16"
                    viewBox="0 0 16 16"
                    fill="none"
                  >
                    <path
                      d="M6.66667 10.9385L4 8.27187L4.93333 7.33854L6.66667 9.07188L11.0667 4.67188L12 5.60521L6.66667 10.9385Z"
                      fill="#0C8B3F"
                    />
                  </svg>
                  Accept Request
                </div>
              </div>
            </div>
            </>
}
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
