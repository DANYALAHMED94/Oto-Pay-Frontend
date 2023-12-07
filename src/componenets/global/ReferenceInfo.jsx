import React from "react";
import tenant1 from "../../assets/tenant1.svg";


const ReferenceInfo = ({
  landlordTenants,
  width,
  tenantInfo
}) => {
 


  return (
    <div className={`${width} p-4 space-y-4   rounded-2xl bg-white`}>
      <div className="w-full  p-4 rounded-lg bg-gray-100  flex  h-full flex-col   gap-4 ">
      {landlordTenants === "PropertyDetails" || tenantInfo === "PropertyDetails" ?(
             <div className="w-full flex justify-between">
      <h1 className=" w-full md:whitespace-normal whitespace-nowrap  text-black font-semibold lg:text-2xl text-xl leading-9">
             Tenant Reference Information
            </h1>
                      {tenantInfo === "PropertyDetails" ? (
                        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none">
              <path d="M5 3C3.89 3 3 3.89 3 5V19C3 19.5304 3.21071 20.0391 3.58579 20.4142C3.96086 20.7893 4.46957 21 5 21H19C19.5304 21 20.0391 20.7893 20.4142 20.4142C20.7893 20.0391 21 19.5304 21 19V12H19V19H5V5H12V3H5ZM17.78 4C17.6 4.00152 17.4278 4.07329 17.3 4.2L16.08 5.41L18.58 7.91L19.8 6.7C20.06 6.44 20.06 6 19.8 5.75L18.25 4.2C18.12 4.07 17.95 4 17.78 4ZM15.37 6.12L8 13.5V16H10.5L17.87 8.62L15.37 6.12Z" fill="#434146"/>
            </svg>):null} </div> ): <h1 className=" w-full md:whitespace-normal whitespace-nowrap  text-black font-semibold lg:text-2xl text-xl leading-9">
             My Reference Information
            </h1>}
            <div className="w-full flex md:flex-row flex-col xl:gap-[32px] sxl:gap-[32px] gap-4">
        <div className="xl:w-[239px]  sxl:w-[239px] lg:w-[200px]  flex flex-col gap-4 justify-between items-center ">
       
          <div className="w-full  flex flex-col gap-2 justify-center items-center">
            <div
              className="xl:w-[239px]  sxl:w-[239px] lg:w-[200px]  w-full h-full "
            >
              <img
                alt="gallery"
                className="w-full object-cover  h-full rounded-lg object-center block"
                src={tenant1}
              />
            </div>
          </div>
   
        </div>

        <div className="xl:w-[740px]  sxl:w-full lg:w-[410px] w-full h-full flex flex-col gap-4  ">
     

          <div className=" w-full md:h-[350px] h-full text-black flex flex-col   ">
            {/* First Div */}
            <div className="flex xl:flex-row flex-col gap-2 h-full justify-between ">
              <div className="w-full flex xl:flex-col flex-row gap-2 font-medium text-sm leading-4 text-[#5A4278] md:justify-start justify-between items-start ">
                <div className=" w-full  ">Landlord Name </div>
                <div className="w-full   md:text-base text-sm leading-5 text-[#312245]">
                Mark John Smith
                </div>
              </div>
              <div className="w-full flex xl:flex-col flex-row gap-2 font-medium text-sm leading-4 text-[#5A4278] md:justify-start justify-between items-start ">
                <div className=" w-full  "> Landlord Bank Account Number </div>
                <div className="w-full   md:text-base text-sm leading-5 text-[#312245]">
                28291028229020LANDLORd
                </div>
              </div>
              <div className="w-full flex xl:flex-col flex-row gap-2 font-medium text-sm leading-4 text-[#5A4278] md:justify-start justify-between items-start ">
                <div className=" w-full  "> Gender </div>
                <div className="w-full   md:text-base text-sm leading-5 text-[#312245]">
                 Male
                </div>
              </div>
            </div>

            <hr className="border-t border-gray-300 my-4" />
            {/* Second Div */}

            <div className="flex xl:flex-row flex-col gap-2  h-full justify-between  ">
              <div className="w-full flex xl:flex-col flex-row gap-2 font-medium text-sm leading-4 text-[#5A4278] md:justify-start justify-between items-start ">
                <div className=" w-full  "> Email </div>
                <div className="w-full  md:text-base text-sm leading-5 text-[#312245]">
                  Parker@gmail.com
                </div>
              </div>
              <div className="w-full flex xl:flex-col flex-row gap-2 font-medium text-sm leading-4 text-[#5A4278] md:justify-start justify-between items-start ">
                <div className=" w-full  "> Phone Number </div>
                <div className="w-full   md:text-base text-sm leading-5 text-[#312245]">
                  +9272828272772
                </div>
              </div>
              <div className="w-full flex xl:flex-col flex-row gap-2 font-medium text-sm leading-4 text-[#5A4278] md:justify-start justify-between items-start ">
                <div className=" w-full  "> Emergency Contact  </div>
                <div className="w-full   md:text-base text-sm leading-5 text-[#312245]">
                +92728282727898
                </div>
              </div>
            </div>

            <hr className="border-t border-gray-300 my-4" />

            <div className="flex xl:flex-row flex-col gap-2 md:h-[59px]  h-full justify-between   ">
            <div className="w-full  h-full flex flex-col gap-2 font-medium text-sm leading-4 text-[#5A4278]">
                Current Address
                <span classname=" text-base leading-5 font-medium text-[#312245]">
                  Washington ,street xyzWashington ,street xyzWashington ,street
                  xyzWashington ,street xyzWashington ,street xyzWashington
                  ,street xyzWashington ,street xyzWashington ,street xyz
                </span>
              </div>
              </div>
        
          </div>
        </div>
        </div>
      </div>

 
 
    </div>
  );
};

export default ReferenceInfo;
