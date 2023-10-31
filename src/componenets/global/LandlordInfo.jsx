import React from "react";
import tenant1 from "../../assets/tenant1.svg";


const LandlordInfo = ({

  width,
 
}) => {
 


  return (
    <div className={`${width} p-4 space-y-4   rounded-2xl bg-white`}>
      <div className="w-full p-4 rounded-lg bg-gray-100  flex  h-full flex-col   gap-4 ">
      <h1 className=" w-full md:whitespace-normal whitespace-nowrap  text-black font-semibold lg:text-2xl text-xl leading-9">
             LandLord Information
            </h1>
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
                <div className=" w-full  ">Reference Name </div>
                <div className="w-full   md:text-base text-sm leading-5 text-[#312245]">
                Mark John Smith
                </div>
              </div>
              <div className="w-full flex xl:flex-col flex-row gap-2 font-medium text-sm leading-4 text-[#5A4278] md:justify-start justify-between items-start ">
                <div className=" w-full  "> Dare Of Birth</div>
                <div className="w-full   md:text-base text-sm leading-5 text-[#312245]">
                -- / -- / ----
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

            <div className="flex md:flex-row flex-col gap-2 h-full justify-between   ">
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

export default LandlordInfo;
