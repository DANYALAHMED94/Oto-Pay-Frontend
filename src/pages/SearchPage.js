import React from "react";
import SearchResult from "../componenets/SearchPageComponents/SearchResult";
import Search from "../componenets/SearchPageComponents/Search";
import Locations from "../componenets/HomePageComponents/locations/Locations";
import { PropertyModal } from "../componenets/global/PropertyModal";

const SearchPage = () => {
  return (
    <>
      <PropertyModal />
      <Search />
      <SearchResult />
      <Locations />
    </>
  );
};

export default SearchPage;
