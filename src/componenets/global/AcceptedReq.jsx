import React, { useState } from "react";
import Business from "../../assets/Business Person.png";
import wrench from "../../assets/Wrench.png";
import { LandLordModal } from "./LandLordModal";

const AcceptedReq = ({request}) => {
  const [showModal, setShowModal] = useState(false);
  const [handleButton, setHandleButton] = useState("");
  return (
    <div
      className={` flex flex-wrap gap-4 w-full p-4 ${
        request === "Accepted" ? "" : "rounded-lg"
      }
        
    } bg-[#F6F6F6]`}
    >
      {request === "Accepted" ? (
        <div className="w-full flex gap-2 text-sm font-normal leading-4 text-[#5A4278]">
          Request{" "}
          <span className="text-sm font-bold leading-4 text-[#0C8B3F]">
            Accepted
          </span>
        </div>
      ) : null}
      <div className=" w-full flex xl:flex-row flex-col md:justify-between justify-center items-center bg-[#F6F6F6] gap-2 ">
        <div className="flex w-full md:flex-row flex-col gap-3 md:justify-between justify-center   ">
          <div className=" w-full flex md:justify-start justify-center gap-2  text-base font-normal leading-5 text-[#5A4278] whitespace-nowrap ">
            Type of Request
            <span className="text-[#312245] leading-5 font-bold text-base">
              Maintenance
            </span>
          </div>

          <div className=" w-full flex xl:justify-end md:justify-start justify-center gap-2  text-base font-normal leading-5 text-[#5A4278] whitespace-nowrap ">
            Urgency Level
            <span className="text-[#312245] leading-5 font-bold text-base">
              Medium
            </span>
          </div>
        </div>
        <div className="flex md:flex-row flex-col w-full   md:justify-between  items-between gap-2 ">
          <div className="flex w-full   xl:justify-end md:justify-start justify-center items-center gap-4 ">
            <div className="flex  text-[#312245] text-base  leading-5 font-medium ">
              23-Aug-2023
            </div>
            <div className="flex  text-[#5A4278] text-base  leading-5 font-normal ">
              05 : 26 : PM
            </div>
          </div>
          <div className="flex xl:w-36  w-full xl:justify-end justify-start ">
            <button className="flex md:w-36 w-full px-4 rounded-lg shadow-lg  shadow-[#0700118F]  h-11 text-center whitespace-nowrap justify-center items-center  font-bold text-base leading-5 text-white bg-[#17062F]">
              Open Request
            </button>
          </div>
        </div>
      </div>
      {request === "Accepted" ? (
        <div className="flex flex-col bg-[#F0EEF2] p-3 rounded-lg gap-2 ">
          <div className="text-sm font-medium leading-5 text-[#5A4278] ">
            Our Response
          </div>
          <div className="text-base font-medium leading-5 text-[#312245]">
            We are working on your request and will notify you shortly - or we
            have rejected your request because it is not in the agrement we
            signed.
          </div>
        </div>
      ) : null}

      {request === "Accepted" ? (
        <div className="flex md:flex-row flex-col xl:justify-end justify-between items-center gap-2 w-full">
          <button className="flex text-base font-bold leading-5text-center whitespace-nowrap text-[#2E0664] justify-center items-center gap-2 xl:w-[273px] w-full h-12 px-4 py-3 rounded-lg border border-[#2E0664]">
            <div className="w-7  h-7  flex justify-center items-center">
              <img
                alt="gallery"
                className="w-full object-cover  h-full rounded-lg object-center block"
                src={wrench}
              />
            </div>
            Send to Service Provider
          </button>
          <button 
              onClick={() => {
              
                setHandleButton("Landlord");
                setShowModal(true);
              }}
              className="flex  text-base font-bold leading-5text-center text-[#2E0664] justify-center items-center gap-2 xl:w-[273px] whitespace-nowrap w-full h-12 px-4 py-3 rounded-lg border border-[#2E0664]">
            <div className="w-7 h-7 flex justify-center items-center">
              <img
                alt="gallery"
                className="w-full object-cover  h-full rounded-lg object-center block"
                src={Business}
              />
            </div>
            Send to Landloard
          </button>
        </div>
      ) : null}

<LandLordModal
       showModal={showModal}
       setShowModal={setShowModal}
       handleButton={handleButton}  
     />
    </div>
  );
};

export default AcceptedReq;
