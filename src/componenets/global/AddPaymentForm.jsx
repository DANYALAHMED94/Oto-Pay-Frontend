import React from "react";
import { Formik, Field, Form, ErrorMessage } from "formik";
import FileInput from "./FileInput";
import Info from "../../assets/info.svg";

export default function AddPaymentForm({
  tenantPayment,
  landlordAccess,
  setTenantPayment,
  landlordPayment,
  setLandlordPayment,
  setLandlordAccess,
  landlordTenants,

}) {
  return (
    <div className="border-0 rounded-lg shadow-lg relative flex flex-col w-full bg-[#ECEBED] outline-none focus:outline-none pb-5">
      {/*header*/}
      {/* <div className="flex items-center justify-between p-5">
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
      {/* </div>  */}
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
                <div className="p-3  rounded-2xl bg-[#E0E0E0]">
                  {/* <div className="w-full col-span-full">
                    <FileInput state={"Service Request Form"} />
                  </div> */}
                 { landlordAccess === "AddLink" ?
                
                 (  <> 
                 <div className="grid md:grid-cols-3 mt-4 grid-cols-1 gap-y-3 gap-x-5 lg:gap-x-3">
                 
                     <div className="flex col-span-2 py-2">
                      
                       <div className="flex w-full mt-1 rounded bg-white">
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

                     <button
                      type="button"
                      className="md:text-sm text-xs text-white bg-[#17062F] font-bold w-full px-6 py-3 h-14 mt-3 flex justify-center items-center gap-2 rounded-lg"
                      onClick={() => {
                 
                      }}
                    >
                      <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none">
  <path d="M7.5 15.9928V15.9922V3.99219C7.5 3.57598 7.64249 3.23181 7.94156 2.93274C8.24061 2.63369 8.58424 2.49169 8.99939 2.49219H9H18C18.4162 2.49219 18.7604 2.63467 19.0594 2.93374C19.3585 3.23279 19.5005 3.57643 19.5 3.99158V3.99219V15.9922C19.5 16.4084 19.3575 16.7526 19.0584 17.0516C18.7594 17.3507 18.4158 17.4927 18.0006 17.4922H18H9C8.58379 17.4922 8.23962 17.3497 7.94056 17.0506C7.6415 16.7516 7.4995 16.4079 7.5 15.9928ZM8.5 15.9922V16.4922H9H18H18.5V15.9922V3.99219V3.49219H18H9H8.5V3.99219V15.9922ZM3.5 19.9928V19.9922V6.49219H4.5V19.9922V20.4922H5H15.5V21.4922H5C4.58379 21.4922 4.23962 21.3497 3.94056 21.0506C3.6415 20.7516 3.4995 20.4079 3.5 19.9928Z" fill="#FDFCFF" stroke="#FDFCFF"/>
</svg>
                      Copy Link & Credentials
                    </button>
              
               </div>
              <div className="w-full mt-3 flex flex-col gap-3">
                <div className="flex flex-col ">
<h1 className="text-sm font-medium leading-4 text-[rgb(67,65,70)]">Email</h1>
<p  className="text-base font-medium leading-5 ">email2222s28828322@email.com</p>
                </div>
            
                <div className="flex flex-col ">
<h1 className="text-sm font-medium leading-4 text-[#434146]">Password</h1>
<p  className="text-base font-medium leading-5 ">2222s28828322</p>
                </div>
                </div>  
               </>):
                 <>
                  <div className="grid lg:grid-cols-3 grid-cols-1 gap-x-5">

                  {landlordTenants==="sendProposal" ?(
                    <>
                   <div>
                     <FileInput state="Attachment" />
                   </div> </>): null}

                  {landlordTenants==="sendProposal" ?(""):
<>
                  {landlordAccess === "AddManager" || landlordTenants === "LandlordTenants" ? (

<div className="flex mt-5 flex-col py-2">
  
                          <label
                            htmlFor="name"
                            className="text-sm font-medium leading-4 text-[#5A4278]"
                          >
                            Name of Manager
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
                   ): 

                  

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
}
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
                    </>
}
                  </div>

                  <div className="grid md:grid-cols-2 mt-4 grid-cols-1 gap-y-3 gap-x-5 lg:gap-x-3">
                    {landlordAccess === "AddManager" ? (
                      <>
                        <div className="flex flex-col py-2">
                          <label
                            htmlFor="name"
                            className="text-sm font-medium leading-4 text-[#5A4278]"
                          >
                            Manager Email
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
                            Choose Password for Manager
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
                      </>
                    ) : (
                    
                      <>
                          {landlordTenants==="sendProposal" ?(""):
                          <>
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
                        </>}
                      </>
                    )}
                    {tenantPayment === "AddPayment" || landlordTenants==="sendProposal" ||
                    landlordPayment === "AddPayment" ? (
                      <>
                      {landlordTenants==="sendProposal" ?(""):
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
                        </div>}
                        {landlordPayment === "AddPayment" ? (
                          <div className="flex  flex-col  py-2">
                            <label
                              htmlFor="gender"
                              className="text-sm font-medium leading-4 text-[#5A4278]"
                            >
                              Amount Purpose
                            </label>
                            <Field
                              as="select"
                              name="gender"
                              className={`border bg-[#FDFCFF] p-4 mt-1 pr-5 text-[#11141C] border-1 border-[#2E06641F] rounded-lg pl-2 outline-none  ${
                                touched.gender && errors.gender
                                  ? "is-invalid"
                                  : ""
                              }`}
                            >
                              <option>Select</option>
                              <option value="male">Refund</option>
                              <option value="female">
                                Service Maintenance
                              </option>
                              <option value="female">Rent</option>
                              <option value="other">other</option>
                            </Field>
                            <ErrorMessage
                              component="div"
                              name="gender"
                              className="text-red-700 font-normal font-base text-left"
                            />
                          </div>
                        ) : null}
                            {landlordTenants==="sendProposal" ?(""):
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
                        </div>}

                        {landlordPayment === "AddPayment"|| landlordTenants==="sendProposal" ? (
                          <>
                            {landlordTenants==="sendProposal" ?(""):
                          <div className="flex  flex-col  py-2">
                            <label
                              htmlFor="gender"
                              className="text-sm font-medium leading-4 text-[#5A4278]"
                            >
                              Hide/ Unhide from tenant
                            </label>
                            <Field
                              as="select"
                              name="gender"
                              className={`border bg-[#FDFCFF] p-4 mt-1 pr-5 text-[#11141C] border-1 border-[#2E06641F] rounded-lg pl-2 outline-none  ${
                                touched.gender && errors.gender
                                  ? "is-invalid"
                                  : ""
                              }`}
                            >
                              <option>Select</option>
                              <option value="male">Hide</option>
                              <option value="female">UnHide</option>
                            </Field>
                            <ErrorMessage
                              component="div"
                              name="gender"
                              className="text-red-700 font-normal font-base text-left"
                            />
                          </div>}
                     
<div className="flex flex-col col-span-2 py-3">
<label
  htmlFor="description"
  className="text-sm font-medium leading-4 text-[#5A4278]"
>
  Description
</label>
<Field
  name="description"
  as="textarea"
  rows="3"
  className={`resize-none rounded w-full mt-1 pl-2 outline-none  ${
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
          </>              ) : null}
                      </>
                    ) : null}

     
                  </div>
                  {landlordTenants==="sendProposal" ?  (
  <>
  <div className="flex flex-col col-span-2 py-3">
  <label
    htmlFor="description"
    className="text-sm font-medium leading-4 text-[#5A4278]"
  >
    Your Property Location
  </label>
  <Field
    name="description"
    as="textarea"
    rows="3"
    className={`resize-none rounded w-full mt-1 pl-2 outline-none  ${
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
  
  <div className="grid lg:grid-cols-3 grid-cols-1 gap-x-5"> 
 
<div className="flex flex-col py-2">
  <label
    htmlFor="name"
    className="text-sm font-medium leading-4 text-[#5A4278]"
  >
   Your Phone Number 
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
Your Email
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
Per Month Rent
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
</div>
</>

)   : null}  
                  {landlordAccess === "AddManager" || landlordTenants==="sendProposal" ? (""):
                  <div>
                    <FileInput state="Attachment" />
                  </div>}
                  {landlordPayment === "AddPayment"|| landlordAccess === "AddManager" || landlordTenants==="sendProposal"  ? (
                    ""
                  ) : (
                    <div className="flex md:py-4 space-x-1 items-center">
                      <img src={Info} alt="info" />
                      <p className="font-medium md:mt-0 mt-4 text-xs text-[#0C39AC]">
                        When the landlord confirms the payment, it will be added
                        to the system
                      </p>
                    </div>
                  )}
                 </> }
                  <div className="flex md:flex-row flex-col justify-end gap-4 py-3">
                    <button
                      type="button"
                      className="md:text-sm text-xs text-[#312245] font-bold lg:w-[200px] px-6 py-3 h-12 mt-3 border-2 border-[#312245] rounded-lg"
                      onClick={() => {
                        setTenantPayment("payments");
                        setLandlordPayment("landlordPayments");
                      }}
                    >
                      Go, Back
                    </button>

                    {landlordAccess === "AddManager" ? ( 
    <button
    onClick={() => {  setLandlordAccess("AddLink");  }}
    type="submit"
    disabled={isSubmitting}
    className="flex items-center justify-center font-bold text-sm px-6 py-4 h-12 bg-[#17062F] mt-3 text-white rounded-lg"
  >
    <p className="ml-2 md:text-sm text-xs">
      Add to Property
    </p>
  </button>
                   ) : landlordAccess === "AddLink" || landlordTenants==="sendProposal" ? (""):
                   <button
                      type="submit"
                      disabled={isSubmitting}
                      className="flex items-center justify-center font-bold text-sm px-6 py-4 h-12 bg-[#17062F] mt-3 text-white rounded-lg"
                    >
                      <p className="ml-2 md:text-sm text-xs">
                        Send Refund Request to Landlord
                      </p>
                    </button>
                    }
{landlordTenants==="sendProposal" ? (
                    <button
                      type="submit"
                      disabled={isSubmitting}
                      className="flex items-center justify-center font-bold text-sm px-6 py-4 h-12 bg-[#17062F] mt-3 rounded-lg"
                    >
                      <p className="ml-2 md:text-sm text-xs  text-white">
                        Send 
                      </p>
                    </button>  ):null}
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
