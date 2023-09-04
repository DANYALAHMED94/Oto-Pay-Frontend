import React from "react";
import SearchResult from "../componenets/SearchPageComponents/SearchResult";
import Search from "../componenets/SearchPageComponents/Search";
import Locations from "../componenets/HomePageComponents/locations/Locations";
import UpdatePropertyModal from "../componenets/global/UpdatePropertyModal";

const SearchPage = () => {
  return (
    <>
      <UpdatePropertyModal />
      <Search />
      <SearchResult />
      <Locations />
    </>
  );
};

export default SearchPage;
