import React from "react";
import Cancel from "../../assets/cancel.svg";

import TenantCard from "./TenantCard";
import AcceptedReq from "./AcceptedReq";

export const ProvidersModal = ({ showModal, setShowModal, handleButton, setHandleButton }) => {

  return (
    <>
      {showModal ? (
        <>
          <div className="justify-center items-center hide-scrollbar overflow-x-hidden overflow-y-auto fixed inset-0 z-50 outline-none focus:outline-none">
            <div className="relative lg:w-[1025px] md:[400px] h-auto my-6 mx-auto px-5">
              {/*content*/}
              <div className="border-0 rounded-lg shadow-lg relative flex flex-col bg-white outline-none focus:outline-none pb-5">
                {/*header*/}
                <div className="flex items-center justify-between p-5">
                  <h1
                    className={`md:text-2xl text-sm ${
                      handleButton === "Selected"
                        ? "text-[#CC3017]"
                        : "text-[#0C468B]"
                    }`}
                  >
                    {`Send Request to ${handleButton} Provider?`}
                  </h1>
                  <button
                    className="p-1 ml-auto bg-transparent border-0 text-black float-right text-3xl leading-none font-semibold outline-none focus:outline-none"
                    onClick={() => setShowModal(false)}
                  >
                    <img src={Cancel} alt="x" />
                  </button>
                </div>
                {/*body*/}
                <div className="px-3">
                  <div className="relative h-[533px] space-y-5 py-5 overflow-y-auto bg-[#E4DFEB] rounded-2xl">
                   
                    <div className=" flex flex-col w-full gap-y-2  lg:px-5 md:px-2 px-5 ">
                    <AcceptedReq  width={"w-[900px]"}/>
                    </div>
                    <div className="flex w-full  gap-x-3 lg:px-0  md:px-2 px-5 items-start justify-center">
                      <TenantCard width={"w-[900px]"} />
                      <input type="checkbox" />
                      </div>
                  
                    <div className="flex w-full gap-x-3 md:px-0 px-5 items-start justify-center">
                      <TenantCard width={"w-[900px]"} />
                      <input type="checkbox" />
                    </div>
                  </div>
                </div>
                <div className="h-auto md:p-5 p-3 flex md:flex-row flex-col lg:justify-end justify-between items-center gap-3">
                  <button
                    onClick={() => setShowModal(false)}
                    className="py-3 px-4 rounded-lg border lg:w-64 w-full border-[#312245]"
                  >
                    Cancel
                  </button>
               
                    <button className="p-3 px-4 rounded-lg border flex justify-center items-center lg:w-64 w-full border-[#0C468B]">
                      <p className="text-base text-[#0C468B] font-bold whitespace-nowrap">
                     Send to Selected Providers
                      </p>
                    </button>
                   
                </div>
              </div>
            </div>
          </div>
          <div className="opacity-60 fixed inset-0 z-40 bg-black"></div>
        </>
      ) : null}
      
    </>
  );
};
