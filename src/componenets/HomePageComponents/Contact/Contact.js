import React from "react";
import { Formik } from "formik";
import * as Yup from "yup";
import contact from "../../../assets/contact.svg";

const Contact = () => {
  return (
    <section className="bg-[#D9CFE3] 3xl:px-[70px] 2xl:px-[50px] md:py-10 xl:px-[40px] lg:px-[40px] md:px-[40px] px-6 text-black-600 body-font  flex justify-center items-center overflow-hidden  ">
      <div className="container flex justify-center items-center">
        <div className=" w-full flex justify-center items-center lg:flex-row flex-col space-y-8 3xl:space-x-32 2xl:space-x-2 gap-8 xl:ml-0 lg:ml-0 md:ml-0  ml-0  ">
          <div className=" bg-[#D9CFE3]3xl:w-[1200px] 2xl:w-[1080px] xl:w-[486px] lg:w-[550px] w-full p-4 mt-8 rounded-lg   flex justify-center items-center flex-col  relative overflow-hidden ">
            <div className="flex  p-2 justify-start   w-full  flex-col ">
              <h1 className="xl:text-3xl lg:text-2xl md:text-2xl text-[21px] leading-[36px] font-bold mb-2 text-[#093E46] dark:text-white lg:text-start md:text-start text-center">
                Contact Us
              </h1>
              <p className=" leading-[24px] text-[14px] font-medium text-[#515151] dark:text-[#959CB1] lg:text-start md:text-start text-center mt-2 ">
                Elevate your well-being with the power of inspiration! Discover
                daily to keep you on track. Click now to get started on your ,
              </p>
            </div>

            <Formik
              initialValues={{ name: "", email: "", text: "" }}
              validationSchema={Yup.object({
                name: Yup.string()
                  .max(15, "Must be 15 characters or less")
                  .required("Required"),

                email: Yup.string()
                  .email("Invalid email address")
                  .required("Required"),
                text: Yup.string()
                  .max(20, "Must be 50 characters or less")
                  .required("Required"),
              })}
              onSubmit={(values, { setSubmitting }) => {
                setTimeout(() => {
                  console.log(values);
                  setSubmitting(false);
                }, 400);
              }}
            >
              {(formik) => (
                <form onSubmit={formik.handleSubmit} className=" w-full gap-4 ">
                  <div className="  w-full h-[72px] p-2 flex items-center lg:flex-row md:flex-row flex-col lg:justify-start  ">
                    <input
                      id="name"
                      placeholder="Enter your name"
                      className="  bg-[#D9CFE3] p-3 border border-[#866FA3] h-[50px] text-black dark:text-white w-full rounded-md"
                      type="text"
                      {...formik.getFieldProps("name")}
                    />
                    {formik.touched.name && formik.errors.name ? (
                      <div className="text-red-500">{formik.errors.name}</div>
                    ) : null}
                  </div>
                  <div className="w-full h-[72px] p-2 flex items-center lg:flex-row md:flex-row flex-col lg:justify-start ">
                    <input
                      id="email"
                      placeholder="Enter your email"
                      className=" bg-[#D9CFE3] p-3 border border-[#866FA3] h-[50px] text-[] text-[#5A4278]   w-full rounded-md"
                      type="email"
                      {...formik.getFieldProps("email")}
                    />
                    {formik.touched.email && formik.errors.email ? (
                      <div className="text-red-500">{formik.errors.email}</div>
                    ) : null}
                  </div>
                  <div className="w-full h-36 p-2 ">
                    <div className=" w-full h-full space-y-2 xl:mt-0 lg:mt-0 ">
                      <textarea
                        id="text"
                        placeholder="message"
                        className=" w-full h-full resize-none p-3 bg-[#D9CFE3]  border border-[#866FA3] text-black  rounded-md  justify-start"
                        type="text"
                        {...formik.getFieldProps("text")}
                      />
                      {formik.touched.text && formik.errors.text ? (
                        <div className="text-red-500 ">
                          {formik.errors.text}
                        </div>
                      ) : null}
                    </div>
                  </div>
                  <div className="p-2 flex lg:justify-start md:justify-start justify-center  ">
                    <button
                      type="submit"
                      className=" text-white mt-6  xl:w-full xl:h-[56px]  md:w-[124px] md:h-[56px] w-[90px]  h-[40px] bg-[#17062F]  hover:text-white hover:bg-gradient-to-b from-[#3799CC] to-[#374BCC] focus:ring-4 focus:outline-none focus:ring-gray-100 font-medium rounded-md text-base leading-[24px]  py-[16px] text-center inline-flex justify-center items-center dark:focus:ring-gray-500  mb-2 "
                    >
                      Submit
                    </button>
                  </div>
                </form>
              )}
            </Formik>
          </div>

          <div className="lg:w-[690px] md:pb-0 pb-5 lg:h-[489px] md:w-[450px] md:h-[600px] xl:block lg:block md:block flex justify-center items-center relative  ">
            <img
              alt="gallery"
              className="  h-[560px] object-cover rounded-xl  object-center -mt-8  3xl:ml-6 2xl:ml-5 xl:ml-2 lg:ml-3 md:ml-0 ml-0 "
              src={contact}
            />
          </div>
        </div>
      </div>
    </section>
  );
};
export default Contact;
