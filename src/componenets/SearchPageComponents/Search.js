import React from "react";
import { useNavigate } from "react-router-dom";

function Search() {
  const navigate = useNavigate();
  return (
    <div className="bg-[#D9CFE3]  w-full xl:h-[259px] font-inter relative md:h-[400px] h-[300px] overflow-hidden ">
      <section className="w-full h-full body-font  px-[120px] py-[40px]  ">
        <div className="w-[1200px]  h-[179px]  ">
          <div className="w-[1200px] grid grid-cols-5 gap-[16px]">
            <div className="col-span-1 p-[16px] w-[210px] h-[81px] space-y-2 rounded-md bg-gray-100 ">
              <label className="block text-sm font-medium text-black  ml-0.5">
                City
              </label>
              <select className=" w-full rounded-md bg-gray-100 border-transparent focus:border-gray-500 focus:bg-white focus:ring-0 text-sm">
                <option value="">Washington</option>
                <option value="for-rent">Washington1</option>
                <option value="for-sale">Washington2</option>
              </select>
            </div>

            <div className="col-span-3 p-[16px]  w-[700px] h-[81px] space-y-2 rounded-md bg-gray-100">
              <label className="block text-sm font-medium text-gray-700">
                Street
              </label>
              <select className=" w-full rounded-md bg-gray-100 border-transparent focus:bg-white  text-sm">
                <option value="">Washington, street xyz</option>
                <option value="fully-furnished">Washington, street xyz</option>
                <option value="partially-furnished">
                  Washington, street xyz
                </option>
                <option value="not-furnished">Washington, street xyz</option>
              </select>
            </div>

            <div className="col-span-1 px-4 py-3 w-[200px] h-[81px] space-y-2 rounded-md bg-[#17062F] ">
              <button
                type="button"
                onClick={() => {
                  navigate("/");
                }}
                className=" text-white     lg:w-[140px] lg:h-[52px] md:w-[123px] md:h-[42px] w-[100px] h-[36px]    hover:text-black hover:bg-white focus:ring-4 focus:outline-none focus:ring-gray-100 font-semibold rounded-lg xl:text-base lg:text-base md:text-base text-sm  leading-6  py-[16px] justify-center text-center inline-flex items-center dark:focus:ring-gray-500 mr-2 mb-2 "
              >
                Find
              </button>
            </div>
          </div>
          <div className="flex grid grid-cols-6  gap-2 mt-4">
            <div className="col-span-1 px-4 py-3 w-[170px] h-[81px] space-y-2 rounded-md bg-gray-100">
              <label className="block text-sm font-medium text-gray-700">
                Property Type
              </label>
              <select className=" w-full rounded-md bg-gray-100 border-transparent focus:border-gray-500 focus:bg-white focus:ring-0 text-sm">
                <option value="">All</option>
                <option value="fully-furnished">Washington, street xyz</option>
                <option value="partially-furnished">
                  Washington, street xyz
                </option>
                <option value="not-furnished">Washington, street xyz</option>
              </select>
            </div>

            <div className="col-span-2 px-4 py-3 w-[370px] h-[81px] space-y-2 rounded-md bg-gray-100">
              <label className="block text-sm font-medium text-gray-700">
                Price(USD)
              </label>
              <select className=" w-full rounded-md bg-gray-100 border-transparent focus:border-gray-500 focus:bg-white focus:ring-0 text-sm">
                <option value="">Washington, street xyz</option>
                <option value="fully-furnished">Washington, street xyz</option>
                <option value="partially-furnished">
                  Washington, street xyz
                </option>
                <option value="not-furnished">Washington, street xyz</option>
              </select>
            </div>

            <div className="col-span-2 px-4 py-3 w-[370px] h-[81px] space-y-2 rounded-md bg-gray-100">
              <label className="block text-sm font-medium text-gray-700">
                Area (sq. yd.)
              </label>
              <select className=" w-full rounded-md bg-gray-100 border-transparent focus:border-gray-500 focus:bg-white focus:ring-0 text-sm">
                <option value="">Washington, street xyz</option>
                <option value="fully-furnished">Washington, street xyz</option>
                <option value="partially-furnished">
                  Washington, street xyz
                </option>
                <option value="not-furnished">Washington, street xyz</option>
              </select>
            </div>

            <div className="col-span-1 px-4 py-3 w-[165px] h-[81px] space-y-2 rounded-md bg-gray-100">
              <label className="block text-sm font-medium text-gray-700">
                Beds
              </label>
              <select className=" w-full rounded-md bg-gray-100 border-transparent focus:border-gray-500 focus:bg-white focus:ring-0 text-sm">
                <option value="">Washington, street xyz</option>
                <option value="fully-furnished">Washington, street xyz</option>
                <option value="partially-furnished">
                  Washington, street xyz
                </option>
                <option value="not-furnished">Washington, street xyz</option>
              </select>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
export default Search;
