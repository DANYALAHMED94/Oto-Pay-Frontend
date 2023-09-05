// 
import React from "react";
import { Route, Routes, useRoutes, useLocation } from "react-router-dom";

import "./App.css";

import HomePage from "./pages/HomePage";
import SearchPage from "./pages/SearchPage";
import DashboardPage from "./pages/DashboardPage";
import Home from "./componenets/Dashboard/Home";
import TenantPage from "./pages/TenantPage";
import AccessPage from "./pages/AccessPage";
import Footer from "./componenets/HomePageComponents/Footer/Footer";
import Navbar from "./componenets/HomePageComponents/Navbar/Navbar";
import PropertiesPage from "./pages/PropertiesPage";

function App() {
  const location = useLocation();

  // Define an array of paths where Navbar should be hidden
  const hiddenNavbarPaths = ["/admin-dashboard", "/admin-dashboard/*"];

  // Check if the current path matches any of the hidden paths
  const hideNavbar = hiddenNavbarPaths.some((path) =>
    location.pathname.startsWith(path)
  );

  return (
    <>
      {!hideNavbar && <Navbar />}
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/search" element={<SearchPage />} />
        <Route path="admin-dashboard" element={<DashboardPage />}>
          <Route index element={<Home />} />
          <Route path="home" element={<Home />} />
          <Route path="properties" element={<PropertiesPage/>} />
          <Route path="tenants" element={<TenantPage />} />
          <Route path="access" element={<AccessPage />} />
        </Route>
      </Routes>
      <Footer />
    </>
  );
}

export default App;
