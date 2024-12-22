import React from "react";
import Hrsector from "../components/Hrsector"; // Corrected component name to match convention
import Industries from "../components/Industries";
import CardHolders from "../components/CardHolders"; // Corrected component name to match convention
import CaseStudy from "../components/CaseStudy"; // Corrected component name to match convention
import CardFlow from "../components/CardFlow";

// Project Page Component
const Sector = () => {
  return (
    <>
      {/* Hero Section */}
      <Hrsector /> {/* Corrected component name to match convention */}
        {/* Industries Section */}
        <Industries />

        <CardHolders />
        <CaseStudy />
        <CardFlow />
    </>
  );
};

export default Sector;
