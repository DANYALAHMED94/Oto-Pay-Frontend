import React, { useState } from "react";
import Cancel from "../../assets/cancel.svg";
// import * as Yup from "yup";
import { Formik, Field, Form, ErrorMessage } from "formik";
import FileInput from "./FileInput";
import PropertyModalCard from "../global/PropertyModalCard";

export default function TenantRegistrationForm({ info, showModal,setShowModal }) {
  // const [file, setFile] = useState();

  // const [info, setInfo] = useState("Staff Member");

  // const handlefile = (event) => {
  //   setFile(event.target.files[0]);
  // };
  // const handleFormData = (values) => {
  //   var formData = new FormData();
  //   formData.append("name", values?.name);
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
          <div className="hide-scrollbar mt-20 overflow-x-hidden overflow-y-auto fixed inset-0 z-50 outline-none focus:outline-none">
            <div className="relative lg:w-[1200px] xl:w-[1400px] md:w-[740px] my-6 mx-auto max-w-5xl px-5">
              {/*content*/}
              <div className="border-0 rounded-lg shadow-lg relative flex flex-col w-full bg-white outline-none focus:outline-none pb-5">
                {/*header*/}
                <div className="flex items-center justify-between p-5">
                  {info === "Tenant" ? (
                    <h1
                      className="md:text-2xl w-full text-center text-sm                 
                         text-[#5A4278]"
                    >
                      Tenant Registration Form
                    </h1>
                  ) : (
                    <h1
                      className="md:text-2xl w-full text-center text-sm                 
                         text-[#5A4278]"
                    >
                      Adding New Staff Member
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
                <div className="relative px-3 flex-auto ">
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
                          <div className="p-3 rounded-2xl bg-[#E4DFEB]">
                            <div className="w-full ">
                              <FileInput info={info} />
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

                                {info === "Tenant" ? null : (
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
                                            touched.jobTitle && errors.jobTitle
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
                                      touched.description && errors.description
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
                              className="flex shadow-xl items-center justify-center font-bold text-sm px-4 py-2 w-40 h-11 bg-[#17062F]  text-white rounded"
                            >
                              <p className="ml-2 md:text-sm text-xs">
                                Add Tenant
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