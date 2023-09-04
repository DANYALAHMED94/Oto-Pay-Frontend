import React from "react";

import Tenant from "./Tenant";

function AllTenants () {
  return (
    <section className=" bg-gray-100 p-4 text-black-600 body-font  flex justify-center items-center  overflow-hidden  ">
     
    

     
          <div className=" flex flex-wrap  w-full  h-full  -400 justify-center space-y-6   bg-gray-100  ">
          
          <Tenant />

         
          </div>
     
    </section>
  );
}

export default AllTenants ;