import React from "react";
import Cancel from "../../assets/cancel.svg";
// import * as Yup from "yup";
import { Formik, Field, Form, ErrorMessage } from "formik";
import FileInput from "./FileInput";
import bed from "../../assets/bed.svg";
import bath from "../../assets/bath.svg";
import area from "../../assets/area.svg";
import rooms from "../../assets/room.svg";

export default function UpdatePropertyModal({showModal, setShowModal}) {
  // const [file, setFile] = useState();


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
          <div className="hide-scrollbar overflow-x-hidden overflow-y-auto fixed inset-0 z-50 outline-none focus:outline-none">
            <div className="relative lg:w-[1000px] md:w-[600px] my-6 mx-auto max-w-3xl px-5">
              {/*content*/}
              <div className="border-0 rounded-lg shadow-lg relative flex flex-col w-full bg-white outline-none focus:outline-none pb-5">
                {/*header*/}
                <div className="flex items-center justify-between p-5">
                  <h1
                    className="md:text-2xl text-sm                 
                         text-[#5A4278]"
                  >
                    You're Updating Property
                  </h1>
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
                      {({
                        isSubmitting,
                        errors,
                        touched,
                        setFieldValue,
                        values,
                      }) => (
                        <Form>
                          <div className="p-3 rounded-2xl bg-[#E4DFEB]">
                            <div className="w-full ">
                              <FileInput />
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
                                      touched.bathrooms && errors.bathrooms
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
                          </div>
                          <div className="flex justify-between gap-4 py-3">
                            <button
                              type="button"
                              className="font-normal md:text-sm text-xs w-full h-[44px] mt-3 border border-gray-500 rounded"
                              onClick={() => setShowModal(false)}
                            >
                              Cancel
                            </button>
                            <button
                              type="submit"
                              disabled={isSubmitting}
                              className="flex items-center justify-center font-normal text-sm h-[44px] w-full bg-black  mt-3 text-white rounded"
                            >
                              <p className="ml-2 md:text-sm text-xs">
                                Create Contractor
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
