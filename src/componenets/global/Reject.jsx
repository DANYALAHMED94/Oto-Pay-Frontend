import React from "react";
import reject from "../../assets/reject.png";

const Reject = ({ width , }) => {
  return (
    <div className="px-3">
      <div
        className={`${width} p-4 space-y-4  mt-10 rounded-2xl bg-transparent`}
      >
        <div className="w-full flex flex-col justify-center items-center gap-6">
          <div className="w-full">
            <img
              alt="gallery"
              className="w-full  h-full rounded-lg object-center block"
              src={reject}
            />
          </div>
          <div>
            <h1 className="text-[#CD2424] text-3xl font-semibold leading-10 text-center">
            Please check your internet connection
            </h1>
            <p className="text-[#434146] text-base font-medium leading-5 text-center">
            you can check your application status in service request page
            </p>
          </div>
          <div className="w-full flex md:flex-row flex-col justify-center gap-4">
          <button
            type="submit"
            className="flex justify-center p-4 font-bold gap-[8px] text-[#17062F] md:w-[160px] w-full h-full border border-[#17062F]   rounded-md text-sm  text-center  items-center  mb-2 "
          >
            close
          </button>

          <button
            type="submit"
            className="flex justify-center p-4 font-bold gap-[8px] text-[#17062F] md:w-[160px] w-full h-full border border-[#17062F]   rounded-md text-sm  text-center  items-center  mb-2 "
          >
            Try Agian
          </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Reject;
