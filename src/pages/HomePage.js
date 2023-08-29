import React from "react";
import PropertyTypes from "../componenets/HomePageComponents/PropertyTypes/PropertyTypes";
import Projects from "../componenets/HomePageComponents/Projects/Projects";
import Reviews from "../componenets/HomePageComponents/reviews/Reviews";
import Contact from "../componenets/HomePageComponents/Contact/Contact";
import Locations from "../componenets/HomePageComponents/locations/Locations";
import Newsletter from "../componenets/HomePageComponents/Newsletter/Newsletter";
import Properties from "../componenets/HomePageComponents/Properties/Properties";
import Banner from "../componenets/HomePageComponents/banner/Banner";

const HomePage = () => {
  return (
    <>
    <Banner/>
    <Properties />
      <Projects />
      <PropertyTypes />
    <Reviews />
<Contact />
<Newsletter />
<Locations />
    </>
  );
};

export default HomePage;
