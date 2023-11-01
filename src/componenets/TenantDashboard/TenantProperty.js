import React, { useState } from "react";
import PropertyCard from "../global/PropertyCard";
import PropertyDetails from "../global/PropertyDetails";
import TenantInfo from "../global/TenantInfo";
import ReferenceInfo from "../global/ReferenceInfo";
import Agreement from "../global/Agreement";
import LandlordInfo from "../global/LandlordInfo";
import TenantInformationForm from "../global/TenantInformationForm";
import Stepper from "../Stepper/Stepper";
import AgreementUploaFile from "../global/AgreementUploadFile";
import Success from "../global/Success";

// import {useLocation } from "react-router-dom";

const TenantProperty = () => {
  const [property, setProperty] = useState("");
  const [anotherProperty, setAnotherProperty] = useState("");
  const [option, setOption] = useState("");
  const [option2, setOption2] = useState("");
  const [currentStep, setCurrentStep] = useState(1);
  const [complete, setComplete] = useState(false);
  const [filterClicked, setFilterClicked] = useState(false);
  const toggleFilter = () => {
    setFilterClicked(!filterClicked);
  };
  //   const location = useLocation();
  console.log(property);

  return (
    <>
      <div className="w-full bg-[#F6F6F6] px-[16px]  md:py-[18px] py-[8px] flex    lg:justify-between gap-4  flex-col justify-center ">
        <div className="w-full  xl:px-[20px] xl:py-[4px] lg:p-[14px] md:p-[16px] p-[18px]  bg-[#F6F6F6]  rounded-lg flex flex-col  md:gap-4 gap-2 ">
          <div
            className={`w-full flex md:flex-row flex-col justify-start gap-6 ${
              filterClicked ? "hidden" : ""
            }`}
          >
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

            <div
              onClick={() => {
                setProperty("propertycard");
                setAnotherProperty("anotherProperty");
                setOption("options");
                setOption2("option2");
                toggleFilter();
              }}
              className="lg:w-[170px] md:w-36 w-full lg:h-14 h-12  px-[16px] rounded-md bg-[#653E92] flex justify-center items-center"
            >
              <svg
                width="24"
                height="25"
                viewBox="0 0 24 25"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M22 3.38086H2L10 12.8409V19.3809L14 21.3809V12.8409L22 3.38086Z"
                  stroke="white"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
              <select className=" w-full rounded-md  bg-[#653E92] text-white xl:text-base text-sm focus:outline-none">
                <option value=""> All Filters </option>
                <option value="fully-furnished">Washington, street xyz</option>
                <option value="partially-furnished">
                  Washington, street xyz
                </option>
                <option value="not-furnished">Washington, street xyz</option>
              </select>
            </div>
          </div>
        </div>

        {property === "propertycard" ? (
          <PropertyCard
            property={property}
            setProperty={setProperty}
            anotherProperty={anotherProperty}
            setAnotherProperty={setAnotherProperty}
            option={option}
            setOption={setOption}
          />
        ) : null}
        {anotherProperty === "anotherProperty" ? (
          <PropertyCard
            anotherProperty={anotherProperty}
            setAnotherProperty={setAnotherProperty}
            property={property}
            setProperty={setProperty}
            option2={option2}
            setOption2={setOption2}
          />
        ) : null}

        {property === "PropertyDetails" ? (
          <LandlordInfo property={property} />
        ) : null}
        {property === "PropertyDetails" ? (
          <TenantInfo property={property} />
        ) : null}
        {property === "PropertyDetails" ? (
          <ReferenceInfo property={property} />
        ) : null}

        {property === "PropertyDetails" ? (
          <Agreement property={property} />
        ) : null}

        {property === "PropertyDetails" ? (
          <PropertyDetails property={property} setProperty={setProperty} />
        ) : null}

        {property === "otherDetails" ? (
          <PropertyDetails property={property} setProperty={setProperty} />
        ) : null}

        <div
          className={` ${
            property === "occupyProperty" ||
            property === "uploadAgreement" ||
            property === "success"
              ? "bg-[#ECEBED] rounded-[16px] p-5"
              : null
          }`}
        >
          {property === "occupyProperty" ||
          property === "uploadAgreement" ||
          property === "success" ? (
            <Stepper
              setComplete={setComplete}
              complete={complete}
              setCurrentStep={setCurrentStep}
              currentStep={currentStep}
            />
          ) : null}
          {property === "occupyProperty" ? (
            <TenantInformationForm
              setProperty={setProperty}
              setComplete={setComplete}
              complete={complete}
              setCurrentStep={setCurrentStep}
              currentStep={currentStep}
            />
          ) : null}
          {property === "uploadAgreement" ? (
            <AgreementUploaFile
              setProperty={setProperty}
              setComplete={setComplete}
              complete={complete}
              setCurrentStep={setCurrentStep}
              currentStep={currentStep}
            />
          ) : null}

          {property === "success" ? (
            <Success
              setProperty={setProperty}
              setComplete={setComplete}
              complete={complete}
              setCurrentStep={setCurrentStep}
              currentStep={currentStep}
            />
          ) : null}
        </div>
      </div>
    </>
  );
};

export default TenantProperty;
