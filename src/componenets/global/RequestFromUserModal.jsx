import React from "react";
import Cancel from "../../assets/cancel.svg";
import { Formik, Field, Form, ErrorMessage } from "formik";
import Frame from "../../assets/Frame.png";
import Voice from "../../assets/voice.png";

export default function RequestFromUserModal({showRequestModal, setShowRequestModal}) {

  return (
    <>
      {showRequestModal ? (
        <>
          <div className="hide-scrollbar overflow-x-hidden overflow-y-auto fixed inset-0 z-50 outline-none focus:outline-none">
            <div className="relative lg:w-[1200px] xl:w-[1400px] md:w-[740px] my-6 mx-auto max-w-5xl px-5">
              {/*content*/}
              <div className="border-0 rounded-lg shadow-lg relative flex flex-col w-full bg-white outline-none focus:outline-none pb-5">
                {/*header*/}
                <div className="flex items-center justify-between p-5">
                  <h1
                    className="md:text-2xl text-sm                 
                     text-[#5A4278]"
                  >
                    Request From Mark John Smith
                  </h1>
                  <button
                    className="p-1 ml-auto bg-transparent border-0 text-black float-right text-3xl leading-none font-semibold outline-none focus:outline-none"
                    onClick={() => setShowRequestModal(false)}
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
                      }}
                      onSubmit={async (values) => {
                        console.log(values);
                      }}
                    >
                      {({ isSubmitting, errors, touched }) => (
                        <Form>
                          <div className="p-3 rounded-2xl bg-[#E4DFEB]">
                            <h1 className="font-bold text-base text-[#312245]">
                              Attachments
                            </h1>
                            <div className="grid md:grid-cols-5 gap-x-5 gap-y-3 grid-cols-1">
                              <div className="flex flex-col justify-center items-center">
                                <img src={Frame} alt="" />
                                <img src={Voice} alt="" />
                              </div>
                              <div className="flex flex-col justify-center items-center">
                                <img src={Frame} alt="" />
                                <img src={Voice} alt="" />
                              </div>
                              <div className="flex flex-col justify-center items-center">
                                <img src={Frame} alt="" />
                                <img src={Voice} alt="" />
                              </div>
                              <div className="flex flex-col justify-center items-center">
                                <img src={Frame} alt="" />
                                <img src={Voice} alt="" />
                              </div>
                              <div className="flex flex-col justify-center items-center">
                                <img src={Frame} alt="" />
                                <img src={Voice} alt="" />
                              </div>
                            </div>

                            <div className="grid md:grid-cols-3 border-b border-[#5A4278] pb-5 gap-x-5 gap-y-5 mt-5 grid-cols-1">
                              <div className="flex flex-col space-y-2 justify-center md:items-start items-center">
                                <h1 className="text-base font-medium leading-4 text-[#5A4278]">
                                  Type of Request
                                </h1>
                                <h1 className="text-base font-medium leading-4 text-[#312245]">
                                  Maintenance
                                </h1>
                              </div>
                              <div className="flex flex-col space-y-2 justify-center md:items-start items-center">
                                <h1 className="text-base font-medium leading-4 text-[#5A4278]">
                                  Urgency Level
                                </h1>
                                <h1 className="text-base font-medium leading-4 text-[#312245]">
                                  Medium
                                </h1>
                              </div>
                              <div className="flex flex-col space-y-2 justify-center md:items-start items-center">
                                <h1 className="text-base font-medium leading-4 text-[#5A4278]">
                                  Request For Property
                                </h1>
                                <h1 className="text-base font-medium leading-4 text-[#312245]">
                                  1215262232NY
                                </h1>
                              </div>
                            </div>

                            <div className="flex flex-col mt-5 border-b border-[#5A4278] pb-5 space-y-2 justify-center md:items-start items-center">
                              <h1 className="text-base font-medium leading-4 text-[#5A4278]">
                                Decription
                              </h1>
                              <h1 className="text-base font-medium md:text-left text-center leading-4 text-[#312245]">
                                As you approach the property, a picturesque
                                driveway winds through lush gardens and
                                old-growth trees, creating an immediate sense of
                                seclusion and privacy. The exterior boasts a
                                classic architectural design, characterized by
                                its natural stone façade, charming dormer
                                windows, and a welcoming front porch that exudes
                                warmth.
                              </h1>
                            </div>

                            <div className="flex flex-col mt-5 py-3 col-span-full">
                              <label
                                htmlFor="description"
                                className="text-base pb-1 font-medium leading-4 text-[#5A4278]"
                              >
                                Write Response
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
                          </div>

                          <div className="flex lg:justify-end md:justify-center md:items-start md:flex-row flex-col items-center justify-center gap-x-4 gap-y-0 py-3">
                            <button
                              type="button"
                              className="md:text-sm text-xs text-[#312245] font-bold px-4 py-3 md:w-40 w-full h-11 mt-3 border-2 border-[#312245] rounded"
                              onClick={() => setShowRequestModal(false)}
                            >
                              Cancel
                            </button>
                            <button
                              type="submit"
                              disabled={isSubmitting}
                              className="flex items-center justify-center font-bold text-sm px-4 py-3 md:w-40 w-full h-11 bg-[#CC3017] mt-3 text-white rounded"
                            >
                              <p className="ml-2 md:text-sm text-xs">Delete</p>
                            </button>
                            <button
                              type="submit"
                              disabled={isSubmitting}
                              className="flex items-center justify-center font-bold text-sm px-4 py-3 md:w-40 w-full h-11 bg-[#17062F] mt-3 text-white rounded"
                            >
                              <p className="ml-2 md:text-sm text-xs">
                                Accept Request
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
