import React from "react";
import { Formik, Field, Form, ErrorMessage } from "formik";
import FileInput from "./FileInput";
import bed from "../../assets/bed.svg";
import bath from "../../assets/bath.svg";
import area from "../../assets/area.svg";
import rooms from "../../assets/room.svg";
import Map from "../../assets/map.png";
export default function LandlordPropertyForm({ setProperty, }) {
  return (
    <div className="border-0 rounded-lg shadow-lg relative flex flex-col w-full bg-[#ECEBED] outline-none focus:outline-none pb-5">
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
                <div className="p-3  rounded-2xl ">
                  {/* <div className="w-full col-span-full">
                    <FileInput state={"Service Request Form"} />
                  </div> */}
              
                   <div className="rounded-[16px] mt-3 px-5 py-3 border border-[rgba(46, 6, 100, 0.08)] bg-[#D9CFE3]">
                                    <h1 className="text-base font-bold text-[#312245]">
                                      Personal Information
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

                                  
                                    </div>
                                  </div>

                              
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
                             
                                  <div className="w-full ">
                                    <FileInput
                                      state={"Property Pictures or Videos"}
                                    />
                                  </div>

                                  <div className="grid lg:grid-cols-3 grid-cols-1 gap-x-5">
                
  <div className="flex flex-col md:mt-5 mt-3 py-2">
                      <label
                        htmlFor="name"
                        className="text-sm font-medium leading-4 text-[#5A4278]"
                      >
                        Name Of Property
                      </label>
                      <div className="flex mt-1 rounded bg-white">
                        <Field
                          name="name"
                          className={` p-4  pr-5 w-full  rounded-lg pl-2 outline-none  ${
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
                    <div className="flex md:mt-5 mt-3 flex-col  py-2">
                      <label
                        htmlFor="gender"
                        className="text-sm font-medium leading-4 text-[#5A4278]"
                      >
                        Property Type
                      </label>
                      <Field
                        as="select"
                        name="gender"
                        className={`border bg-[#FDFCFF] p-4 mt-1 pr-5 text-[#11141C] border-1 border-[#2E06641F] rounded-lg pl-2 outline-none  ${
                          touched.gender && errors.gender ? "is-invalid" : ""
                        }`}
                      >
                        <option>Select</option>
                        <option value="male">Commercial</option>
                        <option value="other">other</option>
                      </Field>
                      <ErrorMessage
                        component="div"
                        name="gender"
                        className="text-red-700 font-normal font-base text-left"
                      />
                    </div>

                    <div className="flex md:mt-5 mt-3 flex-col  py-2">
                      <label
                        htmlFor="gender"
                        className="text-sm font-medium leading-4 text-[#5A4278]"
                      >
                        Feature Effect
                      </label>
                      <Field
                        as="select"
                        name="gender"
                        className={`border bg-[#FDFCFF] p-4 mt-1 pr-5 text-[#11141C] border-1 border-[#2E06641F] rounded-lg pl-2 outline-none  ${
                          touched.gender && errors.gender ? "is-invalid" : ""
                        }`}
                      >
                        <option>Select</option>
                        <option value="male">SUPER HOT</option>
                        <option value="other">other</option>
                      </Field>
                      <ErrorMessage
                        component="div"
                        name="gender"
                        className="text-red-700 font-normal font-base text-left"
                      />
                    </div>
                  </div>

                  <div className="grid lg:grid-cols-3 grid-cols-1 gap-x-5">
                
                <div className="flex flex-col md:mt-5 mt-3 py-2">
                                    <label
                                      htmlFor="name"
                                      className="text-sm font-medium leading-4 text-[#5A4278]"
                                    >
                                      Email (for this property)
                                    </label>
                                    <div className="flex mt-1 rounded bg-white">
                                      <Field
                                        name="name"
                                        className={` p-4  pr-5 w-full  rounded-lg pl-2 outline-none  ${
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
                                 
                                  <div className="flex flex-col md:mt-5 mt-3 py-2">
                                    <label
                                      htmlFor="name"
                                      className="text-sm font-medium leading-4 text-[#5A4278]"
                                    >
                                     Phone Number (for this property)
                                    </label>
                                    <div className="flex mt-1 rounded bg-white">
                                      <Field
                                        name="name"
                                        className={` p-4  pr-5 w-full  rounded-lg pl-2 outline-none  ${
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


                                  <div className="flex flex-col md:mt-5 mt-3 py-2">
                                    <label
                                      htmlFor="name"
                                      className="text-sm font-medium leading-4 text-[#5A4278]"
                                    >
                                    WhatsApp (for this property)
                                    </label>
                                    <div className="flex mt-1 rounded bg-white">
                                      <Field
                                        name="name"
                                        className={` p-4  pr-5 w-full  rounded-lg pl-2 outline-none  ${
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

                                  <div className="grid lg:grid-cols-3 md:grid-cols-2 grid-cols-1 gap-x-5">
                                    <div className="flex flex-col mt-3 py-3">
                                      <label
                                        htmlFor="beds"
                                        className="text-sm font-medium leading-4 text-[#5A4278]"
                                      >
                                        Beds
                                      </label>
                                      <div className="flex px-2 mt-1  gap-2 rounded bg-white">
                                        <img src={bed} alt="bed" />
                                        <Field
                        as="select"
                        name="bed"
                        className={`w-full p-4 pr-2 text-[#11141C] border-1 border-[#2E06641F]  pl-2 outline-none  ${
                          touched.gender && errors.gender ? "is-invalid" : ""
                        }`}
                      >
                        <option>Select</option>
                        <option value="male">1</option>
                        <option value="male">2</option>
                        <option value="other">other</option>
                      </Field>
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
                        as="select"
                        name="bed"
                        className={`w-full p-4 pr-2 text-[#11141C] border-1 border-[#2E06641F]  pl-2 outline-none  ${
                          touched.gender && errors.gender ? "is-invalid" : ""
                        }`}
                      >
                        <option>Select</option>
                        <option value="male">1</option>
                        <option value="male">2</option>
                        <option value="other">other</option>
                      </Field>
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
                        as="select"
                        name="bed"
                        className={`w-full p-4 pr-2 text-[#11141C] border-1 border-[#2E06641F]  pl-2 outline-none  ${
                          touched.gender && errors.gender ? "is-invalid" : ""
                        }`}
                      >
                        <option>Select</option>
                        <option value="male">1</option>
                        <option value="male">2</option>
                        <option value="other">other</option>
                      </Field>
                                        <ErrorMessage
                                          component="div"
                                          name="rooms"
                                          className="text-red-700 font-normal font-base text-left"
                                        />
                                      </div>
                                    </div>

                                  </div>

                                  <div className="flex w-full flex-col mt-3 py-3">
                                      <label
                                        htmlFor="area"
                                        className="text-sm font-medium leading-4 text-[#5A4278]"
                                      >
                                        Area
                                      </label>
                                      <div className="flex px-2 mt-1 rounded-lg bg-white">
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
                                    <div className="flex w-full flex-col mt-3 py-3">
                                      <label
                                        htmlFor="area"
                                        className="text-sm font-medium leading-4 text-[#5A4278]"
                                      >
                                        Location
                                      </label>
                                     
                                        <Field
                                          name="area"
                                          className={`rounded mt-1 pl-2 w-full h-10 outline-none  ${
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

                                    <div className="flex w-full flex-col mt-3 py-3">
                                      <label
                                        htmlFor="installment"
                                        className="text-sm font-medium leading-4 text-[#5A4278]"
                                      >
                                       Installment
                                      </label>
                                     
                                        <Field
                                          name="installment"
                                          className={`rounded mt-1 pl-2 w-full h-10 outline-none  ${
                                            touched.area && errors.area
                                              ? "is-invalid"
                                              : ""
                                          }`}
                                        />
                                        <ErrorMessage
                                          component="div"
                                          name="installment"
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
             
                  <div className="flex md:flex-row flex-col justify-end gap-4 py-3">
                    <button
                      type="button"
                      className="md:text-sm text-xs text-[#312245] font-bold lg:w-[244px] px-6 py-3 h-12 mt-3 border-2 border-[#312245] rounded-lg"
                      onClick={() => {setProperty ("landlordProperty");
                   
                    }}
                    >
                      Cancel
                    </button>
                    <button
                      type="submit"
                      disabled={isSubmitting}
                      className="flex items-center justify-center font-bold text-sm px-6 py-4 h-12 bg-[#17062F] mt-3 text-white rounded-lg"
                    >
                      <p className="ml-2 md:text-sm text-xs">
                      Continue for payment
                      </p>
                    </button>
                  </div>
                </div>
              </Form>
            )}
          </Formik>
        </div>
      </div>
    </div>
  );
}
