
import React from "react";
import Certificate from "@/components/Certificate";
import SectionHeading from "@/components/SectionHeading";

const CertificatesSection = () => {
  return (
    <div>
      <SectionHeading title="SERTİFİKATLAR" />
      <div className="space-y-6 mt-6">
        <Certificate 
          date="27.11.2018"
          title="MOS MASTER CERTIFICATE"
          organization="Microsoft Corporation"
          details={["Microsoft Office Specialist (MOS) Master"]}
        />
        <Certificate 
          date="12.04.2017"
          title="MOS EXPERT CERTIFICATE"
          organization="Microsoft Corporation"
          details={["Microsoft Office Specialist (MOS) Expert"]}
        />
      </div>
      
     
      
      
    </div>
  );
};

export default CertificatesSection;
