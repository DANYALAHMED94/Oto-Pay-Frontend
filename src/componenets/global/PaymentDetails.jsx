import React from "react";
const PaymentDetails = ({ details, payment, paymentStatus }) => {
  // const [paymentStatus, setPaymentStatus] = useState("");
  // const handlePayment = (status) => {
  //     setPaymentStatus(status);
  //   };
  return (
    <div className=" w-full h-full flex flex-col gap-4  ">
      <div
        className={`flex gap-2 md:flex-row flex-col xl:justify-start  justify-between
`}
      >
        <h1 className=" w-full  text-black font-semibold lg:text-2xl text-xl leading-9">
          Mark John Smith
        </h1>
        {details === "status" ? (
          paymentStatus === "accepted" ? (
            <div className="xl:w-72 whitespace-nowrap w-full flex items-center justify-center gap-2 h-[45px] rounded-lg p-3 font-bold text-base leading-5 text-white bg-[#0C8B3F] bg-opacity-10">
              <span className="font-bold text-base leading-5 text-[#0C8B3F]">
                Accepetd
              </span>
            </div>
          ) : (
            <div className="xl:w-72 whitespace-nowrap w-full flex items-center justify-center gap-2 h-[45px] rounded-lg p-3 font-bold text-base leading-5 text-white bg-[#CD2424] bg-opacity-10 ">
              <span className="font-bold text-base leading-5 text-[#CD2424]">
                Rejected
              </span>{" "}
            </div>
          )
        ) : null}

        {details === "status" ? (
          <button className=" md:w-[260px] w-full whitespace-nowrap flex items-center justify-center gap-2 h-[45px] rounded-lg p-3 font-bold text-base leading-5 text-#17062F border border-[#17062F]">
            <svg
              width="25"
              height="24"
              viewBox="0 0 25 24"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <g id="arrow-down-to-line">
                <path
                  id="Vector"
                  d="M12.5 17V3"
                  stroke="#17062F"
                  stroke-width="2"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                />
                <path
                  id="Vector_2"
                  d="M6.5 11L12.5 17L18.5 11"
                  stroke="#17062F"
                  stroke-width="2"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                />
                <path
                  id="Vector_3"
                  d="M19.5 21H5.5"
                  stroke="#17062F"
                  stroke-width="2"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                />
              </g>
            </svg>
            Download Receipt
          </button>
        ) : null}

        {payment === "Recent Payments" ? (
          <button className="xl:w-72 whitespace-nowrap w-full flex items-center justify-center gap-2 h-[45px] rounded-lg p-3 font-bold text-base leading-5 text-white bg-[#653E92] ">
            Waiting For Approval
          </button>
        ) : null}
      </div>

      <div className=" w-full h-full text-black flex flex-col   ">
        {/* First Div */}
        <div className="flex md:flex-row flex-col gap-2 md:h-[59px]  h-full justify-between ">
          <div className="w-full flex md:flex-col flex-row gap-2 font-medium text-sm leading-4 text-[#5A4278] md:justify-start justify-between items-start ">
            <div className=" w-full  "> Date of Payment</div>
            <div className="w-full   md:text-base text-sm leading-5 text-[#312245]">
              2-6-1992
            </div>
          </div>
          <div className="w-full flex md:flex-col flex-row gap-2 font-medium text-sm leading-4 text-[#5A4278] md:justify-start justify-between items-start ">
            <div className=" w-full  "> Amount Payed </div>
            <div className="w-full   md:text-base text-sm leading-5 text-[#312245]">
              $762,2772
            </div>
          </div>
        </div>

        <hr className="border-t border-gray-300 my-4" />
        {/* Second Div */}

        <div className="flex md:flex-row flex-col gap-2 md:h-[59px]  h-full justify-between  ">
          <div className="w-full flex md:flex-col flex-row gap-2 font-medium text-sm leading-4 text-[#5A4278] md:justify-start justify-between items-start ">
            <div className=" w-full  "> Occupied Property Name</div>
            <div className="w-full  md:text-base text-sm leading-5 text-[#312245]">
              Marla Hills House #26
            </div>
          </div>
          <div className="w-full flex md:flex-col flex-row gap-2 font-medium text-sm leading-4 text-[#5A4278] md:justify-start justify-between items-start ">
            <div className=" w-full  "> Property Number </div>
            <div className="w-full   md:text-base text-sm leading-5 text-[#312245]">
              1215262232NY
            </div>
          </div>
        </div>

        <hr className="border-t border-gray-300 my-4" />

        <div>
          <div className="flex md:flex-row flex-col gap-2 md:h-[59px]  h-full justify-between  ">
            <div className="w-full flex md:flex-col flex-row gap-2 font-medium text-sm leading-4 text-[#5A4278] md:justify-start justify-between items-start ">
              <div className=" w-full  "> Tenant Account Number </div>{" "}
              <div className="w-full flex items-center gap-2  text-[#312245]">
                38383838838SMT
              </div>
            </div>
            <div className="w-full flex md:flex-col flex-row gap-2 font-medium text-sm leading-4 text-[#5A4278] md:justify-start justify-between items-start ">
              <div className=" w-full  "> Sanded Payment to </div>{" "}
              <div className="w-full flex items-center gap-2   text-[#312245]">
                Sanded Payment to
              </div>
            </div>
          </div>
          <hr className="border-t border-gray-300 my-4" />
        </div>
        {/* Third Div */}

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
            </div>{" "}
          </div>
        </div>
        <hr className="border-t border-gray-300 my-4" />
        <div className="w-full  h-full flex flex-col gap-2 font-medium text-sm leading-4 text-[#5A4278]">
          Purpose of Payment
          <span classname=" text-base leading-5 font-medium text-[#312245]">
            Hi Landlord I am sending you month's rent if you have any problem
            please let me know... shsjhsshsh
          </span>
        </div>
      </div>
    </div>
  );
};

export default PaymentDetails;
