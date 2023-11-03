//
import React from "react";
import { Route, Routes, useLocation } from "react-router-dom";

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
import ServiceReqPage from "./pages/ServiceReqPage";
import ServiceProPage from "./pages/ServiceProPage";
import Landlord from "./pages/LandlordPage";
import PaymentPage from "./pages/PaymentPage";
import TenantPropertyPage from "./pages/TenantPropertyPage";
import TenantServicesPage from "./pages/TenantServicesPage";
import TenantPaymentPage from "./pages/TenantPaymentPage";
// import TenatnformationForm from "./componenets/global/TenantInformationForm";

// import LandingPage from "./pages/LandingPage";

function App() {
  const location = useLocation();

  // Define an array of paths where Navbar should be hidden
  const hiddenNavbarPaths = [
    "/admin-dashboard",
    "/admin-dashboard/*",
    "/tenant-dashboard",
    "/tenant-dashboard/*",
  ];

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
          <Route path="properties" element={<PropertiesPage />} />
          <Route path="tenants" element={<TenantPage />} />
          <Route path="access" element={<AccessPage />} />
          <Route path="landlord" element={<Landlord />} />
          <Route path="payments" element={<PaymentPage />} />
          <Route path="service-request" element={<ServiceReqPage />} />
          <Route path="service-providers" element={<ServiceProPage />} />
        </Route>
        <Route path="tenant-dashboard" element={<DashboardPage />}>
          <Route index element={<Home />} />
          <Route path="tenant-dashboard" element={<Home />} />
          {/* <Route path="tenant-form" element={<TenatnformationForm />} /> */}
          <Route path="tenant-property" element={<TenantPropertyPage />} />
          <Route path="tenant-services" element={<TenantServicesPage />} />
                <Route path="tenant-payments" element={<TenantPaymentPage />} />
        </Route>
      </Routes>
      <Footer />
    </>
  );
}

export default App;
