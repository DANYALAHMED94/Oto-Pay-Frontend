import React from "react";


const TenantServiceRequest = ({ width,  request, setRequest, setServices}) => {
  return (
    <div className={`${width} p-4 space-y-4   rounded-2xl `}>
      <div className="w-full p-4 rounded-lg bg-white   flex  h-full flex-col   gap-6 ">
    
        <div className=" w-full md:h-[320px] h-full flex flex-col gap-4  ">
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
                <div className="w-full  md:text-base text-sm leading-5 text-[#312245]">
                Pending
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

            <div className="w-full flex md:flex-row flex-col gap-2 h-full justify-end   ">
              <button
                  onClick={() => {
                    setRequest("request");
                    setServices(""); }}
              type="submit"
              className="flex justify-center p-3 font-bold gap-[8px] text-[#17062F] md:w-[200px] w-full h-full border border-[#17062F]   rounded-md text-sm  text-center  items-center  mb-2 "
            >
              Open Request
            </button>
               
            </div>
          </div>
        </div>

      </div>

      
    </div>
  );
};

export default TenantServiceRequest;
