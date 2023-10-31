import React from "react";
import { Formik, Field, Form, ErrorMessage } from "formik";
import FileInput from "./FileInput";

export default function ServiceRequestForm() {
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
                <div className="p-3 grid lg:grid-cols-3 grid-cols-1 gap-x-5 rounded-2xl bg-[#E4DFEB]">
                  <div className="w-full col-span-full">
                    <FileInput state={"Service Request Form"} />
                  </div>

                  <div className="flex mt-5 flex-col  py-2">
                    <label
                      htmlFor="gender"
                      className="text-sm font-medium leading-4 text-[#5A4278]"
                    >
                      Type of Request
                    </label>
                    <Field
                      as="select"
                      name="gender"
                      className={`border h-10 mt-1 pr-5 text-[#11141C] border-1 border-[#B8B7B6] rounded   pl-2   outline-none  ${
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
                      Urgency Level
                    </label>
                    <Field
                      as="select"
                      name="gender"
                      className={`border h-10 mt-1 pr-5 text-[#11141C] border-1 border-[#B8B7B6] rounded   pl-2   outline-none  ${
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
                      className={`border h-10 mt-1 pr-5 text-[#11141C] border-1 border-[#B8B7B6] rounded   pl-2   outline-none  ${
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

                  <div className="flex flex-col py-3 col-span-full">
                    <label
                      htmlFor="description"
                      className="text-sm font-medium leading-4 text-[#5A4278]"
                    >
                      Description
                    </label>
                    <Field
                      name="description"
                      as="textarea"
                      placeholder="Write Description"
                      rows="3"
                      className={`resize-none rounded mt-1 pl-2 pt-3 outline-none  ${
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
                </div>

                <div className="flex justify-end gap-4 py-3">
                  <button
                    type="button"
                    className="md:text-sm text-xs text-[#312245] font-bold px-6 py-3 h-11 mt-3 border-2 border-[#312245] rounded"
                    // onClick={() => setShowModal(false)}
                  >
                    Cancel
                  </button>
                  <button
                    type="submit"
                    disabled={isSubmitting}
                    className="flex items-center justify-center font-bold text-sm px-6 py-4 h-11 bg-[#17062F] mt-3 text-white rounded"
                  >
                    <p className="ml-2 md:text-sm text-xs">Submit</p>
                  </button>
                </div>
              </Form>
            )}
          </Formik>
        </div>
      </div>
    </div>
  );
}