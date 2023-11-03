import React from "react";
import image from "../../assets/receipt.png"
const CardData =[
{

}
];

const TenantPaymentCard = ({ width }) => {
  return (
    <div className={`${width} p-4 space-y-4   rounded-2xl bg-white`}>
      <div className="w-full  p-4 rounded-lg bg-gray-100  flex  h-full flex-col   gap-6 ">
        <div className="w-full flex md:flex-row flex-col justify-between">
        <h1 className=" w-full md:whitespace-normal whitespace-nowrap  text-black font-semibold lg:text-2xl text-xl leading-9">
          LandLoard Name
        </h1>
        <div className="w-full flex md:flex-row flex-col gap-3 justify-end">
        <div
           
              type="submit"
              className="flex justify-center items-center gap-[4px] text-black border border-black lg:w-[250px] md:w-48 w-full lg:h-14 h-12  px-[16px]    rounded-md xl:text-base text-sm  leading-4 text-center  font-bold whitespace-nowrap   "
            >
              <svg
                className="w-[20px] h-[20px]"
                viewBox="0 0 14 15"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M1 7.5H13M7 13.5V1.5"
                  stroke="white"
                  strokeWidth="1.5"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
              <h1>Approved </h1>
            </div>

             <button
             
              type="submit"
              className="flex justify-center items-center gap-[4px] text-white bg-[#17062F]  lg:w-[250px] md:w-48 w-full lg:h-14 h-12  px-[16px]    rounded-md xl:text-base text-sm  leading-4 text-center  font-bold whitespace-nowrap   "
            >
              <svg
                className="w-[20px] h-[20px]"
                viewBox="0 0 14 15"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M1 7.5H13M7 13.5V1.5"
                  stroke="white"
                  strokeWidth="1.5"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
              downdload Receipt
            </button>
            </div>
        </div>
        <div className=" w-full h-full flex flex-col gap-4  ">
          <div className=" w-full h-full text-black flex flex-col   ">
            {/* First Div */}
            <div className="flex md:flex-row flex-col gap-2 md:h-[59px]  h-full justify-between ">
              <div className="w-full flex md:flex-col flex-row gap-2 font-medium text-sm leading-4 text-[#5A4278] md:justify-start justify-between items-start ">
                <div className=" w-full  "> Date of request send </div>
                <div className="w-full   md:text-base text-sm leading-5 text-[#312245]">
                01-04-2023
                </div>
              </div>

              <div className="w-full flex md:flex-col flex-row gap-2 font-medium text-sm leading-4 text-[#5A4278] md:justify-start justify-between items-start ">
                <div className=" w-full  "> Request Amount </div>
                <div className="w-full  md:text-base text-sm leading-5 text-[#312245]">
                $762,2772
                </div>
              </div>
            </div>

            <hr className="border-t border-gray-300 my-4" />

            <div className="flex md:flex-row flex-col gap-2 md:h-[59px]  h-full justify-between ">
              <div className="w-full flex md:flex-col flex-row gap-2 font-medium text-sm leading-4 text-[#5A4278] md:justify-start justify-between items-start ">
                <div className=" w-full  "> Your Email</div>
                <div className="w-full   md:text-base text-sm leading-5 text-[#312245]">
                miller@gmail.com
                </div>
              </div>

              <div className="w-full flex md:flex-col flex-row gap-2 font-medium text-sm leading-4 text-[#5A4278] md:justify-start justify-between items-start ">
                <div className=" w-full  "> Your Phone Number </div>
                <div className="w-full  md:text-base text-sm leading-5 text-[#312245]">
                +928228288282863
                </div>
              </div>
            </div>

            <hr className="border-t border-gray-300 my-4" />

            <div className="flex md:flex-row flex-col gap-2 md:h-[59px]  h-full justify-between ">
              <div className="w-full flex md:flex-col flex-row gap-2 font-medium text-sm leading-4 text-[#5A4278] md:justify-start justify-between items-start ">
                <div className=" w-full  ">Occupied Property Name </div>
                <div className="w-full   md:text-base text-sm leading-5 text-[#312245]">
                Marla Hills House #26
                </div>
              </div>

              <div className="w-full flex md:flex-col flex-row gap-2 font-medium text-sm leading-4 text-[#5A4278] md:justify-start justify-between items-start ">
                <div className=" w-full  "> Property Number </div>
                <div className="w-full  md:text-base text-sm leading-5 text-[#312245]">
                1215262232NY
                </div>
              </div>
            </div>

            <hr className="border-t border-gray-300 my-4" />

            <div className="flex md:flex-row flex-col gap-2 md:h-[59px]  h-full justify-between ">
              <div className="w-full flex md:flex-col flex-row gap-2 font-medium text-sm leading-4 text-[#5A4278] md:justify-start justify-between items-start ">
                <div className=" w-full  ">Tenant Account Number</div>
                <div className="w-full   md:text-base text-sm leading-5 text-[#312245]">
                28291028229020TenAnt
                </div>
              </div>

              <div className="w-full flex md:flex-col flex-row gap-2 font-medium text-sm leading-4 text-[#5A4278] md:justify-start justify-between items-start ">
                <div className=" w-full  "> Received amount from </div>
                <div className="w-full  md:text-base text-sm leading-5 text-[#312245]">
                28291028229020LANDLORd
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

              <div className="w-full flex md:flex-col flex-row gap-2 font-medium text-sm leading-4 text-[#5A4278] md:justify-start justify-between items-start ">
                <div className=" w-full  "> Lease Duration </div>
                <div className="w-full  md:text-base text-sm leading-5 text-[#312245]">
                5 Years
                </div>
              </div>
            </div>

            <hr className="border-t border-gray-300 my-4" />

            <div className="flex md:flex-row flex-col gap-2 md:h-[59px]  h-full justify-between   ">
              <div className="w-full  h-full flex flex-col gap-2 font-medium text-sm leading-4 text-[#5A4278]">
              Description (Reason for Refund Request)
                <span classname=" text-base leading-5 font-medium text-[#312245]">
                Hi Landlord please refunded my security amount.
                </span>
              </div>
            </div>

                       <hr className="border-t border-gray-300 my-4" />

<div className="flex md:flex-row flex-col gap-2 md:h-[59px]  h-full justify-between   ">
  <div className="w-full  h-full flex flex-col gap-2 font-medium text-sm leading-4 text-[#5A4278]">
  <div>
                      <img
                        alt="gallery"
                        className="w-full  h-full rounded-lg object-center block"
                        src={image}
                      />
                    </div>
  </div>
</div>

            <hr className="border-t border-gray-300 my-4" />

<div className="flex md:flex-row flex-col gap-2 md:h-[59px]  h-full justify-between   ">
  <div className="w-full  h-full flex flex-col gap-2 font-medium text-sm leading-4 text-[#5A4278]">
  Landlord Response
    <span classname=" text-base leading-5 font-medium text-[#312245]">
    I refunded your amount -Thank you
    </span>
  </div>
</div>
          </div>
        </div>

 
      </div>
    </div>
  );
};

export default TenantPaymentCard;
