import React, { useState } from "react";
import { Route, Routes } from "react-router-dom";

import "./App.css";

import HomePage from "./pages/HomePage";
import SearchPage from "./pages/SearchPage";
import DashboardPage from "./pages/DashboardPage";
import Home from "./componenets/Dashboard/Home";
import TenantPage from "./pages/TenantPage";
import AccessPage from "./pages/AccessPage";


function App() {

  return (
    <>
   


        
        <Routes>
        
          <Route path="/" element={<HomePage />} />
           
          <Route path="/search" element={<SearchPage />} />
          {/* <Route path="/dashboard" element={<DashboardPage />} /> */}
      
          <Route path="dashboard" element={<DashboardPage />}>
              <Route index element={<Home />} />
              <Route path="home" element={<Home />} />
              <Route path="tenants" element={<TenantPage />} />
              <Route path="access" element={<AccessPage />} />
              </Route>
        
         
        </Routes>
    {/* <Footer /> */}

    
   
    </>
  );
}
export default App;
