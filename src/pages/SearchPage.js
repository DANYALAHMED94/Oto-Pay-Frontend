import React from "react";
import SearchResult from "../componenets/SearchPageComponents/SearchResult";
import Search from "../componenets/SearchPageComponents/Search";
import Locations from "../componenets/HomePageComponents/locations/Locations";

const SearchPage = () => {
  return (
    <>
      <Search />
      <SearchResult />
      <Locations />
    </>
  );
};

export default SearchPage;
