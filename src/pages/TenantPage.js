import React from "react";
import AllTenants from "../componenets/Tenants/AllTenants";
import TenantRegistrationForm from "../componenets/global/TenantRegistrationForm";

const TenantPage = () => {
  return (
    <>
      <TenantRegistrationForm />
      <AllTenants />
    </>
  );
};

export default TenantPage;
