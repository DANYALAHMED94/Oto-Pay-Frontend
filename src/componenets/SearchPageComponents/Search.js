import React from "react";
import { useNavigate } from "react-router-dom";

function Search() {
  const navigate = useNavigate();
  return (
    <div className="bg-[#D9CFE3] w-full xl:h-[300px] font-inter relative md:h-[300px] h-auto overflow-hidden ">
      <section className="w-full h-full body-font md:px-[120px] md:py-[40px] px-10">
        <div className="md:h-full h-[80%] xl:w-[1016px] lg:w-[870px] md:w-[650px] w-full py-[40px] md:px-[32px] rounded-xl xl:gap-2 lg:gap-6 md:gap-2 gap-4 flex flex-col items-center justify-center">
          <div className="xl:mt-6 lg:mt-6 mt-0 w-full">
            <div className="w-full flex md:flex-row flex-col gap-4 mt-4">
              <div className="col-span-1 px-4 flex flex-col py-2 md:py-0 justify-center xl:w-[198px] xl:h-20 lg:w-[170px] lg:h-[70px] md:w-[170px] md:h-[50px] w-full xl:space-y-2 lg:space-y-2 space-y-0 rounded-md bg-white ">
                <label className="block lg:text-sm text-xs uppercase font-medium text-[#866FA3] ml-0.5 ">
                  City
                </label>
                <select className="w-full rounded-md text-[#312245] font-medium lg:text-sm text-xs focus:outline-none">
                  <option value="">Washington</option>
                  <option value="for-rent">Washington1</option>
                  <option value="for-sale">Washington2</option>
                </select>
              </div>

              <div className="flex flex-col justify-center px-4 py-2 md:py-3 xl:w-[543px] xl:h-20 lg:w-[440px] lg:h-[70px] md:w-[360px] md:h-[50px] xl:space-y-2  lg:space-y-2 space-y-0 rounded-md bg-white">
                <label className="block lg:text-sm text-xs uppercase font-medium text-[#866FA3] ml-0.5">
                  Street
                </label>
                <select className=" w-full rounded-md bg-white text-[#312245] font-medium focus:outline-none lg:text-sm text-xs">
                  <option value="">Washington, street xyz</option>
                  <option value="fully-furnished">
                    Washington, street xyz
                  </option>
                  <option value="partially-furnished">
                    Washington, street xyz
                  </option>
                  <option value="not-furnished">Washington, street xyz</option>
                </select>
              </div>

              <div className="col-span-1 md:py-3 xl:w-[178px] xl:h-20 bg-[#17062F] lg:w-[160px] lg:h-[70px] md:w-[130px] md:h-[50px] flex items-center justify-center rounded-md">
                <button
                  type="button"
                  onClick={() => {
                    navigate("/");
                  }}
                  className=" text-Black h-full py-3 md:py-0 text-white w-full hover:text-black hover:bg-white focus:ring-4 focus:outline-none focus:ring-gray-100 font-semibold rounded-lg xl:text-base md:text-base lg:text-sm text-xs  leading-6 justify-center text-center inline-flex items-center dark:focus:ring-gray-500  "
                >
                  Find
                </button>
              </div>
            </div>

            <div className="flex md:flex-row flex-col gap-4 mt-4 ">
              <div className=" flex flex-col justify-center px-4 md:py-3 py-2 xl:w-[159px] xl:h-20 lg:w-[140px] lg:h-[70px] md:w-[130px] md:h-[50px] xl:space-y-2 lg:space-y-2 space-y-0 rounded-md bg-white">
                <label className="block lg:text-sm text-xs uppercase font-medium text-[#866FA3] ml-0.5">
                  Property Type
                </label>
                <select className=" w-full rounded-md text-[#312245] font-medium lg:text-sm text-xs bg-white focus:outline-none">
                  <option value="">All</option>
                  <option value="fully-furnished">
                    Washington, street xyz
                  </option>
                  <option value="partially-furnished">
                    Washington, street xyz
                  </option>
                  <option value="not-furnished">Washington, street xyz</option>
                </select>
              </div>

              <div className="flex flex-col justify-center px-4 md:py-3 py-2 xl:w-[292px] xl:h-20 lg:w-[239px] lg:h-[70px] md:w-[160px] md:h-[50px] xl:space-y-2 lg:space-y-2 space-y-0 rounded-md bg-white">
                <label className="block lg:text-sm text-xs uppercase font-medium text-[#866FA3] ml-0.5">
                  Price(USD)
                </label>
                <select className=" w-full rounded-md text-[#312245] font-medium  lg:text-sm text-xs bg-white focus:outline-none">
                  <option value="">23854 to 52487</option>
                  <option value="fully-furnished">
                    Washington, street xyz
                  </option>
                  <option value="partially-furnished">
                    Washington, street xyz
                  </option>
                  <option value="not-furnished">Washington, street xyz</option>
                </select>
              </div>

              <div className="flex flex-col justify-center px-4 md:py-3 py-2 w-full xl:w-[292px] xl:h-20 lg:w-[239px] lg:h-[70px] md:w-[160px] md:h-[50px] xl:space-y-2 lg:space-y-2 space-y-0 rounded-md bg-white">
                <label className="block lg:text-sm text-xs uppercase font-medium text-[#866FA3] ml-0.5">
                  Area (sq. yd.)
                </label>
                <select className=" w-full rounded-md text-[#312245] font-medium  lg:text-sm text-xs bg-white focus:outline-none">
                  <option value="">0 to any</option>
                  <option value="fully-furnished">
                    Washington, street xyz
                  </option>
                  <option value="partially-furnished">
                    Washington, street xyz
                  </option>
                  <option value="not-furnished">Washington, street xyz</option>
                </select>
              </div>

              <div className="col-span-1 flex flex-col justify-center px-4 md:py-3 py-2 xl:w-[159px] xl:h-20 lg:w-[140px] lg:h-[70px] md:w-[100px] md:h-[50px] xl:space-y-2 lg:space-y-2 space-y-0 rounded-md bg-white">
                <label className="block lg:text-sm text-xs font-medium uppercase text-[#866FA3] ml-0.5">
                  Beds
                </label>
                <select className=" w-full rounded-md text-[#312245] font-medium lg:text-sm text-xs bg-white focus:outline-none">
                  <option value="">6</option>
                  <option value="fully-furnished">
                    Washington, street xyz
                  </option>
                  <option value="partially-furnished">
                    Washington, street xyz
                  </option>
                  <option value="not-furnished">Washington, street xyz</option>
                </select>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
export default Search;
