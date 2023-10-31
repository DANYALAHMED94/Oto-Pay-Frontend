import React from "react";
import agreement from "../../assets/agreement.png"

const Agreement = ({

  width,

}) => {
 



  return (
    <div className={`${width} p-4 space-y-4   rounded-2xl bg-white`}>
      <div className="w-full  p-4 rounded-lg bg-gray-100  flex  h-full flex-col   gap-6 ">
      <h1 className=" w-full md:whitespace-normal whitespace-nowrap  text-black font-semibold lg:text-2xl text-xl leading-9">
      Agreement & Lease Details
            </h1>
          
        

        <div className=" w-full md:h-[280px] h-full flex flex-col gap-4  ">
     

          <div className=" w-full h-full text-black flex flex-col   ">
            {/* First Div */}
            <div className="flex md:flex-row flex-col gap-2 md:h-[59px]  h-full justify-between ">
              <div className="w-full flex md:flex-col flex-row gap-2 font-medium text-sm leading-4 text-[#5A4278] md:justify-start justify-between items-start ">
                <div className=" w-full  ">Property Name/Id </div>
                <div className="w-full   md:text-base text-sm leading-5 text-[#312245]">
                Mark John Smith
                </div>
              </div>
             
              <div className="w-full flex md:flex-col flex-row gap-2 font-medium text-sm leading-4 text-[#5A4278] md:justify-start justify-between items-start ">
                  <div className=" w-full  "> Lease Duration </div>
                  <div className="w-full  md:text-base text-sm leading-5 text-[#312245]">
                    5 Years
                  </div>
                </div>
            </div>

            <hr className="border-t border-gray-300 my-4" />

            
              <div className="flex md:flex-row flex-col gap-2 md:h-[59px]  h-full justify-between   ">
                <div className="w-full flex md:flex-col flex-row gap-2 font-medium text-sm leading-4 text-[#5A4278] md:justify-start justify-between items-start ">
                  <div className=" w-full  "> Lease Start Date </div>
                  <div className="w-full  md:text-base text-sm leading-5 text-[#0C8B3F]">
                    2-6-1992
                  </div>
                </div>
                <div className="w-full flex md:flex-col flex-row gap-2 font-medium text-sm leading-4 text-[#5A4278] md:justify-start justify-between items-start ">
                  <div className=" w-full  "> Lease End Date </div>
                  <div className="w-full   md:text-base text-sm leading-5 text-[#CD2424]">
                    2-6-1992
                  </div>
                </div>
              
              </div>

              <hr className="border-t border-gray-300 my-4" />

              <div className="flex md:flex-row flex-col gap-2 md:h-[59px]  h-full justify-between   ">
            <div className="w-full  h-full flex flex-col gap-2 font-medium text-sm leading-4 text-[#5A4278]">
               Addtional Information
                <span classname=" text-base leading-5 font-medium text-[#312245]">
                As you approach the property, a picturesque driveway winds through lush gardens and old-growth trees, creating an immediate sense of seclusion and privacy. The exterior boasts a classic architectural design, characterized by its natural stone façade, charming dormer windows, and a welcoming front porch that exudes warmth.
                </span>
              </div>
              </div>

         

          </div>
        </div>
        
        <div className="w-full h-full bg-white rounded-lg ">
        <img
                    alt="gallery"
                    className="w-full  h-full rounded-lg object-center block"
                    src={agreement}
                  />
        </div>
       
      </div>

 
 
    </div>
  );
};

export default Agreement;
