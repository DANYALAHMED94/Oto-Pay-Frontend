import React from "react";
import tenant1 from "../../assets/tenant1.svg";
import image from "../../assets/receipt.png"
const PaymentDetails = ({ details, request,  payment, paymentStatus, tenantPayment , setTenantPayment}) => {
  // const [paymentStatus, setPaymentStatus] = useState("");
  // const handlePayment = (status) => {
  //     setPaymentStatus(status);
  //   };
  return (

    <div className="w-full  p-4 rounded-lg bg-gray-100  flex  h-auto md:flex-row flex-col  xl:gap-[32px] sxl:gap-[32px] gap-4 ">
   {request === "response" ? (
     <div className=" xl:w-[239px]  sxl:w-[239px] lg:w-[200px]  flex flex-col gap-4 justify-between items-center ">
     <div className="w-full  flex flex-col gap-2 justify-center items-center">
       <div
         className={`xl:w-[239px]  sxl:w-[239px] lg:w-[200px]  w-full h-full border xl:h-full md:h-[330px] md:w-[350px]"    `}
       >
         <img
           alt="gallery"
           className="w-full object-cover  h-full rounded-lg object-center block"
           src={tenant1}
         />
       </div>
 
       <button className=" w-full h-[45px] rounded-lg p-3 text-white bg-black">
         View All details
       </button>
       <button className=" w-full whitespace-nowrap flex items-center justify-center gap-2 h-[45px] rounded-lg p-3 font-bold text-base leading-5 text-#17062F border border-[#17062F]">
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
     </div>
   </div>
   ): null }
   


    <div className=" w-full h-full flex flex-col gap-4  ">
      <div
        className={`flex gap-2 md:flex-row flex-col xl:justify-start  justify-between
`}
      >
        <h1 className=" w-full  text-black font-semibold md:text-start text-center lg:text-2xl text-xl leading-9">
          Mark John Smith
        </h1>
        {details === "status" || tenantPayment === "payments" ? (
          paymentStatus === "accepted" ? (
            <div className="xl:w-72 whitespace-nowrap w-full flex items-center justify-center gap-2 h-[45px] rounded-lg p-3 font-bold text-base leading-5 text-white bg-[#0C8B3F] bg-opacity-10">
              <span className="font-bold text-base leading-5 text-[#0C8B3F]">
                Accepetd
              </span>
            </div>
          ) : paymentStatus === "rejected" ? (
            <div className="xl:w-72 whitespace-nowrap w-full flex items-center justify-center gap-2 h-[45px] rounded-lg p-3 font-bold text-base leading-5 text-white bg-[#CD2424] bg-opacity-10 ">
              <span className="font-bold text-base leading-5 text-[#CD2424]">
                Rejected
              </span>{" "}
            </div>
          ):  paymentStatus === "refund" ? (
            <div className="xl:w-72 whitespace-nowrap w-full flex items-center justify-center gap-2 h-[45px] rounded-lg p-3 font-bold text-base leading-5 text-white bg-[#0C8B3F] ">
              <span className="font-bold text-base leading-5 text-white">
              Refunded Amount 
              </span>{" "}
              <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none">
  <path d="M20 6L9 17L4 12" stroke="#FDFCFF" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
</svg>
            </div>
            ) : paymentStatus === "waiting" ? (
              <div className="xl:w-72 whitespace-nowrap w-full flex items-center justify-center gap-2 h-[45px] rounded-lg p-3 font-bold text-base leading-5 text-white bg-[#0C39AC] bg-opacity-10 ">
              <span className="font-bold text-base leading-5 text-[#0C39AC]">
              Waiting For Approval
              </span>{" "}
            </div>
              ) :  <div className="xl:w-72 whitespace-nowrap w-full flex items-center justify-center gap-2 h-[45px] rounded-lg p-3 font-bold text-base leading-5 text-white bg-[#CD2424] bg-opacity-10 ">
              <span className="font-bold text-base leading-5 text-[#CD2424]">
                Rejected
              </span>{" "}
            </div>
        ) : null}

        {details === "status" || tenantPayment === "payments" ? (
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
   

   {payment === "Approval" ? (
          <button className="xl:w-72 whitespace-nowrap w-full flex items-center justify-center gap-2 h-[45px] rounded-lg p-3 font-bold text-base leading-5 text-white bg-[#653E92] ">
            Accepted
          </button>
        ) : null}
      </div>

      <div className=" w-full h-full text-black flex flex-col   ">
        {/* First Div */}
        {tenantPayment === "payments" ? ( <div className="flex md:flex-row flex-col gap-2 md:h-[59px]  h-full justify-between ">
          <div className="w-full flex md:flex-col flex-row gap-2 font-medium text-sm leading-4 text-[#5A4278] md:justify-start justify-between items-start ">
            <div className=" w-full  "> Date of request send</div>
            <div className="w-full   md:text-base text-sm leading-5 text-[#312245]">
            01-04-2023
            </div>
          </div>
          <div className="w-full flex md:flex-col flex-row gap-2 font-medium text-sm leading-4 text-[#5A4278] md:justify-start justify-between items-start ">
            <div className=" w-full  ">Request Amount </div>
            <div className="w-full   md:text-base text-sm leading-5 text-[#312245]">
            $762,2772
            </div>
          </div>
        </div>):
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
        </div>}

{tenantPayment === "payments" ?(
       
       <>
       <hr className="border-t border-gray-300 my-4" />

        <div className="flex md:flex-row flex-col gap-2 md:h-[59px]  h-full justify-between  ">
          <div className="w-full flex md:flex-col flex-row gap-2 font-medium text-sm leading-4 text-[#5A4278] md:justify-start justify-between items-start ">
            <div className=" w-full  "> Your Email</div>
            <div className="w-full  md:text-base text-sm leading-5 text-[#312245]">
            miller@gmail.com
            </div>
          </div>
          <div className="w-full flex md:flex-col flex-row gap-2 font-medium text-sm leading-4 text-[#5A4278] md:justify-start justify-between items-start ">
            <div className=" w-full  "> Your Phone Number </div>
            <div className="w-full   md:text-base text-sm leading-5 text-[#312245]">
            +928228288282863
            </div>
          </div>
        </div>
        </>
):null}
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
            {tenantPayment === "payments" ? (
            <div className="w-full flex md:flex-col flex-row gap-2 font-medium text-sm leading-4 text-[#5A4278] md:justify-start justify-between items-start ">
              <div className=" w-full  "> Received amount from </div>{" "}
              <div className="w-full flex items-center gap-2   text-[#312245]">
              28291028229020LANDLORd
              </div>
            </div> ): <div className="w-full flex md:flex-col flex-row gap-2 font-medium text-sm leading-4 text-[#5A4278] md:justify-start justify-between items-start ">
              <div className=" w-full  "> Sanded Payment to </div>{" "}
              <div className="w-full flex items-center gap-2   text-[#312245]">
              28291028229020LANDLORd
              </div>
            </div>}
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
        {tenantPayment === "payments" ? (
        <div className="w-full  h-full flex flex-col gap-2 font-medium text-sm leading-4 text-[#5A4278]">
       Description (Reason for Refund Request)
          <span classname=" text-base leading-5 font-medium text-[#312245]">
          Hi Landlord please refunded my security amount.
          </span>
        </div> ): <div className="w-full  h-full flex flex-col gap-2 font-medium text-sm leading-4 text-[#5A4278]">
          Purpose of Payment
          <span classname=" text-base leading-5 font-medium text-[#312245]">
            Hi Landlord I am sending you month's rent if you have any problem
            please let me know... shsjhsshsh
          </span>
        </div>}
        {tenantPayment === "payments" ? (
<>
<hr className="border-t border-gray-300 my-4" />

<div className="flex md:flex-row flex-col gap-2  h-full justify-between  ">
<div className="w-full flex md:flex-col flex-row gap-2 font-medium text-sm leading-4 text-[#5A4278] md:justify-start justify-between items-start ">
  <div className=" w-full  "> Attachment you added</div>
  <div className="w-full flex  gap-3 md:text-base text-sm leading-5 text-[#312245]">
  <div className="w-20">
                      <img
                        alt="gallery"
                        className="w-full  h-full rounded-lg object-center block"
                       src={image}
                      />
         </div> 
         <div className="w-20">
                      <img
                        alt="gallery"
                        className="w-full  h-full rounded-lg object-center block"
                       src={image}
                      />
         </div> 
  </div>
</div>
<div className="w-full flex flex-row  font-medium text-sm leading-4 text-[#5A4278] md:justify-end justify-between items-center">

 
  <button  onClick={() => {
                setTenantPayment("RefundPayment");
              }}
              className="flex justify-end w-[100px] whitespace-nowrap underline pt-6 text-[#17062F] text-base font-bold leading-5"> Refund Request</button>

</div>
</div>
</>
        ):null}

 { paymentStatus === "refund" || paymentStatus === "rejected"  ? (
  <>
   <hr className="border-t border-gray-300 my-4" />
<div className="w-full  h-full flex flex-col gap-2 font-medium text-sm leading-4 text-[#5A4278]">
Landlord Response
{paymentStatus === "refund"?( 
<span classname=" text-base leading-5 font-medium text-[#312245]">
          I refunded your amount -Thank you
          </span>
          ):
          <span classname=" text-base leading-5 font-medium text-[#312245]">
      We are working on your request and will notify you shortly - or we have rejected your request because it is not in the agrement we signed.
          </span>}
        </div> 
        </>
  ):null}
      </div>
    </div>
    </div>
  );
};

export default PaymentDetails;
