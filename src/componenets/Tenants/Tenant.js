import React from 'react'
import tenant1 from "../../assets/tenant1.svg"
import House1 from "../../assets/House1.svg";
import bed from "../../assets/bed.svg";
import bath from "../../assets/bath.svg";
import area from "../../assets/area.svg";
import rating from "../../assets/rating.svg";
const Tenant = () => {
  return (

    <div className="  w-full   h-full p-4 space-y-4   rounded-2xl bg-white ">
    <div className="w-full p-4 rounded-lg bg-gray-100 shadow-lg  md:h-[331px]  h-full  flex  md:flex-row flex-col  xl:gap-[32px] sxl:gap-[32px] gap-4 ">
    <div className="xl:w-[239px]  sxl:w-[239px] lg:w-[200px] w-full md:h-[299px] h-full flex flex-col gap-2 justify-center items-center   ">
    <img
          alt="gallery"
          className="w-full object-cover  h-full rounded-lg object-center block"
          src={tenant1}
        />

        <button className= " w-full h-[45px] rounded-lg p-3 text-white bg-black">View All dettails</button>
    
    
    </div>

    <div className="xl:w-[740px]  sxl:w-full lg:w-[410px] w-full h-full flex flex-col gap-4  ">
        <div className=" flex justify-between">
            <h1 className=" w-[300px]  text-black font-semibold text-2xl leading-9"> Mark John Smith</h1>
            
            <button className="w-[100px] relative font-bold text-base leading-5 flex justify-center items-center gap-2 text-[#CD2424]">
            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M16 21V19C16 17.9391 15.5786 16.9217 14.8284 16.1716C14.0783 15.4214 13.0609 15 12 15H6C4.93913 15 3.92172 15.4214 3.17157 16.1716C2.42143 16.9217 2 17.9391 2 19V21" stroke="#CD2424" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
<path d="M9 11C11.2091 11 13 9.20914 13 7C13 4.79086 11.2091 3 9 3C6.79086 3 5 4.79086 5 7C5 9.20914 6.79086 11 9 11Z" stroke="#CD2424" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
<path d="M17 8L22 13" stroke="#CD2424" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
<path d="M22 8L17 13" stroke="#CD2424" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
</svg>

<div className="absolute inset-0 bg-[#CD2424] opacity-10 pointer-events-none rounded-md"></div>

                Block</button>

                <button className=" hidden w-[100px] bg-[#2E0664] relative rounded-lg font-bold text-base leading-5 justify-center items-center gap-2 text-white">
  
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M16 21V19C16 17.9391 15.5786 16.9217 14.8284 16.1716C14.0783 15.4214 13.0609 15 12 15H6C4.93913 15 3.92172 15.4214 3.17157 16.1716C2.42143 16.9217 2 17.9391 2 19V21" stroke="white" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
<path d="M9 11C11.2091 11 13 9.20914 13 7C13 4.79086 11.2091 3 9 3C6.79086 3 5 4.79086 5 7C5 9.20914 6.79086 11 9 11Z" stroke="white" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
<path d="M17 8L22 13" stroke="white" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
<path d="M22 8L17 13" stroke="white" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
</svg>

<div className="absolute inset-0 bg-[#CD2424] opacity-10 pointer-events-none rounded-md"></div>

                UnBlock</button>
        
        </div>

    
        <div className=" w-full h-full text-black flex flex-col   ">

{/* First Div */}
<div className="flex h-[59px]   justify-between ">
 
  <div className="w-full flex flex-col gap-2 font-medium text-sm leading-4 text-[#5A4278] "> Date of Birth <span classname=" text-base leading-5 text-[#312245]"> 02-06-1992 </span></div>
  <div className="w-full flex flex-col gap-2 font-medium text-sm leading-4 text-[#5A4278] " > Gender <span classname=" text-base leading-5 text-[#312245]">Male</span></div>
</div>

<hr className="border-t border-gray-300 my-4" />
{/* Second Div */}

<div className="flex justify-between h-[59px]  ">
 
 <div className="w-full  flex flex-col gap-2 font-medium text-sm leading-4 text-[#5A4278]">Email <span classname=" text-base leading-5 text-[#312245]">Parker@gmail.com</span></div>
 <div className="w-full  flex flex-col gap-2 font-medium text-sm leading-4 text-[#5A4278]" >Phone Number <span classname=" text-base leading-5 text-[#312245]">Parker@gmail.com</span></div>
</div>

<hr className="border-t border-gray-300 my-4" />
{/* Third Div */}


<div className="flex justify-between h-[59px]   ">
 
 <div className="w-full  flex flex-col gap-2 font-medium text-sm leading-4 text-[#5A4278] "> Lease Start Date <span classname=" text-base leading-5 text-[#0C8B3F]"> 02-06-1992 </span></div>
 <div className="w-full  flex flex-col gap-2 font-medium text-sm leading-4 text-[#5A4278]"> Lease End Date <span classname=" text-base leading-5 text-[#CD2424]"> 02-06-1992 </span></div>
 <div className="w-full  flex flex-col gap-2 font-medium text-sm leading-4 text-[#5A4278]" > Lease Duration <span classname=" text-base leading-5 text-[#312245]"> 5 years </span></div>
</div>
</div>
    </div>
  </div>
     
     
      <div className="w-full h-auto   ">
        <div className=" relative w-full  space-y-4   ">
          <input
            type="checkbox"
            className="peer absolute top-0 inset-x-0 w-full h-12 opacity-0 z-10 cursor-pointer  "
          />
          <div className="    w-full  flex items-center     ">
            <h1 className=" xl:text-[24px] lg:text-2xl md:text-2xl text-md leading-[32px] font-semibold text-black dark:text-white ">
            Properties Occupied (12)
            </h1>
          </div>
          <div className=" absolute -top-3   right-3 text-white  transition-tranform duration-500 rotate-0 peer-checked:rotate-180   ">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth="1.5"
              className="w-6 h-6 stroke-black dark:stroke-white"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M19.5 8.25l-7.5 7.5-7.5-7.5"
              />
            </svg>
          </div>
          <div className=" shadow-lg overflow-hidden transition-all duration-500 max-h-0 peer-checked:max-h-full bg-[#F9F9F9] dark:bg-[#042A2F] rounded-lg ">
            <div className="w-full h-auto rounded-lg  ">
              <div className="  overflow-hidden transition-all duration-500 max-h-auto peer-checked:h-auto  w-full  h-auto  space-y-12 rounded-2xl   ">                 
       
                <div className="w-full h-full xl:p-[24px] lg:p-4  p-6 rounded-lg  bg-white-900 text-white  shadow-lg     bg-[#FFFFFF] flex  lg:flex-row flex-col xl:gap-[32px] lg:gap-4  gap-4">
    <div className="  xl:w-[534px] lg:w-[300px] w-full xl:h-[486px]  flex justify-center items-center   ">
     
        <img
          alt="gallery"
          className="w-full object-cover  h-full rounded-lg object-center block"
          src={House1}
        />
   
    </div>
   

    <div className="xl:w-[450px] md:w-[370px] w-full   h-full  space-y-[20px] ">
      <div className="lg:w-full md:w-[586px] w-full h-full space-y-[11px]">
        <h2
          className=" 3xl:text-[18px] text-[28px]  font-semibold leading-[28px] text-[#5A4278]  rounded-lg  title-font mb-2
        "
        >
          $8,827648
        </h2>
        <div className="space-y-[4px]">
          <h2 className="  text-[#312245] text-[16px] font-bold leading-[20px] ">
            Park View City, Washington
          </h2>
          <h2 className="bg-[#F6F6F6] flex  gap-2 p-3 font-medium text-xs leading-3 text-[#866FA3] "> Property Number <span className="text-xs font-normal leading-3 text-[#312245]"> 1215262232NY </span></h2>

          <h2 className=" 3xl:text-[20px] text-[14px]  font-medium leading-[18px] text-[#5A4278]  rounded-lg  title-font mb-2 ">
            Washington ,street xyz
          </h2>
        </div>

        <div className="rounded-lg   ">
          <img
            alt="gallery"
            className="w-28 object-cover h-full object-center block"
            src={rating}
          />
        </div>
        <p className="text-[#5A4278] md:text-base text-sm leading-[18.2px] font-medium">
          As you approach the property, a picturesque driveway winds
          through lush gardens and old-growth trees, creating an
          immediate sense of seclusion and privacy. The exterior boasts
          a classic architectural design, characterized by its natural
          stone façade, charming dormer windows, and a welcoming front
          porch that exudes warmth.
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
            <p className="text-[#866FA3] xxsm:text-xs text-sm whitespace-nowrap">4 beds</p>
          </div>

          <div className=" flex  items-center lg:gap-2 md:gap-2 gap-1">
            <div className=" w-4 h-4     ">
              <img
                alt="gallery"
                className="w-full object-cover h-full object-center block"
                src={bath}
              />
            </div>
            <p className="text-[#866FA3] text-sm whitespace-nowrap">2 ba</p>
          </div>

          <div className=" flex  items-center lg:gap-2 md:gap-2 gap-1 ">
            <div className=" w-4 h-4     ">
              <img
                alt="gallery"
                className="w-full object-cover h-full object-center block"
                src={area}
              />
            </div>
            <p className="text-[#866FA3] text-sm whitespace-nowrap">1155 sqft to 2684 sqft</p>
          </div>
        </div>
        <div className="text-[#866FA3] text-[12px] leading-[15.6px] font-normal tracking-wider">
          Added: 5 hours ago (Updated: 2 hours ago)
        </div>

        <div className="w-[278px] h-[39px]  rounded-md p-[8px] flex gap-[4px] bg-[#F6F6F6] items-center tracking-wider text-[#5A4278]">
          <h1 className=" text-[14px] leading-[18.2px] font-medium ">
            INSTALMENT
            <span className="text-[12px] font-normal leading-[15.6px]">
              {" "}
              USD{" "}
            </span>{" "}
            <span className="text-[18px] leading-[23.4px] font-bold">
              {" "}
              $4,820{" "}
            </span>{" "}
            <span className="text-[12px] leading-[15.6px] font-normal">
              {" "}
              per month{" "}
            </span>{" "}
          </h1>
        </div>
      </div>

      <div className=" w-full  md:h-[48px] h-auto flex md:flex-row flex-col lg:justify-start md:justify-start justify-center gap-[16px] ">
        <button
          type="submit"
          className="flex justify-center items-center gap-[4px] text-[#2E0664] bg-[#F6EFFF]  md:w-[184px] w-full h-full border  rounded-md text-base  leading-4 py-2.5 text-center  font-bold  mb-2 "
        >
          <svg width="25" height="24" viewBox="0 0 25 24" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M20.75 6L9.75 17L4.75 12" stroke="#2E0664" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
</svg>

        Added Property
        </button>

        <button
          type="submit"
          className="flex justify-center items-center gap-[8px] text-white bg-[#CD2424] md:w-[184px] w-full h-full   rounded-md text-base leading-4  py-2.5 text-center font-bold  mb-2 "
        >
          <svg width="25" height="24" viewBox="0 0 25 24" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M3.25 6H21.25" stroke="white" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
<path d="M19.25 6V20C19.25 21 18.25 22 17.25 22H7.25C6.25 22 5.25 21 5.25 20V6" stroke="white" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
<path d="M8.25 6V4C8.25 3 9.25 2 10.25 2H14.25C15.25 2 16.25 3 16.25 4V6" stroke="white" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
<path d="M10.25 11V17" stroke="white" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
<path d="M14.25 11V17" stroke="white" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
</svg>

          Delete
        </button>

       
      </div>
    </div>
  </div>
  
         


               
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Tenant