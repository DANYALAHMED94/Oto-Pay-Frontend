import React, { useState } from "react";
import Cancel from "../../assets/cancel.svg";
// import * as Yup from "yup";
import { Formik, Field, Form, ErrorMessage } from "formik";
import FileInput from "./FileInput";
import PropertyModalCard from "../global/PropertyModalCard";
import bed from "../../assets/bed.svg";
import bath from "../../assets/bath.svg";
import area from "../../assets/area.svg";
import rooms from "../../assets/room.svg";
import Map from "../../assets/map.png";

export default function TenantRegistrationForm({ info }) {
  // const [file, setFile] = useState();
  const [showModal, setShowModal] = useState(true);

  // const handlefile = (event) => {
  //   setFile(event.target.files[0]);
  // };
  // const handleFormData = (values) => {
  //   var formData = new FormData();
  //   formData.append("name", values?.name);fse
  //   if (!!file) formData.append("agreement", file);
  //   formData.append("email", values?.email);
  //   formData.append("DOB", values?.DOB);
  //   formData.append("phoneNumber", values?.phoneNumber);
  //   formData.append("jobTitle", values?.jobTitle);
  //   formData.append("joiningDate", values?.joiningDate);
  //   formData.append("totalYearExperince", values?.totalYearExperince);
  //   formData.append("guddgeEmailPlan", values?.guddgeEmailPlan);
  //   formData.append("agreementEndDate", values?.agreementEndDate);
  //   formData.append("shore", values?.shore);
  //   formData.append("contractorRate", values?.contractorRate);
  //   formData.append("companyName", values?.companyName);
  //   formData.append("identificationNumber", values?.identificationNumber);
  //   formData.append("socialSecurityNumber", values?.socialSecurityNumber);
  //   formData.append("mailingAddress", values?.mailingAddress);
  //   formData.append("alternativeEmailAdress", values?.alternativeEmailAdress);
  //   return formData;
  // };
  return (
    <>
      {showModal ? (
        <>
          <div className="hide-scrollbar overflow-x-hidden overflow-y-auto fixed inset-0 z-50 outline-none focus:outline-none">
            <div className="relative lg:w-[1200px] xl:w-[1400px] md:w-[740px] my-6 mx-auto max-w-5xl px-5">
              {/*content*/}
              <div className="border-0 rounded-lg shadow-lg relative flex flex-col w-full bg-white outline-none focus:outline-none pb-5">
                {/*header*/}
                <div className="flex items-center justify-between p-5">
                  {info === "Tenant" || info === "landloard & Property" ? (
                    <h1
                      className="md:text-2xl w-full text-center text-sm                 
                         text-[#5A4278]"
                    >
                      {info} Registration Form
                    </h1>
                  ) : (
                    <h1
                      className="md:text-2xl w-full text-center text-sm                 
                         text-[#5A4278]"
                    >
                      {`Adding ${info} Member`}
                    </h1>
                  )}

                  <button
                    className="p-1 ml-auto bg-transparent border-0 text-black float-right text-3xl leading-none font-semibold outline-none focus:outline-none"
                    onClick={() => setShowModal(false)}
                  >
                    <img src={Cancel} alt="x" />
                  </button>
                </div>
                {/*body*/}
                <div className="relative px-3 flex-auto">
                  <div>
                    <Formik
                      initialValues={{
                        name: "",
                        location: "",
                        description: "",
                        beds: "",
                        bathrooms: "",
                        rooms: "",
                        area: "",
                        email: "",
                        phoneNumber: "",
                        whatsApp: "",
                      }}
                      onSubmit={async (values) => {
                        console.log(values);
                      }}
                    >
                      {({ isSubmitting, errors, touched }) => (
                        <Form>
                          <div className="bg-[#E4DFEB] rounded-2xl">
                            <div className="p-3 rounded-2xl bg-[#E4DFEB]">
                              <div className="w-full ">
                                <FileInput info={"landloard"} />
                              </div>

                              {info === "Tenant" ? (
                                <>
                                  <div className="flex mt-5 justify-center items-center px-3 bg-white rounded">
                                    <svg
                                      className="xl:w-[22px] xl:h-[23px] md:w-[16px] md:h-[16px] mr-2"
                                      viewBox="0 0 22 23"
                                      height={20}
                                      width={20}
                                      fill="none"
                                      xmlns="http://www.w3.org/2000/svg"
                                    >
                                      <path
                                        d="M21 21.5L19 19.5M10.5 20.5C11.7476 20.5 12.9829 20.2543 14.1355 19.7769C15.2881 19.2994 16.3354 18.5997 17.2175 17.7175C18.0997 16.8354 18.7994 15.7881 19.2769 14.6355C19.7543 13.4829 20 12.2476 20 11C20 9.75244 19.7543 8.5171 19.2769 7.36451C18.7994 6.21191 18.0997 5.16464 17.2175 4.28249C16.3354 3.40033 15.2881 2.70056 14.1355 2.22314C12.9829 1.74572 11.7476 1.5 10.5 1.5C7.98044 1.5 5.56408 2.50089 3.78249 4.28249C2.00089 6.06408 1 8.48044 1 11C1 13.5196 2.00089 15.9359 3.78249 17.7175C5.56408 19.4991 7.98044 20.5 10.5 20.5Z"
                                        stroke="#5A4278"
                                        strokeWidth="1.5"
                                        strokeLinecap="round"
                                        strokeLinejoin="round"
                                      />
                                    </svg>
                                    <input
                                      type="text"
                                      autoComplete={true}
                                      className="w-full  h-10 pl-2   outline-none"
                                    />
                                  </div>
                                  <div className="py-10">
                                    <h1 className="text-2xl font-semibold text-[#17062F]">
                                      Search Result <span>1</span>
                                      <PropertyModalCard width={"full"} />
                                    </h1>
                                  </div>
                                </>
                              ) : null}

                              {info === "Service Provider" ? (
                                <>
                                  <div className="rounded-[16px] mt-5 px-5 py-3 border border-[rgba(46, 6, 100, 0.08)] bg-[#D9CFE3]">
                                    <h1 className="text-base font-bold text-[#312245]">
                                      {info} Information
                                    </h1>
                                    <div className="grid lg:grid-cols-4 mt-2 md:grid-cols-3 grid-cols-1  gap-x-1 lg:gap-x-3">
                                      <div className="flex lg:col-span-2 flex-col  py-2">
                                        <label
                                          htmlFor="name"
                                          className="text-sm font-medium leading-4 text-[#5A4278]"
                                        >
                                          Full Name
                                        </label>
                                        <div className="flex mt-1 rounded bg-white">
                                          <Field
                                            name="name"
                                            className={`rounded pl-2   w-full h-10 outline-none  ${
                                              touched.name && errors.name
                                                ? "is-invalid"
                                                : ""
                                            }`}
                                          />
                                          <ErrorMessage
                                            component="div"
                                            name="name"
                                            className="text-red-700 font-normal font-base text-left"
                                          />
                                        </div>
                                      </div>

                                      <div className="flex flex-col  py-2">
                                        <label
                                          htmlFor="availabilityStart"
                                          className="text-sm font-medium leading-4 text-[#5A4278]"
                                        >
                                          Availability Start
                                        </label>
                                        <div className="flex mt-1 rounded bg-white">
                                          <Field
                                            name="availabilityStart"
                                            type="time"
                                            className={`rounded pl-2 w-full h-10 outline-none  ${
                                              touched.availabilityStart &&
                                              errors.availabilityStart
                                                ? "is-invalid"
                                                : ""
                                            }`}
                                          />
                                          <ErrorMessage
                                            component="div"
                                            name="availabilityStart"
                                            className="text-red-700 font-normal font-base text-left"
                                          />
                                        </div>
                                      </div>

                                      <div className="flex flex-col  py-2">
                                        <label
                                          htmlFor="availabilityEnd"
                                          className="text-sm font-medium leading-4 text-[#5A4278]"
                                        >
                                          Availability End
                                        </label>
                                        <div className="flex mt-1 rounded bg-white">
                                          <Field
                                            name="availabilityEnd"
                                            type="time"
                                            className={`rounded pl-2 w-full h-10 outline-none  ${
                                              touched.availabilityEnd &&
                                              errors.availabilityEnd
                                                ? "is-invalid"
                                                : ""
                                            }`}
                                          />
                                          <ErrorMessage
                                            component="div"
                                            name="availabilityEnd"
                                            className="text-red-700 font-normal font-base text-left"
                                          />
                                        </div>
                                      </div>

                                      <div className="flex flex-col  py-2">
                                        <label
                                          htmlFor="gender"
                                          className="text-sm font-medium leading-4 text-[#5A4278]"
                                        >
                                          Gender
                                        </label>
                                        <Field
                                          as="select"
                                          name="gender"
                                          className={`border h-10 mt-1 pr-5 text-[#11141C] border-1 border-[#B8B7B6] rounded   pl-2   outline-none  ${
                                            touched.gender && errors.gender
                                              ? "is-invalid"
                                              : ""
                                          }`}
                                        >
                                          <option>Select</option>
                                          <option value="male">male</option>
                                          <option value="female">female</option>
                                          <option value="other">other</option>
                                        </Field>
                                        <ErrorMessage
                                          component="div"
                                          name="gender"
                                          className="text-red-700 font-normal font-base text-left"
                                        />
                                      </div>

                                      <div className="flex flex-col  py-2">
                                        <label
                                          htmlFor="email"
                                          className="text-sm font-medium leading-4 text-[#5A4278]"
                                        >
                                          Email
                                        </label>
                                        <div className="flex w-full mt-1 rounded bg-white">
                                          <Field
                                            name="email"
                                            className={`rounded text-sm pl-2 w-full h-10 outline-none  ${
                                              touched.email && errors.email
                                                ? "is-invalid"
                                                : ""
                                            }`}
                                          />
                                          <ErrorMessage
                                            component="div"
                                            name="email"
                                            className="text-red-700 font-normal font-base text-left"
                                          />
                                        </div>
                                      </div>

                                      <div className="flex flex-col  py-2">
                                        <label
                                          htmlFor="phoneNumber"
                                          className="text-sm font-medium leading-4 text-[#5A4278]"
                                        >
                                          Phone Number
                                        </label>
                                        <div className="flex mt-1  rounded bg-white">
                                          <Field
                                            name="phoneNumber"
                                            className={`rounded pl-2   w-full h-10 outline-none  ${
                                              touched.phoneNumber &&
                                              errors.phoneNumber
                                                ? "is-invalid"
                                                : ""
                                            }`}
                                          />
                                          <ErrorMessage
                                            component="div"
                                            name="phoneNumber"
                                            className="text-red-700 font-normal font-base text-left"
                                          />
                                        </div>
                                      </div>

                                      <div className="flex flex-col  py-2">
                                        <label
                                          htmlFor="pricePerHour"
                                          className="text-sm font-medium leading-4 text-[#5A4278]"
                                        >
                                          Price Per Hour
                                        </label>
                                        <div className="flex mt-1 \rounded bg-white">
                                          <Field
                                            name="pricePerHour"
                                            className={`rounded pl-2   w-full h-10 outline-none  ${
                                              touched.pricePerHour &&
                                              errors.pricePerHour
                                                ? "is-invalid"
                                                : ""
                                            }`}
                                          />
                                          <ErrorMessage
                                            component="div"
                                            name="pricePerHour"
                                            className="text-red-700 font-normal font-base text-left"
                                          />
                                        </div>
                                      </div>

                                      <div className="col-span-full">
                                        <label
                                          htmlFor="gender"
                                          className="text-sm font-medium leading-4 text-[#5A4278]"
                                        >
                                          Type of Services Offer
                                        </label>
                                        <div className="grid lg:grid-cols-4 justify-center items-center mt-2 md:grid-cols-3 grid-cols-1  gap-x-1 lg:gap-x-3">
                                          <div className="flex flex-col  py-2">
                                            <div className="flex w-full mt-1 rounded bg-white">
                                              <Field
                                                name="email"
                                                className={`rounded text-sm pl-2 w-full h-10 outline-none  ${
                                                  touched.email && errors.email
                                                    ? "is-invalid"
                                                    : ""
                                                }`}
                                              />
                                              <ErrorMessage
                                                component="div"
                                                name="email"
                                                className="text-red-700 font-normal font-base text-left"
                                              />
                                            </div>
                                          </div>

                                          <div className="flex flex-col  py-2">
                                            <div className="flex w-full mt-1 rounded bg-white">
                                              <Field
                                                name="email"
                                                className={`rounded text-sm pl-2 w-full h-10 outline-none  ${
                                                  touched.email && errors.email
                                                    ? "is-invalid"
                                                    : ""
                                                }`}
                                              />
                                              <ErrorMessage
                                                component="div"
                                                name="email"
                                                className="text-red-700 font-normal font-base text-left"
                                              />
                                            </div>
                                          </div>

                                          <div className="flex flex-col  py-2">
                                            <div className="flex mt-1  rounded bg-white">
                                              <Field
                                                name="phoneNumber"
                                                className={`rounded pl-2   w-full h-10 outline-none  ${
                                                  touched.phoneNumber &&
                                                  errors.phoneNumber
                                                    ? "is-invalid"
                                                    : ""
                                                }`}
                                              />
                                              <ErrorMessage
                                                component="div"
                                                name="phoneNumber"
                                                className="text-red-700 font-normal font-base text-left"
                                              />
                                            </div>
                                          </div>
                                          <button className="h-11 mt-1 px-4 border-2 border-[#312245] rounded-lg">
                                            Add another Service
                                          </button>
                                        </div>
                                      </div>

                                      <div className="flex col-span-3 flex-col  py-2">
                                        <label
                                          htmlFor="currentAddress"
                                          className="text-sm font-medium leading-4 text-[#5A4278]"
                                        >
                                          Current Address
                                        </label>
                                        <div className="flex mt-1  rounded w-full bg-white">
                                          <Field
                                            name="currentAddress"
                                            className={`rounded pl-2   w-full h-10 outline-none  ${
                                              touched.currentAddress &&
                                              errors.currentAddress
                                                ? "is-invalid"
                                                : ""
                                            }`}
                                          />
                                          <ErrorMessage
                                            component="div"
                                            name="currentAddress"
                                            className="text-red-700 font-normal font-base text-left"
                                          />
                                        </div>
                                      </div>
                                      <div className="flex flex-col  py-2">
                                        <label
                                          htmlFor="gender"
                                          className="text-sm font-medium leading-4 text-[#5A4278]"
                                        >
                                          Country Name
                                        </label>
                                        <Field
                                          as="select"
                                          name="gender"
                                          className={`border h-10 mt-1 pr-5 text-[#11141C] border-1 border-[#B8B7B6] rounded   pl-2   outline-none  ${
                                            touched.gender && errors.gender
                                              ? "is-invalid"
                                              : ""
                                          }`}
                                        >
                                          <option>Select</option>
                                          <option value="male">Pakistan</option>
                                          <option value="female">US</option>
                                          <option value="other">other</option>
                                        </Field>
                                        <ErrorMessage
                                          component="div"
                                          name="gender"
                                          className="text-red-700 font-normal font-base text-left"
                                        />
                                      </div>
                                    </div>
                                  </div>
                                </>
                              ) : (
                                <>
                                  <div className="rounded-[16px] mt-5 px-5 py-3 border border-[rgba(46, 6, 100, 0.08)] bg-[#D9CFE3]">
                                    <h1 className="text-base font-bold text-[#312245]">
                                      {info} Information
                                    </h1>
                                    <div className="grid lg:grid-cols-4 mt-2 md:grid-cols-3 grid-cols-1  gap-x-1 lg:gap-x-3">
                                      <div className="flex lg:col-span-2 flex-col  py-2">
                                        <label
                                          htmlFor="name"
                                          className="text-sm font-medium leading-4 text-[#5A4278]"
                                        >
                                          Full Name
                                        </label>
                                        <div className="flex mt-1 rounded bg-white">
                                          <Field
                                            name="name"
                                            className={`rounded pl-2   w-full h-10 outline-none  ${
                                              touched.name && errors.name
                                                ? "is-invalid"
                                                : ""
                                            }`}
                                          />
                                          <ErrorMessage
                                            component="div"
                                            name="name"
                                            className="text-red-700 font-normal font-base text-left"
                                          />
                                        </div>
                                      </div>

                                      <div className="flex flex-col  py-2">
                                        <label
                                          htmlFor="DOB"
                                          className="text-sm font-medium leading-4 text-[#5A4278]"
                                        >
                                          Date of Birth
                                        </label>
                                        <div className="flex mt-1 rounded bg-white">
                                          <Field
                                            name="DOB"
                                            type="date"
                                            className={`rounded pl-2 w-full h-10 outline-none  ${
                                              touched.DOB && errors.DOB
                                                ? "is-invalid"
                                                : ""
                                            }`}
                                          />
                                          <ErrorMessage
                                            component="div"
                                            name="DOB"
                                            className="text-red-700 font-normal font-base text-left"
                                          />
                                        </div>
                                      </div>

                                      <div className="flex flex-col  py-2">
                                        <label
                                          htmlFor="gender"
                                          className="text-sm font-medium leading-4 text-[#5A4278]"
                                        >
                                          Gender
                                        </label>
                                        <Field
                                          as="select"
                                          name="gender"
                                          className={`border h-10 mt-1 pr-5 text-[#11141C] border-1 border-[#B8B7B6] rounded   pl-2   outline-none  ${
                                            touched.gender && errors.gender
                                              ? "is-invalid"
                                              : ""
                                          }`}
                                        >
                                          <option>Select</option>
                                          <option value="male">male</option>
                                          <option value="female">female</option>
                                          <option value="other">other</option>
                                        </Field>
                                        <ErrorMessage
                                          component="div"
                                          name="gender"
                                          className="text-red-700 font-normal font-base text-left"
                                        />
                                      </div>

                                      <div className="flex flex-col  py-2">
                                        <label
                                          htmlFor="email"
                                          className="text-sm font-medium leading-4 text-[#5A4278]"
                                        >
                                          Email
                                        </label>
                                        <div className="flex w-full mt-1 rounded bg-white">
                                          <Field
                                            name="email"
                                            className={`rounded text-sm pl-2 w-full h-10 outline-none  ${
                                              touched.email && errors.email
                                                ? "is-invalid"
                                                : ""
                                            }`}
                                          />
                                          <ErrorMessage
                                            component="div"
                                            name="email"
                                            className="text-red-700 font-normal font-base text-left"
                                          />
                                        </div>
                                      </div>

                                      <div className="flex flex-col  py-2">
                                        <label
                                          htmlFor="phoneNumber"
                                          className="text-sm font-medium leading-4 text-[#5A4278]"
                                        >
                                          Phone Number
                                        </label>
                                        <div className="flex mt-1  rounded bg-white">
                                          <Field
                                            name="phoneNumber"
                                            className={`rounded pl-2   w-full h-10 outline-none  ${
                                              touched.phoneNumber &&
                                              errors.phoneNumber
                                                ? "is-invalid"
                                                : ""
                                            }`}
                                          />
                                          <ErrorMessage
                                            component="div"
                                            name="phoneNumber"
                                            className="text-red-700 font-normal font-base text-left"
                                          />
                                        </div>
                                      </div>

                                      <div className="flex lg:col-span-2 flex-col py-2">
                                        <label
                                          htmlFor="emergencyContactInfo"
                                          className="text-sm font-medium truncate whitespace-nowrap leading-4 text-[#5A4278]"
                                        >
                                          Emergency Contact Information
                                        </label>
                                        <div className="flex mt-1  rounded w-full bg-white">
                                          <Field
                                            name="emergencyContactInfo"
                                            className={`rounded pl-2   w-full h-10 outline-none  ${
                                              touched.emergencyContactInfo &&
                                              errors.emergencyContactInfo
                                                ? "is-invalid"
                                                : ""
                                            }`}
                                          />
                                          <ErrorMessage
                                            component="div"
                                            name="emergencyContactInfo"
                                            className="text-red-700 font-normal font-base text-left"
                                          />
                                        </div>
                                      </div>

                                      {info !== "Staff Member" ? null : (
                                        <>
                                          <div className="flex lg:col-span-2 flex-col py-2">
                                            <label
                                              htmlFor="dashboardId"
                                              className="text-sm font-medium truncate whitespace-nowrap leading-4 text-[#5A4278]"
                                            >
                                              Dashboard Id
                                            </label>
                                            <div className="flex mt-1  rounded w-full bg-white">
                                              <Field
                                                name="dashboardId"
                                                className={`rounded pl-2   w-full h-10 outline-none  ${
                                                  touched.dashboardId &&
                                                  errors.dashboardId
                                                    ? "is-invalid"
                                                    : ""
                                                }`}
                                              />
                                              <ErrorMessage
                                                component="div"
                                                name="dashboardId"
                                                className="text-red-700 font-normal font-base text-left"
                                              />
                                            </div>
                                          </div>
                                          <div className="flex lg:col-span-2 flex-col py-2">
                                            <label
                                              htmlFor="dashboardPassword"
                                              className="text-sm font-medium truncate whitespace-nowrap leading-4 text-[#5A4278]"
                                            >
                                              Dashboard Password
                                            </label>
                                            <div className="flex mt-1  rounded w-full bg-white">
                                              <Field
                                                name="dashboardPassword"
                                                className={`rounded pl-2   w-full h-10 outline-none  ${
                                                  touched.dashboardPassword &&
                                                  errors.dashboardPassword
                                                    ? "is-invalid"
                                                    : ""
                                                }`}
                                              />
                                              <ErrorMessage
                                                component="div"
                                                name="dashboardPassword"
                                                className="text-red-700 font-normal font-base text-left"
                                              />
                                            </div>
                                          </div>
                                        </>
                                      )}

                                      <div className="flex col-span-full flex-col  py-2">
                                        <label
                                          htmlFor="currentAddress"
                                          className="text-sm font-medium leading-4 text-[#5A4278]"
                                        >
                                          Current Address
                                        </label>
                                        <div className="flex mt-1  rounded w-full bg-white">
                                          <Field
                                            name="currentAddress"
                                            className={`rounded pl-2   w-full h-10 outline-none  ${
                                              touched.currentAddress &&
                                              errors.currentAddress
                                                ? "is-invalid"
                                                : ""
                                            }`}
                                          />
                                          <ErrorMessage
                                            component="div"
                                            name="currentAddress"
                                            className="text-red-700 font-normal font-base text-left"
                                          />
                                        </div>
                                      </div>

                                      {info === "Tenant" ? (
                                        <>
                                          <div className="flex flex-col  py-2">
                                            <label
                                              htmlFor="currentEmployer"
                                              className="text-sm font-medium leading-4 text-[#5A4278]"
                                            >
                                              Current Employer
                                            </label>
                                            <div className="flex w-full mt-1 rounded bg-white">
                                              <Field
                                                name="currentEmployer"
                                                className={`rounded pl-2   w-full h-10 outline-none  ${
                                                  touched.currentEmployer &&
                                                  errors.currentEmployer
                                                    ? "is-invalid"
                                                    : ""
                                                }`}
                                              />
                                              <ErrorMessage
                                                component="div"
                                                name="currentEmployer"
                                                className="text-red-700 font-normal font-base text-left"
                                              />
                                            </div>
                                          </div>

                                          <div className="flex flex-col  py-2">
                                            <label
                                              htmlFor="jobTitle"
                                              className="text-sm font-medium leading-4 text-[#5A4278]"
                                            >
                                              Job Title
                                            </label>
                                            <div className="flex mt-1  rounded bg-white">
                                              <Field
                                                name="jobTitle"
                                                className={`rounded pl-2   w-full h-10 outline-none  ${
                                                  touched.jobTitle &&
                                                  errors.jobTitle
                                                    ? "is-invalid"
                                                    : ""
                                                }`}
                                              />
                                              <ErrorMessage
                                                component="div"
                                                name="jobTitle"
                                                className="text-red-700 font-normal font-base text-left"
                                              />
                                            </div>
                                          </div>

                                          <div className="flex lg:col-span-2 flex-col  py-2">
                                            <label
                                              htmlFor="monthlyIncome"
                                              className="text-sm font-medium leading-4 text-[#5A4278]"
                                            >
                                              Monthly Income
                                            </label>
                                            <div className="flex mt-1  rounded w-full bg-white">
                                              <Field
                                                name="monthlyIncome"
                                                placeholder="-- -- --"
                                                className={`rounded pl-2   w-full h-10 outline-none  ${
                                                  touched.monthlyIncome &&
                                                  errors.monthlyIncome
                                                    ? "is-invalid"
                                                    : ""
                                                }`}
                                              />
                                              <ErrorMessage
                                                component="div"
                                                name="monthlyIncome"
                                                className="text-red-700 font-normal font-base text-left"
                                              />
                                            </div>
                                          </div>
                                        </>
                                      ) : null}
                                    </div>
                                  </div>
                                </>
                              )}

                              {info === "Tenant" ? (
                                <>
                                  <div className="rounded-[16px] px-5 mt-5 py-3 border border-[rgba(46, 6, 100, 0.08)] bg-[#D9CFE3]">
                                    <h1 className="text-base font-bold text-[#312245]">
                                      Reference Information
                                    </h1>
                                    <div className="grid lg:grid-cols-4 mt-2 md:grid-cols-2 grid-cols-1  gap-x-1 lg:gap-x-3">
                                      <div className="flex lg:col-span-3 flex-col  py-2">
                                        <label
                                          htmlFor="name"
                                          className="text-sm font-medium leading-4 text-[#5A4278]"
                                        >
                                          Reference Full Name
                                        </label>
                                        <div className="flex mt-1 rounded bg-white">
                                          <Field
                                            name="name"
                                            className={`rounded pl-2   w-full h-10 outline-none  ${
                                              touched.name && errors.name
                                                ? "is-invalid"
                                                : ""
                                            }`}
                                          />
                                          <ErrorMessage
                                            component="div"
                                            name="name"
                                            className="text-red-700 font-normal font-base text-left"
                                          />
                                        </div>
                                      </div>

                                      <div className="flex flex-col py-2">
                                        <label
                                          htmlFor="gender"
                                          className="text-sm font-medium leading-4 text-[#5A4278]"
                                        >
                                          Gender
                                        </label>
                                        <Field
                                          as="select"
                                          name="gender"
                                          className={`border h-10 mt-1 pr-5 text-[#11141C] border-1 border-[#B8B7B6] rounded   pl-2   outline-none  ${
                                            touched.gender && errors.gender
                                              ? "is-invalid"
                                              : ""
                                          }`}
                                        >
                                          <option>Select</option>
                                          <option value="male">male</option>
                                          <option value="female">female</option>
                                          <option value="other">other</option>
                                        </Field>
                                        <ErrorMessage
                                          component="div"
                                          name="gender"
                                          className="text-red-700 font-normal font-base text-left"
                                        />
                                      </div>

                                      <div className="flex lg:col-span-2 flex-col  py-2">
                                        <label
                                          htmlFor="email"
                                          className="text-sm font-medium leading-4 text-[#5A4278]"
                                        >
                                          Email
                                        </label>
                                        <div className="flex w-full mt-1 rounded bg-white">
                                          <Field
                                            name="email"
                                            className={`rounded text-sm pl-2 w-full h-10 outline-none  ${
                                              touched.email && errors.email
                                                ? "is-invalid"
                                                : ""
                                            }`}
                                          />
                                          <ErrorMessage
                                            component="div"
                                            name="email"
                                            className="text-red-700 font-normal font-base text-left"
                                          />
                                        </div>
                                      </div>

                                      <div className="flex lg:col-span-2 flex-col  py-2">
                                        <label
                                          htmlFor="phoneNumber"
                                          className="text-sm font-medium leading-4 text-[#5A4278]"
                                        >
                                          Phone Number
                                        </label>
                                        <div className="flex mt-1  rounded bg-white">
                                          <Field
                                            name="phoneNumber"
                                            className={`rounded pl-2   w-full h-10 outline-none  ${
                                              touched.phoneNumber &&
                                              errors.phoneNumber
                                                ? "is-invalid"
                                                : ""
                                            }`}
                                          />
                                          <ErrorMessage
                                            component="div"
                                            name="phoneNumber"
                                            className="text-red-700 font-normal font-base text-left"
                                          />
                                        </div>
                                      </div>
                                    </div>
                                  </div>

                                  <div className="rounded-[16px] px-5 mt-5 py-3 border border-[rgba(46, 6, 100, 0.08)] bg-[#D9CFE3]">
                                    <h1 className="text-base font-bold text-[#312245]">
                                      Lease Details
                                    </h1>
                                    <div className="grid lg:grid-cols-3 mt-2 md:grid-cols-2 grid-cols-1  gap-x-1 lg:gap-x-3">
                                      <div className="flex lg:col-span-full flex-col  py-2">
                                        <label
                                          htmlFor="name"
                                          className="text-sm font-medium leading-4 text-[#5A4278]"
                                        >
                                          Property Name/ID
                                        </label>
                                        <div className="flex mt-1 rounded bg-white">
                                          <Field
                                            name="name"
                                            className={`rounded pl-2   w-full h-10 outline-none  ${
                                              touched.name && errors.name
                                                ? "is-invalid"
                                                : ""
                                            }`}
                                          />
                                          <ErrorMessage
                                            component="div"
                                            name="name"
                                            className="text-red-700 font-normal font-base text-left"
                                          />
                                        </div>
                                      </div>

                                      <div className="flex flex-col  py-2">
                                        <label
                                          htmlFor="DOB"
                                          className="text-sm font-medium leading-4 text-[#5A4278]"
                                        >
                                          Lease Start Date
                                        </label>
                                        <div className="flex mt-1 rounded bg-white">
                                          <Field
                                            name="DOB"
                                            type="date"
                                            className={`rounded pl-2 w-full h-10 outline-none  ${
                                              touched.DOB && errors.DOB
                                                ? "is-invalid"
                                                : ""
                                            }`}
                                          />
                                          <ErrorMessage
                                            component="div"
                                            name="DOB"
                                            className="text-red-700 font-normal font-base text-left"
                                          />
                                        </div>
                                      </div>

                                      <div className="flex flex-col  py-2">
                                        <label
                                          htmlFor="DOB"
                                          className="text-sm font-medium leading-4 text-[#5A4278]"
                                        >
                                          Lease End Date
                                        </label>
                                        <div className="flex mt-1 rounded bg-white">
                                          <Field
                                            name="DOB"
                                            type="date"
                                            className={`rounded pl-2 w-full h-10 outline-none  ${
                                              touched.DOB && errors.DOB
                                                ? "is-invalid"
                                                : ""
                                            }`}
                                          />
                                          <ErrorMessage
                                            component="div"
                                            name="DOB"
                                            className="text-red-700 font-normal font-base text-left"
                                          />
                                        </div>
                                      </div>

                                      <div className="flex flex-col  py-2">
                                        <label
                                          htmlFor="phoneNumber"
                                          className="text-sm font-medium leading-4 text-[#5A4278]"
                                        >
                                          Lease Duration
                                        </label>
                                        <div className="flex mt-1  rounded bg-white">
                                          <Field
                                            name="phoneNumber"
                                            className={`rounded pl-2   w-full h-10 outline-none  ${
                                              touched.phoneNumber &&
                                              errors.phoneNumber
                                                ? "is-invalid"
                                                : ""
                                            }`}
                                          />
                                          <ErrorMessage
                                            component="div"
                                            name="phoneNumber"
                                            className="text-red-700 font-normal font-base text-left"
                                          />
                                        </div>
                                      </div>
                                    </div>
                                  </div>

                                  <div className="flex mt-2 flex-col py-2">
                                    <label
                                      htmlFor="description"
                                      className="text-sm font-medium leading-4 text-[#5A4278]"
                                    >
                                      Additional Information
                                    </label>
                                    <Field
                                      name="description"
                                      as="textarea"
                                      rows="3"
                                      className={`resize-none rounded mt-1 pl-2  outline-none  ${
                                        touched.description &&
                                        errors.description
                                          ? "is-invalid"
                                          : ""
                                      }`}
                                    />
                                    <ErrorMessage
                                      component="div"
                                      name="description"
                                      className="text-red-700 font-normal font-base text-left"
                                    />
                                  </div>
                                </>
                              ) : null}
                            </div>

                            {info === "landloard landloard & Property" ? (
                              <>
                                <div className="px-3">
                                  <div className="rounded-[16px] px-5 mt-5 py-3 border border-[rgba(46, 6, 100, 0.08)] bg-[#D9CFE3]">
                                    <h1 className="text-base font-bold text-[#312245]">
                                      Financial Information
                                    </h1>
                                    <div className="grid lg:grid-cols-4 mt-2 md:grid-cols-1 grid-cols-1  gap-x-1 lg:gap-x-3">
                                      <div className="flex lg:col-span-2 flex-col  py-2">
                                        <label
                                          htmlFor="name"
                                          className="text-sm font-medium leading-4 text-[#5A4278]"
                                        >
                                          Bank Account Details (if relevant for
                                          rent transfers)
                                        </label>
                                        <div className="flex mt-1 rounded bg-white">
                                          <Field
                                            name="name"
                                            className={`rounded pl-2   w-full h-10 outline-none  ${
                                              touched.name && errors.name
                                                ? "is-invalid"
                                                : ""
                                            }`}
                                          />
                                          <ErrorMessage
                                            component="div"
                                            name="name"
                                            className="text-red-700 font-normal font-base text-left"
                                          />
                                        </div>
                                      </div>

                                      <div className="flex lg:col-span-2 flex-col  py-2">
                                        <label
                                          htmlFor="phoneNumber"
                                          className="text-sm font-medium leading-4 text-[#5A4278]"
                                        >
                                          Tax Identification Number (if
                                          applicable)
                                        </label>
                                        <div className="flex mt-1  rounded bg-white">
                                          <Field
                                            name="phoneNumber"
                                            className={`rounded pl-2   w-full h-10 outline-none  ${
                                              touched.phoneNumber &&
                                              errors.phoneNumber
                                                ? "is-invalid"
                                                : ""
                                            }`}
                                          />
                                          <ErrorMessage
                                            component="div"
                                            name="phoneNumber"
                                            className="text-red-700 font-normal font-base text-left"
                                          />
                                        </div>
                                      </div>
                                    </div>
                                  </div>
                                </div>
                                <div className="p-3 mt-5 rounded-2xl bg-[#E4DFEB]">
                                  <div className="w-full ">
                                    <FileInput
                                      state={"Property Pictures or Videos"}
                                    />
                                  </div>
                                  <div className="flex md:flex-row flex-col justify-between lg:gap-x-0 md:gap-x-5 items-center">
                                    <div className="flex lg:w-3/5 w-full flex-col py-3">
                                      <label
                                        htmlFor="name"
                                        className="text-sm font-medium leading-4 text-[#5A4278]"
                                      >
                                        Name
                                      </label>
                                      <Field
                                        name="name"
                                        className={`rounded mt-1 h-10pl-2 h-10 outline-none  ${
                                          touched.name && errors.name
                                            ? "is-invalid"
                                            : ""
                                        }`}
                                      />
                                      <ErrorMessage
                                        component="div"
                                        name="name"
                                        className="text-red-700 font-normal font-base text-left"
                                      />
                                    </div>
                                    <div className="lg:w-60 w-full">
                                      <p className="text-sm font-medium leading-4 text-[#5A4278]">
                                        Feature Effect
                                      </p>
                                      <button className="md:w-60 w-full mt-1 text-white bg-[#653E92] h-10 rounded-lg">
                                        SUPER HOT
                                      </button>
                                    </div>
                                  </div>
                                  <div className="flex flex-col mt-3">
                                    <label
                                      htmlFor="location"
                                      className="text-sm font-medium leading-4 text-[#5A4278]"
                                    >
                                      location
                                    </label>
                                    <Field
                                      name="location"
                                      className={`rounded mt-1 pl-2 h-10 outline-none  ${
                                        touched.location && errors.location
                                          ? "is-invalid"
                                          : ""
                                      }`}
                                    />
                                    <ErrorMessage
                                      component="div"
                                      name="location"
                                      className="text-red-700 font-normal font-base text-left"
                                    />
                                  </div>

                                  <div className="flex flex-col py-3">
                                    <label
                                      htmlFor="description"
                                      className="text-sm font-medium leading-4 text-[#5A4278]"
                                    >
                                      description
                                    </label>
                                    <Field
                                      name="description"
                                      as="textarea"
                                      rows="3"
                                      className={`resize-none rounded mt-1 pl-2 outline-none  ${
                                        touched.description &&
                                        errors.description
                                          ? "is-invalid"
                                          : ""
                                      }`}
                                    />
                                    <ErrorMessage
                                      component="div"
                                      name="description"
                                      className="text-red-700 font-normal font-base text-left"
                                    />
                                  </div>

                                  <div className="grid lg:grid-cols-5 md:grid-cols-2 grid-cols-1 gap-x-5">
                                    <div className="flex flex-col mt-3 py-3">
                                      <label
                                        htmlFor="beds"
                                        className="text-sm font-medium leading-4 text-[#5A4278]"
                                      >
                                        Beds
                                      </label>
                                      <div className="flex px-2 mt-1 rounded bg-white">
                                        <img src={bed} alt="bed" />
                                        <Field
                                          name="beds"
                                          className={`rounded pl-2 w-full h-10 outline-none  ${
                                            touched.beds && errors.beds
                                              ? "is-invalid"
                                              : ""
                                          }`}
                                        />
                                        <ErrorMessage
                                          component="div"
                                          name="beds"
                                          className="text-red-700 font-normal font-base text-left"
                                        />
                                      </div>
                                    </div>

                                    <div className="flex flex-col mt-3 py-3">
                                      <label
                                        htmlFor="bathrooms"
                                        className="text-sm font-medium leading-4 text-[#5A4278]"
                                      >
                                        Bathrooms
                                      </label>
                                      <div className="flex px-2 mt-1 rounded bg-white">
                                        <img src={bath} alt="bed" />
                                        <Field
                                          name="bathrooms"
                                          className={`rounded pl-2 w-full h-10 outline-none  ${
                                            touched.bathrooms &&
                                            errors.bathrooms
                                              ? "is-invalid"
                                              : ""
                                          }`}
                                        />
                                        <ErrorMessage
                                          component="div"
                                          name="bathrooms"
                                          className="text-red-700 font-normal font-base text-left"
                                        />
                                      </div>
                                    </div>

                                    <div className="flex flex-col mt-3 py-3">
                                      <label
                                        htmlFor="rooms"
                                        className="text-sm font-medium leading-4 text-[#5A4278]"
                                      >
                                        Rooms
                                      </label>
                                      <div className="flex px-2 mt-1 rounded bg-white">
                                        <img src={rooms} alt="bed" />
                                        <Field
                                          name="rooms"
                                          className={`rounded pl-2 w-full h-10 outline-none  ${
                                            touched.rooms && errors.rooms
                                              ? "is-invalid"
                                              : ""
                                          }`}
                                        />
                                        <ErrorMessage
                                          component="div"
                                          name="rooms"
                                          className="text-red-700 font-normal font-base text-left"
                                        />
                                      </div>
                                    </div>

                                    <div className="flex lg:col-span-2 flex-col mt-3 py-3">
                                      <label
                                        htmlFor="area"
                                        className="text-sm font-medium leading-4 text-[#5A4278]"
                                      >
                                        Area
                                      </label>
                                      <div className="flex px-2 mt-1 rounded bg-white">
                                        <img src={area} alt="bed" />
                                        <Field
                                          name="area"
                                          className={`rounded pl-2 w-full h-10 outline-none  ${
                                            touched.area && errors.area
                                              ? "is-invalid"
                                              : ""
                                          }`}
                                        />
                                        <ErrorMessage
                                          component="div"
                                          name="area"
                                          className="text-red-700 font-normal font-base text-left"
                                        />
                                      </div>
                                    </div>
                                  </div>

                                  <div className="flex flex-col py-3">
                                    <label
                                      htmlFor="email"
                                      className="text-sm font-medium leading-4 text-[#5A4278]"
                                    >
                                      Email
                                    </label>
                                    <Field
                                      name="email"
                                      className={`rounded mt-1 pl-2 h-10 outline-none  ${
                                        touched.email && errors.email
                                          ? "is-invalid"
                                          : ""
                                      }`}
                                    />
                                    <ErrorMessage
                                      component="div"
                                      name="email"
                                      className="text-red-700 font-normal font-base text-left"
                                    />
                                  </div>

                                  <div className="flex flex-col mt-3 py-3">
                                    <label
                                      htmlFor="phoneNumber"
                                      className="text-sm font-medium leading-4 text-[#5A4278]"
                                    >
                                      Phone Number
                                    </label>
                                    <Field
                                      name="phoneNumber"
                                      className={`rounded mt-1 pl-2 h-10 outline-none  ${
                                        touched.phoneNumber &&
                                        errors.phoneNumber
                                          ? "is-invalid"
                                          : ""
                                      }`}
                                    />
                                    <ErrorMessage
                                      component="div"
                                      name="phoneNumber"
                                      className="text-red-700 font-normal font-base text-left"
                                    />
                                  </div>

                                  <div className="flex flex-col mt-3 py-3">
                                    <label
                                      htmlFor="whatsApp"
                                      className="text-sm font-medium leading-4 text-[#5A4278]"
                                    >
                                      WhatsApp
                                    </label>
                                    <Field
                                      name="whatsApp"
                                      type="text"
                                      className={`rounded mt-1 pl-2 h-10 outline-none  ${
                                        touched.whatsApp && errors.whatsApp
                                          ? "is-invalid"
                                          : ""
                                      }`}
                                    />
                                    <ErrorMessage
                                      component="div"
                                      name="whatsApp"
                                      className="text-red-700 font-normal font-base text-left"
                                    />
                                  </div>

                                  <div className="flex flex-col mt-3 py-3">
                                    <label
                                      htmlFor="whatsApp"
                                      className="text-sm font-medium leading-4 text-[#5A4278]"
                                    >
                                      Map Location
                                    </label>

                                    <div className="mt-3">
                                      <img src={Map} alt="map" />
                                    </div>
                                  </div>
                                </div>
                              </>
                            ) : null}
                          </div>

                          <div className="flex justify-end gap-4 pt-8">
                            <button
                              type="button"
                              className="md:text-sm text-xs text-[#312245] font-bold px-4 py-2 w-40 h-11  border-2 border-[#312245] rounded"
                              onClick={() => setShowModal(false)}
                            >
                              Cancel
                            </button>
                            <button
                              type="submit"
                              disabled={isSubmitting}
                              className="flex shadow-xl items-center justify-center font-bold text-sm px-5 py-2 w-auto h-11 bg-[#17062F]  text-white rounded"
                            >
                              <p className="md:text-sm text-xs whitespace-nowrap">
                                {`Add ${info}`}
                              </p>
                            </button>
                          </div>
                        </Form>
                      )}
                    </Formik>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="opacity-60 fixed inset-0 z-40 bg-black"></div>
        </>
      ) : null}
    </>
  );
}
