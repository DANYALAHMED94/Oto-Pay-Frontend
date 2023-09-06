import React from "react";

const SearchPeoperties = ({ width }) => {
  return (
    <div className={`xl:mt-6 lg:mt-6 mt-0 ${width}`}>
      <div className={`${width} flex md:flex-row flex-col gap-4 mt-4`}>
        <div className="col-span-1 bg-white px-4 flex flex-col py-2 md:py-0 justify-center xl:w-[198px] xl:h-20 lg:w-[170px] lg:h-[70px] md:w-[170px] md:h-[50px] xl:space-y-2 lg:space-y-2 space-y-0 rounded-md">
          <label className="block lg:text-sm text-xs uppercase font-medium text-[#866FA3] ml-0.5 ">
            City
          </label>
          <select className=" w-full rounded-md text-sm bg-white focus:outline-none">
            <option value="">Washington</option>
            <option value="for-rent">Washington1</option>
            <option value="for-sale">Washington2</option>
          </select>
        </div>

        <div className="flex flex-col justify-center px-4 py-2 md:py-3 xl:w-[543px] xl:h-20 lg:w-[440px] lg:h-[70px] md:w-[360px] md:h-[50px] xl:space-y-2  lg:space-y-2 space-y-0 rounded-md bg-white">
          <label className="block lg:text-sm text-xs uppercase font-medium text-[#866FA3] ml-0.5 ">
            Street
          </label>
          <select className=" w-full rounded-md bg-white focus:outline-none text-sm">
            <option value="">Washington, street xyz</option>
            <option value="fully-furnished">Washington, street xyz</option>
            <option value="partially-furnished">Washington, street xyz</option>
            <option value="not-furnished">Washington, street xyz</option>
          </select>
        </div>

        <div className="col-span-1 px-4 border-2 border-[rgba(255, 255, 255, 0.49)] py-2 md:py-3 xl:w-[178px] xl:h-20  lg:w-[160px] lg:h-[70px] md:w-[130px] md:h-[50px] flex items-center justify-center rounded-md bg-[#17062F]">
          <button
            type="button"
            className="text-white lg:w-[140px] lg:h-[52px] md:w-[123px] md:h-[42px] w-[100px] h-9 hover:text-black hover:bg-white focus:ring-4 focus:outline-none focus:ring-gray-100 font-semibold rounded-lg xl:text-base lg:text-base md:text-base text-sm  leading-6  py-[16px] justify-center text-center inline-flex items-center dark:focus:ring-gray-500  "
          >
            Find
          </button>
        </div>
      </div>

      <div
        className={`${width} flex justify-between md:flex-row flex-col gap-4 mt-4`}
      >
        <div className=" flex flex-col justify-center px-4 md:py-3 py-2 xl:w-[159px] xl:h-20 lg:w-[140px] lg:h-[70px] md:w-[130px] md:h-[50px] xl:space-y-2 lg:space-y-2 space-y-0 rounded-md bg-white">
          <label className="lg:text-sm text-xs uppercase whitespace-nowrap font-medium text-[#866FA3] ml-0.5">
            Property Type
          </label>
          <select className=" w-full rounded-md text-sm bg-white focus:outline-none">
            <option value="">All</option>
            <option value="fully-furnished">Washington, street xyz</option>
            <option value="partially-furnished">Washington, street xyz</option>
            <option value="not-furnished">Washington, street xyz</option>
          </select>
        </div>

        <div className="flex flex-col justify-center px-4 md:py-3 py-2 xl:w-[292px] xl:h-20 lg:w-[239px] lg:h-[70px] md:w-[200px] md:h-[50px] xl:space-y-2 lg:space-y-2 space-y-0 rounded-md bg-white">
          <label className="block lg:text-sm text-xs uppercase font-medium text-[#866FA3] ml-0.5 ">
            Price(USD)
          </label>
          <select className=" w-full rounded-md  text-sm bg-white focus:outline-none">
            <option value="">23854 to 52487</option>
            <option value="fully-furnished">Washington, street xyz</option>
            <option value="partially-furnished">Washington, street xyz</option>
            <option value="not-furnished">Washington, street xyz</option>
          </select>
        </div>

        <div className="flex flex-col justify-center px-4 md:py-3 py-2 xl:w-[292px] xl:h-20 lg:w-[239px] lg:h-[70px] md:w-[200px] md:h-[50px] xl:space-y-2 lg:space-y-2 space-y-0 rounded-md bg-white">
          <label className="block lg:text-sm text-xs uppercase font-medium text-[#866FA3] ml-0.5 ">
            Area <span className="capitalize">(sq. yd.)</span>
          </label>
          <select className=" w-full rounded-md  text-sm bg-white focus:outline-none">
            <option value="">0 to any</option>
            <option value="fully-furnished">Washington, street xyz</option>
            <option value="partially-furnished">Washington, street xyz</option>
            <option value="not-furnished">Washington, street xyz</option>
          </select>
        </div>

        <div className="col-span-1 flex flex-col justify-center px-4 md:py-3 py-2 xl:w-[159px] xl:h-20 lg:w-[140px] lg:h-[70px] md:w-[100px] md:h-[50px] xl:space-y-2 lg:space-y-2 space-y-0 rounded-md bg-white">
          <label className="block lg:text-sm text-xs uppercase font-medium text-[#866FA3] ml-0.5">
            Beds
          </label>
          <select className=" w-full rounded-md  text-sm bg-white focus:outline-none">
            <option value="">6</option>
            <option value="fully-furnished">Washington, street xyz</option>
            <option value="partially-furnished">Washington, street xyz</option>
            <option value="not-furnished">Washington, street xyz</option>
          </select>
        </div>
      </div>
    </div>
  );
};

export default SearchPeoperties;
