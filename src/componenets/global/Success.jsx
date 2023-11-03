import React from "react";
import done from "../../assets/Done.png";

const Success = ({ width , property}) => {
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
              src={done}
            />
          </div>
          {property === "success"? (
          <div>
            
            <h1 className="text-[#0C8B3F] text-3xl font-semibold leading-10 text-center">
              You've successfully occupied the property{" "}
            </h1>
            <p className="text-[#434146] text-base font-medium leading-5 text-center">
              you can check your occupied property details in property page
            </p>
           
          </div>
           ):     <div>
            
           <h1 className="text-[#0C8B3F] text-3xl font-semibold leading-10 text-center">
           Request has been successfully submitted.
           </h1>
           <p className="text-[#434146] text-base font-medium leading-5 text-center">
           you can check your application status in service request page
           </p>
          
         </div>}

         {property === "success"? (
          <button
            type="submit"
            className="flex justify-center p-4 font-bold gap-[8px] text-[#17062F] md:w-[200px] w-full h-full border border-[#17062F]   rounded-md text-sm  text-center  items-center  mb-2 "
          >
            Go To Home
          </button> ):    <button
            type="submit"
            className="flex justify-center p-3 font-bold gap-[8px] text-[#17062F] md:w-[100px] w-full h-full border border-[#17062F]   rounded-md text-sm  text-center  items-center  mb-2 "
          >
          close
          </button> }
        </div>
      </div>
    </div>
  );
};

export default Success;
