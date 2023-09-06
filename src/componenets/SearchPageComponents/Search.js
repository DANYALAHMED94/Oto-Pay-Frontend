import React from "react";
// import { useNavigate } from "react-router-dom";
import SearchPeoperties from "../global/SearchPeoperties";

function Search() {
  // const navigate = useNavigate();
  return (
    <div className="bg-[#D9CFE3] w-full xl:h-[300px] font-inter relative md:h-[300px] h-auto overflow-hidden ">
      <section className="w-full h-full body-font md:px-[120px] md:py-[40px] px-10">
        <div className="md:h-full h-[80%] w-full py-[40px] md:px-[32px] rounded-xl xl:gap-2 lg:gap-6 md:gap-2 gap-4 flex flex-col md:items-center justify-center">
          <SearchPeoperties />
        </div>
      </section>
    </div>
  );
}
export default Search;
