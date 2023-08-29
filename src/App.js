import React, { useState } from "react";
import { Route, Routes } from "react-router-dom";

import "./App.css";
import NavBar from "./componenets/HomePageComponents/Navbar/Navbar";
import Footer from "./componenets/HomePageComponents/Footer/Footer";
import HomePage from "./pages/HomePage";
import SearchPage from "./pages/SearchPage";
import DashboardPage from "./pages/DashboardPage";
import Home from "./componenets/Dashboard/Home";


function App() {

  return (
    <>
   


        
        <Routes>
        
          <Route path="/" element={<HomePage />} />
           
          <Route path="/search" element={<SearchPage />} />
          {/* <Route path="/dashboard" element={<DashboardPage />} /> */}
      
          <Route path="dashboard" element={<DashboardPage />}>
              <Route index element={<Home />} />
         

              </Route>
        
         
        </Routes>
    {/* <Footer /> */}

    
   
    </>
  );
}
export default App;
