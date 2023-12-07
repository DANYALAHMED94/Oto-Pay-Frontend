import React, { useState } from "react";
import TenantInfo from "../global/TenantInfo";
import ReferenceInfo from "../global/ReferenceInfo";
import Agreement from "../global/Agreement";
import LandlordInfo from "../global/LandlordInfo";
import TenantInformationForm from "../global/TenantInformationForm";
import TenantPaymentHistory from "../global/TenantPaymentHistory";
import PropertyDetails from "../global/PropertyDetails";
import FindTenant from "../global/FindTenant";
import AddPaymentForm from "../global/AddPaymentForm";


const LandlordTenants = ( ) => {
  const [landlordTenants, setLandlordTenants] = useState("");
  const [tenantInfo, setTenantInfo] = useState("");

  const [occupied, setOccupied] = useState("");
  const [filterClicked, setFilterClicked] = useState(false);

  return (
    <>


      <div className={`w-full bg-[#F6F6F6] px-[16px]  md:py-[18px] py-[8px] flex    lg:justify-between   ${
              filterClicked ? " " : "gap-4"
            } flex-col justify-center `}>
        <div className="w-full  xl:px-[20px] xl:py-[4px] lg:p-[14px] md:p-[16px] p-[18px]  bg-[#F6F6F6]  rounded-lg flex flex-col  md:gap-4 gap-2 ">
         
        <div className={`flex md:flex-row flex-col w-full justify-between gap-2 p-3 bg-[#C5C2C9] ${
              filterClicked ? "hidden " : ""
            }`}>
            <button
              type="submit"
              onClick={() => {setLandlordTenants("LandlordTenants");
              setOccupied("Occupied");
              setTenantInfo("")
              setFilterClicked(!filterClicked);
              }}
                                className={`flex justify-center items-center gap-[4px] text-[#17062F] ${
                landlordTenants === "LandlordTenants"
                  ? "bg-[#FDFCFF] text-black"
                  : ""
              }   w-full lg:h-[56px] md:h-[50px] xl:px-4 px-1  h-12  rounded-md xl:text-base text-sm  leading-4 text-center  font-medium whitespace-nowrap`}
            >
              <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none">
  <path d="M22.5 21C22.5 21 24 21 24 19.5C24 18 22.5 13.5 16.5 13.5C10.5 13.5 9 18 9 19.5C9 21 10.5 21 10.5 21H22.5ZM10.533 19.5C10.5219 19.4985 10.5109 19.4965 10.5 19.494C10.5015 19.098 10.7505 17.949 11.64 16.914C12.468 15.9435 13.923 15 16.5 15C19.0755 15 20.5305 15.945 21.36 16.914C22.2495 17.949 22.497 19.0995 22.5 19.494L22.488 19.497C22.481 19.4982 22.474 19.4992 22.467 19.5H10.533ZM16.5 10.5C17.2957 10.5 18.0587 10.1839 18.6213 9.62132C19.1839 9.05871 19.5 8.29565 19.5 7.5C19.5 6.70435 19.1839 5.94129 18.6213 5.37868C18.0587 4.81607 17.2957 4.5 16.5 4.5C15.7044 4.5 14.9413 4.81607 14.3787 5.37868C13.8161 5.94129 13.5 6.70435 13.5 7.5C13.5 8.29565 13.8161 9.05871 14.3787 9.62132C14.9413 10.1839 15.7044 10.5 16.5 10.5ZM21 7.5C21 8.09095 20.8836 8.67611 20.6575 9.22208C20.4313 9.76804 20.0998 10.2641 19.682 10.682C19.2641 11.0998 18.768 11.4313 18.2221 11.6575C17.6761 11.8836 17.0909 12 16.5 12C15.9091 12 15.3239 11.8836 14.7779 11.6575C14.232 11.4313 13.7359 11.0998 13.318 10.682C12.9002 10.2641 12.5687 9.76804 12.3425 9.22208C12.1164 8.67611 12 8.09095 12 7.5C12 6.30653 12.4741 5.16193 13.318 4.31802C14.1619 3.47411 15.3065 3 16.5 3C17.6935 3 18.8381 3.47411 19.682 4.31802C20.5259 5.16193 21 6.30653 21 7.5ZM10.404 13.92C9.80397 13.7311 9.18545 13.6069 8.559 13.5495C8.207 13.516 7.85359 13.4995 7.5 13.5C1.5 13.5 0 18 0 19.5C0 20.5005 0.4995 21 1.5 21H7.824C7.60163 20.5317 7.49074 20.0183 7.5 19.5C7.5 17.985 8.0655 16.437 9.135 15.144C9.4995 14.703 9.924 14.2905 10.404 13.92ZM7.38 15C6.49223 16.3339 6.01266 17.8977 6 19.5H1.5C1.5 19.11 1.746 17.955 2.64 16.914C3.4575 15.96 4.878 15.03 7.38 15.0015V15ZM2.25 8.25C2.25 7.05653 2.72411 5.91193 3.56802 5.06802C4.41193 4.22411 5.55653 3.75 6.75 3.75C7.94347 3.75 9.08807 4.22411 9.93198 5.06802C10.7759 5.91193 11.25 7.05653 11.25 8.25C11.25 9.44347 10.7759 10.5881 9.93198 11.432C9.08807 12.2759 7.94347 12.75 6.75 12.75C5.55653 12.75 4.41193 12.2759 3.56802 11.432C2.72411 10.5881 2.25 9.44347 2.25 8.25ZM6.75 5.25C5.95435 5.25 5.19129 5.56607 4.62868 6.12868C4.06607 6.69129 3.75 7.45435 3.75 8.25C3.75 9.04565 4.06607 9.80871 4.62868 10.3713C5.19129 10.9339 5.95435 11.25 6.75 11.25C7.54565 11.25 8.30871 10.9339 8.87132 10.3713C9.43393 9.80871 9.75 9.04565 9.75 8.25C9.75 7.45435 9.43393 6.69129 8.87132 6.12868C8.30871 5.56607 7.54565 5.25 6.75 5.25Z" fill="#434146"/>
</svg>
              <h1 className="flex justify-start items-center  gap-1">
               
                My All Tenants
              </h1>
              <div>
                
              </div>
            </button>

            <button
              type="submit"
              onClick={() => {setLandlordTenants("FindTenants");
          
           
              }}
              className={`flex justify-center items-center gap-[4px] text-[#17062F] ${
                landlordTenants === "FindTenants"
                ? "bg-[#FDFCFF] text-black"
                : ""
              }   w-full lg:h-[56px] md:h-[50px] xl:px-4 px-1 h-12  rounded-md xl:text-base text-sm  leading-4 text-center  font-medium whitespace-nowrap`}
            >
              <svg xmlns="http://www.w3.org/2000/svg" width="25" height="24" viewBox="0 0 25 24" fill="none">
  <path d="M9.875 2.25C5.52575 2.25 2 5.77575 2 10.125C1.99881 11.3453 2.28178 12.5491 2.8265 13.641L2.039 16.5795C1.98786 16.7703 1.98786 16.9712 2.039 17.162C2.09015 17.3529 2.19064 17.5268 2.33037 17.6665C2.47009 17.8061 2.64413 17.9065 2.83496 17.9576C3.0258 18.0086 3.22672 18.0085 3.4175 17.9573L6.35375 17.1705C7.44686 17.7175 8.65266 18.0016 9.875 18C14.225 18 17.75 14.4742 17.75 10.125C17.75 5.77575 14.225 2.25 9.875 2.25ZM4.2845 13.191C3.76817 12.2517 3.49827 11.1969 3.5 10.125C3.5 8.86414 3.87389 7.6316 4.57439 6.58324C5.27488 5.53488 6.27052 4.71778 7.4354 4.23527C8.60028 3.75276 9.88208 3.62651 11.1187 3.87249C12.3553 4.11847 13.4913 4.72563 14.3828 5.61719C15.2744 6.50875 15.8815 7.64467 16.1275 8.8813C16.3735 10.1179 16.2472 11.3997 15.7647 12.5646C15.2822 13.7295 14.4651 14.7251 13.4168 15.4256C12.3684 16.1261 11.1359 16.5 9.875 16.5C8.7605 16.5 7.715 16.215 6.8045 15.7133C6.63491 15.6199 6.43577 15.5957 6.24875 15.6458L3.65675 16.3403L4.35125 13.7467C4.40113 13.56 4.37694 13.3611 4.28375 13.1918L4.2845 13.191ZM11.3413 19.0065C10.6454 19.1204 9.9386 19.1526 9.23525 19.1025C9.97332 19.9359 10.8801 20.603 11.8955 21.0594C12.9109 21.5159 14.0117 21.7512 15.125 21.75C16.3474 21.7516 17.5532 21.4676 18.6463 20.9205L21.5825 21.708C21.7733 21.7591 21.9742 21.7591 22.165 21.708C22.3559 21.6569 22.5298 21.5564 22.6695 21.4166C22.8091 21.2769 22.9095 21.1029 22.9606 20.912C23.0116 20.7212 23.0115 20.5203 22.9603 20.3295L22.1728 17.391C22.7188 16.2995 23.002 15.0955 23 13.875C23.0003 12.3215 22.5411 10.8026 21.6802 9.50938C20.8193 8.21622 19.5951 7.20657 18.1618 6.6075C18.4333 7.24725 18.6343 7.92525 18.752 8.63175C19.6004 9.21789 20.2937 10.0013 20.7724 10.9146C21.251 11.8279 21.5007 12.8438 21.5 13.875C21.5017 14.9469 21.2318 16.0017 20.7155 16.941C20.6223 17.1104 20.5981 17.3092 20.648 17.496L21.3433 20.091L18.7513 19.3958C18.5645 19.3459 18.3656 19.3701 18.1963 19.4632C17.2557 19.9815 16.1989 20.2525 15.125 20.2507C13.7628 20.2526 12.4362 19.8168 11.3413 19.0065ZM9.125 11.25C9.125 11.6625 9.4625 12 9.875 12C10.2875 12 10.625 11.6625 10.625 11.25C10.625 10.575 11.0075 10.1415 11.4515 9.6375L11.465 9.6225C11.9525 9.0675 12.5 8.4075 12.5 7.5C12.5 6.5925 11.8025 5.25 9.875 5.25C7.9475 5.25 7.25 6.5925 7.25 7.5C7.25 7.9125 7.5875 8.25 8 8.25C8.4125 8.25 8.75 7.9125 8.75 7.5C8.75 7.3725 8.8025 6.75 9.875 6.75C10.865 6.75 10.9925 7.2825 11 7.5C11 7.86 10.76 8.145 10.34 8.625L10.325 8.6415C9.788 9.2535 9.125 10.0087 9.125 11.25ZM10.8125 14.0625C10.8125 14.3111 10.7137 14.5496 10.5379 14.7254C10.3621 14.9012 10.1236 15 9.875 15C9.62636 15 9.38791 14.9012 9.21209 14.7254C9.03628 14.5496 8.9375 14.3111 8.9375 14.0625C8.9375 13.8139 9.03628 13.5754 9.21209 13.3996C9.38791 13.2238 9.62636 13.125 9.875 13.125C10.1236 13.125 10.3621 13.2238 10.5379 13.3996C10.7137 13.5754 10.8125 13.8139 10.8125 14.0625Z" fill="#434146"/>
</svg>
              <h1 className="flex justify-start items-center xl:2 gap-1">
               
                Find Tenants For Property
              </h1>
              <div>
               
              </div>
            </button>

            <button
              type="submit"
             
              className={`flex justify-center items-center gap-[4px] text-[#17062F] ${
                landlordTenants=== "Blocked Landlords"
                  ? "bg-[#E4DFEB] text-black"
                  : ""
              }   w-full lg:h-[56px] md:h-[50px]  xl:px-4 px-1  h-12  rounded-md xl:text-base text-sm  leading-4 text-center  font-medium whitespace-nowrap `}
            >
              <svg xmlns="http://www.w3.org/2000/svg" width="25" height="24" viewBox="0 0 25 24" fill="none">
  <path d="M6.5 2C5.96957 2 5.46086 2.21071 5.08579 2.58579C4.71071 2.96086 4.5 3.46957 4.5 4V20C4.5 20.5304 4.71071 21.0391 5.08579 21.4142C5.46086 21.7893 5.96957 22 6.5 22H18.5C19.0304 22 19.5391 21.7893 19.9142 21.4142C20.2893 21.0391 20.5 20.5304 20.5 20V8L14.5 2H6.5ZM6.5 4H13.5V9H18.5V20H6.5V4ZM8.5 12V14H16.5V12H8.5ZM8.5 16V18H13.5V16H8.5Z" fill="#434146"/>
</svg>
              <h1 className="flex justify-start items-center xl:2 gap-1">
               
                
                Proposals
              </h1>
              <div>
              
              </div>
            </button>
          </div>
          <div className={`w-full flex md:flex-row flex-col justify-start gap-6  ${
              filterClicked ? "hidden " : ""
            }`}>
            <div className=" border border-[#C5C2C9] flex gap-3 p-2 xl:w-[585px]  lg:w-[390px] md:w-[350px] w-full lg:h-14 h-12 bg-[#ECEBED] rounded-md   justify-between items-center">
              <svg
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M11 19C15.4183 19 19 15.4183 19 11C19 6.58172 15.4183 3 11 3C6.58172 3 3 6.58172 3 11C3 15.4183 6.58172 19 11 19Z"
                  stroke="#5A4278"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
                <path
                  d="M21.0004 20.9984L16.6504 16.6484"
                  stroke="#5A4278"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>

              <input
                id="search"
                name="search"
                type="text"
                required
                className="w-full  xl:h-[48px] lg:h-[40px] md:h-[40px] h-[32px] flex-auto  px-2 py-2 text-black  focus:outline-none bg-[#ECEBED] sm:text-sm sm:leading-6"
                placeholder="Search Property Name & Location "
              />
            </div>

           
            <button
              onClick={() => {
              
                setFilterClicked(!filterClicked);
              }}
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
               Add New Manager
            </button>
          </div>
        </div>

 

         {landlordTenants === "LandlordTenants" ? (
          <TenantPaymentHistory landlordTenants={landlordTenants} setLandlordTenants={setLandlordTenants}  occupied={occupied}  />
        ) : null}

{landlordTenants === "FindTenants" ? (
          <FindTenant landlordTenants={landlordTenants} setLandlordTenants={setLandlordTenants} filterClicked={filterClicked} setFilterClicked={setFilterClicked}  />
        ) : null}

{landlordTenants === "sendProposal" ? (
          <AddPaymentForm landlordTenants={landlordTenants} setLandlordTenants={setLandlordTenants}    />
        ) : null}


<div className= "flex flex-col gap-3">
        {landlordTenants  === "PropertyDetails" ? (
          <TenantInfo landlordTenants={landlordTenants} />
        ) : null}
       { landlordTenants  === "PropertyDetails" ? (
          <ReferenceInfo landlordTenants={landlordTenants} />
        ) : null}

{landlordTenants === "PropertyDetails" ? (
            <TenantInformationForm
            landlordTenants={landlordTenants}
            
            />
          ) : null}
{landlordTenants === "PropertyDetails" ? (
          <Agreement landlordTenants={landlordTenants} />
        ) : null}

{landlordTenants === "PropertyDetails" ? (
          <PropertyDetails landlordTenants={landlordTenants} 
          setTenantInfo={setTenantInfo} 
          setLandlordTenants={setLandlordTenants} />
        ) : null}
</div>



        
{tenantInfo === "PropertyDetails" ? (
          <LandlordInfo tenantInfo={tenantInfo} />
        ) : null}
        {tenantInfo === "PropertyDetails" ? (
          <TenantInfo  tenantInfo={tenantInfo}/>
        ) : null}
        {tenantInfo === "PropertyDetails" ? (
          <ReferenceInfo tenantInfo={tenantInfo} />
        ) : null}

        {tenantInfo === "PropertyDetails" ? (
          <Agreement tenantInfo={tenantInfo} />
        ) : null}

        {tenantInfo === "PropertyDetails" ? (
          <PropertyDetails tenantInfo={tenantInfo} />
        ) : null}



      </div>
    </>
  );
};

export default LandlordTenants;
