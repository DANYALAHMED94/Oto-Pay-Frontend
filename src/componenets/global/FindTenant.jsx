import React from "react";
import bed from "../../assets/bed.svg";
import bath from "../../assets/bath.svg";
import area from "../../assets/area.svg";
import car from "../../assets/car.svg";

import img from "../../assets/Frame 267.png";


function FindTenant({
 setLandlordTenants,
 setFilterClicked,
 filterClicked
}) {



 
  
  // const [handleButton, setHandleButton] = useState("");
 
  // const [button, setButton] = useState("");
  // const [details, setDetails] = useState("");


  // Determine which buttons to render based on the location.pathname


  return (
    <>
      <div className="w-full h-full xl:p-[24px] lg:p-4  p-6 rounded-lg     shadow-lg     bg-[#FFFFFF] flex   flex-col xl:gap-[32px] lg:gap-0  gap-4">
      

    

        <div className=" flex  xl:gap-[32px] lg:gap-4  gap-4">
        

         
            <div className="w-full h-full space-y-[11px]">
              <div className="flex w-[340px] bg-[#F2F2F2] rounded-md md:flex-row flex-col p-2 justify-between items-center">
                <h2
                  className="flex w-full  xl:text-3xl text-2xl  font-semibold  leading-[28px] text-[#5A4278] justify-between items-center rounded-lg gap-2 title-font mb-2
        "
                >
                      $4,8967
                       <span className="text-[12px] leading-[15.6px]  font-normal">
                 To
                  </span>
                  $8,8278
                  <span className="text-[12px] leading-[15.6px]  font-normal">
                    per month
                  </span>
                </h2>
               

              </div>

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
                    4 
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
                    2 
                  </p>
                </div>

                <div className=" flex  items-center lg:gap-2 md:gap-2 gap-1">
                  <div className=" w-4 h-4     ">
                    <img
                      alt="gallery"
                      className="w-full object-cover h-full object-center block"
                      src={car}
                    />
                  </div>
                  <p className="text-[#866FA3] text-sm whitespace-nowrap">
                    5
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

              <p className="text-[#5A4278] md:text-base text-sm leading-[18.2px] font-medium">
              As you approach the property, a picturesque driveway winds through lush gardens and old-growth trees, creating an immediate sense of seclusion and privacy. The exterior boasts a classic architectural design, characterized by its natural stone façade, charming dormer windows, and a welcoming front porch that exudes warmth.As you approach the property, a picturesque driveway winds through lush gardens and old-growth trees, creating an immediate sense of seclusion and privacy. The exterior boasts a classic architectural design, characterized by its natural stone façade, charming dormer windows, and a welcoming front porch that exudes warmth.
              </p>

              <div className="space-y-[4px]">
                <h2 className="  text-[#434146] text-[20px] font-normal leading-[26px] ">
                <span className="  text-[#434146] text-[20px] font-semibold leading-[26px] ">Location</span>  Park View City, Washington
                </h2>
      
              </div>
              <div className="flex md:flex-row flex-col w-full gap-4">
 <div className=" flex p-3 md:w-24 w-full justify-center items-center rounded-lg bg-[#2E0664] bg-opacity-10">
    <p className="  text-[#2E0664] text-[16px] font-bold leading-5"> Urgent</p>
 </div>

 <div className=" flex p-3 md:w-52 w-full justify-center items-center rounded-lg bg-[#2E0664] bg-opacity-10">
    <p className="  text-[#2E0664] text-[16px] font-bold leading-5"> Move-In 03-12-2023</p>
 </div>

 <div className=" flex p-3 md:w-40 w-full justify-center items-center rounded-lg bg-[#2E0664] bg-opacity-10">
    <p className="  text-[#2E0664] text-[16px] font-bold leading-5"> For 08 People</p>
 </div>
 </div>

 <hr className="border-t border-gray-300 " />
 <div className=" flex md:flex-row flex-col justify-between  gap-2 rounded-lg p-3 ">
             <div className="flex md:flex-row flex-col w-full  justify-start items-center gap-3 ">
    
               <div className="w-full flex md:flex-row flex-col md:justify-start justify-center   gap-2 items-center ">
                
                <div className="md:w-16 w-16 h-16 md:h-16 ">
                 <img
                   alt="gallery"
                   className="w-full  h-full rounded-full object-center block "
                   src={img}
                 />
               </div>
               <div className=" flex flex-col gap-1 md:justify-start justify-center md:items-start items-center">
                 <h1 className="text-[#18171B] leading-4 font-normal text-base">
                 Afazal Mobbin
                 </h1>

                 <h2 className="bg-[#F6F6F6] flex  gap-2 p-3 font-normal text-xs leading-4 text-[#434146] ">
                 Request Tracking Id
                  <span className="text-xs font-medium leading-4 text-[#18171B]">
                  118282MAHHW
                  </span>
                </h2>
<div className="flex gap-3 ">
                <h2 className=" flex  gap-2 p-1 font-normal text-xs leading-4 text-[#434146] ">
                Added:
                  <span className="text-xs font-medium leading-4 text-[#18171B]">
                  5 hours ago
                  </span>
                </h2>
                <h2 className=" flex  gap-2 p-1 font-normal text-xs leading-4 text-[#434146] ">
                Proposals 
                  <span className="text-xs font-medium leading-4 text-[#18171B]">
                  324
                  </span>
                </h2>
                </div>
                </div>
               </div>
               <div className="flex w-full justify-end items-center">
               <button 
                onClick={() => {setLandlordTenants("sendProposal");
          
                setFilterClicked(!filterClicked);
           
            }}
            className="flex justify-center items-center rounded-lg p-3 md:w-[160px] w-full  border border-[#17062F]  font-bold text-base leading-5 text-[#17062F]">
                Send Proposal
              </button>
              </div>
             </div>
               
              </div>     
            </div>



           

   
        </div>
      </div>
   
  
    </>
  );
}

export default FindTenant;
