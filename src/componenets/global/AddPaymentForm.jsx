import React from "react";
import { Formik, Field, Form, ErrorMessage } from "formik";
import FileInput from "./FileInput";
import Info from "../../assets/info.svg";

export default function AddPaymentForm({ state }) {
  return (
    <div className="border-0 rounded-lg shadow-lg relative flex flex-col w-full bg-white outline-none focus:outline-none pb-5">
      {/*header*/}
      <div className="flex items-center justify-between p-5">
        <h1
          className="md:text-2xl text-sm                 
                     text-[#5A4278]"
        >
          Service Request Form
        </h1>
        {/* <button
      className="p-1 ml-auto bg-transparent border-0 text-black float-right text-3xl leading-none font-semibold outline-none focus:outline-none"
      //   onClick={() => setShowModal(false)}
    >
      <img src={Cancel} alt="x" />
    </button> */}
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
                <div className="p-3  rounded-2xl bg-[#ECEBED]">
                  {/* <div className="w-full col-span-full">
                    <FileInput state={"Service Request Form"} />
                  </div> */}
                  <div className="grid lg:grid-cols-3 grid-cols-1 gap-x-5">
                    <div className="flex mt-5 flex-col  py-2">
                      <label
                        htmlFor="gender"
                        className="text-sm font-medium leading-4 text-[#5A4278]"
                      >
                        Select Landlord
                      </label>
                      <Field
                        as="select"
                        name="gender"
                        className={`border bg-[#FDFCFF] p-4 mt-1 pr-5 text-[#11141C] border-1 border-[#2E06641F] rounded-lg pl-2 outline-none  ${
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

                    <div className="flex md:mt-5 mt-3 flex-col  py-2">
                      <label
                        htmlFor="gender"
                        className="text-sm font-medium leading-4 text-[#5A4278]"
                      >
                        Select Property Name
                      </label>
                      <Field
                        as="select"
                        name="gender"
                        className={`border bg-[#FDFCFF] p-4 mt-1 pr-5 text-[#11141C] border-1 border-[#2E06641F] rounded-lg pl-2 outline-none  ${
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

                    <div className="flex md:mt-5 mt-3 flex-col  py-2">
                      <label
                        htmlFor="gender"
                        className="text-sm font-medium leading-4 text-[#5A4278]"
                      >
                        Select Property You Occupied
                      </label>
                      <Field
                        as="select"
                        name="gender"
                        className={`border bg-[#FDFCFF] p-4 mt-1 pr-5 text-[#11141C] border-1 border-[#2E06641F] rounded-lg pl-2 outline-none  ${
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
                  </div>

                  <div className="grid md:grid-cols-2 mt-4 grid-cols-1 gap-y-3 gap-x-5 lg:gap-x-3">
                    <div className="flex flex-col py-2">
                      <label
                        htmlFor="name"
                        className="text-sm font-medium leading-4 text-[#5A4278]"
                      >
                        My Account Number
                      </label>
                      <div className="flex mt-1 rounded bg-white">
                        <Field
                          name="name"
                          className={`rounded pl-2 w-full p-4 outline-none  ${
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

                    <div className="flex flex-col py-2">
                      <label
                        htmlFor="name"
                        className="text-sm font-medium leading-4 text-[#5A4278]"
                      >
                        Sanded Payment to
                      </label>
                      <div className="flex mt-1 rounded bg-white">
                        <Field
                          name="name"
                          className={`rounded pl-2 w-full p-4 outline-none  ${
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
                    {state === "Add Payment" ? (
                      <>
                        <div className="flex flex-col py-2">
                          <label
                            htmlFor="name"
                            className="text-sm font-medium leading-4 text-[#5A4278]"
                          >
                            Amount Sanded
                          </label>
                          <div className="flex mt-1 rounded bg-white">
                            <Field
                              name="name"
                              className={`rounded pl-2 w-full p-4 outline-none  ${
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

                        <div className="flex flex-col py-2">
                          <label
                            htmlFor="name"
                            className="text-sm font-medium leading-4 text-[#5A4278]"
                          >
                            Payment Date
                          </label>
                          <div className="flex mt-1 rounded bg-white">
                            <Field
                              name="name"
                              type="date"
                              className={`rounded pl-2 w-full p-4 outline-none  ${
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
                      </>
                    ) : null}
                  </div>

                  <div>
                    <FileInput state="Attachment" />
                  </div>

                  <div className="flex md:py-4 space-x-1 items-center">
                    <img src={Info} alt="info" />
                    <p className="font-medium md:mt-0 mt-4 text-xs text-[#0C39AC]">
                      When the landlord confirms the payment, it will be added
                      to the system
                    </p>
                  </div>
                  <div className="flex md:flex-row flex-col justify-end gap-4 py-3">
                    <button
                      type="button"
                      className="md:text-sm text-xs text-[#312245] font-bold lg:w-[244px] px-6 py-3 h-12 mt-3 border-2 border-[#312245] rounded-lg"
                      // onClick={() => setShowModal(false)}
                    >
                      Go, Back
                    </button>
                    <button
                      type="submit"
                      disabled={isSubmitting}
                      className="flex items-center justify-center font-bold text-sm px-6 py-4 h-12 bg-[#17062F] mt-3 text-white rounded-lg"
                    >
                      <p className="ml-2 md:text-sm text-xs">
                        Send Refund Request to Landlord
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
