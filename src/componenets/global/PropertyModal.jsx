import React, { useState } from "react";
import Cancel from "../../assets/cancel.svg";
import Delete from "../../assets/trash-delete.svg";
import Unlist from "../../assets/unlist.svg";
import PropertyModalCard from "./PropertyModalCard";

export const PropertyModal = () => {
  const [showModal, setShowModal] = useState(false);
  const [handleButton, setHandleButton] = useState("Delete");
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
                      handleButton === "Delete"
                        ? "text-[#CC3017]"
                        : "text-[#0C468B]"
                    }`}
                  >
                    {`Are You Sure to ${handleButton} Selected Properties?`}
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
                    <div className="flex w-full gap-x-3 md:px-0 px-5 items-start justify-center">
                      <PropertyModalCard width={"[900px]"} />
                      <input type="checkbox" />
                    </div>
                    <div className="flex w-full gap-x-3 md:px-0 px-5 items-start justify-center">
                      <PropertyModalCard width={"[900px]"} />
                      <input type="checkbox" />
                    </div>
                  </div>
                </div>
                <div className="h-auto md:p-5 p-3 flex justify-end items-center space-x-3">
                  <button className="py-3 px-4 rounded-lg border w-40 border-[#312245]">
                    Cancel
                  </button>
                  {handleButton === "Delete" ? (
                    <button className="py-3 px-4 rounded-lg border flex justify-center items-center w-40 border-[#CD2424]">
                      <img src={Delete} alt="delete" />
                      <p className="text-base text-[#CD2424] font-bold">
                        Delete
                      </p>
                    </button>
                  ) : (
                    <button className="p-3 px-4 rounded-lg border flex justify-center items-center w-40 border-[#0C468B]">
                      <img src={Unlist} alt="delete" />
                      <p className="text-base text-[#0C468B] font-bold">
                        Unlist
                      </p>
                    </button>
                  )}
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
