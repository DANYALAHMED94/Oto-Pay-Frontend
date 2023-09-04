import React from "react";

const Newsletter = () => {
  return (
    <div className="relative p-4 rounded-lg overflow-hidden bg-[#F6F6F6] py-12 md:py-20">
      <div className="mx-auto max-w-7xl xl:h-56 md:h-64 h-auto md:py-0 py-5 border px-6 lg:px-8 bg-[#653E92] rounded-xl md:flex justify-between items-center">
        <div className="mx-auto max-w-2xl lg:max-w-none flex xl:flex-row flex-col items-center gap-4">
          <div className=" md:w-[510px] w-full xl:block flex flex-col justify-center items-center">
            <h2 className="text-2xl font-semibold tracking-tight text-white sm:text-4xl">
              Subscribe to get updated
            </h2>
            <p className="md:mt-4 mt-0 md:text-lg text-sm w-full text-center xl:text-left leading-8 text-gray-300">
              Elevate your well-being with the power of inspiration! Discover
              daily to keep you on track. Click now to get started on your
            </p>
          </div>

          <div className=" md:w-[602px] w-full md:mt-6 mt-0 gap-x-4 flex items-center">
            <div className="w-full flex gap-4 md:flex-row flex-col">
              <label htmlFor="email-address" className="sr-only">
                Email address
              </label>
              <input
                id="email-address"
                name="email"
                type="email"
                autoComplete="email"
                required
                className="md:w-96 w-full h-14 flex-auto rounded-md border-0 bg-white px-3.5 text-white shadow-sm ring-1 ring-inset ring-white/10 focus:ring-2 focus:ring-inset focus:ring-indigo-500 sm:text-sm sm:leading-6"
                placeholder="example@email.com"
              />

              <button
                type="submit"
                className="md:w-48 w-full flex-none rounded-md bg-[#17062F] px-3.5 py-2.5 text-sm font-semibold text-white shadow-sm hover:bg-indigo-400 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-500"
              >
                Submit
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Newsletter;
