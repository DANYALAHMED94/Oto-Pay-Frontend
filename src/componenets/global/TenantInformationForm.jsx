import React, { useState } from "react";
import { Formik, Field, Form, ErrorMessage } from "formik";
import Profile from "../../assets/profile.svg";

export default function TenatnformationForm({
  setProperty,
  setCurrentStep,
  complete,
  landlordTenants,
}) {
  const [previewImage, setPreviewImage] = useState(null);
  //   const [file, setFile] = useState(null);

  const handlefile = (event) => {
    // setFile(event.target.files[0]);
    setPreviewImage(URL.createObjectURL(event.target.files[0]));
  };

  return (
    <div className="border-0 mt-7 rounded-lg relative flex flex-col w-full outline-none focus:outline-none pb-5">
      {/*header*/}

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
                <div className="p-5 rounded-2xl bg-[#E0E0E0]">
                {landlordTenants === "PropertyDetails" ?(
                  <h1 className="text-2xl font-bold text-[#18171B]">
                    Your Information
                  </h1>): <h1 className="text-2xl font-bold text-[#18171B]">
                    Tenant Information
                  </h1>}
                  <div className="flex justify-center items-center my-10">
                    <div className="relative h-[180px] w-[180px] inline-block">
                      <div className="h-full absolute w-full rounded-full border">
                        {previewImage ? (
                          <img
                            src={previewImage}
                            alt="Profile"
                            className="h-full w-full rounded-full"
                          />
                        ) : (
                          <img
                            src={Profile}
                            alt="Profile"
                            className="h-full w-full rounded-full"
                          />
                        )}
                        <div className="flex w-full bottom-0 right-0 absolute justify-end">
                          <label
                            htmlFor="profile-image"
                            className="text-[#7A7A79] rounded-[16px] h-6 p-6 w-6 bg-white lg:text-sm text-xs"
                          >
                            <svg
                              width="30"
                              height="30"
                              viewBox="0 0 24 24"
                              fill="none"
                              xmlns="http://www.w3.org/2000/svg"
                              className="-mt-4 -ml-[14px]"
                            >
                              <g id="Frame">
                                <path
                                  id="Vector"
                                  d="M5 3C3.89 3 3 3.89 3 5V19C3 19.5304 3.21071 20.0391 3.58579 20.4142C3.96086 20.7893 4.46957 21 5 21H19C19.5304 21 20.0391 20.7893 20.4142 20.4142C20.7893 20.0391 21 19.5304 21 19V12H19V19H5V5H12V3H5ZM17.78 4C17.6 4.00152 17.4278 4.07329 17.3 4.2L16.08 5.41L18.58 7.91L19.8 6.7C20.06 6.44 20.06 6 19.8 5.75L18.25 4.2C18.12 4.07 17.95 4 17.78 4ZM15.37 6.12L8 13.5V16H10.5L17.87 8.62L15.37 6.12Z"
                                  fill="#434146"
                                />
                              </g>
                            </svg>
                          </label>
                          <Field name="filename">
                            {({ field }) => (
                              <input
                                type="file"
                                accept="image/*"
                                id="profile-image"
                                {...field}
                                className="hidden border border-1 border-[#B8B7B6] rounded mt-1"
                                onChange={(e) => handlefile(e)}
                              />
                            )}
                          </Field>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="lg:grid lg:grid-cols-3 mt-2 grid-cols-1  gap-x-1 lg:gap-x-3">
                    <div className="flex flex-col  py-2">
                      <label
                        htmlFor="name"
                        className="text-sm font-medium leading-4 text-[#434146]"
                      >
                        Your Full Name
                      </label>
                      <div className="flex mt-1 rounded-lg bg-[#FDFCFF]">
                        <Field
                          name="name"
                          className={`rounded-lg pl-2 p-4 w-full outline-none  ${
                            touched.name && errors.name ? "is-invalid" : ""
                          }`}
                        />
                        <ErrorMessage
                          component="div"
                          name="name"
                          className="text-red-700 font-normal font-base text-left"
                        />
                      </div>
                    </div>
                    {landlordTenants === "PropertyDetails" ?(
                       <div className="flex flex-col  py-2">
                      <label
                        htmlFor="DOB"
                        className="text-sm font-medium leading-4 text-[#434146]"
                      >
                       Landlord Bank Account Number
                      </label>
                      <div className="flex mt-1 rounded-lg bg-white">
                        <Field
                          name="number"
                          type="number"
                          className="rounded-lg pl-2 w-full p-4 outline-none  "
                        />
                        <ErrorMessage
                          component="div"
                          name="DOB"
                          className="text-red-700 font-normal font-base text-left"
                        />
                      </div>
                    </div>):
                   
 <div className="flex flex-col  py-2">
                      <label
                        htmlFor="DOB"
                        className="text-sm font-medium leading-4 text-[#434146]"
                      >
                        Date of Birth
                      </label>
                      <div className="flex mt-1 rounded-lg bg-white">
                        <Field
                          name="DOB"
                          type="date"
                          className={`rounded-lg pl-2 w-full p-4 outline-none  ${
                            touched.DOB && errors.DOB ? "is-invalid" : ""
                          }`}
                        />
                        <ErrorMessage
                          component="div"
                          name="DOB"
                          className="text-red-700 font-normal font-base text-left"
                        />
                      </div>
                    </div> }
                    <div className="flex flex-col py-2">
                      <label
                        htmlFor="gender"
                        className="text-sm font-medium leading-4 text-[#434146]"
                      >
                        Gender
                      </label>
                      <Field
                        as="select"
                        name="gender"
                        className={`mt-1 pr-5 lg:h-full lg:p-0 p-4 text-[#11141C] rounded-lg pl-2 outline-none  ${
                          touched.gender && errors.gender ? "is-invalid" : ""
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
                    {landlordTenants === "PropertyDetails" ?(""):
                      <>
                    <div className="flex flex-col  py-2">
                      <label
                        htmlFor="gender"
                        className="text-sm font-medium leading-4 text-[#434146]"
                      >
                        Current Employer
                      </label>
                      <Field
                        as="select"
                        name="gender"
                        className={`border lg:h-full lg:p-0 p-4 mt-1 pr-5 text-[#11141C] rounded-lg pl-2 outline-none  ${
                          touched.gender && errors.gender ? "is-invalid" : ""
                        }`}
                      >
                        <option>Select</option>
                        <option value="male">Professional</option>
                        <option value="female">No, i'am student</option>
                        <option value="other">other</option>
                      </Field>
                      <ErrorMessage
                        component="div"
                        name="gender"
                        className="text-red-700 font-normal font-base text-left"
                      />
                    </div>

                    <div className="flex flex-col py-2">
                      <label
                        htmlFor="availabilityEnd"
                        className="text-sm font-medium leading-4 text-[#434146]"
                      >
                        Job Title
                      </label>
                      <div className="flex mt-1 rounded-lg bg-white">
                        <Field
                          name="availabilityEnd"
                          className={`rounded-lg pl-2 w-full p-4 outline-none  ${
                            touched.availabilityEnd && errors.availabilityEnd
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
                        htmlFor="availabilityEnd"
                        className="text-sm font-medium leading-4 text-[#434146]"
                      >
                        Monthly Income
                      </label>
                      <div className="flex mt-1 rounded-lg bg-white">
                        <Field
                          name="availabilityEnd"
                          className={`rounded-lg pl-2 w-full p-4 outline-none  ${
                            touched.availabilityEnd && errors.availabilityEnd
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
                    </>}
                    <div className="flex flex-col  py-2">
                      <label
                        htmlFor="email"
                        className="text-sm font-medium leading-4 text-[#434146]"
                      >
                        Your Active Email
                      </label>
                      <div className="flex w-full mt-1 rounded-lg bg-white">
                        <Field
                          name="email"
                          className={`rounded-lg text-sm pl-2 w-full p-4 outline-none  ${
                            touched.email && errors.email ? "is-invalid" : ""
                          }`}
                        />
                        <ErrorMessage
                          component="div"
                          name="email"
                          className="text-red-700 font-normal font-base text-left"
                        />
                      </div>
                    </div>

                    <div className="flex flex-col py-2">
                      <label
                        htmlFor="phoneNumber"
                        className="text-sm font-medium leading-4 text-[#434146]"
                      >
                        Phone Number
                      </label>
                      <div className="flex mt-1 rounded-lg bg-white">
                        <Field
                          name="phoneNumber"
                          className={`rounded-lg pl-2   w-full p-4 outline-none  ${
                            touched.phoneNumber && errors.phoneNumber
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
                        className="text-sm font-medium leading-4 text-[#434146]"
                      >
                        Emergency Contact
                      </label>
                      <div className="flex mt-1 rounded-lg bg-white">
                        <Field
                          name="pricePerHour"
                          className={`rounded-lg pl-2  w-full p-4 outline-none  ${
                            touched.pricePerHour && errors.pricePerHour
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

                    <div className="flex col-span-3 flex-col  py-2">
                      <label
                        htmlFor="currentAddress"
                        className="text-sm font-medium leading-4 text-[#434146]"
                      >
                        Current Address
                      </label>
                      <div className="flex mt-1  rounded-lg w-full bg-white">
                        <Field
                          name="currentAddress"
                          className={`rounded-lg pl-2   w-full p-4 outline-none  ${
                            touched.currentAddress && errors.currentAddress
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
                  </div>
                </div>
                {landlordTenants === "PropertyDetails" ? (""):
                <>
                <div className="p-5 mt-10 rounded-2xl bg-[#E0E0E0]">
                  <h1 className="text-2xl font-bold text-[#18171B]">
                    Tenant Reference Information
                  </h1>
                  <div className="flex justify-center items-center my-10">
                    <div className="relative h-[180px] w-[180px] inline-block">
                      <div className="h-full absolute w-full rounded-full border">
                        {previewImage ? (
                          <img
                            src={previewImage}
                            alt="Profile"
                            className="h-full w-full rounded-full"
                          />
                        ) : (
                          <img
                            src={Profile}
                            alt="Profile"
                            className="h-full w-full rounded-full"
                          />
                        )}
                        <div className="flex w-full bottom-0 right-0 absolute justify-end">
                          <label
                            htmlFor="profile-image"
                            className="text-[#7A7A79] rounded-[16px] h-6 p-6 w-6 bg-white lg:text-sm text-xs"
                          >
                            <svg
                              width="30"
                              height="30"
                              viewBox="0 0 24 24"
                              fill="none"
                              xmlns="http://www.w3.org/2000/svg"
                              className="-mt-4 -ml-[14px]"
                            >
                              <g id="Frame">
                                <path
                                  id="Vector"
                                  d="M5 3C3.89 3 3 3.89 3 5V19C3 19.5304 3.21071 20.0391 3.58579 20.4142C3.96086 20.7893 4.46957 21 5 21H19C19.5304 21 20.0391 20.7893 20.4142 20.4142C20.7893 20.0391 21 19.5304 21 19V12H19V19H5V5H12V3H5ZM17.78 4C17.6 4.00152 17.4278 4.07329 17.3 4.2L16.08 5.41L18.58 7.91L19.8 6.7C20.06 6.44 20.06 6 19.8 5.75L18.25 4.2C18.12 4.07 17.95 4 17.78 4ZM15.37 6.12L8 13.5V16H10.5L17.87 8.62L15.37 6.12Z"
                                  fill="#434146"
                                />
                              </g>
                            </svg>
                          </label>
                          <Field name="filename">
                            {({ field }) => (
                              <input
                                type="file"
                                accept="image/*"
                                id="profile-image"
                                {...field}
                                className="hidden border border-1 border-[#B8B7B6] rounded mt-1"
                                onChange={(e) => handlefile(e)}
                              />
                            )}
                          </Field>
                        </div>
                      </div>
                    </div>
                  </div>

                  <div className="grid lg:grid-cols-2 grid-cols-1 mt-2 gap-x-1 lg:gap-x-3">
                    <div className="flex flex-col  py-2">
                      <label
                        htmlFor="name"
                        className="text-sm font-medium leading-4 text-[#434146]"
                      >
                        Reference Full Name
                      </label>
                      <div className="flex mt-1 rounded-lg bg-[#FDFCFF]">
                        <Field
                          name="name"
                          placeholder="Input text (optional)"
                          className={`rounded-lg pl-2 p-4 w-full placeholder:text-[#8B8A8C] outline-none  ${
                            touched.name && errors.name ? "is-invalid" : ""
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
                        className="text-sm font-medium leading-4 text-[#434146]"
                      >
                        Date of Birth
                      </label>
                      <div className="flex mt-1 rounded-lg bg-white">
                        <Field
                          name="DOB"
                          type="date"
                          className={`rounded-lg pl-2 w-full p-4 outline-none  ${
                            touched.DOB && errors.DOB ? "is-invalid" : ""
                          }`}
                        />
                        <ErrorMessage
                          component="div"
                          name="DOB"
                          className="text-red-700 font-normal font-base text-left"
                        />
                      </div>
                    </div>
                  </div>
                  <div className="lg:grid lg:grid-cols-3 mt-2 grid-cols-1  gap-x-1 lg:gap-x-3">
                    <div className="flex flex-col  py-2">
                      <label
                        htmlFor="email"
                        className="text-sm font-medium leading-4 text-[#434146]"
                      >
                        Email
                      </label>
                      <div className="flex w-full mt-1 rounded-lg bg-white">
                        <Field
                          name="email"
                          placeholder="eg-parker@gmail.com (optional)"
                          className={`rounded-lg text-sm pl-2 w-full p-4 placeholder:text-[#8B8A8C] outline-none  ${
                            touched.email && errors.email ? "is-invalid" : ""
                          }`}
                        />
                        <ErrorMessage
                          component="div"
                          name="email"
                          className="text-red-700 font-normal font-base text-left"
                        />
                      </div>
                    </div>

                    <div className="flex flex-col py-2">
                      <label
                        htmlFor="phoneNumber"
                        className="text-sm font-medium leading-4 text-[#434146]"
                      >
                        Phone Number
                      </label>
                      <div className="flex mt-1 rounded-lg bg-white">
                        <Field
                          name="phoneNumber"
                          placeholder="xxx xxxx xxxx (optional)"
                          className={`rounded-lg pl-2 placeholder:text-[#8B8A8C] w-full p-4 outline-none  ${
                            touched.phoneNumber && errors.phoneNumber
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
                        className="text-sm font-medium leading-4 text-[#434146]"
                      >
                        Emergency Contact
                      </label>
                      <div className="flex mt-1 rounded-lg bg-white">
                        <Field
                          name="pricePerHour"
                          placeholder="xxx xxxx xxxx (optional)"
                          className={`rounded-lg pl-2 placeholder:text-[#8B8A8C] w-full p-4 outline-none  ${
                            touched.pricePerHour && errors.pricePerHour
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

                    <div className="flex col-span-3 flex-col  py-2">
                      <label
                        htmlFor="currentAddress"
                        className="text-sm font-medium leading-4 text-[#434146]"
                      >
                        Current Address
                      </label>
                      <div className="flex mt-1  rounded-lg w-full bg-white">
                        <Field
                          name="currentAddress"
                          placeholder="Enter location here (optional)"
                          className={`rounded-lg pl-2 placeholder:text-[#8B8A8C] w-full p-4 outline-none  ${
                            touched.currentAddress && errors.currentAddress
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
                  </div>
                </div>

                <div className="flex md:flex-row flex-col justify-end gap-4 py-3">
                  <button
                    type="button"
                    className="md:text-sm text-xs text-[#312245] font-bold lg:w-[244px] px-6 py-3 h-12 mt-3 border-2 border-[#312245] rounded-lg"
                    // onClick={() => setShowModal(false)}
                  >
                    Go, Back
                  </button>

                  {!complete && (
                    <button
                      type="button"
                      // disabled={isSubmitting}
                      onClick={() => {
                        setProperty("uploadAgreement");
                        setCurrentStep((prev) => prev + 1);
                      }}
                      className="flex items-center justify-center lg:w-[244px] font-bold text-sm px-6 py-4 h-12 bg-[#17062F] mt-3 text-white rounded-lg"
                    >
                      <p className="ml-2 md:text-sm text-xs">Continue</p>
                      <svg
                        width="24"
                        height="24"
                        viewBox="0 0 24 24"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <g id="Frame">
                          <path
                            id="Vector"
                            d="M16.15 13.001H5C4.71667 13.001 4.479 12.905 4.287 12.713C4.095 12.521 3.99934 12.2837 4 12.001C4 11.7177 4.096 11.48 4.288 11.288C4.48 11.096 4.71734 11.0004 5 11.001H16.15L13.3 8.15104C13.1 7.95104 13.004 7.71771 13.012 7.45104C13.02 7.18437 13.116 6.95104 13.3 6.75104C13.5 6.55104 13.7377 6.4467 14.013 6.43804C14.2883 6.42937 14.5257 6.52537 14.725 6.72604L19.3 11.301C19.4 11.401 19.471 11.5094 19.513 11.626C19.555 11.7427 19.5757 11.8677 19.575 12.001C19.575 12.1344 19.554 12.2594 19.512 12.376C19.47 12.4927 19.3993 12.601 19.3 12.701L14.725 17.276C14.525 17.476 14.2877 17.572 14.013 17.564C13.7383 17.556 13.5007 17.4517 13.3 17.251C13.1167 17.051 13.0207 16.8177 13.012 16.551C13.0033 16.2844 13.0993 16.051 13.3 15.851L16.15 13.001Z"
                            fill="#FDFCFF"
                          />
                        </g>
                      </svg>
                    </button>
                  )}
                </div>
                </>}
              </Form>
            )}
          </Formik>
        </div>
      </div>
    </div>
  );
}
